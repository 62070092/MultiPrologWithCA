let info = "ข้อมูล1";


function swapInfo(id){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(`#${id} .info-1`)[0].dataset.swap="0";
        document.querySelectorAll(`#${id} .info-2`)[0].dataset.swap="1";
        info = "ข้อมูล2"
    }
    else{
        document.querySelectorAll(`#${id} .info-1`)[0].dataset.swap="1";
        document.querySelectorAll(`#${id} .info-2`)[0].dataset.swap="0";
        info = "ข้อมูล1"
    }  
}

function swapInfo_2(id){
    if(info === "ข้อมูล1"){
        document.querySelectorAll(`#${id} .info-1`)[0].dataset.swap="0";
        document.querySelectorAll(`#${id} .info-2`)[0].dataset.swap="1";
        document.querySelectorAll(`#${id} .info-3`)[0].dataset.swap="0";

        info = "ข้อมูล2"
    }
    else if(info === "ข้อมูล2"){
        document.querySelectorAll(`#${id} .info-1`)[0].dataset.swap="0";
        document.querySelectorAll(`#${id} .info-2`)[0].dataset.swap="0";
        document.querySelectorAll(`#${id} .info-3`)[0].dataset.swap="1";

        info = "ข้อมูล3"
    }
    else if(info === "ข้อมูล3"){
        document.querySelectorAll(`#${id} .info-1`)[0].dataset.swap="1";
        document.querySelectorAll(`#${id} .info-2`)[0].dataset.swap="0";
        document.querySelectorAll(`#${id} .info-3`)[0].dataset.swap="0";

        info = "ข้อมูล1"
    }

}


function goto(choice){
    let des_choice = document.querySelector(`#${choice}`)
    openChoice(choice)
    window.scroll(0, des_choice.offsetTop);
}

function openChoice(choice){
    let chioces = document.querySelectorAll(".choice");
    chioces.forEach((choice_div) => {
        choice_div.dataset.show="0"
    })
    document.querySelector(`#${choice}`).dataset.show = "1";
}
