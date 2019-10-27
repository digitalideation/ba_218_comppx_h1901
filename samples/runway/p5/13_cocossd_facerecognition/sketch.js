// New
// - Nested draw

// Variables
let cocoSSDResults
let faceRecResults
let faceLabelImg
let capture

// Setup 
function setup() {
    canvas = createCanvas(windowWidth, windowHeight)
    capture = createCapture(VIDEO)
    faceLabelImg = loadImage('guillaume.png')
    capture.hide()
};

// Draw loop
function draw() {
    background(0)
    image(capture, 0, 0)
    if (faceRecResults && cocoSSDResults) {
        for (const cocoSSDResult of cocoSSDResults) {
            if (cocoSSDResult.class == 'person') {
                for (const faceRecResult of faceRecResults) {
                    const bbox1 = faceRecResult.bbox
                    const bbox2 = cocoSSDResult.bbox
                    hit = collideRectRect(bbox1[0],bbox1[1],bbox1[2],bbox1[3],bbox2[0],bbox2[1],bbox2[2],bbox2[3]);
                    console.log(hit)
                    if (hit) {
                        const croppedCapture = capture.get(bbox2[0], bbox2[1], bbox2[2], bbox2[3]) 
                        croppedCapture.loadPixels()
                        push()
                            translate(bbox2[0], bbox2[1])
                            pixelate(croppedCapture.pixels, bbox2[2], bbox2[3], 10, 10)
                        pop()
                    }
                }
            }
        }
    }

};


function pixelate(pixels, width, height, stepRow, stepCol) {
  // We iterate through all the elements of the array
  for (let i = 0; i < pixels.length; i += 4) {

    // We calculate the x and y associated with this pixel
    let x = (i / 4) % width
    let y = floor((i / 4) / width)

    // if x and why are on a column or row
    if (x % stepRow == 0 && y % stepCol == 0) {

      // assign r,g,b,a colors 
      let r = pixels[i]
      let g = pixels[i + 1]
      let b = pixels[i + 2]
      let a = 255
      // let a = pixels[i + 3];
      // let a = map(mouseX, 0, width, 0, 255);

      // Use the color from a pixel to draw a rectangle
      fill(r, g, b, a)
      noStroke()
      let w = stepRow * 2
      let h = stepCol * 2      
      rectMode(CENTER)
      rect(x, y, w, h)

    }
  }

}


// Function called when a key is released
function keyReleased() {
    // if ENTER is pressed
    if (keyCode === ENTER) {
        sendImageToCoco()
        sendImageToFaceRec()
    }
}

// Send the current capture image to the model
function sendImageToCoco() {
    const image = utils.captureAndEncodeCanvas(capture)
    models['cocoSSD'].input({ image })
    // utils.captureAndEncodeLiveStream(liveStream).then(image => {
    //     models['cocoSSD'].input({ image })
    // })
}

// Send the current capture image to the model
function sendImageToFaceRec() {
    const input_image = utils.captureAndEncodeCanvas(capture)
    const label_image = faceLabelImg.canvas.toDataURL("image/jpeg")
    const match_tolerance = 0.5
    models['faceRec'].input({ input_image, label_image, match_tolerance })
    // utils.captureAndEncodeLiveStream(liveStream).then(image => {
    //     models['cocoSSD'].input({ image })
    // })
}