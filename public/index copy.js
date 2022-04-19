//https://stackoverflow.com/questions/8912917/cutting-an-image-into-pieces-through-javascript
// var images = [
//     { src: 'assets/tropical_lake.jpg', title: 'Tropical Lake'},
//     { src: 'assets/desert_mountain.jpg', title: 'Desert Mountain', width: "800px" , height: "400px" },
//     { src: 'assets/lake_mountain.jpg', title: 'Lake Mountain', width: "800px" , height: "400px" },
//     { src: 'assets/river_mountatin.jpg', title: 'River Mountatin', width: "800px" , height: "400px" },
//     { src: 'assets/sunset_beach.jpg', title: 'Sunset Beach', width: "800px" , height: "400px" }
// ];

var image = new Image();
image.setAttribute('crossOrigin', 'anonymous')
image.onload = cutImageUp;
image.src = "assets/tropical_lake2.jpg";

function cutImageUp() {
    var imagePiecesArray = [];
    var numColsToCut = 4;
    var numRowsToCut = 3;
    for(var x = 0; x < numColsToCut; x++) {
        for(var y = 0; y < numRowsToCut; y++) {
            var canvas = document.createElement('canvas');
            var widthOfPiece = canvas.width;
            var heightOfPiece = canvas.height;
            // console.log(canvas.width) 
            // canvas.width = 200;
            // canvas.height = 150;
            console.log(canvas.width) 
            var context = canvas.getContext('2d');
            context.drawImage(image, x * widthOfPiece, y * heightOfPiece, widthOfPiece, heightOfPiece, 0, 0, canvas.width, canvas.height);
            imagePiecesArray.push(canvas.toDataURL());
        }
    }

    // imagePieces now contains data urls of all the pieces of the image
    // console.log(imagePiecesArray)
    // load one piece onto the page
    // var oneImageElement = document.getElementById('piece1');
    // oneImageElement.src = imagePiecesArray[0];
    // var twoImageElement = document.getElementById('piece2');
    // twoImageElement.src = imagePiecesArray[1];
    // var threeImageElement = document.getElementsByClassName('puzzle piece3')
    // threeImageElement.src = imagePiecesArray[2]
    // var fourImageElement = document.getElementsByClassName('puzzle piece4')
    // fourImageElement.src = imagePiecesArray[3]
    // var fiveImageElement = document.getElementsByClassName('puzzle piece5')
    // fiveImageElement.src = imagePiecesArray[4]
    // var sixImageElement = document.getElementsByClassName('puzzle piece6')
    // sixImageElement.src = imagePiecesArray[5]
    // var sevenImageElement = document.getElementsByClassName('puzzle piece7')
    // sevenImageElement.src = imagePiecesArray[6]
    // var eightImageElement = document.getElementsByClassName('puzzle piece8')
    // eightImageElement.src = imagePiecesArray[7]
    // var nineImageElement = document.getElementsByClassName('puzzle piece9')
    // nineImageElement.src = imagePiecesArray[8]
    // var tenImageElement = document.getElementsByClassName('puzzle piece10')
    // tenImageElement.src = imagePiecesArray[9]
    // var elevenImageElement = document.getElementsByClassName('puzzle piece11')
    // elevenImageElement.src = imagePiecesArray[10]
    // var twelveImageElement = document.getElementsByClassName('puzzle piece12')
    // twelveImageElement.src = imagePiecesArray[11]
    // console.log(imagePiecesArray[0])
    // console.log(imagePiecesArray[1])
    
    for (let i = 0; i < imagePiecesArray.length; i++) {
        let pieces = document.querySelectorAll('.puzzle')
        pieces = imagePiecesArray[i]
    }
    // console.log(imagePiecesArray[0])
    // console.log(imagePiecesArray[1])
    
    // imagePiecesArray.forEach((element, index) => {
    //     let pieces = document.querySelectorAll('.puzzle')
    //     console.log(element, index)
    //     pieces.src = element
    //     console.log(element)
    // });

    
}

//https://web.dev/drag-and-drop/
//drag and drop functions
function handleDragStart(e) {
    this.style.opacity = '0.4';
  }
  
  function handleDragEnd(e) {
    this.style.opacity = '1';
  }
  
  let items = document.querySelectorAll('.puzzle');
  items.forEach(item => {
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
  
    let items = document.querySelectorAll('.puzzle');
    items.forEach(item => {
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


// //randomize images function
// function mixImages(){
//     const copy = imagePiecesArray;
//     for(let i = 0; i < copy.length; i++) {
//         // for each index,i pick a random index j 
//         let j = parseInt(Math.random()*copy.length);
//         // swap elements at i and j
//         let temp = copy[i];
//         copy[i] = copy[j];
//         copy[j] = temp;
//     }  
//     return copy; 
// }

// const shuffle = (arr) => {
//     const copy = [...arr];
//     // loop over half or full of the array
//     for(let i = 0; i < copy.length; i++) {
//         // for each index,i pick a random index j 
//         let j = parseInt(Math.random()*copy.length);
//         // swap elements at i and j
//         let temp = copy[i];
//         copy[i] = copy[j];
//         copy[j] = temp;
//     }   
//     return copy;
//  }

//correct image function
const isSolvable = (arr) => {
    let number_of_inv = 0;
    // get the number of inversions
    for(let i =0; i<arr.length; i++){
        // i picks the first element
        for(let j = i+1; j < arr.length; j++) {
            // check that an element exist and index i and j, then check that element at i > at j
            if((arr[i] && arr[j]) && arr[i] > arr[j]) number_of_inv++;
        }
    }
    // if the number of inversions is even
    // the puzzle is solvable
    return (number_of_inv % 2 == 0);
}
//you win message after correct image is complete


//next button for new image function


//refresh button to start over function



//https://web.dev/drag-and-drop/
//drag and drop functions for A, B, C
// function handleDragStart(e) {
//     this.style.opacity = '0.4';
//   }
  
//   function handleDragEnd(e) {
//     this.style.opacity = '1';
//   }
  
//   let items2 = document.querySelectorAll('.container .box');
//   items2.forEach(function (item) {
//     item.addEventListener('dragstart', handleDragStart);
//     item.addEventListener('dragend', handleDragEnd);
//   });

//   document.addEventListener('DOMContentLoaded', (event) => {

//     function handleDragStart(e) {
//       this.style.opacity = '0.4';
//     }
  
//     function handleDragEnd(e) {
//       this.style.opacity = '1';
  
//       items.forEach(function (item) {
//         item.classList.remove('over');
//       });
//     }
  
//     function handleDragOver(e) {
//       e.preventDefault();
//       return false;
//     }
  
//     function handleDragEnter(e) {
//       this.classList.add('over');
//     }
  
//     function handleDragLeave(e) {
//       this.classList.remove('over');
//     }
  
//     let items = document.querySelectorAll('.container .box');
//     items.forEach(function(item) {
//       item.addEventListener('dragstart', handleDragStart);
//       item.addEventListener('dragover', handleDragOver);
//       item.addEventListener('dragenter', handleDragEnter);
//       item.addEventListener('dragleave', handleDragLeave);
//       item.addEventListener('dragend', handleDragEnd);
//       item.addEventListener('drop', handleDrop);
//     });
//   });

//   function handleDrop(e) {
//     e.stopPropagation();
  
//     if (dragSrcEl !== this) {
//       dragSrcEl.innerHTML = this.innerHTML;
//       this.innerHTML = e.dataTransfer.getData('text/html');
//     }
  
//     return false;
//   }
// function handleDragStart(e) {
//     this.style.opacity = '0.4';
  
//     dragSrcEl = this;
  
//     e.dataTransfer.effectAllowed = 'move';
//     e.dataTransfer.setData('text/html', this.innerHTML);
// }

