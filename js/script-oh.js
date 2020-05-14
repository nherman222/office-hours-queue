//clear input fields
function formClear() {
  $("#name").val("");
  $("#code").val("");
}

function updateQueueNums() {
  var display = document.getElementById("display");
  var i = 1;
  //display row number for each row
  while (i < display.rows.length) {
    display.rows[i].cells[0].innerHTML = display.rows[i].rowIndex;
    i++;
  }
}

// when remove button clicked
function removeStudent(ctl) {
  $(ctl).parents("tr").remove();
}

function addStudent() {
  // First check if a <tbody> tag exists, add one if not
  if ($("#display tbody").length == 0) {
    $("#display").append("<tbody></tbody>");
  }
  // Add student to queue
  $("#display tbody").append(
    "<tr>" +
      "<td>" +
      "</td>" +
      "<td>" +
      $("#name").val() +
      "</td>" +
      "<td>" +
      "<button type='button' " +
      "id='remove'" +
      "onclick='removeStudent(this); updateQueueNums(this);' >" +
      "Remove" +
      "</button>" +
      "</td>" +
      "</tr>"
  );
}

// when join button clicked
function queueUpdate() {
  // if all fields filled out
  if (
    $("#name").val() != null &&
    $("#name").val() != "" &&
    $("#code").val() != null &&
    $("#code").val() != ""
  ) {
    // if the TA has ended office hours
    if (localStorage.getItem("TaCodePass") == null) {
      alert("Office hours has not begun");
      formClear();
    } else {
      var TaCode = localStorage.getItem("TaCodePass");
      // if the inputted code matches the TA code
      if ($("#code").val() == TaCode) {
        addStudent();
        formClear();
      } else {
        alert("That isn't the correct code!");
        formClear();
      }
    }
  } else {
    alert("Please fill in all fields to join office hours.");
  }
}
