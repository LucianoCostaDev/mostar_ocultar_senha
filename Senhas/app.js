const button = document.querySelectorAll('input')[1]


button.addEventListener('click', () => {
    const pass = document.querySelectorAll('input')[0]

    if ((pass.getAttribute('type') === 'password')){
        pass.setAttribute('type', 'text')
        button.setAttribute('value', 'Ocultar senha')

    }else if ((pass.getAttribute('type') === 'text')){
        pass.setAttribute('type', 'password')
        button.setAttribute('value', 'Mostrar senha')
    }    

})

