var name,gender,dob,email,phno,adline1,adline2,age,creditScore,installment,dobEnglish;
function getData() {
    email=sessionStorage.getItem("currentUser");
    var data=localStorage.getItem(email);
    var jsonData=JSON.parse(data);
    name=jsonData.userName;
    gender=jsonData.userGender;
    dob=jsonData.userDoB;
    phno=jsonData.userPhone;
    adline1=jsonData.userAdLine1;
    adline2=jsonData.userAdLine2;
    creditScore=jsonData.userCreditScore;
    installment=jsonData.userInstallment;
    getAge();
    getInstallment();
    setHtml();
}
function getAge() {
    var months=["January","February","March","April","May","June","July","August","September","October", "November",
        "December",];
    var datefull=dob.split('-');
    var year=parseInt(datefull[0]);
    var month=parseInt(datefull[1]);
    var date=parseInt(datefull[2]);
    var monthEnglish=months[month-1];
    console.log(year);
    console.log(month);
    console.log(date);
    console.log(monthEnglish);
    var currDateFull=new Date();
    var currDate=currDateFull.getDate();
    var currMonth=currDateFull.getMonth();
    var currYear=currDateFull.getFullYear();
    age=currYear-year;
    if(currMonth<=month){
        if(currDate<=date){
            age=age-1;
        }
    }
    age=age+" Years";
    dobEnglish=monthEnglish+", "+date+" "+year;

}
function getInstallment() {
    if(installment===""){
        installment="$0.00";
    }

}
function setHtml() {
    document.getElementsByClassName("data-name")[0].innerHTML = name;
    document.getElementsByClassName("data-name")[1].innerHTML = name;
    document.getElementsByClassName("data-age")[0].innerHTML = age;
    document.getElementsByClassName("data-age")[1].innerHTML = age;
    document.getElementsByClassName("data-gender")[0].innerHTML = gender;
    document.getElementsByClassName("data-gender")[1].innerHTML = gender;
    document.getElementsByClassName("data-DoB")[0].innerHTML = dobEnglish;
    document.getElementsByClassName("data-email")[0].innerHTML = email;
    document.getElementsByClassName("data-phNo")[0].innerHTML = phno;
    document.getElementsByClassName("data-adLine1")[0].innerHTML = adline1;
    document.getElementsByClassName("data-adLine2")[0].innerHTML = adline2;
    document.getElementsByClassName("data-installment")[0].innerHTML = installment;


}
function checkLogin() {
    var status=sessionStorage.getItem("currentUser");
    if(status===null){
        alert("You need to login first!!");
        window.open('signin.html','_self');
    }
}