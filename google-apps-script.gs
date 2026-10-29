/**
 * Google Apps Script：將網站聯絡表單寄到指定信箱
 * 使用前請把 RECIPIENT_EMAIL 改成你要收信的電子郵件。
 */
const RECIPIENT_EMAIL = '請填入你的收件信箱';

function doPost(e) {
  const data = (e && e.parameter) ? e.parameter : {};
  const name = clean(data.name);
  const phone = clean(data.phone);
  const email = clean(data.email);
  const message = clean(data.message);

  if (!name || !phone || !email || !message) {
    return ContentService.createTextOutput('請完整填寫必填欄位');
  }
  if (!RECIPIENT_EMAIL || RECIPIENT_EMAIL.indexOf('@') < 1) {
    return ContentService.createTextOutput('請先設定收件信箱');
  }

  const subject = '網站收到新的聯絡表單：' + name;
  const body =
    '網站收到一筆新的聯絡資料：\\n\\n' +
    '姓名：' + name + '\\n' +
    '電話：' + phone + '\\n' +
    'Email：' + email + '\\n\\n' +
    '聯絡內容：\\n' + message + '\\n\\n' +
    '此郵件由網站聯絡表單自動寄出。';

  MailApp.sendEmail({
    to: RECIPIENT_EMAIL,
    subject: subject,
    body: body,
    replyTo: email
  });

  return ContentService.createTextOutput('OK');
}

function clean(value) {
  return String(value || '').trim().slice(0, 5000);
}
