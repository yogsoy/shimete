var p = 0;
var s = 0
var csv = "";
function getNewValue() {
  p = Math.random() * 1000;
  document.getElementById("progress").value = p;
  console.log(p);
  csv += p + ",";
}
function resetValue() {
  p = 0;
  document.getElementById("progress").value = p;
}
function getCSV() {
  console.log(csv);
}
