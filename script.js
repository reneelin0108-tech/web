// 手機版導覽列、頁尾年份與聯絡表單提交
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const status = document.querySelector('#form-status');
    const submitButton = form.querySelector('button[type="submit"]');

    // 請先依 README.md 設定 Google Apps Script 網址，再替換下方的網址。
    const SCRIPT_URL = '請在此貼上Google_Apps_Script網頁應用程式網址';

    if (SCRIPT_URL.startsWith('請在此')) {
      status.textContent = '表單外觀已完成，但寄信功能尚未設定。請依照 README.md 完成 Google Apps Script 設定。';
      status.className = 'form-status error';
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = '送出中…';
    status.textContent = '';

    try {
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());
      // 使用 no-cors 避免跨網域預檢；瀏覽器無法讀取伺服器回應，
      // 因此此處只能顯示已送出請求，正式上線前請實際測試收信。
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: new URLSearchParams(payload).toString()
      });
      status.textContent = '表單已送出請求，請留意信箱；首次設定後請先實際測試是否收到郵件。';
      status.className = 'form-status success';
      form.reset();
    } catch (error) {
      status.textContent = '送出時發生問題，請稍後再試，或改用其他方式聯絡。';
      status.className = 'form-status error';
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = '送出訊息 →';
    }
  });
}
