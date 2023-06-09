import {putToLocalStorage, getFromLocalStorage} from './service.js'

const btn_daftar = document.getElementById('daftar')

const handleData = () => {
    const namaDepan = document.getElementById('namadepan').value;
    const namaBelakang = document.getElementById('namabelakang').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const konfirmasiPassword = document.getElementById('konfirmasi').value
    if (namaDepan === '' && namaBelakang === '' && email === '' && password === '' && konfirmasiPassword === '') {
        return {
            namaDepan: null,
            namaBelakang: null,
            email: null,
            password: null,
            konfirmasiPassword: null,
        }
    }
    return { namaBelakang, namaDepan, email, password, konfirmasiPassword, }
}

const isPasswordMatch = (data) => {
    return data.password === data.konfirmasiPassword ? true : false;
};

const validateFormData = (data) => {
    if (data.namaDepan == null && data.namaBelakang == null && data.email == null && data.password == null && data.konfirmasiPassword == null) {
        return false
    }
    return true
}

const handleRegister = (data) => {
    if (!validateFormData(handleData())) {
        alert ('isi semua field')
    }
    if (!isPasswordMatch(handleData())) {
        return alert('password do not match')
    }
    const user = {
        nama: data.namaDepan,
        email: data.email,
        password: data.password
    }
    console.log(user)
    putToLocalStorage(user)
    alert('Kamu Berhasil Terdaftar, Klik Ok Untuk Lanjut')
        window.location.href = '../../login.html'
        form.reset
}

btn_daftar.addEventListener('click', (event) => {
    event.preventDefault()
    handleRegister(handleData())
    console.log(handleData())
})
