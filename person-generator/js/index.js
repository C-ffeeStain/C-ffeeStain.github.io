const genders = ["Transgender", "Genderqueer", "Non-Binary"];
const sexualities = ["Homosexual", "Bisexual", "Pansexual"];
const base_url = "https://github.com/C-ffeeStain/C-ffeeStain.github.io/raw/main/person-generator/information_files/" 

function get_info_from_url(url)
{
    let text = "error";
    var client = new XMLHttpRequest();
    client.open('GET', base_url + url);
    client.onreadystatechange = function() {
        text = client.responseText
    }
    client.send();
    return text.split("\n");
}

function get_random_from_array(array)
{
    return array[Math.floor(Math.random() * array.length)]
}

let first_names = get_info_from_url("names.txt");
let last_names = get_info_from_url("last_names.txt");
let religions = get_info_from_url("religions.txt");
let jobs = get_info_from_url("occupations.txt");

function generate_person() {
    let name = $("#name");
    let age = $("#age");
    let sexuality = $("#sexuality");
    let bio_gender = $("#bio-gender")
    let gender = $("#gender");
    let job = $("#job");
    let religion = $("#religion");
    
    name.text(get_random_from_array(first_names) + " " + get_random_from_array(last_names))
    age.text(1 + Math.floor(Math.random() * 99));
    
    bio_gender.text(get_random_from_array(["Male", "Female"]))

    if (Math.floor(Math.random() * 10)  == 0)
    {
        gender.text(get_random_from_array(genders));
    }
    else
    {
        gender.text(bio_gender.text());
    }

    if (Math.floor(Math.random() * 10) == 0)
    {
        sexuality.text(get_random_from_array(sexualities));
    }
    else
    {
        sexuality.text("Heterosexual");
    }

    religion.text(get_random_from_array(religions));

    job.text(get_random_from_array(jobs));
    
}