(function(){

    let socials = document.querySelector('.social div')

    socials.forEach(function(social, index){
        social.style.animation = 'moveIn 1s ease-in-out forwards ${index}s'
    })

}())