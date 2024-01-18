const cursor = document.querySelector('.interactive')

document.addEventListener('mousemove', (e) => {
    let x = e.pageX
    let y = e.pageY

    cursor.style.top = y + 'px'
    cursor.style.left = x + 'px'
})