// 입력값 검증 및 게시글 등록 처리 함수
function validate() {
    // 입력 필드에서 값 가져와 앞뒤 공백 제거
    let title = document.getElementById("title").value.trim();
    let author = document.getElementById("author").value.trim();
    let content = document.getElementById("content").value.trim();

    // 하나라도 빈 값이 있으면 경고창 띄우고 함수 종료 (폼 제출 방지)
    if (title.length < 1 || author.length < 1 || content.length < 1) {
        alert("모든 항목을 작성해주세요.");
        return false;
    }

    // 모든 항목 작성 시 등록 완료 메시지 출력
    alert("게시글이 등록되었습니다");

    // 부모 창에서 지정된 페이지 로드 (게시글 목록 페이지 등)
    parent.loadPage('menu4-1.html');

    // 폼 제출 방지
    return false;
}

// 입력 취소 처리 함수
function cancel() {
    // 취소 메시지 출력
    alert("입력이 취소되었습니다.");

    // 부모 창에서 게시글 목록 페이지로 이동
    parent.loadPage('menu4-1.html');
}

// 입력 필드 초기화 함수
function reset() {
    // 각 입력 필드의 값을 빈 문자열로 초기화
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("content").value = "";
}
