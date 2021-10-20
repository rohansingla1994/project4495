var email = "", jsonData,
    creditScore=null,interestRate;

function checkStorage() {
    console.log("Check Storage");
    if (typeof (Storage) !== "undefined") {
        return true;
    } else {
        Console.log("Sorry! No Web Storage support..");
        return false;
    }
}
function getEmail() {
    email=sessionStorage.getItem("currentUser");
    if(email===null){
        email="email";
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
        creditScore=jsonData.userCreditScore;
    }

    if (creditScore===null){
        creditScore=500;
    }
}
function setData() {
    localStorage.setItem(email,JSON.stringify(jsonData));
}
function setInstallment(value) {
    getData();
    jsonData.userInstallment=value;
    setData();
}
function setTotalDebt(value) {
    getData();
    jsonData.userTotalDebt=value;
    setData();
}
function setLoanTenure(value) {
    getData();
    jsonData.userLoanTenure=value;
    setData()
}
function setInterestRate(value) {
    getData();
    jsonData.userInterestRate=value;
    setData();
}
function getInterestRateFactor() {
    getData();
    if(creditScore>=300 && creditScore<400){
        interestRate=10;
    }
    else if(creditScore>=400 && creditScore<500){
        interestRate=5;
    }
    else if(creditScore>=500 && creditScore<600){
        interestRate=2;
    }
    else if(creditScore>=600 && creditScore<700){
        interestRate=-2;
    }
    else if(creditScore>=700 && creditScore<800){
        interestRate=-5;
    }
    else if(creditScore>=800 && creditScore<=850){
        interestRate=-10;
    }
    else{
        interestRate=0;
    }
    return interestRate;
}


function getTotalDebt()
{
    getData();

    return jsonData.userTotalDebt;
}

