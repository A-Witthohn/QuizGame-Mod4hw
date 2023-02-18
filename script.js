//Timer Element + set up
function setupGame() {
    const time = document.querySelector('h1');
    let timeSecond = 10;

    time.innerHTML = `Time Remaining:  ${timeSecond}`;

    const start = document.getElementById(`start-game`);

    // Countdown + consistent decrement interval
    const countDown = setInterval(() => {
        timeSecond--;
        time.innerHTML = `Time Remaining:  ${timeSecond}`;
        if (timeSecond <= 0 || timeSecond < 1) {
            clearInterval(countDown);
            //causes button to reappear
            start.style.display = `block`;
        }
    }, 1000)
    //Start Timer on click
    start.addEventListener(`click`, () => {
        //hides button on click//
        start.style.display = `none`;
        clearInterval(countDown);
        setupGame();
    });
}

setupGame();


