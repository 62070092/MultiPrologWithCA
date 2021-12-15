

let info = "ข้อมูล1";

function swapInfo(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";
        
        info = "ข้อมูล2";

    }
    else{
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        info = "ข้อมูล1";
    }
    
    
}

function swapInfo_2R(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_1")[0].dataset.bar="2";

        info = "ข้อมูล2";

        document.getElementsByClassName("bar")[0].style.width = "1rem";
    }
    else if(info === "ข้อมูล2"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="1";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="1";

        document.querySelectorAll(".bar_1")[0].dataset.bar="3";

        info = "ข้อมูล3";

        document.getElementsByClassName("bar")[0].style.width = "2rem";
    }
    else if(info === "ข้อมูล3"){
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_1")[0].dataset.bar="1";

        info = "ข้อมูล1";

        document.getElementsByClassName("bar")[0].style.width = "1rem";
    }

}

function swapInfo_2L(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="1";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="1";

        document.querySelectorAll(".bar_1")[0].dataset.bar="3";

        info = "ข้อมูล3";

        document.getElementsByClassName("bar")[0].style.width = "2rem";

    }
    else if(info === "ข้อมูล2"){
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_1")[0].dataset.bar="1";

        info = "ข้อมูล1";

        document.getElementsByClassName("bar")[0].style.width = "1rem";
    }
    else if(info === "ข้อมูล3"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_1")[0].dataset.bar="2";

        info = "ข้อมูล2";

        document.getElementsByClassName("bar")[0].style.width = "1rem";
    }

}

function swapInfo_3R(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_2")[0].dataset.bar="2";
        info = "ข้อมูล2";

        document.getElementsByClassName("bar")[0].style.width = "2rem";
    }
    else if(info === "ข้อมูล2"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="1";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="1";

        document.querySelectorAll(".bar_2")[0].dataset.bar="3";
        info = "ข้อมูล3";

        document.getElementsByClassName("bar")[0].style.width = "2rem";
    }
    else if(info === "ข้อมูล3"){
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_2")[0].dataset.bar="1";
        info = "ข้อมูล1";

        document.getElementsByClassName("bar")[0].style.width = "1.5rem";
    }

}
function swapInfo_3L(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="1";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="1";

        document.querySelectorAll(".bar_2")[0].dataset.bar="3";
        info = "ข้อมูล3";
        document.getElementsByClassName("bar")[0].style.width = "2rem";
    }
    else if(info === "ข้อมูล2"){
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_2")[0].dataset.bar="1";
        info = "ข้อมูล1";
        document.getElementsByClassName("bar")[0].style.width = "1.5rem";
    }
    else if(info === "ข้อมูล3"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_2")[0].dataset.bar="2";
        info = "ข้อมูล2";
        document.getElementsByClassName("bar")[0].style.width = "2rem";
    }

}

function swapInfo_4R(){
    
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_3")[0].dataset.bar="2";
        info = "ข้อมูล2";

        document.getElementsByClassName("bar")[0].style.width = "3rem";
    }
    else if(info === "ข้อมูล2"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="1";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="1";

        document.querySelectorAll(".bar_3")[0].dataset.bar="3";
        info = "ข้อมูล3";

        document.getElementsByClassName("bar")[0].style.width = "3rem";
    }
    else if(info === "ข้อมูล3"){
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_3")[0].dataset.bar="1";
        info = "ข้อมูล1";

        document.getElementsByClassName("bar")[0].style.width = "2.5rem";
    }

}

function swapInfo_4L(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="1";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="1";

        document.querySelectorAll(".bar_3")[0].dataset.bar="3";
        info = "ข้อมูล3";

        document.getElementsByClassName("bar")[0].style.width = (bbar+1)+"rem";
    }
    else if(info === "ข้อมูล2"){
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_3")[0].dataset.bar="1";
        info = "ข้อมูล1";

        document.getElementsByClassName("bar")[0].style.width = (bbar+.5)+"rem";
    }
    else if(info === "ข้อมูล3"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_3")[0].dataset.bar="2";
        info = "ข้อมูล2";

        document.getElementsByClassName("bar")[0].style.width = (bbar+1)+"rem";
    }

}

function swapInfo_5R(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_4")[0].dataset.bar="2";

        info = "ข้อมูล2";
        document.getElementsByClassName("bar")[0].style.width = "3.2rem";
    }
    else if(info === "ข้อมูล2"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="1";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="1";

        document.querySelectorAll(".bar_4")[0].dataset.bar="3";

        info = "ข้อมูล3";
        document.getElementsByClassName("bar")[0].style.width = "3rem";
    }
    else if(info === "ข้อมูล3"){
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_4")[0].dataset.bar="1";

        info = "ข้อมูล1";

        document.getElementsByClassName("bar")[0].style.width = "5rem";
    }

}

function swapInfo_5L(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="1";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="1";

        document.querySelectorAll(".bar_4")[0].dataset.bar="3";

        info = "ข้อมูล3";
        document.getElementsByClassName("bar")[0].style.width = "3rem";
    }
    else if(info === "ข้อมูล2"){
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_4")[0].dataset.bar="1";

        info = "ข้อมูล1";
        document.getElementsByClassName("bar")[0].style.width = "5rem";
    }
    else if(info === "ข้อมูล3"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_4")[0].dataset.bar="2";

        info = "ข้อมูล2";

        document.getElementsByClassName("bar")[0].style.width = "3rem";
    }

}

function swapInfo_6R(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_5")[0].dataset.bar="2";

        info = "ข้อมูล2";

        document.getElementsByClassName("bar")[0].style.width = "5rem";
    }
    else if(info === "ข้อมูล2"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="1";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="1";

        document.querySelectorAll(".bar_5")[0].dataset.bar="3";

        info = "ข้อมูล3";

        document.getElementsByClassName("bar")[0].style.width = "5.5rem";
    }
    else if(info === "ข้อมูล3"){
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_5")[0].dataset.bar="1";

        info = "ข้อมูล1";

        document.getElementsByClassName("bar")[0].style.width = "4.5rem";
    }

}

function swapInfo_6L(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="1";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="1";

        document.querySelectorAll(".bar_5")[0].dataset.bar="3";
        info = "ข้อมูล3"

        document.getElementsByClassName("bar")[0].style.width = "4.7rem";
    }
    else if(info === "ข้อมูล2"){
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_5")[0].dataset.bar="1";
        info = "ข้อมูล1"

        document.getElementsByClassName("bar")[0].style.width = "3.7rem";
    }
    else if(info === "ข้อมูล3"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_5")[0].dataset.bar="2";
        info = "ข้อมูล2"

        document.getElementsByClassName("bar")[0].style.width = "4.2rem";
    }

}

function swapInfo_7R(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_6")[0].dataset.bar="2";

        info = "ข้อมูล2";

        document.getElementsByClassName("bar")[0].style.width = "7rem";
    }
    else if(info === "ข้อมูล2"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="1";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="1";

        document.querySelectorAll(".bar_6")[0].dataset.bar="3";

        info = "ข้อมูล3";

        document.getElementsByClassName("bar")[0].style.width = "7.5rem";
    }
    else if(info === "ข้อมูล3"){
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_6")[0].dataset.bar="1";

        info = "ข้อมูล1";

        document.getElementsByClassName("bar")[0].style.width = "6.5rem";
    }

}

function swapInfo_7L(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="1";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="1";

        document.querySelectorAll(".bar_6")[0].dataset.bar="3";
        info = "ข้อมูล3";
        document.getElementsByClassName("bar")[0].style.width = "7.5rem";
    }
    else if(info === "ข้อมูล2"){
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_6")[0].dataset.bar="1";
        info = "ข้อมูล1";
        document.getElementsByClassName("bar")[0].style.width = "6.5rem";
    }
    else if(info === "ข้อมูล3"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_6")[0].dataset.bar="2";
        info = "ข้อมูล2";
        document.getElementsByClassName("bar")[0].style.width = "7rem";
    }

}

function swapInfo_8(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";

        document.querySelectorAll(".bar_7")[0].dataset.bar="2";

        info = "ข้อมูล2";

        document.getElementsByClassName("bar")[0].style.width = "5rem";

    }
    else{
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";

        document.querySelectorAll(".bar_7")[0].dataset.bar="1";
        info = "ข้อมูล1"

        document.getElementsByClassName("bar")[0].style.width = "6rem";
    }
  
}

function swapInfo_9(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";

        document.querySelectorAll(".bar_8")[0].dataset.bar="2";

        info = "ข้อมูล2";
        document.getElementsByClassName("bar")[0].style.width = "3rem";

    }
    else{
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";

        document.querySelectorAll(".bar_8")[0].dataset.bar="1";
        info = "ข้อมูล1";
        document.getElementsByClassName("bar")[0].style.width = "8rem";
    }

}


function swapInfo_10R(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_9")[0].dataset.bar="2";

        info = "ข้อมูล2";
        document.getElementsByClassName("bar")[0].style.width = "17.5rem";
    }
    else if(info === "ข้อมูล2"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="1";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="1";

        document.querySelectorAll(".bar_9")[0].dataset.bar="3";

        info = "ข้อมูล3";
        document.getElementsByClassName("bar")[0].style.width = "17rem";
    }
    else if(info === "ข้อมูล3"){
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_9")[0].dataset.bar="1";

        info = "ข้อมูล1";
        document.getElementsByClassName("bar")[0].style.width = "18rem";
    }

}
function swapInfo_10L(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="1";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="1";

        document.querySelectorAll(".bar_9")[0].dataset.bar="3";
        info = "ข้อมูล3";
        document.getElementsByClassName("bar")[0].style.width = "17rem";
    }
    else if(info === "ข้อมูล2"){
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="1";
        document.querySelectorAll(".icon_2")[0].dataset.icon="0";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_9")[0].dataset.bar="1";
        info = "ข้อมูล1";
        document.getElementsByClassName("bar")[0].style.width = "18rem";
    }
    else if(info === "ข้อมูล3"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";

        document.querySelectorAll(".icon_1")[0].dataset.icon="0";
        document.querySelectorAll(".icon_2")[0].dataset.icon="1";
        document.querySelectorAll(".icon_3")[0].dataset.icon="0";

        document.querySelectorAll(".bar_9")[0].dataset.bar="2";
        info = "ข้อมูล2";
        document.getElementsByClassName("bar")[0].style.width = "17.5rem";
    }

}

function choose(){

    // const text = document.getElementById('text').value;

    // localStorage.setItem("TEXT", text);
    window.location.href = ("school-type.html");

    // return;

}




