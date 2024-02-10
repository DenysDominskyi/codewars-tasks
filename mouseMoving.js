const cursor = document.querySelector('.interactive')

document.addEventListener('mousemove', (e) => {
    let x = e.pageX
    let y = e.pageY
    cursor.style.top = `${y}px`
    cursor.style.left = `${x}px`
    cursor.style.display = 'block'
})

document.addEventListener('mouseout', () => {
    cursor.style.display = 'none'
})

// ------------Navbar------------

const navBtn = document.querySelector('#nav-btn')
const navbar = document.querySelector('#nav-bar')
navBtn.onclick = () => {
    if(navbar.className === 'showed'){
        navbar.className = 'hidden'
        navBtn.className = 'show'
    } else {
        navbar.className = 'showed'
        navBtn.className = 'hide'
    }
}