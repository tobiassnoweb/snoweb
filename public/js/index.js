import Chart from "./chart.js";


let total = 3;
let data = [
    {title:'Product Design', value:15, color:'#F6D8D2'},
    {title:'Artficial Intelligense', value:20,color:'#D66148'},
    {title:'User Interface', value:45, color:'#DE7F6C'},
    {title:'Data Science', value:20, color:'#ECB5AA'}];
const colorsArr = [
  "#cb3a1b",
  "#d14e31",
  "#d55d43",
  "#d96e58",
  "#db755f",
  "#d66148",
  "#de806c",
  "#e7a395",
  "#e59d8d",
  "#e08976",
  "#e39483",
  "#ecb5a9",
  "#ebb0a4",
  "#f0c4bb",
  "#f5d8d2"
];

init();




function renderChart() {
  const chart = new Chart("chart-area", data);
  chart.render();
}

function resetCount() {
  data = [];
  total = 0;
}

function init() {
   renderChart();
}