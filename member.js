function skillsMember() {
  var member = document.getElementById("member");
  var memberValue = member.options[member.selectedIndex].value;
  var skills = document.getElementById("skills");
  var skillsValue = skills.options[skills.selectedIndex].value;
  if (memberValue == "1") {
    skills.style.display = "block";
  } else {
    skills.style.display = "none";
  }
}