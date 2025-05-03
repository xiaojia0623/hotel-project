
document.addEventListener('DOMContentLoaded', () => {
  const destinationInput = document.getElementById('floatingInput');
  const checkInDateInput = document.getElementById('checkInDate');
  const checkOutDateInput = document.getElementById('checkOutDate');
  const adultsSelect = document.getElementById('adults-select');
  const roomsSelect = document.getElementById('rooms-select');

  const summaryElement = document.getElementById('summary');
  const mobileSummaryElement1 = document.querySelector('.hotelFilterMobile p');
  const mobileSummaryElement2 = document.querySelector('.hotelDetailMobile p');

  function updateSummary() {
    const destination = destinationInput.value || 'Elaria';
    const checkInDate = checkInDateInput.value
      ? new Date(checkInDateInput.value).toLocaleDateString('zh-TW', {
          day: '2-digit',
          month: 'short',
        })
      : '17 Jun';
    const checkOutDate = checkOutDateInput.value
      ? new Date(checkOutDateInput.value).toLocaleDateString('zh-TW', {
          day: '2-digit',
          month: 'short',
        })
      : '19 June';

    const adults = adultsSelect.value || '2 adults';
    const rooms = roomsSelect.value || '1 room';

    const summaryText = `${destination}・${checkInDate} - ${checkOutDate}・${adults}人・${rooms}房`;

    summaryElement.textContent = summaryText;

    if (mobileSummaryElement1) {
      mobileSummaryElement1.innerHTML = `
        <ul class="list-unstyled d-flex align-items-center">
          <li class="border-end border-2 border-white"><p class="m-0">${destination}</p></li>
          <li class="border-end border-2 border-white"><p class="m-0">${checkInDate} - ${checkOutDate}</p></li>
          <li><p class="m-0">${adults}人・${rooms}房</p></li>
        </ul>`;
    }

    if (mobileSummaryElement2) {
      mobileSummaryElement2.textContent = summaryText;
    }
  }

  // 確保元素存在後再加事件監聽
  if (destinationInput) {
    destinationInput.addEventListener('input', updateSummary);
  }

  if (checkInDateInput) {
    checkInDateInput.addEventListener('change', updateSummary);
  }

  if (checkOutDateInput) {
    checkOutDateInput.addEventListener('change', updateSummary);
  }

  if (adultsSelect) {
    adultsSelect.addEventListener('change', updateSummary);
  }

  if (roomsSelect) {
    roomsSelect.addEventListener('change', updateSummary);
  }

  // 初始化摘要
  updateSummary();
});
