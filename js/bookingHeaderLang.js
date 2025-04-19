document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
      const countryIcon = e.target.getAttribute('data-icon'); // 獲取選擇的圖標
      const languageName = e.target.getAttribute('data-lang'); // 獲取選擇的語言名稱
  
      // 更新按鈕上的圖標和語言名稱
      const dropdownButton = document.getElementById('languageDropdown');
      const selectedLanguage = document.getElementById('selectedLanguage');
      const globeIcon = dropdownButton.querySelector('i');
  
      // 更新語言名稱和圖標
      selectedLanguage.textContent = languageName;
      globeIcon.className = countryIcon; // 更改圖標
  
      // 可以選擇在這裡進行其他處理，例如將選擇的語言保存在本地存儲、發送 API 請求等
    });
});