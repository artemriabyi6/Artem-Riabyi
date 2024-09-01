$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger, nav').toggleClass('active')
        $('body').toggleClass('lock')
    })
})


const articleCollection = document.querySelectorAll('.slide')
const leftArrow = document.getElementById('left-arrow')
const rightArrow = document.getElementById('right-arrow')
const vievAllBtn = document.getElementById('view-all')
const sliderBox = document.getElementById('slider-box')
const showAll = document.getElementById('slider-box-all')
const allVideos = document.getElementsByTagName('video')



let counter = 0

arrArticle = Array.from(articleCollection)


if(arrArticle[0].hasAttribute('hidden') === false) {
     leftArrow.setAttribute('disabled', true)
 } else if(arrArticle[0].hasAttribute('hidden') === true){
     leftArrow.removeAttribute('hidden')
 }


function nextSlide () {
        arrArticle[counter].setAttribute('hidden', true);
        arrArticle[counter + 1].setAttribute('hidden', true);
        arrArticle[counter + 2].setAttribute('hidden', true);
        arrArticle[counter + 3].removeAttribute('hidden');
        arrArticle[counter + 4].removeAttribute('hidden');
        arrArticle[counter + 5].removeAttribute('hidden');
        counter += 3
        console.log(counter)
        counter === 6 ? rightArrow.setAttribute('disabled', true) : leftArrow.removeAttribute('disabled')
}

function prevSlide() {
    arrArticle[counter].setAttribute('hidden', true);
    arrArticle[counter + 1].setAttribute('hidden', true);
    arrArticle[counter + 2].setAttribute('hidden', true);
    arrArticle[counter - 1].removeAttribute('hidden');
    arrArticle[counter - 2 ].removeAttribute('hidden');
    arrArticle[counter - 3].removeAttribute('hidden');

    counter -= 3
    console.log(counter)
    counter === 0 ? leftArrow.setAttribute('disabled', true) : rightArrow.removeAttribute('disabled')

}


vievAllBtn.addEventListener('click', (e) => {
    e.preventDefault()
    showAll.classList.toggle('more')
   if(showAll.classList.contains('more')) {
    sliderBox.classList.add('hidden')
    showAll.classList.add('show-all')
    sliderBox.classList.remove('article-flex')
    showAll.classList.remove('less')

    for(let i = 8; i < 18 ; i++) {
        arrArticle[i].removeAttribute('hidden')
    }
  
   } else{
    sliderBox.classList.add('article-flex')
    showAll.classList.add('less')
    showAll.classList.remove('show-all')
    showAll.classList.remove('more')
    sliderBox.classList.remove('hidden')
     
    for(let i = 3; i < 18; i++) {
        arrArticle[i].setAttribute('hidden', true)
    }
    

   }
    
    // if(sliderBoxAll.classList.contains('more')) {
    //     console.log('hey')
    //     sliderBox.classList.toggle('hidden')
    //     sliderBoxAll.style.display = 'flex'
    // } 

    // if(!sliderBox.classList.contains('more')){
    //     sliderBoxAll.style.display = 'none'
    //     sliderBox.classList.toggle('show')
    //  }
})

let videoArray = Array.from(allVideos)

videoArray.forEach(video => {
    video.addEventListener('mouseover', () => {
        video.setAttribute('autoplay', true)
        video.style.cursor = 'pointer'
    })
})





