var userEmail, userPassword;

function Login() {
    console.log("Login");
    if (typeof (Storage) !== "undefined") {
        FetchHtml();
    } else {
        Console.log("Sorry! No Web Storage support..");
    }

}

function SendHtml() {
    console.log("SendHtml");
    sessionStorage.setItem("currentUser",userEmail.val());
    window.open('dashBoard.html','_self');
}

function FetchHtml() {

    userEmail = $("#input-email");
    userPassword = $("#input-password");

    Validation();
}

function Validation() {
    console.log("kbkbvkdsvbdisbvdsvbdss")

    $.ajax({
        url: '/ajax/signin/',
        data:data,
        dataType: 'json',
        success: function (data) {
          if (data.is_taken) {
            alert("Successfully Logged in ");
          }
        }
      });


}