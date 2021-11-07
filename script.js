let info = "ข้อมูล1"

function swapInfo(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        info = "ข้อมูล2"
    }
    else{
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        info = "ข้อมูล1"
    }
}

function swapInfo_2(){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";
        info = "ข้อมูล2"
    }
    else if(info === "ข้อมูล2"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="1";
        info = "ข้อมูล3"
    }
    else if(info === "ข้อมูล3"){
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        document.querySelectorAll(".info-3")[0].dataset.swap="0";
        info = "ข้อมูล1"
    }

}