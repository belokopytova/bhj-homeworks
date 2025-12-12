const rotatorTexts = document.querySelectorAll('.rotator__case');
let currentIndex = 0;

function changeRotator() {

    rotatorTexts[currentIndex].classList.remove('rotator__case_active');
    currentIndex = (currentIndex + 1) % rotatorTexts.length;
    rotatorTexts[currentIndex].classList.add('rotator__case_active');
    const currentText= rotatorTexts[currentIndex];
    currentText.style.color = currentText.dataset.color;

    setTimeout(changeRotator, currentText.dataset.speed);
}
setTimeout(changeRotator, 1000);
