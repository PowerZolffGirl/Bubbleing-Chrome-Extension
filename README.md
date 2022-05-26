# 딥러닝 기반 영상 콘텐츠 속 한국문화요소 해설 서비스 버블링(BUBBLEing)

<img src = "https://user-images.githubusercontent.com/78165538/170541583-7df1dffe-18a3-49f5-8c88-855c53ca74ed.png" width="700" height="400">

## 서비스 설명

### :gift: 서비스 개요
버블링은 딥러닝 기반 영상 콘텐츠 속 한국문화요소 해설 서비스로, 외국인 사용자가 재생하는 영상 속 사물이 무엇인지를 해설과 함께 제공하는 크롬 확장 프로그램입니다.

### :art: 서비스 개발 배경
- 한국 콘텐츠 유행으로 문화적 근접성이 높아지며 한식 호감도 성장  
- 유튜브 한국문화 및 한식 콘텐츠에 대한 해외유저 관심도 상승
- 문화 동북공정 이슈의 지속적 발생
- 한식에 대한 검증된 정보가 제공되는 대중화된 플랫폼 부재  

➡ **한식에 대한 올바른 정보를 효과적으로 전달할 플랫폼 ‘버블링’ 개발**
### 🛠️ 서비스 기능 설명
<img src = "https://user-images.githubusercontent.com/78165538/170545584-aca304a0-5c33-4814-b370-861d6a4092be.png" width="700" height="400">  

### :bulb: 버블 아이콘
- 영상 속에서 한식이 등장하면 그 위에 버블이 등장하고, 버블을 클릭하면 분할창이 열립니다.   
### :bulb: Bubbleing 메뉴 
- 음식의 이름, 설명, 사진  
- 북마크 : 해당 음식을 My List 에 추가  
- How To Make : 음식의 레시피 제공  
- Restaurant Near Me : 해당 음식을 파는 주변 식당의 검색 결과  
- view more : 해당 음식에 대한 더 자세한 구글 검색 결과  
### :bulb: My List 메뉴
- 사용자가 북마크한 음식의 목록을 보여줍니다.
## 서비스 작동 구조
### 💻 크롬 확장 프로그램 작동 구조
<img src = "https://user-images.githubusercontent.com/78165538/170555331-23c33566-2975-44d6-a648-e25fc82a5a36.png" width="700" height="400">

**Content**
- detection.js : tensorflow.js 라이브러리를 이용하여 영상 프레임을 추출하여 모델에 전송한 뒤, 객체 인식 결과를 표시
- openMenu.js : 분할창의 모든 기능을 구현
- food.js : 음식의 이름과 설명 데이터
- recipe.js : 음식의 레시피 데이터  

**Background**  
- 크롬 확장 프로그램의 서비스워커에 해당하는 부분으로, 프로그램의 on/off 여부를 관리합니다.  

**Popup**  
- 크롬 확장 프로그램 버튼 클릭시 보여지는 팝업 부분으로, on/off 버튼이 구현되어 있습니다.  

### :wrench: 서비스 아키텍처
<img src = "https://user-images.githubusercontent.com/78165538/170556843-1c7df14b-3259-40ea-bdf6-2109286cc925.png" width="700" height="350">

## 서비스 설치 및 테스트 방법
### 프로젝트 clone 과 build  
1) 명령 프롬프트를 열어  ``git clone https://github.com/PowerZolffGirl/Bubbleing-Chrome-Extension.git``  을 입력하여 현재 레포지토리를 클론합니다.
2) 클론한 폴더를 vscode 등의 IDE 에서 오픈한 뒤, 터미널에서 ``npm install`` 을 입력하고 실행합니다.
3) ``npm run-script build``  를 입력하여 프로젝트를 빌드한 뒤, ``npm start`` 를 입력하여 컴파일합니다.
4) build 폴더가 생성되었으면, src 폴더에 있는 images 폴더를 build 폴더에 복사하여 붙여넣습니다.

### 크롬 확장 프로그램 탑재  
1) 크롬을 열어 상단 주소창에 ``chrome://extensions/`` 를 입력하여 이동합니다.
2) 우측 상단에 개발자 모드 버튼이 꺼져 있으면, 버튼을 켜줍니다.
3) 좌측 상단에 생긴 "압축해제된 확장 프로그램을 로드합니다." 버튼을 클릭한 뒤, 프로젝트의 build 폴더를 선택하여 업로드합니다.
4) 아래 그림과 같이 크롬 확장 프로그램이 추가되면, 프로그램을 버튼을 켜고 실행합니다.
<img src = "https://user-images.githubusercontent.com/78165538/170560278-c4c11e84-c0a6-4f28-ad2c-cf1fbf7b7cc0.png" width="300" height="150">


