import Slider from './slider'

let sliderImage = document.querySelector('#slider-image')

document.addEventListener('DOMContentLoaded', () => {
    slider.play()
})

let slider = new Slider({
    elements: [
        {
            image: '../imagenes/somos/fondo1.jpg'
        },
        {
            image: '../imagenes/home/home.jpg'
        }
    ],

    animationFunc: function (element) {
        imageContent.classList.add('hide')

        setTimeout(() => {
            sliderImage.src = element.image

            imageContent.classList.remove('hide')
        }, 600)
    },
    speed: 5000
})


