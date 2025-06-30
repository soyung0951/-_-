function validateForm() {
    let title = document.getElementById("title").value.trim();
    let author = document.getElementById("author").value.trim();
    let content = document.getElementById("content").value.trim();

    if (title.length < 1 || author.length < 1 || content.length < 1) {
        alert("모든 항목을 작성해주세요.");
        return false;
    }

    alert("게시글이 등록되었습니다");
    parent.loadPage('menu4-1.html');
}

function cancelForm() {
    alert("입력이 취소되었습니다.");
    parent.loadPage('menu4-1.html');
  }

function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("content").value = "";
  }