// Game Constants and Variables
let inputDir = { x: 0, y: 0 };
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('gameover.mp3');
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('gameMusic.mp3')
let speed = 2;
let lastPaintTime = 0;
let score = 0;
let snakeArr = [{ x: 13, y: 15 }]
let food = { x: 6, y: 7 };

// Game Functions
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) return;
    lastPaintTime = ctime;
    gameEngine();
    // console.log(ctime); 
}

function isCollide(sarr) {
    return false;
}

function gameEngine() {
    /* Part 1: */
    // Updating the snake array
    if (isCollide(snakeArr)) {
        gameOverSound.play();
        musicSound.pause();
        inpurDir = { x: 0, y: 0 };
        alert("Press any key to Play again!");
        snakeArr = [{ x: 13, y: 15 }];
        musicSound, play();
        score = 0;
    }

    // If Food eaten, increment the score and regenarate the food
    if (snakeArr[0].y === food.y && snakeArr[0].y === food.x) {
        snakeArr.unshift({ x: snkaeArr[0].x + inputDir.x, y: snkaeArr[0].y + inputDir.y });
        let a = 2;
        let b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
    }

    // Moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--)
        snakeArr[i + 1] = { ...snakeArr[i] };
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    /* Part 2: ---------------------------------- */
    // Dispaly the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.x;
        snakeElement.style.gridColumnStart = e.y;
        if (index == 0) snakeElement.classList.add('snake');
        else snakeElement.classList.add('head');
        board.appendChild(snakeElement);
    })
    // Display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.x;
    foodElement.style.gridColumnStart = food.y;
    foodElement.classList.add('food');
    board.appendChild(foodElement);

}

// Main logic starts here
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = { x: 0, y: 1 } // Start the game
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
    }
});
