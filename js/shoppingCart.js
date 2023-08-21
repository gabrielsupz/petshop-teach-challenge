let productsInTheCart =
  JSON.parse(localStorage.getItem('productsInTheCart')) || []

const addToCartButtons = document.querySelectorAll('.addToCart')
//Adiciona evento para botões onde o produto com seu nome e preço serão add ao carrinho

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.product')
    const productName = productCard.querySelector('h2').textContent
    const productPrice = productCard.querySelector('.priceValue').textContent

    const productInCart = {
      productName,
      productPrice
    }
    //Testanto se o produto já está no carrinho
    const isProductInCart = productsInTheCart.some(
      item => item.productName === productName
    )

    if (isProductInCart) {
      alert(`Produto ${productInCart.productName} já está no carrinho!`)
      button.disabled = true
    } else {
      button.addEventListener('click', () => {
        productsInTheCart.push(productInCart)
        localStorage.setItem(
          'productsInTheCart',
          JSON.stringify(productsInTheCart)
        )

        alert(`Produto ${productInCart.productName} colocado no carrinho!`)
        update()
        button.disabled = true
      })
    }
  })
})

// O carrinho de compras atualizará a o numero mostrando a quantidade de itens dentro do carrinho

const quantityOfItemsInCart = document.querySelector('#quantityOfItemsInCart')
quantityOfItemsInCart.textContent = productsInTheCart.length

function update() {
  quantityOfItemsInCart.textContent = productsInTheCart.length
}
