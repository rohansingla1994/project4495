var userName, userEmail,
    userGender = "",userPerson = "";

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
   FetchHtml();
   SetData();

}

function SetData() {
    console.log("SetData");
    var userData = {
        "userGender": userGender,
       "userEmail": userEmail.val(),
        "heartDisease": heartDisease,
        "hypertension":userPerson,
        "married":married,
        "employment":employment,
        "residence":residence,
        "smoking": smoking,
        'userAge':userAge.val(),
        'gulucose':gulucose.val(),
        'bodyMassIndex': bodyMassIndex.val(),
        'userName': sessionStorage.getItem('userName')

    };
       console.log(userData);

    JSON_Data(userData);

}

function FetchHtml() {
    userAge = $("#input-name");
    userEmail = $("#input-email");
    gulucose = $("#input-password");
    bodyMassIndex = $("#input-confirmPassword");




}




function selectGender(gender) {
    console.log("heartDisease");
    document.getElementById("genderButton").innerHTML = gender;
    userGender = gender;
    console.log(userGender);
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

    document.getElementById("smokeButton").innerHTML = smoke;
    smoking = smoke;
    document.getElementById("smokeButton").style.color = "#ffffff";
    document.getElementById("smokeButton").style.backgroundColor = "#C01F31";
    document.getElementById("smokeButton").style.border = "none";
    document.getElementById("validationLabel").innerHTML = "";
}




function JSON_Data(data) {

    // if email exists

    // then store data in firebase
    $.ajax({
        url: '/ajax/getHeart/',
        data:data,
        dataType: 'json',
        success: function (data) {
          if (data.is_taken) {
            alert(data.return_msg);
          }
        }
      });

}




