var userName, userEmail, userPassword = "", userConfirmPassword = "",
    userPhone, userAdLine1, userAdLine2, userDoB, userGender = "", userYear,userCreditScore,userPerson = "";
var calender = new Date();
var year = calender.getFullYear();
var month = calender.getMonth();
var date = calender.getDate();
var fullDate = year + "-" + month + "-" + date;
var heartDisease ;
var married;
var employment;
var residence;
var smoking;
var userAge;
var gulucose;
var bodyMassIndex;



function Signup() {
    console.log("Signup");
    if (typeof (Storage) !== "undefined") {
        console.log(userAge)
    } else {
        Console.log("Sorry! No Web Storage support..");
    }

}

function SetData() {
    console.log("SetData");
    var userData = {
        "userName": userName.val(), "userGender": userGender, "userType":userPerson,
        "userDoB": userDoB.val(), "userEmail": userEmail.val(),
        "userPassword": userPassword.val(), "userPhone": userPhone.val(),
        "userAdLine1": userAdLine1.val(), "userAdLine2": userAdLine2.val(),
        "userCreditScore":userCreditScore,
        "userInstallment":0,
        "userTotalDebt":0,
        "userLoanTenure":0,
        "userInterestRate":0,
        "heartDisease": heartDisease.val(),
        "married":married.val(),
        "employment":employment.val(),
        "residence":residence.val(),
        "smoking": smoking.val(),
        'userAge':userAge.val(),
        'gulucose':gulucose.val(),
        'bodyMassIndex': bodyMassIndex.val(),

    };
    JSON_Data(userData)
    SendHtml();
}

function FetchHtml() {
    userAge = $("#input-name");
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
    console.log("heartDisease");
    document.getElementById("genderButton").innerHTML = gender;
    userGender = gender;
    document.getElementById("genderButton").style.color = "#ffffff";
    document.getElementById("genderButton").style.backgroundColor = "#C01F31";
    document.getElementById("genderButton").style.border = "none";
    document.getElementById("validationLabel").innerHTML = "";


}

function selectPerson(person) {
    console.log(userAge);
    document.getElementById("personButton").innerHTML = person;
    userPerson = person;
    document.getElementById("personButton").style.color = "#ffffff";
    document.getElementById("personButton").style.backgroundColor = "#C01F31";
    document.getElementById("personButton").style.border = "none";
    document.getElementById("validationLabel").innerHTML = "";


}


function selectMarried(married1) {
    document.getElementById("marriedButton").innerHTML = married1;
    married = married1;
    document.getElementById("marriedButton").style.color = "#ffffff";
    document.getElementById("marriedButton").style.backgroundColor = "#C01F31";
    document.getElementById("marriedButton").style.border = "none";
    document.getElementById("validationLabel").innerHTML = "";
}
function selectHeartDisease(heartDisease1) {
    document.getElementById("heartButton").innerHTML = heartDisease1;
    heartDisease = heartDisease1;
    document.getElementById("heartButton").style.color = "#ffffff";
    document.getElementById("heartButton").style.backgroundColor = "#C01F31";
    document.getElementById("heartButton").style.border = "none";
    document.getElementById("validationLabel").innerHTML = "";
}
function selectEmployment(employ) {
    document.getElementById("employmentButton").innerHTML = employ;
    employment = employ;
    document.getElementById("employmentButton").style.color = "#ffffff";
    document.getElementById("employmentButton").style.backgroundColor = "#C01F31";
    document.getElementById("employmentButton").style.border = "none";
    document.getElementById("validationLabel").innerHTML = "";
}
function selectResidence(resident) {
    document.getElementById("residenceButton").innerHTML = resident;
    residence = resident;
    document.getElementById("residenceButton").style.color = "#ffffff";
    document.getElementById("residenceButton").style.backgroundColor = "#C01F31";
    document.getElementById("residenceButton").style.border = "none";
    document.getElementById("validationLabel").innerHTML = "";
}
function selectSmoking(smoke) {
    console.log(gulucose);
    console.log(bodyMassIndex);
    document.getElementById("smokeButton").innerHTML = smoke;
    smoking = smoke;
    document.getElementById("smokeButton").style.color = "#ffffff";
    document.getElementById("smokeButton").style.backgroundColor = "#C01F31";
    document.getElementById("smokeButton").style.border = "none";
    document.getElementById("validationLabel").innerHTML = "";
}

function Validation() {


    if(userName.val()===""){

    }

    if ( userName.val()!=="" && userGender === "") {
        //Remove validation red

        //Add validation red
        document.getElementById("genderButton").style.color = "#ff9100";
        document.getElementById("genderButton").style.backgroundColor = "#ffffff";
        document.getElementById("genderButton").style.border = "1px solid #ff9100";
        document.getElementById("validationLabel").innerHTML = "Please select your gender";
    }

    if (userName.val()!=="" && userGender !== "" && userPerson==="") {

        //Remove validation red

        document.getElementById("genderButton").style.color = "#ffffff";
        document.getElementById("genderButton").style.backgroundColor = "#C01F31";
        document.getElementById("genderButton").style.border = "none";
        document.getElementById("validationLabel").innerHTML = "";

        //Add validation red
        document.getElementById("personButton").style.color = "#ff9100";
        document.getElementById("personButton").style.backgroundColor = "#ffffff";
        document.getElementById("personButton").style.border = "1px solid #ff9100";
        document.getElementById("validationLabel").innerHTML = "Please select your client type";
    }

    if (userName.val()!=="" && userGender !== "" && userPerson !== "" && userDoB.val() === "") {

        //Remove validation red

        document.getElementById("personButton").style.color = "#ffffff";
        document.getElementById("personButton").style.backgroundColor = "#C01F31";
        document.getElementById("personButton").style.border = "none";
        document.getElementById("validationLabel").innerHTML = "";

        //Add validation red

        document.getElementById("input-DoB").style.color = "#ff9100";
        document.getElementById("input-DoB").style.backgroundColor = "#ffffff";
        document.getElementById("input-DoB").style.border = "1px solid #ff9100";
        document.getElementById("validationLabel").innerHTML = "Please select your date of birth";
    }

    if (userName.val()!=="" && userGender !== "" && userPerson !== "" && userDoB.val() !== "" && userYear >= year - 18) {

        //Remove validation red

        document.getElementById("input-DoB").style.color = "#ffffff";
        document.getElementById("input-DoB").style.backgroundColor = "#C01F31";
        document.getElementById("input-DoB").style.border = "none";
        document.getElementById("validationLabel").innerHTML = "";

        //Add validation red

        document.getElementById("input-DoB").style.color = "#ff9100";
        document.getElementById("input-DoB").style.backgroundColor = "#ffffff";
        document.getElementById("input-DoB").style.border = "1px solid #ff9100";
        document.getElementById("validationLabel").innerHTML = "You must be at least 18 year old";
    }

    if( userName.val()!=="" && userGender !== "" && userPerson !== "" && userDoB.val() !== "" && userYear <= year - 18 &&
        userEmail.val()===""){

        //Remove validation red

        document.getElementById("input-DoB").style.color = "#ffffff";
        document.getElementById("input-DoB").style.backgroundColor = "#C01F31";
        document.getElementById("input-DoB").style.border = "none";
        document.getElementById("validationLabel").innerHTML = "";

        //Add validation red


    }

    var email=localStorage.getItem(userEmail.val());

    if( userName.val()!=="" && userGender !== "" && userPerson !== "" && userDoB.val() !== "" && userYear <= year - 18 &&
        userEmail.val()!=="" && email!==null){

        //Remove validation red



        //Add validation red


        document.getElementById("validationLabel").innerHTML = "Email already exists";
    }

    if( userName.val()!=="" && userGender !== "" && userPerson !== "" && userDoB.val() !== "" && userYear <= year - 18 &&
        userEmail.val()!=="" && email===null && userPassword.val()===""){

        //Remove validation red


        document.getElementById("validationLabel").innerHTML = "";

        //Add validation red


    }

    if( userName.val()!=="" && userGender !== "" && userPerson !== "" && userDoB.val() !== "" && userYear <= year - 18 &&
        userEmail.val()!=="" && email===null && userPassword.val()!=="" && userConfirmPassword.val()===""){

        //Remove validation red



        //Add validation red


    }

    if( userName.val()!=="" && userGender !== "" && userPerson !== "" && userDoB.val() !== "" && userYear <= year - 18 &&
        userEmail.val()!=="" && email===null && userPassword.val()!=="" && userConfirmPassword.val()!=="" &&
        userPassword.val()!==userConfirmPassword.val()){

        //Remove validation red



        //Add validation red


        document.getElementById("validationLabel").innerHTML = "Password does no match";
    }

    if( userName.val()!=="" && userGender !== "" && userPerson !== "" && userDoB.val() !== "" && userYear <= year - 18 &&
        userEmail.val()!=="" && email===null && userPassword.val()!=="" && userConfirmPassword.val()!=="" &&
        userPassword.val()===userConfirmPassword.val() && userPhone.val()===""){

        //Remove validation red


        document.getElementById("validationLabel").innerHTML = "";

        //Add validation red


    }

    if( userName.val()!=="" && userGender !== "" && userPerson !== "" && userDoB.val() !== "" && userYear <= year - 18 &&
        userEmail.val()!=="" && email===null && userPassword.val()!=="" && userConfirmPassword.val()!=="" &&
        userPassword.val()===userConfirmPassword.val() && userPhone.val()!=="" && userPhone.val().length!==10){

        //Remove validation red



        //Add validation red


        document.getElementById("validationLabel").innerHTML = "Invalid Phone number entered";
    }

    if( userName.val()!=="" && userGender !== "" && userPerson !== "" && userDoB.val() !== "" && userYear <= year - 18 &&
        userEmail.val()!=="" && email===null && userPassword.val()!=="" && userConfirmPassword.val()!=="" &&
        userPassword.val()===userConfirmPassword.val() && userPhone.val()!=="" && userPhone.val().length===10 &&
        userAdLine1.val()===""){

        //Remove validation red


        document.getElementById("validationLabel").innerHTML = "";

        //Add validation red


    }

    if( userName.val()!=="" && userGender !== "" && userPerson !== "" && userDoB.val() !== "" && userYear <= year - 18 &&
        userEmail.val()!=="" && email===null && userPassword.val()!=="" && userConfirmPassword.val()!=="" &&
        userPassword.val()===userConfirmPassword.val() && userPhone.val()!=="" && userPhone.val().length===10 &&
        userAdLine1.val()!==""){

        //Remove validation red



        SetData();
    }

}

function JSON_Data(data) {

    // if email exists

    // then store data in firebase

}
