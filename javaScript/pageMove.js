let pageNum = 0
const maxPage = 2;
const minPage = 0;

const text = document.querySelectorAll(".title_content");

const downBtn = document.querySelectorAll(".down");
downBtn.forEach(element => {
    element.addEventListener('click',()=>{
        if(pageNum == maxPage){
            return;
        }
        timmer = 0;
        pageNum++;
        floatText(pageNum);
        let moveVal = pageNum * 100 * -1;
        document.querySelector(".content").style.transform = `translateY(${moveVal}vh)`;
    });
});

const upBtn = document.querySelectorAll(".up");
upBtn.forEach(element => {
    element.addEventListener('click',()=>{
        if(pageNum == minPage){
            return;
        }
        timmer = 0;
        pageNum--;
        floatText(pageNum);
        let moveVal = pageNum * 100 * -1;
        document.querySelector(".content").style.transform = `translateY(${moveVal}vh)`;
    });    
});

let timmer = 0;

setInterval(()=>{
    timmer += 500;

    if(timmer > 5000){
        autoScroll();
    }
},500);

function autoScroll(){
    if(pageNum == maxPage){
        pageNum = 0;
    }
    else{
        pageNum++;
    }
    floatText(pageNum);
    timmer = 0;
    let moveVal = pageNum * 100 * -1;
    document.querySelector(".content").style.transform = `translateY(${moveVal}vh)`;
}

function floatText(focus){
    text.forEach(element => {
        element.classList.toggle('focus',false);
    });
    text[focus].classList.toggle('focus',true);
}