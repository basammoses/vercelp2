const baseURL = 'https://vercelp2.vercel.app/api/'






/* eslint-disable no-undef */
//@ts-nocheck

const cartIcon = document.querySelector('#cart-icon')
const cart = document.querySelector('.cart')
const closeCart = document.querySelector('#close-cart')


cartIcon.onclick = () => {
  cart.classList.add('active')
}
closeCart.onclick = () => {
  cart.classList.remove('active')
}


if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  const removeCartItemButtons = document.getElementsByClassName('cart-remove')
  for (let i = 0; i < removeCartItemButtons.length; i++) {
    const button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
  }
  var quantityInputs = document.getElementsByClassName('cart-quantity')
  for (let i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
  }
  var addCart = document.getElementsByClassName('add-cart')
  for (let i = 0; i < addCart.length; i++) {
    var button = addCart[i]
    button.addEventListener('click', addToCartClicked)
  }
}
document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked)

function buyButtonClicked() {
  alert('Thank you for your purchase')
  var cartItems = document.getElementsByClassName('cart-content')[0]
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild)
  }
  updatetotal()
}


function removeCartItem(event) {
  const buttonClicked = event.target
  buttonClicked.parentElement.remove()
  updatetotal()
}
function quantityChanged(event) {
  const input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updatetotal()
}


function addProductToCart(title, price, productImage) {
  var cartShopBox = document.createElement('div')
  cartShopBox.classList.add('cart-box')
  var cartItems = document.getElementsByClassName('cart-content')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-product-title')
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert('This item is already added to the cart')
      return
    }
  }
  var cartBoxContent = `<img src="${productImage}" alt="" class="cart-img">
  <div class="detail-box">
  <div class ="cart-product-title">${title}</div>
  <div class ="cart-price">${price}</div>
  <input type = "number" value = "1" class = "cart-quantity">
  </div>
  <i class = 'bx bxs-trash-alt cart-remove'></i>`
  
  cartShopBox.innerHTML = cartBoxContent
  cartItems.append(cartShopBox)
  cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem)
  cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)
  
  
}
function updatetotal() {
  var cartContent = document.getElementsByClassName('cart-content')[0]
  var cartBoxes = cartContent.getElementsByClassName('cart-box')
  var total = 0
  for (let i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i]
    var priceElement = cartBox.getElementsByClassName('cart-price')[0]
    console.log(priceElement)
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
    var price = parseFloat(priceElement.innerText.replace('$', ''))
    var quantity = quantityElement.value
    total = total + (price * quantity)
  }
    
  document.getElementsByClassName('total-price')[0].innerText = '$' + total
    
}
function addToCartClicked(event) {
  var button = event.target
  var shopProducts = button.parentElement
  var title = shopProducts.getElementsByClassName('product-title')[0].innerText
  var price = shopProducts.getElementsByClassName('product-price')[0].innerText
  var productImg = shopProducts.getElementsByClassName('product-img')[0].src
  addProductToCart(title, price, productImg)
  updatetotal()
}








// function addItemToCart(title, price, imageSrc) {
//   const cartRow = document.createElement('div')
//   cartRow.classList.add('cart-item')
//   const cartItems = document.getElementsByClassName('cart-items')[0]
//   const cartItemNames = cartItems.getElementsByClassName('cart-title')
//   for (let i = 0; i < cartItemNames.length; i++) {
//     if (cartItemNames[i].innerText == title) {
//       alert('This item is already added to the cart')
//       return
//     }
//   }
// }

// function addToCartClicked(event) {
//   const button = event.target
//   const shopItem = button.parentElement
//   const title = shopItem.getElementsByClassName('product-title')[0].innerText
//   const price = shopItem.getElementsByClassName('product-price')[0].innerText
//   const imageSrc = shopItem.getElementsByClassName('product-image')[0].src
//   addItemToCart(title, price, imageSrc)
//   updateTotalPrice()
// }

// function updateTotalPrice() {
//   const cartItems = document.getElementsByClassName('cart-item')
//   let total = 0
//   for (let i = 0; i < cartItems.length; i++) {
//     const cartItem = cartItems[i]
//     const priceElement = cartItem.getElementsByClassName('cart-price')[0]
//     const quantityElement = cartItem.getElementsByClassName('cart-quantity')[0]
//     const price = parseFloat(priceElement.innerText.replace('$', ''))
//     const quantity = quantityElement.value
//     total = total + (price * quantity)
//   }
//   total = Math.round(total * 100) / 100
//   document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
// }

