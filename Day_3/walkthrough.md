# 실시간 점심메뉴 투표 구글 시트 연동 개선 완료

## 1. 구현된 변경 사항 (프론트엔드)

기존 `index.html` 파일은 구글 시트의 데이터를 읽어오는 기능(GET)만 있었으나, 이제 **사용자가 투표를 할 때 실제로 구글 시트에 데이터를 기록(POST)** 할 수 있도록 개선되었습니다.

- **`castVote()` 함수 비동기화 및 API 전송**: 투표 시 구글 앱스 스크립트 웹 앱으로 `POST` 요청을 보내도록 `fetch()` 로직을 추가했습니다.
- **안전한 통신 방식**: 프론트엔드 코드에 구글 API 키나 사용자 권한을 노출하지 않는 베스트 프랙티스(Google Apps Script를 미들웨어로 사용)를 적용했습니다.
- **사용자 경험(UX) 개선**: 투표 데이터를 서버로 전송하는 동안 투표 버튼이 "투표 전송 중..."이라는 스피너(Loading) 상태로 변경되며, 성공 또는 실패 시 적절한 토스트(Toast) 알림을 제공합니다.

---

## 2. 구글 시트(백엔드) 설정 가이드

> [!IMPORTANT]
> 실제 투표가 작동하려면, 사용 중이신 구글 시트("실시간 점심메뉴 투표")에 데이터를 받아주는 **Google Apps Script(웹 앱)** 를 배포해야 합니다. 아래의 절차를 따라주세요.

### 1단계: Apps Script 작성
1. 연결할 구글 시트를 엽니다.
2. 상단 메뉴에서 **[확장 프로그램] > [Apps Script]** 를 클릭합니다.
3. 열린 스크립트 에디터에 있는 기존 코드를 모두 지우고 아래 코드를 붙여넣습니다:

```javascript
function doPost(e) {
  // CORS 처리 및 응답 설정
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  };
  
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const timestamp = new Date();
    // 폼 데이터에서 'menu' 항목 가져오기
    const menu = e.parameter.menu; 
    
    // 시트의 마지막 줄에 데이터 추가 (예: 시간, 메뉴이름)
    sheet.appendRow([timestamp, menu]);
    
    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### 2단계: 웹 앱(Web App)으로 배포
1. 스크립트 에디터 우측 상단의 **[배포] > [새 배포]** 를 클릭합니다.
2. 톱니바퀴 아이콘을 눌러 **[웹 앱]** 유형을 선택합니다.
3. 설정값을 다음과 같이 맞춥니다:
   - 설명: "점심메뉴 투표 API"
   - 다음 사용자로서 실행: **나** (소유자 계정)
   - 액세스 권한이 있는 사용자: **모든 사용자 (Anyone)**
4. **[배포]** 를 클릭하고 팝업에서 **접근 권한 부여 (Authorize access)** 를 진행합니다.
5. 배포가 완료되면 생성되는 **"웹 앱 URL" (https://script.google.com/macros/s/.../exec) 을 복사**합니다.

### 3단계: `index.html`에 URL 적용
1. `Day_3/index.html` 파일을 엽니다.
2. `1260`번째 줄 부근에 있는 `GOOGLE_APPS_SCRIPT_URL` 상수를 찾습니다.
   ```javascript
   const GOOGLE_APPS_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";
   ```
3. `"YOUR_GOOGLE_APPS_SCRIPT_URL_HERE"` 부분을 방금 복사한 **웹 앱 URL**로 교체해 줍니다.
4. 이제 Live Server에서 투표를 테스트하면 구글 시트에 실시간으로 행(Row)이 추가되는 것을 확인할 수 있습니다!
