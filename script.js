let userAgent = detect.parse(navigator.userAgent);
const popupWindow = document.getElementById('download-popup');
const popupWindowBackground = document.getElementById('popup-background');
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
            popupWindowBackground.classList.add('popup-window--active');
            popupWindow.classList.add('popup-window--active');
            popupCloseButton.focus();
        }, 2000);
    }
}

if (popupWindow) {
        popupCloseButton.addEventListener('click', () => {
            popupWindowBackground.classList.add('popup-window--active');
            popupWindow.classList.remove('popup-window--active');
        });
}
