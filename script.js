function toggleMenu(){
document.getElementById('mobileMenu').classList.toggle('hidden')
}

function toggleTheme(){
document.documentElement.classList.toggle('dark')
let btn = document.getElementById('themeBtn')

if(document.documentElement.classList.contains('dark')){
btn.textContent = "☀"
localStorage.setItem('theme','dark')
}else{
btn.textContent = "🌙"
localStorage.setItem('theme','light')
}
}

if(localStorage.getItem('theme')==='dark'){
document.documentElement.classList.add('dark')
document.getElementById('themeBtn').textContent="☀"
}
