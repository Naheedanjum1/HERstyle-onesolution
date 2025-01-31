// Show tooltip when hovering
function showTooltip(icon) {
    var tooltip = document.getElementById(icon + "-tooltip");
    tooltip.style.visibility = "visible";
    tooltip.style.opacity = "1";
}

// Hide tooltip when mouse leaves
function hideTooltip(icon) {
    var tooltip = document.getElementById(icon + "-tooltip");
    tooltip.style.visibility = "hidden";
    tooltip.style.opacity = "0";
}
