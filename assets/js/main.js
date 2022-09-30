const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActivated();
        panel.classList.add('active');
    })
})

let removeActivated = function() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}