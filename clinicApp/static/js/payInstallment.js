var email,totalDebt,monthlyInstallment,interestRate,months,jsonData;
function getData() {
    email=sessionStorage.getItem("currentUser");
    var data=localStorage.getItem(email);
    jsonData=JSON.parse(data);
    totalDebt=jsonData.userTotalDebt;
    monthlyInstallment=jsonData.userInstallment;
    interestRate=jsonData.userInterestRate;
    months=jsonData.userLoanTenure;
    setHtml();
}
function setHtml() {
    document.getElementById("data-totalDebt").innerHTML="$"+totalDebt;
    document.getElementById("data-installment").innerHTML="$"+monthlyInstallment;
}

function payNow() {
var amount=document.getElementById("amount").value;
amount=parseInt(amount);
totalDebt=parseInt(totalDebt);

    if(amount<=0 || totalDebt===0){
        document.getElementById("tickImage").style.display="none";
        document.getElementById("crossImage").style.display="block";
        document.getElementById("statusLabel").innerHTML="$"+amount+" is invalid";
        document.getElementById("statusLabel").style.display="block";
    }
    else if(amount<totalDebt && amount>=monthlyInstallment){
        document.getElementById("tickImage").style.display="block";
        document.getElementById("crossImage").style.display="none";
        document.getElementById("statusLabel").innerHTML="$"+amount+" payed"+", $"+(totalDebt-amount)+" remaining";
        document.getElementById("statusLabel").style.display="block";
        totalDebt=totalDebt-amount;
    }
    else if(amount>totalDebt){
        document.getElementById("tickImage").style.display="block";
        document.getElementById("crossImage").style.display="none";
        document.getElementById("statusLabel").style.display="block";
        document.getElementById("statusLabel").innerHTML="$"+totalDebt+" payed,"+" $"+(amount-totalDebt)+" credited back";
        totalDebt=0;
        monthlyInstallment=0;
    }
    else if(amount<monthlyInstallment){
        document.getElementById("tickImage").style.display="none";
        document.getElementById("crossImage").style.display="block";
        document.getElementById("statusLabel").innerHTML="$"+monthlyInstallment+" required";
        document.getElementById("statusLabel").style.display="block";
    }

    else{
        document.getElementById("tickImage").style.display="none";
        document.getElementById("crossImage").style.display="block";
        document.getElementById("statusLabel").innerHTML="$"+amount+" is invalid";
        document.getElementById("statusLabel").style.display="block";
    }
    setHtml();
    setStorage()
}
function setStorage() {
    if(totalDebt===0){
        monthlyInstallment=0;
        interestRate=0;
        months=0;

    }
    jsonData.userTotalDebt=totalDebt;
    jsonData.userInstallment=monthlyInstallment;
    jsonData.userInterestRate=interestRate;
    jsonData.userLoanTenure=months;
    localStorage.setItem(email,JSON.stringify(jsonData));
}
function checkLogin() {
    var status=sessionStorage.getItem("currentUser");
    if(status===null){
        alert("You need to login first!!");
        window.open('signin.html','_self');
    }
}