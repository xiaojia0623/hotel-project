import $ from 'jquery';

$(document).ready(function () {
  // 漢堡展開收起
  $('.navbar-toggler').on('click', function () {
    $('#navbarTogglerBooking').toggleClass('show');
  });

  // 語言選單 dropdown toggle
  $('#languageDropdown').on('click', function (e) {
    e.stopPropagation(); // 防止冒泡關閉
    $('.dropdown-menu').not($(this).next()).removeClass('show'); // 收起其他 dropdown
    $(this).next('.dropdown-menu').toggleClass('show');
  });
  $('.dropdown-item').on('click', function (e) {
    e.preventDefault(); // 阻止 a 標籤預設行為

    const selectedText = $(this).data('lang'); // 取得 data-lang 屬性
    $('#selectedLanguage').text(selectedText); // 更新按鈕文字
  });

  // 使用者選單 dropdown toggle
  $('#userDropdownBooking').on('click', function (e) {
    e.stopPropagation();
    $('.dropdown-menu').not($(this).next()).removeClass('show');
    $(this).next('.dropdown-menu').toggleClass('show');
  });

  $('#logoutBtn').on('click', function (e) {
    e.preventDefault(); // 阻止預設跳轉（防止 a 直接導向）

    // 跳轉首頁
    window.location.href = 'index.html';
  });

  // 點擊其他地方收起所有 dropdown
  $(document).on('click', function () {
    $('.dropdown-menu').removeClass('show');
  });
  
});

