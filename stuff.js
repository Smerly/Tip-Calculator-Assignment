const billInput = document.querySelector('#bill-input');
const tipInput = document.querySelector('#tip-input');
const numOfPplInput = document.querySelector('#num-of-ppl-input');
const displayTip = document.querySelector('#display-tip');
const displayTotal = document.querySelector('#display-total');

billInput.addEventListener('input', handleBill);
tipInput.addEventListener('input', handleBill);
numOfPplInput.addEventListener('input', handleBill);





function handleBill(e) {
    const percent = parseFloat(tipInput.value);
    const bill = parseFloat(billInput.value);
    const numOfPpl = parseFloat(numOfPplInput.value);

    const tip = bill * percent / 100 / numOfPpl;
    const total = bill + tip;

    displayTip.innerHTML = tip.toFixed(2);
    displayTotal.innerHTML = total.toFixed(2);
    

}


handleBill(e);