document.querySelector (".burger__active ") .addEventListener ('click', (e)=>{
        e.preventDefault ()
        document .querySelector ('.media__menu').classList .toggle( 'burger')
        document .querySelector ('.burger__activ').classList .toggle ('burger__btn')
})


