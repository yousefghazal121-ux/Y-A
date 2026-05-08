// 1. Hämta alla element (vi använder ID för att vara säkra)
const loginForm = document.querySelector('form');
const rememberMe = document.querySelector('.remember-forgot input');
const usernameInput = document.querySelector('.input-box input[type="text"]');
const passwordInput = document.getElementById('loginPass'); // Ändrad rad!
const toggleIcon = document.getElementById('toggleIcon');

// 2. KOLL: "Remember me"
if (localStorage.getItem('rememberedUser')) {
    usernameInput.value = localStorage.getItem('rememberedUser');
    rememberMe.checked = true;
}

// 3. FUNKTION: Visa/Dölj lösenord
toggleIcon.addEventListener('click', function () {
    // Kolla om typen är password
    const isPassword = passwordInput.type === 'password';
    
    // Ändra typ: om password -> text, annars -> password
    passwordInput.type = isPassword ? 'text' : 'password';
    
    // Byt ikon (bx-hide är överstruket, bx-show är öppet öga)
    this.classList.toggle('bx-show');
    this.classList.toggle('bx-hide');
});

// 4. FUNKTION: Logga in
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const enteredUser = usernameInput.value;
    const enteredPass = passwordInput.value;
    const savedUser = localStorage.getItem('registeredUser');
    const savedPass = localStorage.getItem('registeredPass');

    if (enteredUser === savedUser && enteredPass === savedPass) {
        if (rememberMe.checked) {
            localStorage.setItem('rememberedUser', enteredUser);
        } else {
            localStorage.removeItem('rememberedUser');
        }
        window.location.href = "index.html";
    } else {
        alert('Wrong username or password!');
    }
});
const toggleReg = document.getElementById('toggleReg');
const regPass = document.getElementById('regPass');

toggleReg.addEventListener('click', function () {
    const isPassword = regPass.type === 'password';
    regPass.type = isPassword ? 'text' : 'password';
    this.classList.toggle('bx-show');
    this.classList.toggle('bx-hide');
});
// Hitta alla ögon-ikoner i password.html
document.querySelectorAll('.toggle-password').forEach(icon => {
    icon.addEventListener('click', function() {
        // Hitta input-fältet som ligger precis bredvid ikonen man klickade på
        const input = this.parentElement.querySelector('input');
        const isPassword = input.type === 'password';
        
        input.type = isPassword ? 'text' : 'password';
        this.classList.toggle('bx-show');
        this.classList.toggle('bx-hide');
    });
});