const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const size = 20;
let snake, food, dir, score, speed, loop;
let paused = false;

function startGame() {
    snake = [{ x: 200, y: 200 }];
    dir = { x: size, y: 0 };
    score = 0;
    speed = 140;
    paused = false;

    document.getElementById("score").innerText = score;
    document.getElementById("gameOver").style.display = "none";

    placeFood();
    clearInterval(loop);
    loop = setInterval(update, speed);
}

function togglePause() {
    paused = !paused;
}

function placeFood() {
    food = {
        x: Math.floor(Math.random() * (canvas.width / size)) * size,
        y: Math.floor(Math.random() * (canvas.height / size)) * size
    };
}

document.addEventListener("keydown", e => {
    if (e.key === "ArrowUp" && dir.y === 0) dir = { x: 0, y: -size };
    if (e.key === "ArrowDown" && dir.y === 0) dir = { x: 0, y: size };
    if (e.key === "ArrowLeft" && dir.x === 0) dir = { x: -size, y: 0 };
    if (e.key === "ArrowRight" && dir.x === 0) dir = { x: size, y: 0 };
});

function update() {
    if (paused) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let head = {
        x: snake[0].x + dir.x,
        y: snake[0].y + dir.y
    };

    if (
        head.x < 0 || head.y < 0 ||
        head.x >= canvas.width || head.y >= canvas.height ||
        snake.some(p => p.x === head.x && p.y === head.y)
    ) {
        endGame();
        return;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score++;
        document.getElementById("score").innerText = score;
        placeFood();

        if (speed > 299) {
            speed -= 1;
            clearInterval(loop);
            loop = setInterval(update, speed);
        }
    } else {
        snake.pop();
    }

    drawFood();
    drawSnake();
}

function drawSnake() {
    snake.forEach((p, i) => {
        ctx.fillStyle = i === 0 ? "#ff4f9a" : "#ffd1dc";
        ctx.beginPath();
        ctx.roundRect(p.x, p.y, size, size, 6);
        ctx.fill();
    });
}

function drawFood() {
    ctx.fillStyle = "#00ffd5";
    ctx.beginPath();
    ctx.arc(food.x + size / 2, food.y + size / 2, size / 2.2, 0, Math.PI * 2);
    ctx.fill();
}

function endGame() {
    clearInterval(loop);
    document.getElementById("finalScore").innerText = score;
    document.getElementById("gameOver").style.display = "flex";
}
