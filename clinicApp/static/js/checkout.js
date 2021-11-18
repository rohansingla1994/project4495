var ip_1=3,ip_2=1,ip_3=3,ip_4=2,ip_5=6,ip_6=10,ip_7=3,ip_8=1,ip_9=3,ip_10=2,ip_11=6,ip_12=10;
var it_1=0,it_2=0,it_3=0,it_4=0,it_5=0,it_6=0,it_7=0,it_8=0,it_9=0,it_10=0,it_11=0,it_12=0;
var ia_1=0,ia_2=0,ia_3=0,ia_4=0,ia_5=0,ia_6=0,ia_7=0,ia_8=0,ia_9=0,ia_10=0,ia_11=0,ia_12=0;




function card_item(li,input){

    document.getElementById(li).style.display = "flex";
    document.getElementById(input).value= Number(document.getElementById(input).value)+1;
    update_values(input)
}

function item_hide(li, input){
    document.getElementById(li).style.display = "none";
    document.getElementById(input).value=0;
    update_values(input)
}

function update_values(input){
    change_values(input);
    total_label(input);
}

function total_label(item,input){

    change_values(input);
    var total=get_total_amount();
    document.getElementById('total').innerHTML='$'+total;
    if(Number(document.getElementById(input).value)===0){
        document.getElementById(item).style.display='none';
    }
}

function checkout(){

}

function change_values(input){
    if(input==='i-1'){
        console.log('i-1')
        ia_1=document.getElementById(input).value;
        it_1=ip_1*ia_1;
    }
    if(input==='i-2'){
        ia_2=document.getElementById(input).value;
        it_2=ip_2*ia_2;
    }
    if(input==='i-3'){
        ia_3=document.getElementById(input).value;
        it_3=ip_3*ia_3;
    }
    if(input==='i-4'){
        ia_4=document.getElementById(input).value;
        it_4=ip_4*ia_4;
    }
    if(input==='i-5'){
        ia_5=document.getElementById(input).value;
        it_5=ip_5*ia_5;
    }
    if(input==='i-6'){
        ia_6=document.getElementById(input).value;
        it_6=ip_6*ia_6;
    }
    if(input==='i-7'){
        ia_7=document.getElementById(input).value;
        it_7=ip_7*ia_7;
    }
    if(input==='i-8'){
        ia_8=document.getElementById(input).value;
        it_8=ip_8*ia_8;
    }
    if(input==='i-9'){
        ia_9=document.getElementById(input).value;
        it_9=ip_9*ia_9;
    }
    if(input==='i-10'){
        ia_10=document.getElementById(input).value;
        it_10=ip_10*ia_10;
    }
    if(input==='i-11'){
        ia_11=document.getElementById(input).value;
        it_11=ip_11*ia_11;
    }
    if(input==='i-12'){
        ia_12=document.getElementById(input).value;
        it_12=ip_12*ia_12;
    }

}

function get_total_amount(){
    total=it_1+it_2+it_3+it_4+it_5+it_6+it_7+it_8+it_9+it_10+it_11+it_12;
    return total;
}