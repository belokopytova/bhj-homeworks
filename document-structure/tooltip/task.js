const toolTips = Array.from(document.getElementsByClassName("has-tooltip"));

function closeTooltips() {
    const activeTooltip = document.querySelector('.tooltip_active');
    if (activeTooltip) {
        activeTooltip.remove();
    }
}

toolTips.forEach(hintToOpen => {
    hintToOpen.addEventListener("click", (event) => {

        closeTooltips();
        
        const newDiv = document.createElement('div');
        newDiv.classList.add('tooltip');
        newDiv.classList.add('tooltip_active');
        const rect = hintToOpen.getBoundingClientRect();
        newDiv.setAttribute(
            'style', 
            `left: ${Math.round(rect.left)}px; top: ${Math.round(rect.bottom)}px;`
        );
        
        newDiv.textContent = hintToOpen.getAttribute('title');
        hintToOpen.after(newDiv);

        event.preventDefault();
    });
});

document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.classList.contains('has-tooltip')) {
        closeTooltips();
    }
});