# Quick Start Guide

## Clone & Build
1. 명령 프롬프트를 열어 git clone https://github.com/PowerZolffGirl/Bubbleing-Chrome-Extension.git 을 입력하여 현재 레포지토리를 클론합니다.
2. 클론한 폴더를 vscode 에서 오픈한 뒤, 터미널에서 npm install 을 입력하고 실행합니다.
3. npm run-script build 를 입력하여 프로젝트를 빌드한 뒤, npm start 를 입력하여 컴파일합니다.
4. build 폴더가 생성되었으면, src 폴더에 있는 images 폴더를 통째로 복사하여 build 폴더에 붙여넣습니다.
<img src = "https://user-images.githubusercontent.com/78165538/172838802-c5940a6c-fce1-442b-9712-27ffc2921fca.png" width="300" height="150"><img src = "https://user-images.githubusercontent.com/78165538/172839603-9442d3d4-f85d-473d-8bd3-b7dc065ca738.png" width="300" height="150">



## Install
1. 크롬 브라우저를 열고 상단 주소창에 chrome://extensions 을 입력하여 확장 프로그램 관리 페이지로 이동합니다.
<img src = "https://user-images.githubusercontent.com/78165538/172838539-fe203024-773a-49a5-b47b-2989c8c26958.png" width="400" height="100">
2. 우측 상단의 개발자모드 버튼을 켭니다.
<img src = "https://user-images.githubusercontent.com/78165538/172841811-766a6608-29e1-44db-bbcc-b848bc471480.png" width="200" height="80">
3. 좌측 상단에 나타난 '압축해제된 확장 프로그램을 로드합니다.' 버튼을 클릭한 뒤, 프로젝트의 build 폴더를 선택하여 업로드합니다.
<img src = "https://user-images.githubusercontent.com/78165538/172841986-bf7c8def-ef65-4545-ada5-14f72ce38216.png" width="200" height="100">
4. 아래와 같이 확장 프로그램이 나타나면 버튼을 켜고 실행합니다.
<img src = "https://user-images.githubusercontent.com/78165538/172840352-d2621d2f-e684-47fa-b737-5dc864bb2427.png" width="300" height="150">


## Run
### 1. 크롬확장프로그램 실행
![1 크롬아이콘고정](https://user-images.githubusercontent.com/53907861/172628852-d0c52f4f-6b29-4c16-92ad-8c0a4e296403.jpg)
크롬 브라우저 우측 상단의 확장프로그램 항목을 클릭해 버블링을 고정합니다.
버블링이 켜진 채 유튜브 영상을 시청하면 자동으로 음식 검출이 시작됩니다.


### 2. 영상 시청
![2  영상시청](https://user-images.githubusercontent.com/53907861/172629702-0bb38533-d44d-4c2a-ac2c-50addb3d34ac.jpg)
한식이 등장하는 유튜브 영상(ex. 쯔양 삼겹살 먹방)을 시청하면 음식 위 버블 아이콘이 표시됩니다.

![3  버블뜸(크롭)](https://user-images.githubusercontent.com/53907861/172630387-f1970b82-47f5-4003-af08-cbc38afbe532.jpg)
궁금한 음식 위 버블을 클릭하면 해당 음식의 관련 정보를 버블링 UI에서 확인할 수 있습니다.


### 3. 버블링 탭
![4  기본탭](https://user-images.githubusercontent.com/53907861/172630430-7b44d086-61f2-4788-a611-8ec416d3da05.jpg)
버블링 탭에서 음식의 이름(영문, 국문, 번역), 음식 설명, 레시피, 근처 식당 정보를 제공합니다.
영상 속 다른 음식 위 버블을 클릭하면 해당 음식에 대한 화면으로 바뀝니다. 


### 4. 레시피 열람
![5  레시피 열람](https://user-images.githubusercontent.com/53907861/172631286-9365a6bd-0283-47c0-b697-12a379eddd28.jpg)
How To Make를 클릭하면 레시피를 확인할 수 있습니다.


### 5. 근처 식당 정보 열람
![6  근처식당 열람](https://user-images.githubusercontent.com/53907861/172631305-719e9db0-9583-4357-bdf2-b216414f041c.jpg)
Restaurant Near Me를 클릭하면 새 탭이 생성되어 근처 식당 정보를 검색하는 화면으로 이동합니다.


### 6. 음식 추가 정보 검색
![7  추가정보 검색기능](https://user-images.githubusercontent.com/53907861/172631461-28d6ebbb-1c70-4fd3-82d5-6a3b1521d0dd.jpg)
![8  추가정보화면](https://user-images.githubusercontent.com/53907861/172631507-8e44bb8d-8b73-493d-868c-f78a7e7acf2a.jpg)
view more 버튼을 클릭하면 음식에 대한 상세정보를 검색하는 화면으로 이동합니다.


### 7. 북마크
![9  북마크클릭](https://user-images.githubusercontent.com/53907861/172631585-748895ec-4225-4347-bfc2-0d3c32953f29.jpg)
![10  북마크탭](https://user-images.githubusercontent.com/53907861/172631592-fdaaf455-3fee-4c84-aee4-97a64533f52c.jpg)
BUBBLEing탭 음식 이름 옆 북마크 버튼을 누르면 My List탭에 북마크한 음식이 저장됩니다.
버튼을 활성/비활성화하여 북마크를 추가/해제할 수 있습니다.

![11  북마크탭에서 음식사진 클릭시 이동](https://user-images.githubusercontent.com/53907861/172631812-9dc33760-e4da-4201-ae40-05ff31e7e4d6.jpg)
MyList탭에서 음식 사진 클릭시 해당 음식에 대한 상세정보를 확인할 수 있는 BUBBLEing탭으로 다시 이동합니다.

### 참고 사항
- 처음 프로그램을 켰을 때 모델이 로드되는 것 때문에 다소 버벅거리거나 영상이 멈추는 현상이 발생할 수 있습니다. 그런 경우 잠시 기다리면 모델이 로드되어 정상적으로 프로그램이 실행됩니다.
- 만약 프로그램이 실행되지 않는 경우, 페이지 새로고침을 하면 제대로 실행됩니다.

