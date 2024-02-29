const QUANTITY_SLIDER = 4
const TIME_SLEEP_SLIDER = 3000

import images from "./storage.js"

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

// $(".content_pair_item_direction").hover(
//     function() {
//       $(this).parent().addClass("hovered");
//     }, function() {
//       $(this).parent().removeClass("hovered");
//     }
//   );

// runSliderHeading(TIME_SLEEP_SLIDER)