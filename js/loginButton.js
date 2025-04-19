import * as bootstrap from 'bootstrap'


document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const form = this;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // 驗證邏輯
  if (email === '') {
    showToast('請輸入 Email');
    form.classList.add('was-validated');
    return;
  }

  if (!emailPattern.test(email)) {
    showToast('請輸入正確的 Email 格式');
    form.classList.add('was-validated');
    return;
  }

  if (password === '') {
    showToast('請輸入密碼');
    form.classList.add('was-validated');
    return;
  }

  if (password.length < 8) {
    showToast('密碼長度至少 8 位數');
    form.classList.add('was-validated');
    return;
  }

  if (password.length > 12) {
    showToast('密碼長度最多 12 位數');
    form.classList.add('was-validated');
    return;
  }

  // ✅ 顯示 loading 遮罩
  document.getElementById('loadingOverlay').classList.remove('d-none');

  // 模擬處理，1 秒後顯示成功提示
  setTimeout(() => {
    document.getElementById('loadingOverlay').classList.add('d-none');
    showSuccessToast('登入成功！歡迎回來 👋');

    setTimeout(() => {
      window.location.href = 'myBookingPage.html';
    }, 1500); // 1.5 秒後跳轉
  }, 1000); // 模擬伺服器處理
});

// ✅ Toast 顯示函式
function showToast(message) {
  const toastEl = document.getElementById('errorToast');
  toastEl.querySelector('.toast-body').textContent = message;
  new bootstrap.Toast(toastEl).show();
}

function showSuccessToast(message) {
  const toastEl = document.getElementById('successToast');
  toastEl.querySelector('.toast-body').textContent = message;
  new bootstrap.Toast(toastEl).show();
}

// 顯示登入者資訊（例如從 localStorage 拿）
const user = JSON.parse(localStorage.getItem('user'));
if (user) {
  document.getElementById('userName').textContent = user.name || '會員';
  document.getElementById('userAvatar').src = user.avatar || 'https://via.placeholder.com/30';
}
