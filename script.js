const time = document.querySelector('h1');
let timeSecond = 5;

time.innerHTML = `Time Remaining:  ${timeSecond}`;

const countDown = setInterval (()=>{
    timeSecond--;
    time.innerHTML = `Time Remaining:  ${timeSecond}`;
    if(timeSecond <= 0 || timeSecond < 1){
        clearInterval(countDown)
    }
},1000)