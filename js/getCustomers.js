let customers = JSON.parse(localStorage.getItem('customers')) || []
getCustomers()
function getCustomers() {
  customers.forEach(e => {
    //Ajustando a data para mostrar
    const date = e.tutorInfo.serviceDate
    const day = date.substr(8, 2)
    const month = date.substr(5, 2)
    const year = date.substr(0, 4)

    const serviceDate = `${day}/${month}/${year}`
    createPetCard(
      e.petInfo.petName,
      e.petInfo.petAge,
      e.petInfo.size,
      e.tutorInfo.tutorName,
      e.tutorInfo.phone,
      e.tutorInfo.address,
      serviceDate
    )
  })
}

function createPetCard(
  petName,
  age,
  size,
  tutorName,
  phone,
  address,
  serviceDate
) {
  const petCard = document.createElement('div')
  petCard.classList.add('petCard')

  const petCardTitle = document.createElement('h4')
  petCardTitle.classList.add('Subtitle')
  petCardTitle.textContent = petName

  const petImageElement = document.createElement('img')
  petImageElement.src = './assets/cardPetImage.png'
  petImageElement.alt = 'Imagem de um cachorrinho de gravata'

  petCardTitle.appendChild(petImageElement)
  petCard.appendChild(petCardTitle)

  const hoverPetCardInfo = document.createElement('div')
  hoverPetCardInfo.classList.add('hoverPetCardInfo')

  const ageInfo = document.createElement('p')
  ageInfo.innerHTML = `<strong>Idade(Anos):</strong> ${age}`
  hoverPetCardInfo.appendChild(ageInfo)

  const tutorInfo = document.createElement('p')
  tutorInfo.innerHTML = `<strong>Dono:</strong> ${tutorName}`
  hoverPetCardInfo.appendChild(tutorInfo)

  const phoneInfo = document.createElement('p')
  phoneInfo.innerHTML = `<strong>Telefone:</strong> ${phone}`
  hoverPetCardInfo.appendChild(phoneInfo)

  const addressInfo = document.createElement('p')
  addressInfo.innerHTML = `<strong>Endereço:</strong> ${address}`
  hoverPetCardInfo.appendChild(addressInfo)

  petCard.appendChild(hoverPetCardInfo)

  const sizeInfo = document.createElement('p')
  sizeInfo.textContent = `Porte ${size}`
  petCard.appendChild(sizeInfo)

  const serviceDateInfo = document.createElement('p')

  serviceDateInfo.textContent = serviceDate
  petCard.appendChild(serviceDateInfo)

  const customersSection = document.getElementById('customersSection')
  customersSection.appendChild(petCard)
}
