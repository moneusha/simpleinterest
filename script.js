
function calculateSimpleInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert('Please enter valid numbers');
        return;
    }

    const simpleInterest = (principal * rate * time) / 100;
    const resultDisplay = document.getElementById('result');
    const container=document.createElement("div")

    const simple=document.createElement("p")
    const year=document.createElement("p")
    simple.textContent = `Simple Interest: ${simpleInterest.toFixed(2)}`;
    year.textContent=`Years: ${time}`

    container.appendChild(simple)
    container.appendChild(year)
    resultDisplay.append(container)
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
