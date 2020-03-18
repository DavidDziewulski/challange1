const registerForm = document.querySelector('#register')
registerForm.addEventListener('submit', function (e) {
  e.preventDefault()
  e.target.elements.userName.value = ''
  e.target.elements.password.value = ''
  e.target.elements.passwordcheck.value = ''
  e.target.elements.email.value = ''
  e.target.elements.city.value = ''
})

const sendEmail = document.querySelector('#sendEmail')
sendEmail.addEventListener('submit', function (e) {
  e.preventDefault()

  e.target.elements.userName.value = ''
  e.target.elements.email.value = ''
  e.target.elements.userText.value = ''
})

const signInForm = document.querySelector('#signInForm')
signInForm.addEventListener('submit', function (e) {
  e.preventDefault()

  e.target.elements.userName.value = ''
  e.target.elements.password.value = ''
})

const recoverForm = document.querySelector('#recoverForm')
recoverForm.addEventListener('submit', function (e) {
  e.preventDefault()
  e.target.elements.email.value = ''
  e.target.elements.phone.value = ''
})

const subscribe = document.querySelector('#subscribe')
subscribe.addEventListener('submit', function (e) {
  e.preventDefault()

  e.target.elements.email.value = ''
})
