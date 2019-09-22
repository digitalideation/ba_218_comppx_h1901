// import p5 from 'p5'
// import "p5/lib/addons/p5.sound"
// import "p5/lib/addons/p5.dom"
import p5 from 'p5/lib/p5.min'
import runwayModel from './runwayModel.js'
import * as utils from './utils.js'

// const model = {}
// const RUNWAY_HOST = 'http://localhost'
// const MOBILENET_PORT = 3000
// model['MobileNet'] = new runwayModel(`${RUNWAY_HOST}:${MOBILENET_PORT}`)
// model['MobileNet'].output( data => {
//     const category = data.results[0].className
//     console.log(`[MobileNet] ${category}`)
// })

const video = document.querySelector('video')
video.width = window.innerWidth
video.height = window.innerHeight / 2
const constraints = {
    audio: false,
    video: true
}
video.onclick = () => {
    const image = utils.dataUrlFromImage(video)
    model['MobileNet'].input({ image })
}

// P5 Sketch
const sketch = s => {
    s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight / 2)
        console.log('created yo')
    }
    s.draw = () => {
        s.background(255, 0, 0)
        s.fill(255)
        s.canvas.getContext('2d').drawImage(video, s.mouseX, s.mouseY, 300, 200)
    }
}

async function main() {
    try {
        let stream = await navigator.mediaDevices.getUserMedia(constraints)
        video.srcObject = stream
        new p5(sketch, 'sketch')
    } catch (err) {
        console.log(err)
    }
}

main()