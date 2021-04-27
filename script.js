var projects = [];
localStorage.setItem("projects", JSON.stringify(projects));
var storedprojects = JSON.parse(localStorage.getItem("projects"));

function Project(title, descp, notes) {
  this.title = title;
  this.descp = descp;
  this.notes = notes;
  return this;
}

function pro(title, descp, notes) {
  var ref = new Project(title, descp, notes);
  projects.push(title);
}

console.log(projects);

function add_field() {
  var total_text = document.getElementsByClassName("input_text");
  total_text = total_text.length + 1;
  document.getElementById("field_div").innerHTML =
    document.getElementById("field_div").innerHTML +
    "<p id='input_text" +
    total_text +
    "_wrapper'><input type='text' value = 'temp' class='input_text' id='input_text" +
    total_text +
    "' placeholder='Enter Text'><input type='button' value='Add' onclick=add('temp" +
    total_text +
    "');></p>";
}

function add(temp) {
  console.log(temp);
}
