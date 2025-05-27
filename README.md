# Impact Case - 第二語言學習及介入研究網站

這是一個專為「第二語言學習及介入」研究團隊設計的靜態網站，旨在展示研究項目、團隊成員、出版物和相關資源。

## 項目概述

本網站專注於展示家庭環境、兒童閱讀發展（語言覺察能力）的研究，以及科技或語言學習介入如何幫助學習者的第二語言學習。

## 主要功能

- 📱 **響應式設計** - 適配各種設備和屏幕尺寸
- 🌐 **多語言支持** - 支持中英文切換（框架已準備）
- 📚 **研究項目展示** - 詳細介紹各個研究項目
- 👥 **團隊成員介紹** - 展示研究團隊成員信息
- 📖 **出版物管理** - 按年份篩選和展示學術出版物
- ❓ **互動式FAQ** - 常見問題解答功能
- 📧 **聯絡表單** - 包含前端驗證的聯絡表單（僅展示用途）
- 🎯 **項目卡片** - 美觀的項目展示卡片

## 網站結構

### 主要頁面
- **index.html** - 主頁，展示項目概覽和特色研究
- **team.html** - 研究團隊頁面，介紹團隊成員
- **projects.html** - 研究項目頁面，詳細展示各個項目
- **publications.html** - 出版物頁面，按年份分類的學術成果
- **info.html** - 有用資訊頁面，提供相關資源連結
- **contact.html** - 聯絡我們頁面，包含聯絡表單

### 核心研究項目
1. **Bisyntax Builder** - 創新的語言學習工具，幫助理解雙語句法結構
2. **向日葵繪本閱讀計劃** - 專為兒童設計的語言學習項目
3. **Reading Step by Step** - 循序漸進的閱讀能力發展項目

### 資源目錄
- **useful_info/** - 包含各項目的詳細資訊頁面
  - `bisyntax-builder.html` - Bisyntax Builder 詳細介紹
  - `sunflower-reading.html` - 向日葵繪本閱讀計劃詳情
  - `reading-step-by-step.html` - Reading Step by Step 詳情
  - `back-to-school.html` - 開學相關資訊
- **image/** - 網站圖片資源
  - `Logo3.png` - 網站標誌
  - 各項目相關圖片
- **styles.css** - 網站樣式表
- **script.js** - 網站交互功能腳本

## 快速開始

1. **克隆或下載項目**
   ```bash
   git clone [repository-url]
   cd impact_case
   ```

2. **本地運行**
   - 直接在瀏覽器中打開 `index.html`
   - 或使用本地服務器（推薦）：
   ```bash
   # 使用 Python
   python -m http.server 8000
   
   # 使用 Node.js
   npx serve .
   ```

3. **訪問網站**
   - 瀏覽器訪問 `http://localhost:8000`

## 自定義指南

### 基本配置
1. **更新網站標題和標誌**
   - 修改各 HTML 文件中的 `<title>` 標籤
   - 替換 `image/Logo3.png` 為您的標誌

2. **修改主色調**
   - 編輯 `styles.css` 中的主要顏色變量（當前主色：#0066cc）

3. **更新聯絡資訊**
   - 修改 `contact.html` 和頁腳中的聯絡資訊
   - 當前聯絡方式：impactcase@eduhk.hk, WhatsApp: 5517 6858

### 內容更新
1. **添加團隊成員**
   - 編輯 `team.html`，添加新的團隊成員卡片

2. **新增研究項目**
   - 在 `projects.html` 中添加新項目
   - 在 `useful_info/` 目錄下創建對應的詳細頁面
   - 更新主頁的項目卡片

3. **管理出版物**
   - 編輯 `publications.html`，按年份添加新的出版物
   - 確保年份篩選功能正常工作

### 高級自定義
1. **多語言功能**
   - 當前框架支持語言切換，需要創建對應的英文頁面
   - 修改 `script.js` 中的語言切換邏輯

2. **添加新功能**
   - 在 `script.js` 中添加新的交互功能
   - 在 `styles.css` 中添加對應的樣式

3. **實現聯絡表單功能**
   - 當前表單只有前端驗證，提交後顯示成功訊息但不會實際發送郵件
   - 要實現真正的郵件發送功能，可以考慮以下方案：
     - 使用 Netlify Forms 或 Formspree 等第三方服務
     - 部署後端服務（如 Node.js + Express）處理表單提交
     - 使用 EmailJS 等客戶端郵件服務
     - 集成 Google Forms 或其他表單服務

## 技術規格

- **前端技術**: HTML5, CSS3, JavaScript (ES6+)
- **設計模式**: 響應式設計，移動優先
- **瀏覽器支持**: 現代瀏覽器 (Chrome, Firefox, Safari, Edge)
- **依賴**: 無外部依賴，純靜態網站

## 聯絡資訊

如有任何問題或建議，請聯絡：
- **電子郵件**: impactcase@eduhk.hk
- **WhatsApp**: 5517 6858

## 版權聲明

© 2025 Enhancing Children's Language Learning through Training and Technology 版權所有 