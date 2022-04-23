(function () {

    let socials = document.querySelector('.social div')

    socials.forEach(function (social, index) {
        social.style.animation = 'moveIn 1s ease-in-out forwards ${index}s'
    })

    let rocketPieces = document.querySelectorAll('.rocket-body span')

    let rocket = document.querySelector('.rocket')

    let animationStrt = window.innerHeight / 5;

    let rocketoffSetTop = rocket.offsetTop;

    document.addEventListener('scroll', (e) => {
        if (window.scroll > (rocketoffSetTop - animationStrt)) {
            rocketPieces[0].classList.add('active')
            rocketPieces[1].classList.add('active')
        }
    })

}())