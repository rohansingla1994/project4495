var creditScore,interestRate,status,color;
function getData() {
    email=sessionStorage.getItem("currentUser");
    var data=localStorage.getItem(email);
    var jsonData=JSON.parse(data);
    creditScore=jsonData.userCreditScore;
    getColor();
    getStatus();
    getInterestRate();
    setHtml();
}
function getStatus() {
    if(creditScore>=300 && creditScore<400){
        status="Very Poor";
    }
    else if(creditScore>=400 && creditScore<500){
        status="Poor";
    }
    else if(creditScore>=500 && creditScore<600){
        status="Fair";
    }
    else if(creditScore>=600 && creditScore<700){
        status="Good";
    }
    else if(creditScore>=700 && creditScore<800){
        status="Very Good";
    }
    else if(creditScore>=800 && creditScore<=850){
        status="Exceptional";
    }
    else{
        status="OK";
    }
    return status;
}
function getInterestRate() {
    if(creditScore>=300 && creditScore<400){
        interestRate=10;
        document.getElementById("data-interestRate").innerHTML="x + <p style='color:"+color+";display:inline;'>10%</p>";

    }
    else if(creditScore>=400 && creditScore<500){
        interestRate=5;
        document.getElementById("data-interestRate").innerHTML="x + <p style='color:"+color+";display:inline;'>5%</p>";

    }
    else if(creditScore>=500 && creditScore<600){
        interestRate=2;
        document.getElementById("data-interestRate").innerHTML="x + <p style='color:"+color+";display:inline;'>2%</p>";

    }
    else if(creditScore>=600 && creditScore<700){
        interestRate=-2;
        document.getElementById("data-interestRate").innerHTML="x - <p style='color:"+color+";display:inline;'>2%</p>";

    }
    else if(creditScore>=700 && creditScore<800){
        interestRate=-5;
        document.getElementById("data-interestRate").innerHTML="x - <p style='color:"+color+";display:inline;'>5%</p>";

    }
    else if(creditScore>=800 && creditScore<=850){
        interestRate=-10;
        document.getElementById("data-interestRate").innerHTML="x - <p style='color:"+color+";display:inline;'>10%</p>";

    }
    else{
        interestRate=0;
        document.getElementById("data-interestRate").innerHTML="x + <p style='color:"+color+";display:inline;'>0%</p>";

    }
    return color;
}
function getColor() {
    if(creditScore>=300 && creditScore<400){
        color="#d50000";
    }
    else if(creditScore>=400 && creditScore<500){
        color="#ff5131";
    }
    else if(creditScore>=500 && creditScore<600){
        color="#f9a825";
    }
    else if(creditScore>=600 && creditScore<700){
        color="#aee571";
    }
    else if(creditScore>=700 && creditScore<800){
        color="#7cb342";
    }
    else if(creditScore>=800 && creditScore<=850){
        interestRate="#651fff";
    }
    else{
        color="#fafafa";
    }
    return color;
}
function setHtml() {
    document.getElementById("data-status").innerHTML=status;
    document.getElementById("data-status").style.color=color;
    document.getElementById("creditScore").innerHTML=creditScore;
    document.getElementById("creditScore").style.color=color;

}

function checkLogin() {
    var status=sessionStorage.getItem("currentUser");
    if(status===null){
        alert("You need to login first!!");
        window.open('login.html','_self');
    }
}