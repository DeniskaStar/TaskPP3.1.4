async function oneUser() {
    try {
        const response = await fetch("http://localhost:8080/api/users/autorized");
        const jsonUser = await response.json();

        let temp = "";
        temp += "<tr>";
        temp += "<td>" + jsonUser.id + "</td>";
        temp += "<td>" + jsonUser.email + "</td>";
        temp += "<td>" + jsonUser.name + "</td>";
        temp += "<td>" + jsonUser.surname + "</td>";
        temp += "<td>" + jsonUser.position + "</td>";
        temp += "<td>" + jsonUser.salary + "</td>";
        temp += "<td>" + roleOfUser(jsonUser.roles) + "</td></tr>";
        document.getElementById("tableAboutUser").innerHTML = temp;
    }catch (e) {
        console.error(e);
    }
}

oneUser();


function roleOfUser(roles) {
    let role = "";
    for (let temp of roles) {
        role += temp.name;
        if (roles.length > 1) {
            role += " ";
        }
    }
    return role;
}
