// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;
  // const priceValue = price.innerText
  const quantity = document.querySelector('.quantity input').value
  // const quantiValue = quanti.value

  const total = price * quantity
  // const totalStr = parseInt(total)
  // // console.log(totalStr)
  const totalprice = product.querySelector('.subtotal span');
   totalprice.innerText = total

   return total


}

function calculateAll() {

    const products = document.getElementsByClassName('.product')
    const totalPriceField = document.querySelector('#total-value span')
    let totalprice = 0

    products.array.forEach(product => {
      totalprice += updateSubtotal(product)
    });

   totalPriceField.innerText = totalprice
   
}



function removeProduct(event) {
  const target = event.currentTarget;
  const tbody = target.parentNode.parentNode.parentNode

  tbody.removeChild(target.parentNode.parentNode)

  calculateAll()
  console.log('The target in remove is:', target);




}



function createProduct() {
  const inputs = document.querySelectorAll('.create-product input')
  const name = inputs[0].value 
  const price = inputs[1].value
  const tbody = document.querySelector('tbody')
  const row =`<td class="name">
  <span>${name}</span>
</td>
<td class="price">$<span>${price}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">`

  const tr = document.createElement('tr')
  tr.classList.add('product')
  tr.innerHTML = row

  tbody.appendChild(tr)
  let removeProductBtn = tr.querySelector('.btn-remove')
  removeProductBtn.addEventListener('click', removeProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


});

d.innerText