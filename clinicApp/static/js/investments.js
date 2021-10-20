var investmentChart=null,profitChart=null;
function getChart() {
    var c_o_Chart = document.getElementById('c-o-chart');
    var outLookChart = new Chart(c_o_Chart, {
        type: 'line',
        data: {
            labels: ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'],
            datasets: [
                {
                    label: 'Investment',
                    data: [totalInvestments[0],totalInvestments[1],
                        totalInvestments[2],totalInvestments[3],totalInvestments[4],
                        totalInvestments[5],totalInvestments[6],totalInvestments[7],
                        totalInvestments[8],totalInvestments[9]],
                    backgroundColor: 'rgba(48,79,254,255)',
                    borderColor: 'rgba(48,79,254,255)',
                    borderWidth: 1,
                    fill:false
                },
                {
                    label: 'Profit',
                    data: [totalProfit[0],totalProfit[1],totalProfit[2],totalProfit[3],totalProfit[4],totalProfit[5],
                        totalProfit[6],totalProfit[7],totalProfit[8],totalProfit[9]],
                    backgroundColor: 'rgba(221, 44, 0, 255)',
                    borderColor: 'rgba(221, 44, 0, 255)',
                    borderWidth: 1,
                    fill:false
                },
            ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Company Outlook'
            },
            scales: {
                yAxes: [{
                    display: true,
                    type: 'linear',
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    getInvestmentPie("2010");
    getProfitPie("2010");
    setTable();
    setLogo("2010");


}

function getProfitPie(year) {
    if(profitChart!=null){
        profitChart.destroy();
    }
    var profits=[],companies=[];
    profits=getProfit(year);
    companies=getCompany(year);
    var c_o_Chat = document.getElementById('profitChart');
    profitChart = new Chart(c_o_Chat, {
        type: 'doughnut',
        data: {
            labels: companies,
            datasets: [{
                label: 'Profit',
                data: profits,
                backgroundColor: ['rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)'],
                borderColor: ['rgba(255, 255,255)'],
                borderWidth: 1,
                fill:false
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Profit in '+ year
            }
        }
    });
    setLogo(year);

}

function getInvestmentPie(year) {
    if(investmentChart!=null){
        investmentChart.destroy();
    }
    var investment=[],companies=[];
    investment=getInvestment(year);
    companies=getCompany(year);
    var c_o_Chat = document.getElementById('investmentChart');
    investmentChart = new Chart(c_o_Chat, {
        type: 'doughnut',
        data: {
            labels: companies,
            datasets: [{
                label: 'Investment',
                data: investment,
                backgroundColor: ['rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)'],
                borderColor: ['rgba(255, 255,255)'],
                borderWidth: 1,
                fill:false
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Investment in '+ year
            }
        }
    });

}

function getData() {
    getJson();
    console.log(totalInvestments[2]);

}

function setTable() {
    var table="<table cellspacing='0'>\n" +
        "            <thead>\n" +
        "                <th>Year</th>\n" +
        "                <th>Investment</th>\n" +
        "                <th>Profit</th>\n" +
        "            </thead>\n" +
        "            <tr onclick='setPie("+"2010"+")'>\n" +
        "                <td>2010</td>\n" +
        "                <td>$"+getTotalInvestment('2010')+"</td>\n" +
        "                <td>$"+getTotalProfit('2010')+"</td>\n" +
        "            </tr>\n" +
        "            <tr onclick='setPie("+"2011"+")'>\n" +
        "                <td>2011</td>\n" +
        "                <td>$"+getTotalInvestment('2011')+"</td>\n" +
        "                <td>$"+getTotalProfit('2011')+"</td>\n" +
        "            </tr>\n" +
        "            <tr onclick='setPie("+"2012"+")'>\n" +
        "                <td>2012</td>\n" +
        "                <td>$"+getTotalInvestment('2012')+"</td>\n" +
        "                <td>$"+getTotalProfit('2012')+"</td>\n" +
        "            </tr>\n" +
        "            <tr onclick='setPie("+"2013"+")'>\n" +
        "                <td>2013</td>\n" +
        "                <td>$"+getTotalInvestment('2013')+"</td>\n" +
        "                <td>$"+getTotalProfit('2013')+"</td>\n" +
        "            </tr>\n" +
        "            <tr onclick='setPie("+"2014"+")'>\n" +
        "                <td>2014</td>\n" +
        "                <td>$"+getTotalInvestment('2014')+"</td>\n" +
        "                <td>$"+getTotalProfit('2014')+"</td>\n" +
        "            </tr>\n" +
        "            <tr onclick='setPie("+"2015"+")'>\n" +
        "                <td>2015</td>\n" +
        "                <td>$"+getTotalInvestment('2015')+"</td>\n" +
        "                <td>$"+getTotalProfit('2015')+"</td>\n" +
        "            </tr>\n" +
        "            <tr onclick='setPie("+"2016"+")'>\n" +
        "                <td>2016</td>\n" +
        "                <td>$"+getTotalInvestment('2016')+"</td>\n" +
        "                <td>$"+getTotalProfit('2016')+"</td>\n" +
        "            </tr>\n" +
        "            <tr onclick='setPie("+"2017"+")'>\n" +
        "                <td>2017</td>\n" +
        "                <td>$"+getTotalInvestment('2017')+"</td>\n" +
        "                <td>$"+getTotalProfit('2017')+"</td>\n" +
        "            </tr>\n" +
        "            <tr onclick='setPie("+"2018"+")'>\n" +
        "                <td>2018</td>\n" +
        "                <td>$"+getTotalInvestment('2018')+"</td>\n" +
        "                <td>$"+getTotalProfit('2018')+"</td>\n" +
        "            </tr>\n" +
        "            <tr onclick='setPie("+"2019"+")'>\n" +
        "                <td>2019</td>\n" +
        "                <td>$"+getTotalInvestment('2019')+"</td>\n" +
        "                <td>$"+getTotalProfit('2019')+"</td>\n" +
        "            </tr>\n" +

        "        </table>"+"<div class='downloadCSV' onclick='sendCSV()'>Download as CSV</div>";
    document.getElementById("table").innerHTML=table;

}

function setPie(year) {
    year=year.toString();
    document.getElementById("investmentChartContainer").innerHtml="";
    document.getElementById("investmentChartContainer").innerHtml="<canvas id=\"investmentChart\" " +
        "width=\"1000\" height=\"500\"></canvas>\n";
    document.getElementById("profitChartContainer").innerHtml="<canvas id=\"profitChart\" " +
        "width=\"1000\" height=\"500\"></canvas>\n";
    getProfitPie(year);
    getInvestmentPie(year);
}

function setLogo(year) {
    try{
        var logo4="",logo5="";
        var logos=getLogos(year);
        var logo1="<img src='" +(logos[0])+ "'>";
        var logo2="<img src='" +(logos[1])+ "'>";
        var logo3="<img src='" +(logos[2])+ "'>";
       if(logos.length>=4){
           logo4="<img src='" +(logos[3])+ "'>";
       }

if(logo1.length===5){
    logo5="<img src='" +(logos[4])+ "'>";
}




        document.getElementById("logo1").innerHTML=logo1;
        document.getElementById("logo2").innerHTML=logo2;
        document.getElementById("logo3").innerHTML=logo3;
        document.getElementById("logo4").innerHTML=logo4;
        document.getElementById("logo5").innerHTML=logo5;
    }
    catch {e} {
        
    }


}

// function sendCSV() {
//     const rows = [
//         ["name1", "city1", "some other info"],
//         ["name2", "city2", "more info"]
//     ];
//
//     let csvContent = "data:text/csv;charset=utf-8,";
//
//     data.forEach(function(rowArray) {
//         let row = rowArray.join(",");
//         csvContent += row + "\r\n";
//     });
//     var encodedUri = encodeURI(csvContent);
//     window.open(encodedUri);
// }
function sendCSV() {
    var content = data;

    var finalVal = 'Year,Company Name,Investment,Profit\n';

    for (var i = 0; i < content.length; i++) {
        var value = content[i];

        for (var j = 0; j < value.length-1; j++) {
            var innerValue =  value[j]===null?'':value[j].toString();
            var result = innerValue.replace(/"/g, '""');
            if (result.search(/("|,|\n)/g) >= 0)
                result = '"' + result + '"';
            if (j > 0)
                finalVal += ',';
            finalVal += result;
        }

        finalVal += '\n';
    }
    var download = document.createElement('a');
    var blob = new Blob([finalVal],{type: 'text/csv;charset=utf-8;'});
    download.href = URL.createObjectURL(blob);
    download.setAttribute('download', 'companyOutlook.csv');
    download.click();
}