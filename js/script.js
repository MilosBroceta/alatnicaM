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


const navbar = document.getElementById('navbar');
    let scrolled = false;

    window.onscroll = function () {
      if (window.pageYOffset > 100) {
        navbar.classList.remove('top');
        if (!scrolled) {
          navbar.style.transform = 'translateY(-70px)';
        }
        setTimeout(function () {
          navbar.style.transform = 'translateY(0)';
          scrolled = true;
        }, 200)
      } else {
        navbar.classList.add('top');
        scrolled = false;
      }
    }


    $('#navbar a, .btn, .footer-left a').on('click', function (e) {
      if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top - 100,
        },
          800
        );
      }
    });