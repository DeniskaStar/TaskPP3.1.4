//Функция для заполнения модального окна данными о существующем пользователе
async function updateUserForm(id) {
    $("#editUser").modal();

    let currentUser = await (await fetch("http://localhost:8080/api/users/" + id)).json();

    $('#idEdit').val(currentUser.id);
    $('#emailEdit').val(currentUser.email);
    $('#passwordEdit').val(currentUser.password);
    $('#nameEdit').val(currentUser.name);
    $('#surnameEdit').val(currentUser.surname);
    $('#positionEdit').val(currentUser.position);
    $('#salaryEdit').val(currentUser.salary);
    $('#roleForm').val(currentUser.roles);

    //Функция для вызова updateUser, при нажатии кнопку "Редактировать" в модальном окне
    buttonEditUser.onclick = function (event) {
        event.preventDefault()
        userFormForEdit.id = id;
        userFormForEdit.email = $('#emailEdit').val();
        userFormForEdit.password = $('#passwordEdit').val();
        userFormForEdit.name = $('#nameEdit').val();
        userFormForEdit.surname = $('#surnameEdit').val();
        userFormForEdit.position = $('#positionEdit').val();
        userFormForEdit.salary = $('#salaryEdit').val();
        userFormForEdit.roles = $('#roleForm').val();
        updateUser().then(allUsers);
    }
}

//Функция для отпрвки PUT запроса на сервер при нажатии на кнопку в модальном окне
async function updateUser() {
    try {
        await fetch("http://localhost:8080/api/users", {
            method: "PUT",
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
const userFormForEdit = {
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
