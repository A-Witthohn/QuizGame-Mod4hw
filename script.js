
//Timer Element
const time = document.querySelector('h1');
let timeSecond = 10;

time.innerHTML = `Time Remaining:  ${timeSecond}`;

const start= document.getElementById(`start-game`);

start.addEventListener(`click`,function(){
    const countDown = setInterval (()=>{
        timeSecond--;
        time.innerHTML = `Time Remaining:  ${timeSecond}`;
        if(timeSecond <= 0 || timeSecond < 1){
            clearInterval(countDown)
        } 
    },1000)
} )
