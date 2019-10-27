// New
// - Nested draw

// Variables
let cocoSSDResults
let capture

// Setup 
function setup() {
    canvas = createCanvas(windowWidth, windowHeight)
    capture = createCapture(VIDEO)
    capture.hide()
};

// Draw loop
function draw() {
    background(0)
    image(capture, 0, 0)
    if (cocoSSDResults)
        drawClasses(cocoSSDResults, capture)
};

// Draw the text
function drawClasses(results, capture) {
    for (var i = results.boxes.length - 1; i >= 0; i--) {
        // boxes holds the coordinate of the bounding box
        const x = results.boxes[i][0] * capture.width
        const y = results.boxes[i][1] * capture.height
        const w = results.boxes[i][2] * capture.width
        const h = results.boxes[i][3] * capture.height
        // class holds the label of the class
        const label = results.labels[i]
        push() // Start a new drawing state
            translate(x, y)
            drawBox(w, h)
            drawText(label)
        pop() // Restore original state
    }
}

// Draw individual class label
function drawText(txt) {
    const height = 20
    const padding = 10
    textSize(height)
    const width = textWidth(txt)
    fill(0, 150)
    noStroke()
    rect(0, 0, width + padding, height + padding)
    fill(255)
    text(txt, padding / 2, height / 2 + padding)
}

// Draw bounding box
function drawBox(width, height) {
    noFill()
    stroke(0)
    rect(0, 0, width, height)
}

// Function called when a key is released
function keyReleased() {
    // if ENTER is pressed
    if (keyCode === ENTER)
        sendImageToCoco()        
}

// Send the current capture image to the model
function sendImageToCoco() {
    const image = utils.captureAndEncodeCanvas(capture)
    models['cocoSSD'].input({ image })
}