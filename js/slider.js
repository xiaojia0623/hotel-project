
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

// 通用初始化函式
function initializeSlider(sliderElement, minInput, maxInput, minDisplay, maxDisplay) {
  if (!sliderElement) return;

  // 若已初始化，先銷毀
  if (sliderElement.noUiSlider) {
    sliderElement.noUiSlider.destroy();
  }

  // 建立 noUiSlider
  noUiSlider.create(sliderElement, {
    start: [800, 4000],
    connect: true,
    range: { min: 800, max: 4000 },
    step: 100,
    format: {
      to: value => Math.round(value),
      from: value => Number(value)
    }
  });

  // 拉桿更新時：同步輸入框和顯示文字
  sliderElement.noUiSlider.on('update', (values) => {
    const minVal = values[0];
    const maxVal = values[1];

    // 更新 input 欄位
    if (minInput) minInput.value = minVal;
    if (maxInput) maxInput.value = maxVal;

    // 更新顯示文字（網頁版用）
    if (minDisplay) minDisplay.textContent = `TWD ${Number(minVal).toLocaleString()}`;
    if (maxDisplay) {
      maxDisplay.textContent = Number(maxVal) === 4000
        ? `TWD ${Number(maxVal).toLocaleString()}+`
        : `TWD ${Number(maxVal).toLocaleString()}`;
    }
  });

  // 輸入欄位變動時同步到拉桿
  if (minInput && maxInput) {
    const syncSlider = () => {
      const min = parseInt(minInput.value, 10);
      const max = parseInt(maxInput.value, 10);
      if (!isNaN(min) && !isNaN(max)) {
        sliderElement.noUiSlider.set([min, max]);
      }
    };
    minInput.addEventListener('change', syncSlider);
    maxInput.addEventListener('change', syncSlider);
  }
}

// 取得 DOM 元素
// 📱 手機版
const sliderModal = document.getElementById("sliderModal");
const minInputMobile = document.getElementById("minPriceModalMobile");
const maxInputMobile = document.getElementById("maxPriceModalMobile");

// 🖥️ 網頁版
const slider = document.getElementById("slider");
const minInputWeb = document.getElementById("minPriceDisplay");
const maxInputWeb = document.getElementById("maxPriceInput"); // 注意：這是 input 的 id
const minTextWeb = document.getElementById("minPriceDisplay"); // same as minInput
const maxTextWeb = document.getElementById("maxPriceInput");   // same as maxInput

// 初始化滑桿（手機 + 網頁）
initializeSlider(sliderModal, minInputMobile, maxInputMobile);
initializeSlider(slider, minInputWeb, maxInputWeb, minTextWeb, maxTextWeb);
