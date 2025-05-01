 
import * as bootstrap from 'bootstrap'
// 表單驗證
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const form = e.target;

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // 驗證確認密碼一致
    if (password !== confirmPassword) {
      document.getElementById('confirmPassword').setCustomValidity("密碼不一致");
    } else {
      document.getElementById('confirmPassword').setCustomValidity("");
    }

    // 若通過驗證
    if (form.checkValidity()) {
      // 顯示成功 Toast
      const toast = new bootstrap.Toast(document.getElementById('successToast'));
      toast.show();

      setTimeout(() => {
        window.location.href = 'loginPage.html';
      }, 2000);
    }

    form.classList.add('was-validated');
});