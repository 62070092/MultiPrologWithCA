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





function choose_choice(num){
    const country = document.getElementsByClassName('.country').value;
    const school_type = document.getElementsByClassName('.school-T').value;
    const study_line = document.getElementsByClassName('.study-line').value;
    const price = document.getElementsByClassName('.line-price').value;
    const take_class = document.getElementsByClassName('.take-class').value;
    const class_price = document.getElementsByClassName('.class-price').value;
    const course_line = document.getElementsByClassName('.course-line').value;
    const course_price = document.getElementsByClassName('.course-price').value;
    const other_book = document.getElementsByClassName('.other-book').value;
    const buy_book = document.getElementsByClassName('.buy-book').value;
    const book_price = document.getElementsByClassName('.book-price').value;
    const offering = document.getElementsByClassName('.offering').value;
    const off_price = document.getElementsByClassName('.off-price').value;

    if(num == 1){
        localStorage.setItem("country", "ในประเทศ");
    }

    if(num == 2){
        localStorage.setItem("country", "ต่างประเทศ")
    }


    if(num == 3){
        localStorage.setItem("school-T", "อาชีววิกรม")
        localStorage.setItem("study-line", "อาชีววิกรม")
        localStorage.setItem("text-price", "18,000 บาท")
    }

    if(num == 4){
        localStorage.setItem("school-T", "รัฐบาลแกล้วกล้า")
    }

    if(num == 5){
        localStorage.setItem("school-T", "โรงเรียนเอกชน")
    }


    if(num == 6){
        localStorage.setItem("study-line", "ศิลป์คำนวณ - ภาษา")
        localStorage.setItem("line-price", "9,000 บาท" )
    }

    if(num == 7){
        localStorage.setItem("study-line", "โครงการพิเศษ")
        localStorage.setItem("line-price", "120,000 บาท" )
    }

    if(num == 8){
        localStorage.setItem("study-line", "EP & IEP")
        localStorage.setItem("line-price", "240,000 บาท" )
    }


    if(num == 9){
        localStorage.setItem("study-line", "เอกชนปัญญา")
        localStorage.setItem("line-price", "350,000 บาท" )
    }

    if(num == 10){
        localStorage.setItem("study-line", "วิทยเอกชน")
        localStorage.setItem("line-price", "540,000 บาท" )
    }

    if(num == 11){
        localStorage.setItem("study-line", "เอกชนนานาชาติ")
        localStorage.setItem("line-price", "2,220,000 บาท" )
    }

    if(num == 12){
        localStorage.setItem("take-class", "เรียนกับติวเตอร์")
        localStorage.setItem("course-line", "เรียนกับติวเตอร์")
        localStorage.setItem("course-price", "57,600 บาท" )
    }

    if(num == 13){
        localStorage.setItem("take-class", "เรียนกับวิดีโอ")
    }

    if(num == 14){
        localStorage.setItem("take-class", "ไม่เรียนพิเศษ")
        localStorage.setItem("course-line", "ไม่เรียนพิเศษ")
        localStorage.setItem("course-price", "0 บาท" )
    }
    

    if(num == 15){
        localStorage.setItem("course-line", "คอร์สต้นอ่อน")
        localStorage.setItem("course-price", "20,000 บาท" )
    }

    if(num == 16){
        localStorage.setItem("course-line", "คอร์สสมใจหวัง")
        localStorage.setItem("course-price", "78,100 บาท" )
    }

    if(num == 17){
        localStorage.setItem("course-line", "คอร์สสร้างแชมป์")
        localStorage.setItem("course-price", "164,100 บาท" )
    }

    if(num == 18){
        localStorage.setItem("other-book", "ซื้อหนังสือเพิ่ม")

    }

    if(num == 19){
        localStorage.setItem("other-book", "ไม่ซื้อ")

    }

    if(num == 20){
        localStorage.setItem("buy-book", "SET ติด?")
        localStorage.setItem("book-price", "3,500 บาท" )
    }

    if(num == 21){
        localStorage.setItem("buy-book", "SET ติด")
        localStorage.setItem("book-price", "9,900 บาท" )

    }

    if(num == 22){
        localStorage.setItem("buy-book", "SET ติด!")
        localStorage.setItem("book-price", "21,000 บาท" )

    }


    // ต่างประเทศ
    if(num == 23){
        localStorage.setItem("school-T", "I’m Ready !")
    }

    if(num == 24){
        localStorage.setItem("school-T", "ยังไม่ได้ภาษาเลย")
    }

    if(num == 25){
        localStorage.setItem("study-line", "America")
        localStorage.setItem("line-price", "7,863,923 Baht" )
    }

    if(num == 26){
        localStorage.setItem("study-line", "Canada")
        localStorage.setItem("line-price", "5,818,100 Baht" )
    }

    if(num == 27){
        localStorage.setItem("study-line", "Singapore")
        localStorage.setItem("line-price", "2,400,000 Baht" )
    }

    if(num == 28){
        localStorage.setItem("offering", "Course offering!")
        localStorage.setItem("off-price", "75,300 Baht")
    }

}

window.addEventListener('load', () => {
    const country = localStorage.getItem('country');
    const school_type = localStorage.getItem('school-T');
    const study_line = localStorage.getItem('study-line');
    const price = localStorage.getItem('line-price');
    const take_class = localStorage.getItem('take-class');
    const course_line = localStorage.getItem('course-line');
    const course_price = localStorage.getItem('course-price');
    const other_book = localStorage.getItem('other-book');
    const buy_book = localStorage.getItem('buy-book');
    const book_price = localStorage.getItem('book-price');
    const offering = localStorage.getItem('offering');
    const off_price = localStorage.getItem('off-price');

    document.getElementById('result-country').innerText = country;
    document.getElementById('result-school-type').innerText = school_type;
    document.getElementById('result-study-line').innerText = study_line;
    document.getElementById('study-line-price').innerText = price;
    document.getElementById('result-take-class').innerText = take_class;
    document.getElementById('result-course-line').innerText = course_line;
    document.getElementById('result-course-price').innerText = course_price;
    document.getElementById('result-other-book').innerText = other_book;
    document.getElementById('result-buy-book').innerText = buy_book;
    document.getElementById('result-book-price').innerText = book_price;
    document.getElementById('result-offering').innerText = offering;
    document.getElementById('result-off-price').innerText = off_price;
})


// window.localStorage.clear();