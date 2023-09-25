const insert = document.getElementById('insert');
const keys = document.querySelectorAll('.key');


window.addEventListener('keydown', function(e) {
    console.log(e);
    insert.innerHTML = `
        <div class="key">
            <small>event.key</small>
            <p class="keycode">${e.key === ' ' ? 'Space' : e.key}</p>
        </div>
        <div class="key">
            <small>event.keyCode</small>
            <p class="keycode">${e.keyCode}</p>
        </div>
        <div class="key">
            <small>event.code</small>
            <p class="keycode">${e.code}</p>
        </div>    
    `;
})