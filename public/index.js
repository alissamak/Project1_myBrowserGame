//images sourced from Canva
//winnerArray of split images
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
// const desertMountImages = [
//     {src: 'assets/desert_mountain2-split/00.jpg', title: 'Desert Mountain 1', value: '0'},
//     {src: 'assets/desert_mountain2-split/10.jpg', title: 'Desert Mountain 2', value: '1'},
//     {src: 'assets/desert_mountain2-split/20.jpg', title: 'Desert Mountain 3', value: '2'},
//     {src: 'assets/desert_mountain2-split/01.jpg', title: 'Desert Mountain 4', value: '3'},
//     {src: 'assets/desert_mountain2-split/11.jpg', title: 'Desert Mountain 5', value: '4'},
//     {src: 'assets/desert_mountain2-split/21.jpg', title: 'Desert Mountain 6', value: '5'},
//     {src: 'assets/desert_mountain2-split/02.jpg', title: 'Desert Mountain 7', value: '6'},
//     {src: 'assets/desert_mountain2-split/12.jpg', title: 'Desert Mountain 8', value: '7'},
//     {src: 'assets/desert_mountain2-split/22.jpg', title: 'Desert Mountain 9', value: '8'},
//     {src: 'assets/desert_mountain2-split/03.jpg', title: 'Desert Mountain 10', value: '9'},
//     {src: 'assets/desert_mountain2-split/13.jpg', title: 'Desert Mountain 11', value: '10'},
//     {src: 'assets/desert_mountain2-split/23.jpg', title: 'Desert Mountain 12', value: '11'},
// ]

let puzzleContainer = document.getElementsByClassName('puzzle')

//looping through each lake image
function displayImages(){
    let imageArray = [...tropicalLakeImages];
    imageArray.forEach((element, index) =>{
        let randomImage = parseInt(Math.random()*imageArray.length);
        let temp = imageArray[index];
        imageArray[index] = imageArray[randomImage];
        imageArray[randomImage] = temp;
    }) 
    imageArray.forEach((element, index) => {
        let puzzleImg = document.createElement('img')
        puzzleImg.src = element.src
        puzzleContainer[index].innerHTML = ''
        puzzleContainer[index].append(puzzleImg)  
    });
}
displayImages();

//refresh button to randomize and start over function
function mixImages(copyMixArray){
    copyMixArray = [...tropicalLakeImages];
    copyMixArray.forEach((element, index) =>{
        let randomImage = parseInt(Math.random()*copyMixArray.length);
        let temp = copyMixArray[index];
        copyMixArray[index] = copyMixArray[randomImage];
        copyMixArray[randomImage] = temp;
    }) 
    displayImages(copyMixArray);
}
//initating randomizing button
document.getElementById('refresh-btn').addEventListener('click', mixImages)

//winner message function
function displayWinner(){
    let winnerMessage = "Congrats you solved the puzzle!"
    document.getElementById('message').innerText = winnerMessage;
    document.getElementById('winner').classList.remove("hide");
}
//hide message once closed
function hideWinner() {
    document.getElementById('winner').classList.add("hide");
}

//correct image function
function isSorted(){
    let key = true;
    let div = document.querySelectorAll('.puzzle')
    for (let i = 0; i < div.length; i++) {
        let imgString = `<img src="${tropicalLakeImages[i].src}">`
        if (div[i].innerHTML != imgString){
            key = false;
        }
        // console.log(div[i].innerHTML) 
        // console.log(imgString)
        // console.log(key)
    }
    if (key === true){
        displayWinner();
    }
}

//drag and drop functions. Source: https://web.dev/drag-and-drop/
document.addEventListener('DOMContentLoaded', (event) => {
    
    function handleDragStart(e) {
        dragSrcEl = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragEnd(e) {
        items.forEach(item => {
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
    isSorted();
    return false;
}



//optional: next button for new image function
// const fullImages = [
//     {src: 'assets/tropical_lake.jpg', title: 'Tropical Lake', value: '0'},
//     {src: 'assets/desert_mountain.jpg', title: 'Desert Mountain', value: '1'},
//     {src: 'assets/lake_mountain.jpg', title: 'Lake Mountain', value: '2'},
//     {src: 'assets/river_mountain.jpg', title: 'River Mountain', value: '3'},
//     {src: 'assets/sunset_beach.jpg', title: 'Sunset Beach', value: '4'},
//     {src: 'assets/sunset_mountain.jpg', title: 'Sunset Mountain', value: '5'},
//     {src: 'assets/tropical_waterfall.jpg', title: 'Tropical Waterfall', value: '6'},
// ]
// const allImageArrays = [tropicalLakeImages, desertMountImages]

// function nextImg(){
//     let fullImg = document.getElementById('full-image')
//     fullImg.src = 'assets/desert_mountain.jpg'
//     let puzzleContainer = document.getElementsByClassName('puzzle')

//     function displayImages(){
//         let imageArray = [...allImageArrays[1]];
//         imageArray.forEach((element, index) =>{
//             let randomImage = parseInt(Math.random()*imageArray.length);
//             let temp = imageArray[index];
//             imageArray[index] = imageArray[randomImage];
//             imageArray[randomImage] = temp;
//         }) 
//         imageArray.forEach((element, index) => {
//             let puzzleImg = document.createElement('img')
//             puzzleImg.src = element.src
//             puzzleContainer[index].innerHTML = ''
//             puzzleContainer[index].append(puzzleImg)  
//         });
//     }
//     displayImages();

//     function mixImages(copyMixArray){
//         copyMixArray = [...allImageArrays[1]];
//         copyMixArray.forEach((element, index) =>{
//             let randomImage = parseInt(Math.random()*copyMixArray.length);
//             let temp = copyMixArray[index];
//             // console.log(index)
//             copyMixArray[index] = copyMixArray[randomImage];
//             copyMixArray[randomImage] = temp;
//         }) 
//         displayImages(copyMixArray);
//     }
//     document.getElementById('refresh-btn').addEventListener('click', mixImages)

//     function isSorted(){
//         let key = true;
//         let div = document.querySelectorAll('.puzzle')
//         for (let i = 0; i < div.length; i++) {
//             let imgString = ''
//             imgString.append(`<img src="${allImageArrays[1][i].src}">`)
//             if (div[i].innerHTML != imgString){
//                 key = false;
//             }
//             console.log(div[i].innerHTML) 
//             console.log(imgString)
//             console.log(key)
//         }
//         if (key === true){
//             displayWinner();
//         }
//     }

//     document.addEventListener('DOMContentLoaded', (event) => {
    
//         function handleDragStart(e) {
//             dragSrcEl = this;
//             e.dataTransfer.effectAllowed = 'move';
//             e.dataTransfer.setData('text/html', this.innerHTML);
//         }
      
//         function handleDragEnd(e) {
//           items.forEach(item => {
//             item.classList.remove('over');
//           });
//         }
      
//         function handleDragOver(e) {
//           e.preventDefault();
//           return false;
//         }
      
//         function handleDragEnter(e) {
//           this.classList.add('over');
//         }
      
//         function handleDragLeave(e) {
//           this.classList.remove('over');
//         }
      
//         let items = document.querySelectorAll('.puzzle');
//         items.forEach((item, index) => {
//           item.addEventListener('dragstart', handleDragStart);
//           item.addEventListener('dragover', handleDragOver);
//           item.addEventListener('dragenter', handleDragEnter);
//           item.addEventListener('dragleave', handleDragLeave);
//           item.addEventListener('dragend', handleDragEnd);
//           item.addEventListener('drop', handleDrop);
//         });
         
//       });
    
//       function handleDrop(e) {
//         e.stopPropagation();
        
//         if (dragSrcEl !== this) {
//           dragSrcEl.innerHTML = this.innerHTML;
//           this.innerHTML = e.dataTransfer.getData('text/html');
//         }
//         isSorted();
//         return false;
//       }
// }

// document.getElementById('next-btn').addEventListener('click', nextImg)
