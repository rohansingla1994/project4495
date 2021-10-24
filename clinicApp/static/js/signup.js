var userName, userEmail, userPassword = "", userConfirmPassword = "",
    userPhone, userAdLine1, userAdLine2, userDoB, userGender = "", userYear,userCreditScore;
var calender = new Date();
var year = calender.getFullYear();
var month = calender.getMonth();
var date = calender.getDate();
var fullDate = year + "-" + month + "-" + date;

function Signup() {
    console.log("Signup");
    if (typeof (Storage) !== "undefined") {
        FetchHtml();
    } else {
        Console.log("Sorry! No Web Storage support..");
    }

}

function SetData() {
    console.log("SetData");
    var userData = {
        "userName": userName.val(), "userGender": userGender,
        "userDoB": userDoB.val(), "userEmail": userEmail.val(),
        "userPassword": userPassword.val(), "userPhone": userPhone.val(),
        "userAdLine1": userAdLine1.val(), "userAdLine2": userAdLine2.val(),
        "userCreditScore":userCreditScore,
        "userInstallment":0,
        "userTotalDebt":0,
        "userLoanTenure":0,
        "userInterestRate":0,
    };
    localStorage.setItem(userEmail.val(), JSON.stringify(userData));
    SendHtml();
}

function FetchHtml() {
    userName = $("#input-name");
    userEmail = $("#input-email");
    userPassword = $("#input-password");
    userConfirmPassword = $("#input-confirmPassword");
    userPhone = $("#input-phNo");
    userAdLine1 = $("#input-adLine1");
    userAdLine2 = $("#input-adLine2");
    userDoB = $("#input-DoB");
    userCreditScore=(Math.floor(Math.random() * (850 - 300)) + 300).toString();
    var date = userDoB.val().split('-');
    userYear = parseInt(date[0]);
    console.log(userYear);

    Validation();
}

function SendHtml() {
    console.log("SendHtml");
    alert("Thanks for Registering");
    window.open("signin.html","_self");

}

function selectGender(gender) {
    document.getElementById("genderButton").innerHTML = gender;
    userGender = gender;
    document.getElementById("genderButton").style.color = "#ffffff";
    document.getElementById("genderButton").style.backgroundColor = "#28a2a2";
    document.getElementById("genderButton").style.border = "none";
    document.getElementById("validationLabel").innerHTML = "";


}

function Validation() {

    if(userName.val()===""){
        document.getElementById("label-name").style.color = "#ff253a";
    }

    if ( userName.val()!=="" && userGender === "") {
        //Remove validation red
        document.getElementById("label-name").style.color = "#ccc";
        //Add validation red
        document.getElementById("genderButton").style.color = "#ff253a";
        document.getElementById("genderButton").style.backgroundColor = "#ffffff";
        document.getElementById("genderButton").style.border = "1px solid #ff253a";
        document.getElementById("validationLabel").innerHTML = "Please select your gender";
    }

    if (userName.val()!=="" && userGender !== "" && userDoB.val() === "") {

        //Remove validation red

        document.getElementById("genderButton").style.color = "#ffffff";
        document.getElementById("genderButton").style.backgroundColor = "#28a2a2";
        document.getElementById("genderButton").style.border = "none";
        document.getElementById("validationLabel").innerHTML = "";

        //Add validation red

        document.getElementById("input-DoB").style.color = "#ff253a";
        document.getElementById("input-DoB").style.backgroundColor = "#ffffff";
        document.getElementById("input-DoB").style.border = "1px solid #ff253a";
        document.getElementById("validationLabel").innerHTML = "Please select your date of birth";
    }

    if (userName.val()!=="" && userGender !== "" && userDoB.val() !== "" && userYear >= year - 18) {

        //Remove validation red

        document.getElementById("input-DoB").style.color = "#ffffff";
        document.getElementById("input-DoB").style.backgroundColor = "#28a2a2";
        document.getElementById("input-DoB").style.border = "none";
        document.getElementById("validationLabel").innerHTML = "";

        //Add validation red

        document.getElementById("input-DoB").style.color = "#ff253a";
        document.getElementById("input-DoB").style.backgroundColor = "#ffffff";
        document.getElementById("input-DoB").style.border = "1px solid #ff253a";
        document.getElementById("validationLabel").innerHTML = "You must be at least 18 year old";
    }

    if( userName.val()!=="" && userGender !== "" && userDoB.val() !== "" && userYear <= year - 18 &&
        userEmail.val()===""){

        //Remove validation red

        document.getElementById("input-DoB").style.color = "#ffffff";
        document.getElementById("input-DoB").style.backgroundColor = "#28a2a2";
        document.getElementById("input-DoB").style.border = "none";
        document.getElementById("validationLabel").innerHTML = "";

        //Add validation red

        document.getElementById("label-email").style.color = "#ff253a";
    }

    var email=localStorage.getItem(userEmail.val());

    if( userName.val()!=="" && userGender !== "" && userDoB.val() !== "" && userYear <= year - 18 &&
        userEmail.val()!=="" && email!==null){

        //Remove validation red

        document.getElementById("label-email").style.color = "#ccc";

        //Add validation red

        document.getElementById("label-email").style.color = "#ff253a";
        document.getElementById("validationLabel").innerHTML = "Email already exists";
    }

    if( userName.val()!=="" && userGender !== "" && userDoB.val() !== "" && userYear <= year - 18 &&
        userEmail.val()!=="" && email===null && userPassword.val()===""){

        //Remove validation red

        document.getElementById("label-email").style.color = "#ccc";
        document.getElementById("validationLabel").innerHTML = "";

        //Add validation red

        document.getElementById("label-password").style.color = "#ff253a";
    }

    if( userName.val()!=="" && userGender !== "" && userDoB.val() !== "" && userYear <= year - 18 &&
        userEmail.val()!=="" && email===null && userPassword.val()!=="" && userConfirmPassword.val()===""){

        //Remove validation red

        document.getElementById("label-password").style.color = "#ccc";

        //Add validation red

        document.getElementById("label-confirmPassword").style.color = "#ff253a";
    }

    if( userName.val()!=="" && userGender !== "" && userDoB.val() !== "" && userYear <= year - 18 &&
        userEmail.val()!=="" && email===null && userPassword.val()!=="" && userConfirmPassword.val()!=="" &&
        userPassword.val()!==userConfirmPassword.val()){

        //Remove validation red

        document.getElementById("label-confirmPassword").style.color = "#ccc";

        //Add validation red

        document.getElementById("label-confirmPassword").style.color = "#ff253a";
        document.getElementById("label-password").style.color = "#ff253a";
        document.getElementById("validationLabel").innerHTML = "Password does no match";
    }

    if( userName.val()!=="" && userGender !== "" && userDoB.val() !== "" && userYear <= year - 18 &&
        userEmail.val()!=="" && email===null && userPassword.val()!=="" && userConfirmPassword.val()!=="" &&
        userPassword.val()===userConfirmPassword.val() && userPhone.val()===""){

        //Remove validation red

        document.getElementById("label-confirmPassword").style.color = "#ccc";
        document.getElementById("label-password").style.color = "#ccc";
        document.getElementById("validationLabel").innerHTML = "";

        //Add validation red

        document.getElementById("label-phNo").style.color = "#ff253a";
    }

    if( userName.val()!=="" && userGender !== "" && userDoB.val() !== "" && userYear <= year - 18 &&
        userEmail.val()!=="" && email===null && userPassword.val()!=="" && userConfirmPassword.val()!=="" &&
        userPassword.val()===userConfirmPassword.val() && userPhone.val()!=="" && userPhone.val().length!==10){

        //Remove validation red

        document.getElementById("label-phNo").style.color = "#ccc";

        //Add validation red

        document.getElementById("label-phNo").style.color = "#ff253a";
        document.getElementById("validationLabel").innerHTML = "Invalid Phone number entered";
    }

    if( userName.val()!=="" && userGender !== "" && userDoB.val() !== "" && userYear <= year - 18 &&
        userEmail.val()!=="" && email===null && userPassword.val()!=="" && userConfirmPassword.val()!=="" &&
        userPassword.val()===userConfirmPassword.val() && userPhone.val()!=="" && userPhone.val().length===10 &&
        userAdLine1.val()===""){

        //Remove validation red

        document.getElementById("label-phNo").style.color = "#ccc";
        document.getElementById("validationLabel").innerHTML = "";

        //Add validation red

        document.getElementById("label-adLine1").style.color = "#ff253a";
    }

    if( userName.val()!=="" && userGender !== "" && userDoB.val() !== "" && userYear <= year - 18 &&
        userEmail.val()!=="" && email===null && userPassword.val()!=="" && userConfirmPassword.val()!=="" &&
        userPassword.val()===userConfirmPassword.val() && userPhone.val()!=="" && userPhone.val().length===10 &&
        userAdLine1.val()!==""){

        //Remove validation red

        document.getElementById("label-adLine1").style.color = "#ccc";

        SetData();
    }

}