document.body.addEventListener('click', (event) => {
    const target = event.target;

    if (!target.classList.contains('has-tooltip')) {
        const activeTooltip = document.querySelector('.tooltip_active');
        if (activeTooltip) {
            activeTooltip.remove();
        }
        return;
    }

    event.preventDefault();

    const existingTooltip = target.nextElementSibling;
    if (existingTooltip && existingTooltip.classList.contains('tooltip_active')) {
        existingTooltip.remove();
        return;
    }

    const activeTooltip = document.querySelector('.tooltip_active');
    if (activeTooltip) {
        activeTooltip.remove();
    }

    let tooltip = target.nextElementSibling;
    if (!tooltip || !tooltip.classList.contains('tooltip')) {
        tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = target.title;
        target.insertAdjacentElement('afterend', tooltip);
    }

    const rect = target.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.pageXOffset}px`;
    tooltip.style.top = `${rect.bottom + window.pageYOffset}px`;
    tooltip.classList.add('tooltip_active');
});
