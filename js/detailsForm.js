

document.getElementById('reservationForm').addEventListener('submit', function (e) {
  e.preventDefault(); // 阻止表單預設提交

  const form = this;

  // 檢查表單是否有效
  if (form.checkValidity()) {
    // 驗證成功 -> 跳轉頁面
    window.location.href = 'reservationReceived.html';
  } else {
    // 驗證失敗 -> 顯示提示訊息
    alert('請填寫完整');
    
    // 啟用 Bootstrap 的錯誤樣式顯示（套用 was-validated 類別）
    form.classList.add('was-validated');
  }
});

