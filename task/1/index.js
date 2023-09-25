
let sliderImg = document.querySelectorAll('.slider img');

function slideView(k) {
    let img = sliderImg[k];
    img.style.display = 'block';
    img.classList.add('animated');
}

async function slider() {
    for (let k = 0; k < sliderImg.length; k++) {
        if (k > 0) {
            sliderImg[k - 1].style.display = 'none';
            sliderImg[k - 1].classList.remove('animated');
        } else {
            sliderImg[sliderImg.length - 1].style.display = 'none';
            sliderImg[sliderImg.length - 1].classList.remove('animated');
        }

        await new Promise(resolve => {
            slideView(k);
            setInterval(function () {
                resolve();
            }, 10000)
        })

        if (k === 2) {
            slider();
        }
    }
}

slider();
