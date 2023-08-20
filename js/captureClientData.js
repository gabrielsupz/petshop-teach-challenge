const form = document.querySelector('form')
let customers = JSON.parse(localStorage.getItem('customers')) || []

form.addEventListener('submit', e => {
  e.preventDefault()

  const tutorInfo = form.querySelector('fieldset[name="tutorInfo"]')
  const petInfo = form.querySelector('fieldset[name="petInfo"]')

  const tutorName = tutorInfo.querySelector('#tutorName').value
  const phone = tutorInfo.querySelector('#phone').value
  const address = tutorInfo.querySelector('#address').value
  const serviceDate = tutorInfo.querySelector('#serviceDate').value

  const petName = petInfo.querySelector('#petName').value
  const petAge = petInfo.querySelector('#petAge').value
  const size = petInfo.querySelector('#size').value
  //Validação básica dos dados
  if (
    !tutorName ||
    !phone ||
    !address ||
    !serviceDate ||
    !petName ||
    !petAge ||
    !size
  ) {
    alert('Por favor preencha todos os campos')
    return
  }

  if (phone.length < 9) {
    alert('Numero de telefone inválido.')
    return
  }

  const currentDate = new Date()
  const selectedDate = new Date(serviceDate)

  if (selectedDate.getFullYear() <= 1999 || selectedDate > currentDate) {
    alert('Ano invalido')
    return
  }

  //Salvando

  //Cria objeto cliente
  const clientData = {
    tutorInfo: {
      tutorName,
      phone,
      address,
      serviceDate
    },
    petInfo: {
      petName,
      petAge,
      size
    }
  }

  customers.push(clientData)

  localStorage.setItem('customers', JSON.stringify(customers))
  window.location.href = 'customers.html'
  form.reset()
})
