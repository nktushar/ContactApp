// Set Contact
function addContact() {
    let cName = document.querySelector("#name").value.toUpperCase();
    let cNumber = document.querySelector("#number").value;
    let displayNotification = document.querySelector("#displayNotification");

    if(cName == "" || cNumber == "") {
        displayNotification.innerHTML = "Please fill in all fields!";
        displayNotification.style.color = "red";
    }
    else {
        // Set Items
        localStorage.setItem(cName, cNumber);
        displayNotification.innerHTML = "Contact added successfully!";
        displayNotification.style.color = "green";
    }

    setInterval(() => {
        displayNotification.innerHTML = "";
    }, 3000);
}

// Get Contact
function getContact() {
    let displayDetail = document.querySelector("#displayContact");
    let displayOutput = document.getElementById("displayContact");
    displayOutput.classList.add("displayContactStyle");

    let getContactName = document.querySelector("#getContactName").value.toUpperCase();

    // GetItem
    let output = localStorage.getItem(getContactName);
    displayDetail.innerHTML = `${getContactName} : ${output == null ? "Contact not found!" : `+88${output}`}`;

    getContactName = "";
}

function reset() {
    location.reload();
}