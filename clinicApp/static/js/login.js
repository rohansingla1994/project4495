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



    if( userEmail.val()===""){

        document.getElementById("label-email").style.color = "#ff253a";
    }

    if( userEmail.val()!=="" && userPassword.val()===""){

        //Remove validation red

        document.getElementById("label-email").style.color = "#ccc";

        //Add validation red

        document.getElementById("label-password").style.color = "#ff253a";
    }

    if( userEmail.val()!=="" && userPassword.val()!==""){

        //Remove validation red


        document.getElementById("label-password").style.color = "#ccc";

        var data=localStorage.getItem(userEmail.val());
        var jsonData=JSON.parse(data);

        if(jsonData===null){
            document.getElementById("label-password").style.color = "#ff253a";
            document.getElementById("label-email").style.color = "#ff253a";
            document.getElementById("validationLabel").innerHTML="Email or Password is incorrect";
            return;
        }

        var email=jsonData.userEmail;



        var password=jsonData.userPassword;

        if(email===userEmail.val() && password===userPassword.val()){

            document.getElementById("label-password").style.color = "#ccc";
            document.getElementById("label-email").style.color = "#ccc";
            document.getElementById("validationLabel").innerHTML="";

            SendHtml()
        }
        else{
            document.getElementById("label-password").style.color = "#ff253a";
            document.getElementById("label-email").style.color = "#ff253a";
            document.getElementById("validationLabel").innerHTML="Email or Password is incorrect";
        }

    }



}