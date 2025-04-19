import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

//priceslider
const slider = document.getElementById('slider');
const minDisplay = document.getElementById('minPriceDisplay');
const maxDisplay = document.getElementById('maxPriceDisplay');

  
noUiSlider.create(slider, {
     start: [800, 4000],
    connect: true,
    range: { min: 800, max: 4000 },
    step: 100,
    format: {
        to: value => Math.round(value),
        from: value => Number(value)
    }
});
  
slider.noUiSlider.on('update', (values) => {
    minDisplay.textContent = `TWD ${Number(values[0]).toLocaleString()}`;
    maxDisplay.textContent = Number(values[1]) === 4000
        ? `TWD ${Number(values[1]).toLocaleString()}+`
        : `TWD ${Number(values[1]).toLocaleString()}`;
});

const sliderModal = document.getElementById("sliderModal");
const minPriceInput = document.getElementById("minPriceModal");
const maxPriceInput = document.getElementById("maxPriceModal");

noUiSlider.create(sliderModal, {
    start: [800, 4000],
    connect: true,
    range: { min: 800, max: 4000 },
    step: 100,
    format: {
        to: value => Math.round(value),
        from: value => Number(value)
    }
});

sliderModal.noUiSlider.on("update", (values, handle) => {
    if (handle === 0) {
         minPriceInput.value = values[0];
    } else {
        maxPriceInput.value = values[1];
    }
});

function setSliderValues() {
    sliderModal.noUiSlider.set([minPriceInput.value, maxPriceInput.value]);
}

minPriceInput.addEventListener("change", setSliderValues);
maxPriceInput.addEventListener("change", setSliderValues);