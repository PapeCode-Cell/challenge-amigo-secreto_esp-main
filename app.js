// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];

function addFriend() {
    let input = document.getElementById("friend");
    let name = input.value.trim(); //Capturar y limpiar del imput

    if (name === "") {
        alert("Please, write a name"); //Validacion de entrada vacia
        return;
    }

    friends.push(name); // Agregar el nombre al array
    updateFriendList(); //Actualiza la lista en la interfaz

    input.value = ""; //Limpiar el campo de entradaa
}

function updateFriendList() {
    let list = document.getElementById("listFriends");
    list.innerHTML = ""; //Limpiar la lista antes de aztualizarla

    friends.forEach(friend => {
        let li = document.createElement("li");
        li.textContent = friend;
        list.appendChild(li);
    });
}

function drawFriend() {
    if (friends.length === 0) {
        alert("There is no friends to draw.");
        return;
    }

    let randomIndex = Math.floor(Math.random() * friends.length);
    let selectedFriend = friends[randomIndex];

    let resultElement = document.getElementById("result");
    resultElement.innerHTML = `<li>The scret santa is: <strong>${selectedFriend}</strong></li>`;
}

function clearFriendsList() {
    friends = []; // Vacía el array
    document.getElementById("listfriends").innerHTML = ""; // Borra la lista en pantalla
    document.getElementById("result").innerHTML = ""; // Limpia el resultado del sorteo
}
