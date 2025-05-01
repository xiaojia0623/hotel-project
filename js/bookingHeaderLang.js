document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
      const countryIcon = e.target.getAttribute('data-icon');
      const languageName = e.target.getAttribute('data-lang');
  
      const dropdownButton = document.getElementById('languageDropdown');
      const selectedLanguage = document.getElementById('selectedLanguage');
      const globeIcon = dropdownButton.querySelector('i');
  
      selectedLanguage.textContent = languageName;
      globeIcon.className = countryIcon;
    });
});