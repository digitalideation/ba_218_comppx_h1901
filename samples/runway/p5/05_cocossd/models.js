// Change this part
const RUNWAY_HOST = 'http://localhost'
const COCOSSD_PORT = 3000
const models = {}

models['cocoSSD'] = new RunwayModel(`${RUNWAY_HOST}:${COCOSSD_PORT}`)

// This function is called when we receive a new message from the model
models['cocoSSD'].output((data) => {
    cocoSSDResults = data || null
    console.log(`[cocoSSD] ${cocoSSDResults.labels.length} objects detected`)
    sendImageToCoco()
})