import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Mail } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/mjgpbylq", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32" ref={ref}>
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <p className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-4">
              Contact
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Let's work together
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Ready to turn your ideas into digital products that drive success?
              We'd love to hear from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12"
          >
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={20} className="text-primary" />
              <span>San Francisco, USA</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={20} className="text-primary" />
              <span>Stockholm, Sweden</span>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-4 text-left"
          >
            <label className="flex flex-col gap-1 text-sm font-medium">
              Your email
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                placeholder="you@example.com"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium">
              Your message
              <textarea
                name="message"
                required
                rows={5}
                className="mt-1 w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                placeholder="Tell us about your project..."
              />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="self-end rounded-md bg-primary px-8 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send"}
            </button>
            {status === "success" && (
              <p className="text-sm text-green-600 text-center">
                Message sent! We'll be in touch.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500 text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
