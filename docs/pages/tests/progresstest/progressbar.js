var p = 0;
var s = 0
function getNewValue() {
  p = p + 1/*Math.random() * 1000*/;
  document.getElementById("progress").value = p;
}
function resetValue() {
  p = 0;
  document.getElementById("progress").value = p;
}
while (s < 10000) {
  s++;
  p = p + 1/*Math.random() * 1000*/;
  document.getElementById("progress").value = p;
}
