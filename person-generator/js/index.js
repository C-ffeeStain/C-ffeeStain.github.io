const genders = ["Transgender", "Genderqueer", "Non-Binary"];

var client = new XMLHttpRequest();
client.open('GET', '/information_files/.txt');
client.onreadystatechange = function() {
  alert(client.responseText);
}

function generate_person() {
    console.log("Clicked button!")
    let name = $("#name");
    let age = $("#age");
    let sexuality = $("#sexuality");
    let gender = $("#gender");
    let job = $("#job");
    let religion = $("#religion");
    let death_cause = $("#death-cause");
    let new_name = Math.floor(Math.random() * 3)
    name.html(new_name.toString())
}