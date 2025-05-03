// import * as bootstrap from 'bootstrap'

// document.getElementById('loginForm').addEventListener('submit', function (e) {
//   e.preventDefault();

//   const email = document.getElementById('email').value.trim();
//   const password = document.getElementById('password').value.trim();
//   const form = this;

//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   // 驗證邏輯
//   if (email === '') {
//     showToast('請輸入 Email');
//     form.classList.add('was-validated');
//     return;
//   }

//   if (!emailPattern.test(email)) {
//     showToast('請輸入正確的 Email 格式');
//     form.classList.add('was-validated');
//     return;
//   }

//   if (password === '') {
//     showToast('請輸入密碼');
//     form.classList.add('was-validated');
//     return;
//   }

//   if (password.length < 8) {
//     showToast('密碼長度至少 8 位數');
//     form.classList.add('was-validated');
//     return;
//   }

//   if (password.length > 12) {
//     showToast('密碼長度最多 12 位數');
//     form.classList.add('was-validated');
//     return;
//   }

//   document.getElementById('loadingOverlay').classList.remove('d-none');

//   setTimeout(() => {
//     document.getElementById('loadingOverlay').classList.add('d-none');
//     showSuccessToast('登入成功！歡迎回來 👋');

//     setTimeout(() => {
//       window.location.href = 'myBookingPage.html';
//     }, 1500);
//   }, 1000);
// });


// function showToast(message) {
//   const toastEl = document.getElementById('errorToast');
//   toastEl.querySelector('.toast-body').textContent = message;
//   new bootstrap.Toast(toastEl).show();
// }

// function showSuccessToast(message) {
//   const toastEl = document.getElementById('successToast');
//   toastEl.querySelector('.toast-body').textContent = message;
//   new bootstrap.Toast(toastEl).show();
// }

// // 顯示登入者資訊（例如從 localStorage 拿）
// const user = JSON.parse(localStorage.getItem('user'));
// if (user) {
//   document.getElementById('userName').textContent = user.name || '會員';
//   document.getElementById('userAvatar').src = user.avatar || 'https://via.placeholder.com/30';
// }

import * as bootstrap from 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const loginFormMobile = document.getElementById('loginFormMobile');
  const loadingOverlay = document.getElementById('loadingOverlay');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailMobile = document.getElementById('email-mobile');
  const passwordMobile = document.getElementById('password-mobile');

  if (!loginForm) return;
  if (!loginFormMobile) return;

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const form = this;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

    loadingOverlay.classList.remove('d-none');

    setTimeout(() => {
      loadingOverlay.classList.add('d-none');
      showSuccessToast('登入成功！歡迎回來 👋');

      setTimeout(() => {
        window.location.href = 'myBookingPage.html';
      }, 1500);
    }, 1000);
  });

  loginFormMobile.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailmobile = emailMobile.value.trim();
    const passwordmobile = passwordMobile.value.trim();
    const form = this;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailmobile === '') {
      showToast('請輸入 Email');
      form.classList.add('was-validated');
      return;
    }

    if (!emailPattern.test(emailmobile)) {
      showToast('請輸入正確的 Email 格式');
      form.classList.add('was-validated');
      return;
    }

    if (passwordmobile === '') {
      showToast('請輸入密碼');
      form.classList.add('was-validated');
      return;
    }

    if (passwordmobile.length < 8) {
      showToast('密碼長度至少 8 位數');
      form.classList.add('was-validated');
      return;
    }

    if (passwordmobile.length > 12) {
      showToast('密碼長度最多 12 位數');
      form.classList.add('was-validated');
      return;
    }

    loadingOverlay.classList.remove('d-none');

    setTimeout(() => {
      loadingOverlay.classList.add('d-none');
      showSuccessToast('登入成功！歡迎回來 👋');

      setTimeout(() => {
        window.location.href = 'myBookingPage.html';
      }, 1500);
    }, 1000);
  });

  // 顯示登入者資訊
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    const userNameEl = document.getElementById('userName');
    const userAvatarEl = document.getElementById('userAvatar');

    if (userNameEl) userNameEl.textContent = user.name || '會員';
    if (userAvatarEl) userAvatarEl.src = user.avatar || 'https://via.placeholder.com/30';
  }
});

function showToast(message) {
  const toastEl = document.getElementById('errorToast');
  if (!toastEl) return;
  toastEl.querySelector('.toast-body').textContent = message;
  new bootstrap.Toast(toastEl).show();
}

function showSuccessToast(message) {
  const toastEl = document.getElementById('successToast');
  if (!toastEl) return;
  toastEl.querySelector('.toast-body').textContent = message;
  new bootstrap.Toast(toastEl).show();
}
