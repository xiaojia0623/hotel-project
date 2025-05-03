// import * as bootstrap from 'bootstrap'
// // 表單驗證
// document.getElementById('signupForm').addEventListener('submit', function (e) {
//     e.preventDefault();
//     const form = e.target;

//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirmPassword').value;

//     // 驗證確認密碼一致
//     if (password !== confirmPassword) {
//       document.getElementById('confirmPassword').setCustomValidity("密碼不一致");
//     } else {
//       document.getElementById('confirmPassword').setCustomValidity("");
//     }

//     // 若通過驗證
//     if (form.checkValidity()) {
//       // 顯示成功 Toast
//       const toast = new bootstrap.Toast(document.getElementById('successToast'));
//       toast.show();

//       setTimeout(() => {
//         window.location.href = 'loginPage.html';
//       }, 2000);
//     }

//     form.classList.add('was-validated');
// });

import { showToast } from './showToast';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

document.addEventListener('DOMContentLoaded', () => {
  const formEl = document.querySelector('#signupForm');
  const passwordEl = document.querySelector('#password');
  const confirmPasswordEl = document.querySelector('#confirmPassword');

  if (!formEl || !passwordEl || !confirmPasswordEl) {
    console.warn('❗ 表單或欄位元素未正確載入');
    return;
  }

  formEl.addEventListener('submit', function (e) {
    e.preventDefault();

    const password = passwordEl.value;
    const confirmPassword = confirmPasswordEl.value;

    // 驗證密碼一致
    if (password !== confirmPassword) {
      confirmPasswordEl.setCustomValidity('密碼不一致');
    } else {
      confirmPasswordEl.setCustomValidity('');
    }

    // 檢查表單是否有效
    if (formEl.checkValidity()) {
      // 顯示成功 Toast
      showToast('successToast');
      
      // 模擬跳轉至登入頁
      setTimeout(() => {
        window.location.href = 'loginPage.html';
      }, 2000);
    } else {
      // 顯示錯誤 Toast
      showToast('errorToast');
    }

    formEl.classList.add('was-validated');
  });
});
