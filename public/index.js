//winnerArray
const tropicalLakeImages = [
    {src: 'assets/tropical_lake2-split/00.jpg', title: 'Tropical Lake 1', value: '0'},
    {src: 'assets/tropical_lake2-split/10.jpg', title: 'Tropical Lake 2', value: '1'},
    {src: 'assets/tropical_lake2-split/20.jpg', title: 'Tropical Lake 3', value: '2'},
    {src: 'assets/tropical_lake2-split/01.jpg', title: 'Tropical Lake 4', value: '3'},
    {src: 'assets/tropical_lake2-split/11.jpg', title: 'Tropical Lake 5', value: '4'},
    {src: 'assets/tropical_lake2-split/21.jpg', title: 'Tropical Lake 6', value: '5'},
    {src: 'assets/tropical_lake2-split/02.jpg', title: 'Tropical Lake 7', value: '6'},
    {src: 'assets/tropical_lake2-split/12.jpg', title: 'Tropical Lake 8', value: '7'},
    {src: 'assets/tropical_lake2-split/22.jpg', title: 'Tropical Lake 9', value: '8'},
    {src: 'assets/tropical_lake2-split/03.jpg', title: 'Tropical Lake 10', value: '9'},
    {src: 'assets/tropical_lake2-split/13.jpg', title: 'Tropical Lake 11', value: '10'},
    {src: 'assets/tropical_lake2-split/23.jpg', title: 'Tropical Lake 12', value: '11'},
]
// console.log(tropicalLakeImages)

let puzzleContainer = document.getElementsByClassName('puzzle')

//looping through each lake image
function displayImages(imageArray){
    imageArray.forEach((element, index) =>{
        let randomImage = parseInt(Math.random()*imageArray.length);
        let temp = imageArray[index];
        // console.log(index)
        imageArray[index] = imageArray[randomImage];
        imageArray[randomImage] = temp;
    }) 
    imageArray.forEach((element, index) => {
        let puzzleImg = document.createElement('img')
        puzzleImg.src = element.src
        puzzleImg.setAttribute('value', element.value)
        // console.log(puzzleImg.src)
        puzzleContainer[index].innerHTML = ''
        puzzleContainer[index].append(puzzleImg)  
    });
}
displayImages(tropicalLakeImages);

//refresh button to randomize and start over function
// const copyMixArray = tropicalLakeImages;
function mixImages(copyMixArray){
    copyMixArray = tropicalLakeImages;
    copyMixArray.forEach((element, index) =>{
        let randomImage = parseInt(Math.random()*copyMixArray.length);
        let temp = copyMixArray[index];
        // console.log(index)
        copyMixArray[index] = copyMixArray[randomImage];
        copyMixArray[randomImage] = temp;
    }) 
    // for(let i = 0; i < copyMixArray.length; i++) {
    //     // for each index,i pick a random index j 
    //     let randomImage = parseInt(Math.random()*copyMixArray.length);
    //     // swap elements at i and j
    //     let temp = copyMixArray[i];
    //     copyMixArray[i] = copyMixArray[randomImage];
    //     copyMixArray[randomImage] = temp;
    // }   
    // console.log(copyMixArray);
    displayImages(copyMixArray);
}
//initating randomizing button
document.getElementById('refresh-btn').addEventListener('click', mixImages)

//winner message function
function displayWinner(){
    let winnerMessage = "Congrats you solved the puzzle!"
    console.log(winnerMessage)
    window.alert("Congrats you solved the puzzle!")
}
//loser message function
function displayLoser(){
    let winnerMessage = "Sorry you didn't quite solve the puzzle. Try again!"
    console.log(winnerMessage)
    window.alert("Sorry you didn't quite solve the puzzle. Try again!")
}

//correct image function, need image and parent element
// function solvedImage(imageElement, parentElement){
//     imageElement.every((element, index) => {
//         console.log(element)
//         return imageElement.value === parentElement.value
//     })
// }
let currentArray = [];
function solvedImage(){
    const correctImage = (currentArray) => currentArray === tropicalLakeImages;
    console.log(tropicalLakeImages.every(correctImage))
    if(currentArray === tropicalLakeImages){
        displayWinner()
    }
    else{
        displayLoser()
    }
}
//initating correct image function
document.getElementById('submit-btn').addEventListener('click', solvedImage)

//drag and drop functions. Source: https://web.dev/drag-and-drop/
document.addEventListener('DOMContentLoaded', (event) => {
    // let draggedArray =[];
    function handleDragStart(e) {
        // this.style.opacity = '0.4';
        dragSrcEl = this;
        // console.log(dragSrcEl);
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
    items.forEach((item, index) => {
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
// console.log(draggedArray)

// function isSolvable(arr){
//       arr = tropicalLakeImages
//       let number_of_inv = 0;
//       // get the number of inversions
//       for(let i =0; i<arr.length; i++){
//           // i picks the first element
//           for(let j = i+1; j <arr.length; j++) {
//               // check that an element exist and index i and j, then check that element at i > at j
//               if((arr[i] && arr[j]) && arr[i] > arr[j]) number_of_inv++;
//           }
//       }
//       // if the number of inversions is even
//       // the puzzle is solvable
//       console.log(number_of_inv)
//       return (number_of_inv % 2 == 0);
//   } 
// // isSolvable(draggedArray)

// function isCorrect (solution, content) {
//       if(JSON.stringify(solution) == JSON.stringify(content)) return true;
//       return false;
//   }
//optional: next button for new image function
