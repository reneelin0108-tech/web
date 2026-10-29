# 晨曦企業網站（GitHub Pages）

這是一個繁體中文的三頁式公司介紹網站，包含：
- `index.html`：首頁
- `about.html`：公司介紹
- `contact.html`：聯絡我們表單
- `style.css`：網站樣式
- `script.js`：手機選單、年份及表單提交程式
- `google-apps-script.gs`：寄送表單資料到電子郵件的程式

## 1. 先上傳到 GitHub

1. 登入 https://github.com
2. 建立一個 Repository，名稱可用 `company-website`，選擇 **Public**。
3. 進入 Repository，按 **Add file → Upload files**。
4. 把本資料夾內的 `index.html`、`about.html`、`contact.html`、`style.css`、`script.js` 逐一拖曳上傳。
5. 按 **Commit changes** 儲存。
6. `README.md` 可以一起上傳；`google-apps-script.gs` 也可以保留在電腦或上傳作為參考，但不要把任何密碼或機密放進公開 Repository。

## 2. 開啟 GitHub Pages

1. 在 Repository 頁面點 **Settings**。
2. 左側找到 **Pages**。
3. 在 **Build and deployment** 的 **Source** 選 **Deploy from a branch**。
4. Branch 選 **main**，資料夾選 **/(root)**，按 **Save**。
5. 等待一至數分鐘，Pages 頁面會顯示網站網址，通常是：
   `https://你的GitHub帳號.github.io/company-website/`

## 3. 設定表單寄信（Google Apps Script）

### A. 建立 Apps Script
1. 開啟 https://script.google.com ，使用 Google 帳號登入。
2. 點 **新專案**。
3. 將編輯器內預設程式刪除，貼上 `google-apps-script.gs` 的全部內容。
4. 把 `RECIPIENT_EMAIL` 的值改成你要收取客戶資料的電子郵件，例如：
   `const RECIPIENT_EMAIL = 'yourname@gmail.com';`
5. 儲存專案。

### B. 部署成網頁應用程式
1. 右上角按 **部署 → 新增部署作業**。
2. 選擇類型（齒輪圖示）→ **網頁應用程式**。
3. 「執行身分」選 **我**。
4. 「誰可以存取」選 **任何人**（若學校或公司帳號不允許，請依管理員政策處理）。
5. 按 **部署**，依照 Google 提示授權寄信權限。
6. 複製產生的網頁應用程式網址（通常以 `/exec` 結尾）。

### C. 將網址放入網站
1. 回到 GitHub Repository，打開 `script.js`。
2. 點鉛筆圖示編輯。
3. 找到這一行：
   `const SCRIPT_URL = '請在此貼上Google_Apps_Script網頁應用程式網址';`
4. 將引號內文字換成剛剛複製的 Apps Script `/exec` 網址。
5. 按 **Commit changes** 儲存。
6. 等 GitHub Pages 更新後，開啟網站的「聯絡我們」頁面填一筆測試資料，確認信箱有收到。

## 4. 修改公司名稱

目前網站使用示範名稱「晨曦企業」。可在三個 HTML 檔案中搜尋「晨曦企業」，改成你的公司或作業名稱。也可以修改首頁文案、服務項目和配色。

## 5. 重要提醒

- GitHub Pages 是公開網站；不要在網頁程式碼中放入密碼、私人金鑰或機密。
- 表單會收集姓名、電話、Email 等個人資料，請只收集必要資訊，並妥善保護收到的郵件。
- Google Apps Script 部署畫面可能因帳號或介面更新而略有不同。
- `no-cors` 模式下，瀏覽器無法確認伺服器是否成功寄信；部署後一定要實際測試收信。
- 這份範本是可自訂的示範網站。寄信功能必須完成上述 Apps Script 部署與網址設定才會啟用。
