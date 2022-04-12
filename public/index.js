var image = new Image();
image.setAttribute('crossOrigin', 'anonymous')
image.onload = splitImage;
image.src = "assets/tropical_lake.jpg"

function splitImage(){
    var imagePiecesArray = []
    var numColsToCut = 6;
    var numRowsToCut = 2;
    for (let x = 0; x < numColsToCut; x++) {
        for (let y = 0; y < numRowsToCut; y++) {
            let canvas = document.createElement('canvas')
            let widthOfPieces = canvas.width;
            let heightOfPieces = canvas.height;
            var context = canvas.getContext('2d')
            context.drawImage(image, x * widthOfPieces, y * heightOfPieces, widthOfPieces, heightOfPieces, 0, 0, canvas.width, canvas.height);
            imagePiecesArray.push(canvas.toDataURL());
            // console.log(canvas.width)
        }
        
    }
    // console.log(imagePiecesArray)
    var oneImageElement = document.getElementById('puzzle-piece1')
    oneImageElement.src = imagePiecesArray[0]
    var twoImageElement = document.getElementById('puzzle-piece2')
    twoImageElement.src = imagePiecesArray[1]
    var threeImageElement = document.getElementById('puzzle-piece3')
    threeImageElement.src = imagePiecesArray[2]
    var fourImageElement = document.getElementById('puzzle-piece4')
    fourImageElement.src = imagePiecesArray[3]
    var fiveImageElement = document.getElementById('puzzle-piece5')
    fiveImageElement.src = imagePiecesArray[4]
    var sixImageElement = document.getElementById('puzzle-piece6')
    sixImageElement.src = imagePiecesArray[5]
    var sevenImageElement = document.getElementById('puzzle-piece7')
    sevenImageElement.src = imagePiecesArray[6]
    var eightImageElement = document.getElementById('puzzle-piece8')
    eightImageElement.src = imagePiecesArray[7]
    var nineImageElement = document.getElementById('puzzle-piece9')
    nineImageElement.src = imagePiecesArray[8]
    var tenImageElement = document.getElementById('puzzle-piece10')
    tenImageElement.src = imagePiecesArray[9]
    var elevenImageElement = document.getElementById('puzzle-piece11')
    elevenImageElement.src = imagePiecesArray[10]
    
}


//https://web.dev/drag-and-drop/
//drag and drop functions
function handleDragStart(e) {
    this.style.opacity = '0.4';
  }
  
  function handleDragEnd(e) {
    this.style.opacity = '1';
  }
  
  let items = document.querySelectorAll('.container .box');
  items.forEach(function (item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
  });

  document.addEventListener('DOMContentLoaded', (event) => {

    function handleDragStart(e) {
      this.style.opacity = '0.4';
    }
  
    function handleDragEnd(e) {
      this.style.opacity = '1';
  
      items.forEach(function (item) {
        item.classList.remove('over');
      });
    }
  
    function handleDragOver(e) {
      e.preventDefault();
      return false;
    }
  
    function handleDragEnter(e) {
      this.classList.add('over');
    }
  
    function handleDragLeave(e) {
      this.classList.remove('over');
    }
  
    let items = document.querySelectorAll('.container .box');
    items.forEach(function(item) {
      item.addEventListener('dragstart', handleDragStart);
      item.addEventListener('dragover', handleDragOver);
      item.addEventListener('dragenter', handleDragEnter);
      item.addEventListener('dragleave', handleDragLeave);
      item.addEventListener('dragend', handleDragEnd);
      item.addEventListener('drop', handleDrop);
    });
  });

  function handleDrop(e) {
    e.stopPropagation();
  
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
  
    return false;
  }
function handleDragStart(e) {
    this.style.opacity = '0.4';
  
    dragSrcEl = this;
  
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

