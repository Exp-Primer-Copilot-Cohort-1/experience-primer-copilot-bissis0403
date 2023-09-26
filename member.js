function memberSkill() {
    var skill = document.getElementById("skill").value;
    var skillList = document.getElementById("skillList");
    var skillOption = document.createElement("option");
    skillOption.text = skill;
    skillList.add(skillOption);
}