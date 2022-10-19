let userList = [];

function submitForm() {
    console.log("Submit");
    let data = {
        name: $("#name").val(),
        email: $("#email").val(),
        studentID: $("#studentID").val()
    };

    // Saving new form submit data
    userList.push(data);
    localStorage.setItem("userList", JSON.stringify(userList));

    $("#name").empty();
    $("#email").empty();
    $("#studentID").empty();

    let updatedUserList = JSON.parse(localStorage.getItem("userList"));
    for (let i = 0 ; i < updatedUserList.length ; i++) {
        $("#userList").html(updatedUserList.data);
    };
};

function setup() {
    $("#submit").click(submitForm);
};

$(document).ready(setup);