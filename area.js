const valueInput = document.querySelectorAll('.area-input');
const areaBtn = document.querySelector('#area-btn');
const outputEl = document.querySelector('#areaOutput');

function calculateAreaOfTriangle(a, b) {
    const areaOfTriangle = 1 / 2 * (a * b);
    return areaOfTriangle;
}

function calculateArea() {

    const areaOfTriangle = calculateAreaOfTriangle(Number(valueInput[0].value), valueInput[1].value);
    // const
    // console.log(areaOfTriangle);
    outputEl.innerText = "The area of Triangle is: " + areaOfTriangle + " cm square."
}
areaBtn.addEventListener("click", calculateArea);