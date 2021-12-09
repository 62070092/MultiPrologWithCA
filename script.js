let info = "ข้อมูล1";
var i = 0;

function swapInfo(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";


        info = "ข้อมูล2"

    }
    else{
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        info = "ข้อมูล1"
    }
    
}

function swapInfo_2(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_1")[0].dataset.bar="2";

        info = "ข้อมูล2"
    }
    else if(info === "ข้อมูล2"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="1";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="1";

        document.querySelectorAll(".bar_1")[0].dataset.bar="3";

        info = "ข้อมูล3"
    }
    else if(info === "ข้อมูล3"){
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_1")[0].dataset.bar="1";

        info = "ข้อมูล1"
    }

}

function swapInfo_3(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_2")[0].dataset.bar="2";
        info = "ข้อมูล2"
    }
    else if(info === "ข้อมูล2"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="1";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="1";

        document.querySelectorAll(".bar_2")[0].dataset.bar="3";
        info = "ข้อมูล3"
    }
    else if(info === "ข้อมูล3"){
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_2")[0].dataset.bar="1";
        info = "ข้อมูล1"
    }

}

function swapInfo_4(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_3")[0].dataset.bar="2";
        info = "ข้อมูล2"
    }
    else if(info === "ข้อมูล2"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="1";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="1";

        document.querySelectorAll(".bar_3")[0].dataset.bar="3";
        info = "ข้อมูล3"
    }
    else if(info === "ข้อมูล3"){
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_3")[0].dataset.bar="1";
        info = "ข้อมูล1"
    }

}

function swapInfo_5(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_4")[0].dataset.bar="2";

        info = "ข้อมูล2"
    }
    else if(info === "ข้อมูล2"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="1";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="1";

        document.querySelectorAll(".bar_4")[0].dataset.bar="3";

        info = "ข้อมูล3"
    }
    else if(info === "ข้อมูล3"){
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_4")[0].dataset.bar="1";

        info = "ข้อมูล1"
    }

}

function swapInfo_6(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_5")[0].dataset.bar="2";

        info = "ข้อมูล2"
    }
    else if(info === "ข้อมูล2"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="1";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="1";

        document.querySelectorAll(".bar_5")[0].dataset.bar="3";

        info = "ข้อมูล3"
    }
    else if(info === "ข้อมูล3"){
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_5")[0].dataset.bar="1";

        info = "ข้อมูล1"
    }

}

function swapInfo_7(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_6")[0].dataset.bar="2";

        info = "ข้อมูล2"
    }
    else if(info === "ข้อมูล2"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="1";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="1";

        document.querySelectorAll(".bar_6")[0].dataset.bar="3";

        info = "ข้อมูล3"
    }
    else if(info === "ข้อมูล3"){
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_6")[0].dataset.bar="1";

        info = "ข้อมูล1"
    }

}

function swapInfo_8(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";

        document.querySelectorAll(".bar_7")[0].dataset.bar="2";

        info = "ข้อมูล2"

    }
    else{
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";

        document.querySelectorAll(".bar_7")[0].dataset.bar="1";
        info = "ข้อมูล1"
    }
  
}

function swapInfo_9(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";

        document.querySelectorAll(".bar_8")[0].dataset.bar="2";

        info = "ข้อมูล2"

    }
    else{
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";

        document.querySelectorAll(".bar_8")[0].dataset.bar="1";
        info = "ข้อมูล1"
    }

}


function swapInfo_10(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_9")[0].dataset.bar="2";

        info = "ข้อมูล2"
    }
    else if(info === "ข้อมูล2"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="1";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="1";

        document.querySelectorAll(".bar_9")[0].dataset.bar="3";

        info = "ข้อมูล3"
    }
    else if(info === "ข้อมูล3"){
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_9")[0].dataset.bar="1";

        info = "ข้อมูล1"
    }

}

function one(){
    window.location.href = ("school-type.html");
    document.getElementById("one_350k").innerHTML = "Hoooooooooo";
}


