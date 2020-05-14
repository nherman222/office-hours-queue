var name = localStorage.getItem("namePass");
localStorage.removeItem("namePass");

var row = 1;
var queueNum = 1;

var submit = document.getElementById("submit");
submit.addEventListener("click", getCode);

var end = document.getElementById("end");
end.addEventListener("click", endOfficeHours);

function getCode() {
  var TAcode = document.getElementById("TA-code").value;
  localStorage.setItem("TaCodePass", TAcode);
  document.getElementById("TA-code").value = "";
  alert("Code submitted!");
}

function endOfficeHours() {
  localStorage.removeItem("TaCodePass");
  document.getElementById("TA-code").value = "";
}
