import { getFromLocalStorage, putActiveUser } from "./service.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btn-login")

const handleLogin = () => {
  let userdata = getFromLocalStorage()
  if (email.value === '' || password.value === '') {
    alert("Email and password are required");
    return
  }

  let user = {
    email: email.value,
    password: password.value
  }

  if (user.email === userdata.email && user.password === userdata.password) {
    putActiveUser({nama: userdata.nama, email: user.email})
    alert('Kamu Berhasil Login, Klik OK Untuk Lanjut')
    window.location.href = './../../home-page.html'
    return true
  } else {
    alert("email and password incorrect")
  }
}

btnLogin.addEventListener('click', function (event) {
  event.preventDefault(event)
  handleLogin()
})

