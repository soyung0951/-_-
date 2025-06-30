// 로그인 처리 함수
function login() {
  // 아이디와 비밀번호 입력값 가져오기
  const id = document.getElementById("userId").value;
  const pw = document.getElementById("password").value;

  // 아이디 또는 비밀번호가 비어있으면 경고창 출력하고 함수 종료
  if (!id || !pw) {
    alert("아이디와 비밀번호를 입력해주세요.");
    return;
  }
  // (추가 로그인 처리 로직 작성 가능)
}

// 팝업 창 열기 함수
function openPopup(popup) {
  const width = 500;  // 팝업 너비
  const height = 450; // 팝업 높이
  // 화면 중앙에 팝업 위치 계산
  const left = window.screenX + (window.outerWidth - width) / 2;
  const top = window.screenY + (window.outerHeight - height) / 2;

  // 지정한 URL로 팝업 열기
  window.open(`${popup}`, '', `width=${width},height=${height},left=${left},top=${top}`);
  
  // 현재 창 닫기 (팝업 띄우고 기존 창 종료)
  window.close();
}
