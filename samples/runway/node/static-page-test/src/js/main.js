import runwayModel from './runwayModel.js'
import * as utils from './utils.js'

const model = {}
const RUNWAY_HOST = 'http://localhost'
const MOBILENET_PORT = 3000
model['MobileNet'] = new runwayModel(`${RUNWAY_HOST}:${MOBILENET_PORT}`)
model['MobileNet'].output( data => {
    const category = data.results[0].className
    console.log(`[MobileNet] ${category}`)
})

const video = document.querySelector('video')
video.width = window.innerWidth
video.height = window.innerHeight
video.onclick = () => {
    const image = utils.dataUrlFromImage(video)
    model['MobileNet'].input({ image })
}

const constraints = {
    audio: false,
    video: true
}
navigator.mediaDevices.getUserMedia(constraints)
.then( stream => video.srcObject = stream)
.catch( error => console.log(error))