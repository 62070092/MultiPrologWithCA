let info = "ในประเทศ"

function swapInfo(){
    if(info === "ในประเทศ"){
        document.querySelectorAll(".info-1")[0].dataset.swap="0";
        document.querySelectorAll(".info-2")[0].dataset.swap="1";
        info = "ต่างประเทศ"
    }
    else{
        document.querySelectorAll(".info-1")[0].dataset.swap="1";
        document.querySelectorAll(".info-2")[0].dataset.swap="0";
        info = "ในประเทศ"
    }
}