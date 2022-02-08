//Функция для заполнения модального окна данными о существующем пользователе
async function deleteUserForm(id) {
    $("#deleteUser").modal();

    let currentUser = await (await fetch("http://localhost:8080/api/users/" + id)).json();

    $('#idDelete').val(currentUser.id);
    $('#emailDelete').val(currentUser.email);
    $('#passwordDelete').val(currentUser.password);
    $('#nameDelete').val(currentUser.name);
    $('#surnameDelete').val(currentUser.surname);
    $('#positionDelete').val(currentUser.position);
    $('#salaryDelete').val(currentUser.salary);
    $('#roleDelete').val(currentUser.roles);

    //Функция для вызова updateUser, при нажатии кнопку "Редактировать" в модальном окне
    buttonDeleteUser.onclick = function (event) {
        event.preventDefault()
        userFormForDelete.id = id;
        userFormForDelete.email = $('#emailDelete').val();
        userFormForDelete.password = $('#passwordDelete').val();
        userFormForDelete.name = $('#nameDelete').val();
        userFormForDelete.surname = $('#surnameDelete').val();
        userFormForDelete.position = $('#positionDelete').val();
        userFormForDelete.salary = $('#salaryDelete').val();
        userFormForDelete.roles = $('#roleDelete').val();
        deleteUser(id).then(allUsers);
    }
}

//Функция для отпрвки PUT запроса на сервер при нажатии на кнопку в модальном окне
async function deleteUser(id) {
    try {
        await fetch(("http://localhost:8080/api/users/"  + id), {
            method: "DELETE",
            body: JSON.stringify(userFormForEdit),
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (e) {
        console.error(e);
    }
}

// Создаем пустую форму для редактирования пользователя
const userFormForDelete = {
    email: "",
    password: "",
    name: "",
    surname: "",
    position: "",
    salary: 0,
    roles: [
        {
            name: ""
        }
    ]
}