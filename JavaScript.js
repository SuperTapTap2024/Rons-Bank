function login() {
    let UserName = document.getElementById('User')
    localStorage.setItem('UserName' , UserName.value)
    location.href  = 'Bank.html'

}

function home() {
    window.location.href = 'index.html';
}

function about() {
    window.location.href = 'about.html';
}

function contant() {
    location.href = 'contant.html'
}