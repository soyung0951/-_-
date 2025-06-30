// 지정한 페이지를 iframe #contentFrame의 src 속성에 할당하여 페이지 로드
function loadPage(page) {
    document.querySelector('#contentFrame').src = page;
}

// 팝업창 너비와 높이 지정
let p_width = 500;
let p_height = 450;

// 팝업창이 화면 중앙에 뜨도록 좌표 계산
let b_left = window.screenX + (window.outerWidth - p_width) / 2;
let b_top = window.screenY + (window.outerHeight - p_height) / 2;

// 팝업창 열기 함수, 인자로 팝업 페이지 경로를 받음
function openPopup(popup) {
    // 새 창 열기, 위치와 크기 설정
    let newWin = window.open(`${popup}`, "", `width=${p_width}, height=${p_height}, left=${b_left}, top=${b_top}`);
    
    // 팝업 차단 시 사용자에게 알림
    if (newWin == null) {
        alert("팝업이 차단되어 있습니다. 차단을 해제해 주세요.");
    }
}
