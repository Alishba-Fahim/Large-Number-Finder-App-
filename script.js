function findLargestNumber(event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const result = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        result.textContent = "Please enter valid numbers!";
        result.style.display = "block";
        return;
    }

    const largest = Math.max(num1, num2, num3);

    result.textContent = `The largest number is: ${largest}`;
    result.style.display = "block";
}

document.getElementById('numberForm').addEventListener('submit', findLargestNumber);
