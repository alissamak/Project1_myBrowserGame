//https://stackoverflow.com/questions/8912917/cutting-an-image-into-pieces-through-javascript
let tropicalLakeImages = [
    {src: 'assets/tropical_lake2-split/00.jpg', title: 'Tropical Lake 1', value: '0'},
    {src: 'assets/tropical_lake2-split/01.jpg', title: 'Tropical Lake 2', value: '1'},
    {src: 'assets/tropical_lake2-split/02.jpg', title: 'Tropical Lake 3', value: '2'},
    {src: 'assets/tropical_lake2-split/03.jpg', title: 'Tropical Lake 4', value: '3'},
    {src: 'assets/tropical_lake2-split/10.jpg', title: 'Tropical Lake 5', value: '4'},
    {src: 'assets/tropical_lake2-split/11.jpg', title: 'Tropical Lake 6', value: '5'},
    {src: 'assets/tropical_lake2-split/12.jpg', title: 'Tropical Lake 7', value: '6'},
    {src: 'assets/tropical_lake2-split/13.jpg', title: 'Tropical Lake 8', value: '7'},
    {src: 'assets/tropical_lake2-split/20.jpg', title: 'Tropical Lake 9', value: '8'},
    {src: 'assets/tropical_lake2-split/21.jpg', title: 'Tropical Lake 10', value: '9'},
    {src: 'assets/tropical_lake2-split/22.jpg', title: 'Tropical Lake 11', value: '10'},
    {src: 'assets/tropical_lake2-split/23.jpg', title: 'Tropical Lake 12', value: '11'},
];
// console.log(tropicalLakeImages)

let puzzleContainer = document.getElementsByClassName('puzzle')
//looping through each lake image
function displayImages(imageArray){
    imageArray.forEach((element, index) => {
        let puzzleImg = document.createElement('img')
        puzzleImg.src = element.src
        puzzleImg.setAttribute('value', element.value)
        console.log(puzzleImg.src)
        puzzleContainer[index].innerHTML = ''
        puzzleContainer[index].append(puzzleImg)
    });
}
displayImages(tropicalLakeImages);

//randomize images function
function mixer(){
    const newMixArray = []
    const copy = tropicalLakeImages;
    console.log(copy)
    while(copy.length){
        let randomIndex = Math.floor(Math.random()*copy.length-1)
        let randomSplicer = copy.splice(randomIndex, 1)
        console.log(randomSplicer[0])
        newMixArray.push(randomSplicer[0])
    }
    
    displayImages(newMixArray);
    
}

document.getElementById('refresh-btn').addEventListener('click', mixer)

//correct image function
// image element
// parent element
function solvedImage(imageElement, parentElement){
    array.every((element, index) => {
        return imageElement.value === parentElement.value
    })
}



//https://web.dev/drag-and-drop/
//drag and drop functions
document.addEventListener('DOMContentLoaded', (event) => {

    function handleDragStart(e) {
        // this.style.opacity = '0.4';
        dragSrcEl = this;
      
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }
  
    function handleDragEnd(e) {
  
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

//correct image function

// const isSolvable = (arr) => {
//     let number_of_inv = 0;
//     // get the number of inversions
//     for(let i =0; i<arr.length; i++){
//         // i picks the first element
//         for(let j = i+1; j < arr.length; j++) {
//             // check that an element exist and index i and j, then check that element at i > at j
//             if((arr[i] && arr[j]) && arr[i] > arr[j]) number_of_inv++;
//         }
//     }
//     // if the number of inversions is even
//     // the puzzle is solvable
//     return (number_of_inv % 2 == 0);
// }

//you win message after correct image is complete


//next button for new image function


//refresh button to start over function

