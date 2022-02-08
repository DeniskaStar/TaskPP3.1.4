async function allUsers(){
    try {
        const response = await fetch("http://localhost:8080/api/users");
        const jsonUsers = await response.json();

        if (jsonUsers.length > 0) {
            let temp = "";
            jsonUsers.forEach((u) => {
                temp += "<tr>";
                temp += "<td>" + u.id + "</td>";
                temp += "<td>" + u.email + "</td>";
                temp += "<td>" + u.name + "</td>";
                temp += "<td>" + u.surname + "</td>";
                temp += "<td>" + u.position + "</td>";
                temp += "<td>" + u.salary + "</td>";
                temp += "<td>" + roleOfUser(u.roles) + "</td>";
                temp += "<td>" + `<button onclick="updateUserForm(${u.id})" type="button" class="btn btn-primary">Редактировать</button>` + "</td>";
                temp += "<td>" + `<button onclick="deleteUserForm(${u.id})" type="button" class="btn btn-danger">Удалить</button>` + "</td></tr>";
            })
            document.getElementById("tableOfUsers").innerHTML = temp;
        }
    }
    catch (e){
        console.error(e);
    }
}

allUsers();

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


// С использованеим промисов
// fetch("http://localhost:8080/api/users").then(
//     res => {
//         res.json().then(
//             data => {
//                 console.log(data);
//                 if (data.length > 0) {
//                     var temp = "";
//                     data.forEach((u) => {
//                         temp += "<tr>";
//                         temp += "<td>" + u.id + "</td>";
//                         temp += "<td>" + u.email + "</td>";
//                         temp += "<td>" + u.name + "</td>";
//                         temp += "<td>" + u.surname + "</td>";
//                         temp += "<td>" + u.position + "</td>";
//                         temp += "<td>" + u.salary + "</td></tr>";
//                     })
//                     document.getElementById("data").innerHTML = temp;
//                 }
//             }
//         )
//     }
// )