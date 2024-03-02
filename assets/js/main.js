const QUANTITY_SLIDER = 4
const TIME_SLEEP_SLIDER = 3000

import data from "./storage.js"
import init from "./carousel.js"

// get element global
const caurouselE = $("#drag-container")
const dividePageE = $(".divide_page_animation")

const elementArray = [
    ...dividePageE
]

const runSliderHeading = (timeSleep) => {
    let indexSlide = 0
    let timeTransform = 400
    let quantitySlider = (images.slider.length < QUANTITY_SLIDER) ? images.slider : QUANTITY_SLIDER
    const slideShowing = $(".header_slider")
    setInterval(() => {
        slideShowing.fadeOut(timeTransform, () => {
            slideShowing.attr("src", images.slider[indexSlide])
            slideShowing.fadeIn(timeTransform)
        })
        indexSlide++
        if (indexSlide === quantitySlider) {
            indexSlide = 0
        }
    }, timeSleep)
}

AOS.init({
    duration: 2000,
    once: true
})

window.addEventListener('scroll', function() {
    elementArray.forEach((element) => {
        var elementPosition = element.getBoundingClientRect();
      
        if (elementPosition.top < window.innerHeight && elementPosition.bottom >= 0) {
            setTimeout(() => {$(element).addClass("start_fade_in")}, 200);
            elementArray.splice(elementArray.indexOf(element), 1)
        }
    })

    let carouselPosition = caurouselE[0].getBoundingClientRect()

    if (carouselPosition.top < window.innerHeight && carouselPosition.bottom >= 0) {
        setTimeout(init, 1000);
    }
});



// phone 
// setTimeout(() => {
//     $("#phonering-alo-phoneIcon").addClass("start_fade_in")
// }, 2000)

// $(".content_pair_item_direction").hover(
//     function() {
//       $(this).parent().addClass("hovered");
//     }, function() {
//       $(this).parent().removeClass("hovered");
//     }
//   );

// runSliderHeading(TIME_SLEEP_SLIDER)