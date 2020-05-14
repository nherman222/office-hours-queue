var entry = document.getElementById("entry");
entry.addEventListener("click", changePage);

var ta = document.getElementById("TA");
ta.addEventListener("click", taPage);

// direct to correct course page
function changePage() {
  var course = document.getElementById("course").value;
  location.href = "index-" + course + ".html";
}

// direct to ta page
function taPage() {
  var name = document.getElementById("name").value;
  localStorage.setItem("nameToPass", name);
  location.href = "index-ta.html";
}
