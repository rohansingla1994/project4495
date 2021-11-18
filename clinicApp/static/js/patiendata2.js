


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




    };
    console.log(userData);
    JSON_Data(userData)

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





function JSON_Data(data) {

    // if email exists

    // then store data in firebase

}
