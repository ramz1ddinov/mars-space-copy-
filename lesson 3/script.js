const idInp = document.getElementById('id');
const passInp = document.getElementById('password');
const btn = document.getElementById('loginBtn');

function validate() {
    if(idInp.value.trim() && passInp.value.trim()) {
        btn.disabled = false;
        btn.classList.add('active');
    } else {
        btn.disabled = true;
        btn.classList.remove('active');
    }
}

idInp.addEventListener('input', validate);
passInp.addEventListener('input', validate);