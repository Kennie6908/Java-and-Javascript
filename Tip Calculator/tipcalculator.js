var num;
var bill;
var total;

window.onload = function() {
  document.getElementById('slider').addEventListener("input", () => {
    num = parseFloat(document.getElementById("slider").value);
    document.getElementById("label").innerHTML = (num + "%");
    bill = parseFloat(document.getElementById("bill").value);
    var tip = (num / 100) * bill;
    tip = tip.toFixed(2);
    total = 1 * tip + bill;
    total = total.toFixed(2);
    document.getElementById("tip").value = tip;
    document.getElementById("total").value = total;
  });
};
