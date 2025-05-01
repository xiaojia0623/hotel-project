const sortBtn = document.querySelector('.sortBtn'); // sort 按鈕
const sortOptions = document.getElementById('sortOptions');
const hotelList = document.querySelector('.search-hotel-list .hotel-list');
const originalCards = [...hotelList.children]; // 保存原始順序

// 切換排序選單顯示
sortBtn.addEventListener('click', () => {
    sortOptions.classList.toggle('d-none');
});

// 排序功能
sortOptions.addEventListener('click', (e) => {
    const sortType = e.target.dataset.sort;
    if (!sortType) return;

    let cards = [...hotelList.children];

    if (sortType === 'asc' || sortType === 'desc') {
      cards.sort((a, b) => {
        const priceA = getPriceFromCard(a);
        const priceB = getPriceFromCard(b);
        return sortType === 'asc' ? priceA - priceB : priceB - priceA;
      });
    } else if (sortType === 'default') {
      cards = [...originalCards];
    }

    // 重新渲染排序後的卡片
    hotelList.innerHTML = '';
    cards.forEach(card => hotelList.appendChild(card));

    //排序完成後自動收回選單
    sortOptions.classList.add('d-none');
});

// 從卡片中取得價格
function getPriceFromCard(card) {
    const newPriceEl = card.querySelector('.newprice');
    if (newPriceEl) {
      return parseInt(newPriceEl.textContent.replace(/[^\d]/g, ''));
    }

    const priceText = card.querySelector('.hotel-price p')?.textContent || '';
    return parseInt(priceText.replace(/[^\d]/g, ''));
}