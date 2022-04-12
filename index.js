var image = new Image();
image.setAttribute('crossOrigin', 'anonymous')
image.onload = splitImage;
image.src = "assets/tropical_lake.jpg"

function splitImage(){
    var imagePiecesArray = []
    var numColsToCut = 4;
    var numRowsToCut = 4;
    for (let x = 0; x < numColsToCut; x++) {
        for (let y = 0; y < numRowsToCut; y++) {
            let canvas = document.createElement('canvas')
            let widthOfPieces = canvas.width;
            let heightOfPieces = canvas.height;
            var context = canvas.getContext('2d')
            context.drawImage(image, x * widthOfPieces, y * heightOfPieces, widthOfPieces, heightOfPieces, 0, 0, canvas.width, canvas.height);
            imagePiecesArray.push(canvas.toDataURL());
        }
        
    }
    var oneImageElement = document.getElementById('#puzzle-image')
    oneImageElement.src = imagePiecesArray[0]
}