// changing the current color text 
function updateColor(colorBtn, colorName) {
  document.getElementById(colorBtn).addEventListener('click', function () {
    document.getElementById('display-color').innerText = colorName;
  })
}
updateColor('spacegray-btn', 'Space Gray');
updateColor('gold-btn', 'Gold');
updateColor('silver-btn', 'Silver');
function updatePrice(btnId, costId, price) {
  document.getElementById(btnId).addEventListener('click', function () {
    const cost = document.getElementById(costId);
    cost.innerText = price;
    priceCalculate();
  })
}
function priceCalculate() {
  const startingCostValue = document.getElementById('starting-cost').innerText;
  const gpuCostValue = document.getElementById('gpu-cost').innerText;
  const storageCostValue = document.getElementById('storage-cost').innerText;
  const discountValue = document.getElementById('discount').innerText;
  const totalPrice = document.getElementById('total-price');
  const totalPriceValue = totalPrice.innerText;
  totalPrice.innerText = parseFloat(startingCostValue) + parseFloat(gpuCostValue) + parseFloat(storageCostValue) - parseFloat(discountValue);
}
updatePrice('7-core-btn', 'gpu-cost', 0);
updatePrice('8-core-btn', 'gpu-cost', 120);
updatePrice('256-storage-btn', 'storage-cost', 0);
updatePrice('512-storage-btn', 'storage-cost', 299);
updatePrice('free-delevery-btn', 'discount', 20);
updatePrice('spacegray-btn', 'starting-cost', 109);
updatePrice('gold-btn', 'starting-cost', 119);
updatePrice('silver-btn', 'starting-cost', 99);
// cupon code section 
document.getElementById('cupon-input').addEventListener('keyup', function (e) {
  if (e.target.value == 'macbookair2022') {
    document.getElementById('finish-btn').removeAttribute('disabled');
  }
  else {
    document.getElementById('finish-btn').setAttribute('disabled', true);
  }
})
