function loadPage(page) {
    document.querySelector('#contentFrame').src = page;
}


let p_width = 500;
let p_height = 450;
let b_left = window.screenX + (window.outerWidth - p_width) / 2;
let b_top = window.screenY + (window.outerHeight - p_height) / 2;

function openPopup(popup) {
    let newWin = window.open(`${popup}`, "", `width=${p_width}, height=${p_height}, left=${b_left}, top=${b_top}`);
    if (newWin == null) {
        alert("팝업이 차단되어 있습니다. 차단을 해제해 주세요.");
    }
}