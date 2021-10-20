var data=[],totalProfit=[],totalInvestments=[],jsonData;


function getJson() {
    $(document).ready(function(){
        $.getJSON("json/investments.json",function(obj){
            jsonData=obj;
            var index=0;
            $.each(jsonData,function(year,value){
                $.each(value,function(company,values){
                    data[index]=[];
                    data[index][0]=year;
                    data[index][1]=company;
                    data[index][2]=(values.Investment);
                    data[index][3]=(values.Profit);
                    data[index][4]=(values.Image);
                    // console.log(data);
                    index++;
                });

            });
            getTotalValues(data);
        });

    });

}

function getTotalValues(array) {
    data=array;
    var year="2010";
    var investment=0;
    var profit=0;
    var index=0;

    for(var i=0;i<data.length;i++){
        if(data[i][0]===year){
            investment+=data[i][2];
            profit+=data[i][3];
            totalInvestments[index]=investment;
            totalProfit[index]=profit;
        }
        if(data[i][0]!==year){
            index++;
            year=data[i][0];
            investment=data[i][2];
            totalInvestments[index]=investment;
            profit=data[i][3];
            totalProfit[index]=profit;
        }
    }

    getChart();
    getProfit();
}

function getProfit(year) {
    var index=0;
    var profitArray=[];
    for(var i=0;i<data.length;i++){
        if(data[i][0]===year){
            profitArray[index]=data[i][3];
            index++;
        }
    }
    return profitArray;
}

function getInvestment(year) {
    var index=0;
    var profitArray=[];
    for(var i=0;i<data.length;i++){
        if(data[i][0]===year){
            profitArray[index]=data[i][2];
            index++;
        }
    }
    return profitArray;
}
function getTotalInvestment(year) {
    var index=0;
    var profit=0;
    for(var i=0;i<data.length;i++){
        if(data[i][0]===year){
            profit+=data[i][2];
        }
    }
    return profit;
}
function getTotalProfit(year) {
    var profit=0;
    for(var i=0;i<data.length;i++){
        if(data[i][0]===year){
            profit+=data[i][3];
        }
    }
    return profit;
}
function getCompany(year) {
    var index=0;
    var profitArray=[];
    for(var i=0;i<data.length;i++){
        if(data[i][0]===year){
            profitArray[index]=data[i][1];
            index++;
        }
    }
    return profitArray;
}
function getLogos(year) {
    var index=0;
    var profitArray=[];
    for(var i=0;i<data.length;i++){
        if(data[i][0]===year){
            profitArray[index]=data[i][4];
            index++;
        }
    }
    return profitArray;
}