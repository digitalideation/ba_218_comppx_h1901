const MODEL_PATH = "cats_and_dogs_small_2/model.json";
const IMAGE_SIZE = 150;

let model;

const modelDemo = async () => {
    status("Loading model...");
    model = await tf.loadModel(MODEL_PATH);
    status("Model loaded");
    document.getElementById("file-container").style.display = "";
};

async function predict(imgElement) {
    status("Predicting...");
    const startTime = performance.now();
    const logits = tf.tidy(() => {
        // tf.fromPixels() returns a Tensor from an image element.
        let img = tf.fromPixels(imgElement).toFloat();
        // Divide by 255
        img = tf.div(img, tf.scalar(255));
        // Reshape to a single-element batch so we can pass it to predict.
        const batched = img.reshape([1, IMAGE_SIZE, IMAGE_SIZE, 3]);
        // Make a prediction.
        return model.predict(batched);
    });
    // Show inference time
    const totalTime = performance.now() - startTime;
    status(`Done in ${Math.floor(totalTime)}ms`);
    // Show the result in the DOM.
    showResults(imgElement, logits);
}

function showResults(imgElement, logits) {
    const predictionContainer = document.createElement("div");
    predictionContainer.className = "pred-container";
    //
    const probsContainer = document.createElement("div");
    probsContainer.innerText = "class: " + logits.as1D().get(0);
    predictionContainer.appendChild(probsContainer);
    //
    const imgContainer = document.createElement("div");
    imgContainer.appendChild(imgElement);
    predictionContainer.appendChild(imgContainer);
    //
    predictionsElement.insertBefore(
        predictionContainer,
        predictionsElement.firstChild
    );
}

const filesElement = document.getElementById("files");
filesElement.addEventListener("change", evt => {
    let files = evt.target.files;
    // Display thumbnails & issue call to predict each image.
    for (let i = 0, f;
        (f = files[i]); i++) {
        // Only process image files (skip non image files)
        if (!f.type.match("image.*")) {
            continue;
        }
        let reader = new FileReader();
        const idx = i;
        // Closure to capture the file information.
        reader.onload = e => {
            // Fill the image & call predict.
            let img = document.createElement("img");
            img.src = e.target.result;
            img.width = IMAGE_SIZE;
            img.height = IMAGE_SIZE;
            img.onload = () => predict(img);
        };
        // Read in the image file as a data URL.
        reader.readAsDataURL(f);
    }
});

statusElement = document.getElementById("status");
const status = msg => (statusElement.innerText = msg);

predictionsElement = document.getElementById("predictions");

modelDemo();