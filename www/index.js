import {Cell, Universe} from "wasm-hello";
import {memory} from "wasm-hello/wasm_hello_bg";

const CELL_SIZE = 10; // px
const GRID_COLOR = "grey";
const DEAD_COLOR = "#FFFFFF";
let ALIVE_COLOR = "#e66465";

let aliveCellColorPicker = document.getElementById("alive-cell-colorpicker");
aliveCellColorPicker.addEventListener("change", (event) => {
    ALIVE_COLOR = event.target.value;
});

let width = document.getElementById('width-input').value;
let height = document.getElementById('height-input').value;

let aliveCells = [];

const canvas = document.getElementById("game-of-life-canvas");
canvas.width = (CELL_SIZE) * width;
canvas.height = (CELL_SIZE) * height;

canvas.addEventListener("click", handleClick);
mouseMoveWhilstDown(canvas, handleClick);

const ctx = canvas.getContext("2d");

function handleClick(e) {
    ctx.fillStyle = ALIVE_COLOR;


    let x = ~~(e.offsetX / CELL_SIZE);
    let y = ~~(e.offsetY / CELL_SIZE);

    aliveCells.push(y * width + x);
    ctx.fillRect(
        x * CELL_SIZE,
        y * CELL_SIZE,
        CELL_SIZE,
        CELL_SIZE
    );
}

const drawGrid = () => {
    ctx.beginPath();
    ctx.strokeStyle = GRID_COLOR;

    // Vertical lines.
    for (let i = 0; i <= width; i++) {
        ctx.moveTo(i * (CELL_SIZE), 0);
        ctx.lineTo(i * (CELL_SIZE), (CELL_SIZE) * height);
    }

    // Horizontal lines.
    for (let j = 0; j <= height; j++) {
        ctx.moveTo(0, j * (CELL_SIZE));
        ctx.lineTo((CELL_SIZE) * width, j * (CELL_SIZE));
    }

    ctx.stroke();
};

const getIndex = (row, column) => {
    return row * width + column;
};

let universe = Universe.new(width, height);
const drawCells = () => {
    const cellsPtr = universe.cells();
    const cells = new Uint8Array(memory.buffer, cellsPtr, width * height);

    ctx.beginPath();

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            const idx = getIndex(row, col);

            ctx.fillStyle = cells[idx] === Cell.Dead ? DEAD_COLOR : ALIVE_COLOR;

            ctx.fillRect(
                col * (CELL_SIZE),
                row * (CELL_SIZE),
                CELL_SIZE,
                CELL_SIZE
            );
        }
    }

    ctx.stroke();
};


drawGrid();

let renderLoopInterval;

const renderLoop = () => {
    universe.tick();

    drawCells();
    drawGrid();
    renderLoopInterval = setTimeout(() => {
        requestAnimationFrame(renderLoop)
    }, 50);
};
let started = false;

function start() {
    if (started) {
        return
    }
    started = true;
    universe = Universe.new_with_alives(width, height, aliveCells);
    requestAnimationFrame(renderLoop);
}

function reset() {
    started = false;
    clearInterval(renderLoopInterval)
    ctx.clearRect(0, 0, width, height);
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {

            ctx.fillStyle = DEAD_COLOR;

            ctx.fillRect(
                col * (CELL_SIZE),
                row * (CELL_SIZE),
                CELL_SIZE,
                CELL_SIZE
            );
        }
    }
    width = document.getElementById('width-input').value;
    height = document.getElementById('height-input').value;
    canvas.width = (CELL_SIZE) * width;
    canvas.height = (CELL_SIZE) * height;
    aliveCells = [];
    universe = Universe.new(width, height);
    drawGrid();
}

document.getElementById('start-btn').onclick = start
document.getElementById('reset-btn').onclick = reset

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

