


var userAge;
var anamemia,creatinine,ejection_fraction,platelets,serum_ceratnine,serum_sodium,time,saturation,sex="";

var userData;

function Signup() {
    console.log("Signup");

   FetchHtml();
   SetData();
   JSON_Data(userData);

}

function SetData() {
    console.log("SetData");
     userData = {

        'userAge':userAge.val(),
        'anamemia':anamemia.val(),
         'creatinine':creatinine.val(),
         'ejection_fraction':ejection_fraction.val(),
        'platelets': platelets.val(),
         'serum_ceratnine':serum_ceratnine.val(),
         'serum_sodium':serum_sodium.val(),
         'time':time.val(),
         'saturation':saturation.val(),
         'userName': sessionStorage.getItem('userName')




    };
    console.log(userData);

    JSON_Data(userData)
     localStorage.setItem(userEmail,JSON.stringify(userData));

}

function FetchHtml() {



    userAge = $("#input-age");
    anamemia =$("#input-anamemia");
    creatinine = $("#input-creatinine");
    ejection_fraction =$("#input-ejection");
    platelets = $("#input-platelets");
    serum_ceratnine = $("#input-serum");
    serum_sodium = $("#input-sodium");
    time = $("#input-time");
    saturation= $("#input-saturationme");

}





function getEmail() {
    userEmail=sessionStorage.getItem("currentUser");
    if(userEmail===null){
        userEmail="email";
        return false
    }
    return true;
}
function getData() {
    if (checkStorage() === false) {
        return;
    }
    getEmail();
    if (getEmail()===true){
        var data = localStorage.getItem(email);
        jsonData = JSON.parse(data);

    }


}

function JSON_Data(data) {

    // if email exists

    // then store data in firebase
    $.ajax({
        url: '/ajax/getStroke/',
        data:data,
        dataType: 'json',
        success: function (data) {
          if (data.is_taken) {
            alert(data.return_msg);
          }
        }
      });

}