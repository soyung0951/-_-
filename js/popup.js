function login() {
  const id = document.getElementById("userId").value;
  const pw = document.getElementById("password").value;

  if (!id || !pw) {
    alert("아이디와 비밀번호를 입력해주세요.");
    return;
  }
}

function openPopup(popup) {
  const width = 500;
  const height = 450;
  const left = window.screenX + (window.outerWidth - width) / 2;
  const top = window.screenY + (window.outerHeight - height) / 2;

  window.open(`${popup}`, '', `width=${width},height=${height},left=${left},top=${top}`);
  
  window.close();
}