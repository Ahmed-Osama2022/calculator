

// Screen
const screen = document.querySelector('.screen');
// Buttons
const resetBtn = document.querySelector('.calc-button.douple');
const backBtn = document.querySelector('.calc-button.back');
const plusBtn = document.querySelector('.calc-button.plus');
const minusBtn = document.querySelector('.calc-button.minus');
const devideBtn = document.querySelector('.calc-button.divide');
const timesBtn = document.querySelector('.calc-button.times');


console.log(resetBtn);
console.log(backBtn);

console.log(plusBtn);
console.log(minusBtn);
console.log(timesBtn);
console.log(devideBtn);



/**
 * clear the screen
 */
// let screenValue = screen.textContent;
screen.textContent = '1007';
console.log(screen.textContent.length);

resetBtn.addEventListener('click', () => {
    screen.textContent = 0;
});


backBtn.addEventListener('click', () => {
    // screen.textContent.length -= 1;
    // screen.textContent =  screen.textContent.length -= 1;
    let screenValue = screen.textContent.split(''); // Array
    screenValue.pop();
    console.log(screenValue);
    console.log(screenValue.length);
    let newScreenValue = screenValue.join('');
    console.log(newScreenValue);

    screen.textContent = newScreenValue;
    if (screenValue.length === 0) {
        screen.textContent = 0;
    }

})



