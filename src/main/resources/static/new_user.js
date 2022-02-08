// Функция, которая вызывается при нажатии на кнопку "Добавить пользователя"
buttonCreateUser.onclick = function () {
    userEmptyForm.email = $('#emailNew').val();
    userEmptyForm.password = $('#passwordNew').val();
    userEmptyForm.name = $('#nameNew').val();
    userEmptyForm.surname = $('#surnameNew').val();
    userEmptyForm.position = $('#positionNew').val();
    userEmptyForm.salary = $('#salaryNew').val();
    userEmptyForm.roles = $('#roleNew').val();
    newUser().then(allUsers);
}

// Функция для отправки пост-метода на сервер
async function newUser() {
    try {
        await fetch("http://localhost:8080/api/users", {
            method: "POST",
            body: JSON.stringify(userEmptyForm),
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (e) {
        console.error(e);
    }
}

// Создаем пустую форму для добавления пользователя
const userEmptyForm = {
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



