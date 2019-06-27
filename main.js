console.log("loading");
sr = new sr.SrWeb("./model.json");


function process() {
    // sr.readImage(document.getElementById('input'), document.getElementById('outImg')).then(() => console.log("OK"));
    // sr.readImage(document.getElementById('input'),document.getElementById('outImg')).then(()=>console.log("OK"))
    sr.readImageSlice(document.getElementById('input'), document.getElementById('outImg2')).then(() => console.log("OK2"))
}

function loadFile(event) {
    var output = document.getElementById('input');
    output.src = URL.createObjectURL(event.target.files[0]);
};