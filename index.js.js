let input = document.getElementById('input');
let setp = document.getElementById('setp');
let enter = document.getElementById('enter');
let area = document.getElementById('area')
let next = document.getElementById('next')
let anchor = document.getElementById('anchor');
setp.addEventListener('click', () => {
    localStorage.setItem("body", input.value)
    input.value = ""
})

enter.addEventListener('click', () => {


    if (input.value == localStorage.getItem("body", input.value))
        area.innerText = "correct_password"
    else
        area.innerText = "incorrect_password"
})

