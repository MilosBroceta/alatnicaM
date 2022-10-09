let valueDispalys = document.querySelectorAll (".num");
let interval = 7000;

valueDispalys.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute
    ("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
    startValue  += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
        clearInterval(counter);
    }

   },  duration);
});