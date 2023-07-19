const windowElement = document.querySelector('.window');
const shortcutElement = document.querySelector('.desktop-icon')
let isDragging = false;
let offsetX, offsetY;
let isWindowVisible = true;

// Function to handle mouse down event
function handleMouseDown(event) {
    isDragging = true;
    const rect = windowElement.getBoundingClientRect();
    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;
}

// Function to handle mouse move event
function handleMouseMove(event) {
    if (!isDragging) return;
    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;
    windowElement.style.left = x + 'px';
    windowElement.style.top = y + 'px';
}

// Function to handle mouse up event
function handleMouseUp() {
    isDragging = false;
}

// Function to toggle window visibility
function toggleWindowVisibility() {
    isWindowVisible = !isWindowVisible;
    windowElement.style.display = isWindowVisible ? 'block' : 'none';
}

// Function to handle keyboard shortcuts
function handleKeyPress(event) {
    if (event.ctrlKey && event.altKey && event.key === 'w') {
        // Ctrl + Alt + W will toggle the window visibility
        toggleWindowVisibility();
    }
}

// Add event listeners
windowElement.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('mouseup', handleMouseUp);
window.addEventListener('keydown', handleKeyPress);
