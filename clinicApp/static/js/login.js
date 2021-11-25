var userEmail, userPassword;


function Login() {
    console.log("Login");
    console.log(sessionStorage.getItem('userName'))
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
    console.log("qwerty")
    var userData = {
        "userEmail":userEmail.val(),
        "userPassword":userPassword.val(),

    };
    console.log(userData)
    $.ajax({
        url: '/ajax/signin/',
        data:userData,
        dataType: 'json',
        success: function (data) {
          if (data.is_taken) {
            alert(data.return_msg);
            if(data.return_msg==="Loggeg in"){
                var ar = window.location.origin+'/disease/';
                var splitEmail = userEmail.val().split('@')[0];
                sessionStorage.setItem('userName',splitEmail)


                console.log(ar)
                location.href= ar;e

            }
          }
        }
      });


}
