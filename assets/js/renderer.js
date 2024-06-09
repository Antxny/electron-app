document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    if (window.electron) {
        button.addEventListener('click', () => {
            window.electron.send('button-click', 'Button was clicked!');
        });

        window.electron.receive('button-click-reply', (message) => {
            console.log(message);
            alert(message);
        });
    } else {
        console.error("Electron IPC is not available.");
    }
});
