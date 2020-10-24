let hasLanded;
let recamanSequence; // Recaman Sequence   0,1,3,6,2,7,13,20,12,21,11...
let count;
let index;
let arcs;
let screenScale;
let furthestRight;

function initialize() {
    hasLanded = [];
    recamanSequence = [];
    arcs = [];
    count = 0;
    index = 0;
    screenScale = 1;
    furthestRight = windowWidth / 1000;
}

function setup() {
    initialize();
    createCanvas(windowWidth, windowHeight);
    frameRate(20);
    // background("black");
}

function draw() {
    background("black");
    step();
    drawArcs();
    // debugOutput();
}

function step() {
    let next = index - count;
    if (next < 0 || hasLanded[next]) {
        next = index + count;
    }
    hasLanded[next] = true;
    recamanSequence.push(next);

    let a = new Arc(index, next, count % 2);
    arcs.push(a);

    index = next;

    if (index > furthestRight) {
        furthestRight = index;
    }

    count++;
}

function drawArcs() {
    translate(0, height / 2);
    screenScale = width / furthestRight;
    scale(screenScale);
    arcs.forEach(arc => {
        arc.show();
    });
}

function debugOutput() {
    if (frameCount > 200) {
        console.log(recamanSequence);
        debugger;
        noLoop();
    }
}