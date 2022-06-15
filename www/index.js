import {Cell, Universe} from "wasm-hello";
import {memory} from "wasm-hello/wasm_hello_bg";

const CELL_SIZE = 10; // px
const GRID_COLOR = "rgba(59,59,59,0.07)";
const DEAD_COLOR = "#FFFFFF";
let ALIVE_COLOR = "#e66465";
let speed = document.getElementById('speed').value;

let aliveCellColorPicker = document.getElementById("alive-cell-colorpicker");
aliveCellColorPicker.addEventListener("change", (event) => {
    ALIVE_COLOR = event.target.value;
});

let width = document.getElementById('width-input').value;
let height = document.getElementById('height-input').value;


let universe = Universe.new(width, height);
const canvas = document.getElementById("game-of-life-canvas");

canvas.addEventListener("mousedown", e => {
    handleClick(e, false)
});
mouseMoveWhilstDown(canvas, e => {
    handleClick(e, true)
});

const ctx = canvas.getContext("2d");

function handleClick(event, setAlive = false) {

    const boundingRect = canvas.getBoundingClientRect();

    const scaleX = canvas.width / boundingRect.width;
    const scaleY = canvas.height / boundingRect.height;

    const canvasLeft = (event.clientX - boundingRect.left) * scaleX;
    const canvasTop = (event.clientY - boundingRect.top) * scaleY;

    const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), height - 1);
    const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), width - 1);

    if (setAlive) {
        universe.set_alive(row, col);
    } else {
        universe.toggle_cell(row, col);
    }

    drawGrid();
    drawCells();

}

const drawGrid = () => {
    ctx.beginPath();
    ctx.strokeStyle = GRID_COLOR;

    // Vertical lines.
    for (let i = 0; i <= width; i++) {
        ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
        ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);
    }

    // Horizontal lines.
    for (let j = 0; j <= height; j++) {
        ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);
        ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);
    }

    ctx.stroke();
};

const getIndex = (row, column) => {
    return row * width + column;
};


const drawCells = () => {
    const cellsPtr = universe.cells();
    const cells = new Uint8Array(memory.buffer, cellsPtr, width * height);

    ctx.beginPath();

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            const idx = getIndex(row, col);

            ctx.fillStyle = cells[idx] === Cell.Dead
                ? DEAD_COLOR
                : ALIVE_COLOR;

            ctx.fillRect(
                col * (CELL_SIZE + 1) + 1,
                row * (CELL_SIZE + 1) + 1,
                CELL_SIZE,
                CELL_SIZE
            );
        }
    }

    ctx.stroke();
};


let renderLoopInterval = null;

function renderLoop() {
    universe.tick();

    drawCells();
    drawGrid();
    renderLoopInterval = setTimeout(() => {
        requestAnimationFrame(renderLoop)
    }, 1000 - speed);
};

const isPaused = () => {
    return renderLoopInterval === null;
};
const playPauseButton = document.getElementById("play-pause");

const play = () => {
    playPauseButton.textContent = "⏸";
    renderLoop();
};

const pause = () => {
    playPauseButton.textContent = "▶";
    clearInterval(renderLoopInterval);
    renderLoopInterval = null;
};

playPauseButton.addEventListener("click", event => {
    if (isPaused()) {
        play();
    } else {
        pause();
    }
});

document
    .getElementById("speed")
    .addEventListener("change", (event) => {
        speed = event.target.value;
    });

function mouseMoveWhilstDown(target, whileMove) {
    var endMove = function () {
        window.removeEventListener("mousemove", whileMove);
        window.removeEventListener("mouseup", endMove);
    };

    target.addEventListener("mousedown", function (event) {
        event.stopPropagation(); // remove if you do want it to propagate ..
        window.addEventListener("mousemove", whileMove);
        window.addEventListener("mouseup", endMove);
    });
}

function setup() {
    pause()
    width = document.getElementById('width-input').value;
    height = document.getElementById('height-input').value;
    universe = Universe.new(width, height);
    canvas.height = (CELL_SIZE + 1) * height + 1;
    canvas.width = (CELL_SIZE + 1) * width + 1;
    drawGrid();
    drawCells();
}

document.getElementById('reset-btn').onclick = setup;

function firstSetup() {
    pause()
    width = document.getElementById('width-input').value;
    height = document.getElementById('height-input').value;
    universe = Universe.new(width, height);
    //
    universe.toggle_cell(20, 10)
    universe.toggle_cell(20, 11)
    universe.toggle_cell(20, 12)
    universe.toggle_cell(19, 12)
    universe.toggle_cell(18, 11)
    //
    universe.toggle_cell(30, 20)
    universe.toggle_cell(30, 21)
    universe.toggle_cell(30, 22)
    universe.toggle_cell(29, 22)
    universe.toggle_cell(28, 21)
    //
    universe.toggle_cell(40, 30)
    universe.toggle_cell(40, 31)
    universe.toggle_cell(40, 32)
    universe.toggle_cell(39, 32)
    universe.toggle_cell(38, 31)
    //
    canvas.height = (CELL_SIZE + 1) * height + 1;
    canvas.width = (CELL_SIZE + 1) * width + 1;
    drawGrid();
    drawCells();
}

firstSetup()
play();

