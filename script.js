let userAgent = detect.parse(navigator.userAgent);
const popupWindow = document.getElementById('download-popup');
const popupCloseButton = document.getElementById('popup-close-button');

if (userAgent) {
    let os = userAgent.os.family.toLowerCase();
    if (os === 'ios' || os === 'android') {
        triggerPopup(os);
    }
    
}

function triggerPopup(divIdPrefix) {
    let button = document.getElementById(divIdPrefix + '-download-button');

    if(button) {
        button.style.display = "block";
        setTimeout(() => {
            popupWindow.classList.add('popup-window--active');
        }, 2000);
    }
}

if (popupWindow) {
        popupCloseButton.addEventListener('click', () => {
            popupWindow.classList.remove('popup-window--active');
        });
}
