function login() {
    let UserName = document.getElementById('User')
    localStorage.setItem('UserName' , UserName.value)
    location.href  = 'Bank.html'

}