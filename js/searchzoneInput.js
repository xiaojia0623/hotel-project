const destinationInput = document.getElementById('floatingInput');
const checkInDateInput = document.getElementById('checkInDate');
const checkOutDateInput = document.getElementById('checkOutDate');
const adultsSelect = document.getElementById('adultsSelect');
const roomsSelect = document.getElementById('roomsSelect');

const summaryElement = document.getElementById('summary');
const mobileSummaryElement1 = document.querySelector('.hotelFilterMobile p');
const mobileSummaryElement2 = document.querySelector('.hotelDetailMobile p');


function updateSummary() {
  const destination = destinationInput.value || 'Bangkok';
  // 格式化日期 (使用自訂格式，確保顯示 "17 June")
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

  // Update the desktop summary
  summaryElement.textContent = summaryText;

  // Update the mobile display 1 (hotelFilterMobile)
  //mobileSummaryElement1.textContent = `${destination}`;
  // 更新手機顯示 1 的摘要 (確保中間的日期範圍會更新)
  mobileSummaryElement1.innerHTML = `
     <ul class="list-unstyled d-flex align-items-center">
       <li class="border-end border-2 border-white"><p class="m-0">${destination}</p></li>
       <li class="border-end border-2 border-white"><p class="m-0">${checkInDate} - ${checkOutDate}</p></li>
       <li><p class="m-0">${adults}人・${rooms}房</p></li>
     </ul>
   `;

  // Update the mobile display 2 (hotelDetailMobile)
  mobileSummaryElement2.textContent = summaryText;
}

// Event listeners for form changes
destinationInput.addEventListener('input', updateSummary);
checkInDateInput.addEventListener('change', updateSummary);
checkOutDateInput.addEventListener('change', updateSummary);
adultsSelect.addEventListener('change', updateSummary);
roomsSelect.addEventListener('change', updateSummary);

// Initial summary update
updateSummary();
