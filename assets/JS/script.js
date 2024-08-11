const headerContainer = document.getElementById('header-container')
const logoImg = document.getElementById('logo-img')
const siteHeader = document.querySelector('.site-header .container')
const actualHeader = siteHeader.parentElement

const identifiers = document.querySelectorAll('.identifiers span')
const titleContainer = document.querySelector('.text-area .banner')
const titleText = document.querySelector('.hero_title')
const slider = document.querySelector('.image-section')
const paragraph = document.querySelector('.slide-desc')


const changeClass = ()=>{
    let value = window.innerWidth
    if(value <=400){
        siteHeader.classList.add('alignContainer')
        siteHeader.style.overflow = 'hidden'
    }
    else{

    }
}

let globalIndex = 0;

const imageSlider = [
    {
        heading: 'Moisturizes &amp; Hydrates',
        bg_image : './assets/images/clean.jpg',
        paragraph: "The ultimate beauty secret"
    },
    {
        heading: "Men's Collection",
        arrivals : 'New Arrivals',
        bg_image : './assets/images/7.webp',
    },
    {
        heading: 'Energized Skincare',
        bg_image : './assets/images/6.jpg',
        paragraph: "This is not really a big deal"
    }
]

const setHeader = (ind) =>{
    titleContainer.style.opacity = '0'
    titleText.innerHTML = imageSlider[ind].heading
    titleContainer.style.opacity = 1
}

const setBackground = (ind) =>{
    image = imageSlider[ind].bg_image
    slider.style.backgroundImage = `url(${image})`
    slider.style.backgroundSize = 'cover'
    slider.style.backgroundPosition = 'center'
    slider.style.backgroundRepeat = 'no-repeat'
}

const setParagraph = (ind)=>{
    paragraph.style.animation = 'move 1s ease-out'
    paragraph.innerHTML = imageSlider[ind].paragraph ?? ''
}

const setSlideContent = (ind)=>{
    setParagraph(ind)
    setHeader(ind)
    setBackground(ind)
    setActiveIdentifier(ind)
}

const setActiveIdentifier = (index) =>{
    identifiers.forEach((btn, ind) =>{
        if(index == ind){
            btn.className = 'active'
        }
        else{
            btn.classList.remove('active')
        }
    })
}

identifiers.forEach((elem, index) =>{
    elem.addEventListener('click', (e)=>{
        globalIndex = index;
        setSlideContent(globalIndex)
    })
})

window.addEventListener('resize', changeClass)

window.onload = ()=>{
    if(window.innerWidth <= 400){
        changeClass()
    }
}

setInterval(()=>{
    if(globalIndex == 3){
        globalIndex = 0
    }
    setSlideContent(globalIndex)
    globalIndex++
    
}, 10000)