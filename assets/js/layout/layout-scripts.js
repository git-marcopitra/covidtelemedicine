console.log("JavaScriptLayout is running...")
router('main')

window.onload = () => {
    const changeModal = document.querySelectorAll('#change-modal')
    const closeModal = document.querySelectorAll('#close-modal')
    const changeMain = document.querySelectorAll('#change-main')
    const modals = document.querySelectorAll('.modal')
    const fields = document.querySelectorAll('.field')


    const userButton = document.getElementById('user-button')
    const menuButton = document.getElementById('menu-button')
    const logRequest = document.getElementById('logRequest')
    const modal = document.getElementById('modal')

    changeMain.forEach(menuOpt => {
        menuOpt.addEventListener('click', () => {
            route = menuOpt.value
            toggleMenu()
            router(route)
        })
    })


    changeModal.forEach(changeTo => {
        changeTo.addEventListener('click', () => {
            let value = changeTo.value
            if (value == 'login' || value == 'signup') {
                login()
                hideAllElements(modals)
                hideElement(modal)
            } else if (value == 'logout') {
                logout()
                hideAllElements(modals)
                hideElement(modal)
            } else {
                let target = document.getElementById(changeTo.value)
                hideAllElements(modals)
                showElement(target)
            }
        })
    })

    userButton.addEventListener('click', () => {
        showElement(modal)
        let userAction
        if (!isLogged)
            userAction = document.getElementById('sign-in')
        else
            userAction = document.getElementById('account')
        showElement(userAction)

    })

    menuButton.addEventListener('click', () => toggleMenu())

    fields.forEach(field => {
        field.addEventListener('keyup', () => {
            let value = field.value
            let label = document.getElementById('label-' + field.id)
            if (value.length > 0) {
                showElement(label)
            } else {
                hideElement(label)
            }
        })
    })

    modals.forEach(eachModal => {
        eachModal.addEventListener('blur', () => {
            hideElement(this)
            hideElement(modal)
        })
    })

    closeModal.forEach(close => {
        close.addEventListener('click', () => {
            hideAllElements(modals)
            hideElement(modal)
        })
    })


    if (!isLogged) {
        toggleElement(modal)
        toggleElement(logRequest)
    } else {
        login();
    }
}


const toggleMenu = () => {
    let mainMenu = document.getElementById('main-menu')
    let menuIcon = document.getElementById('menu-icon')
    toggleElement(mainMenu)
    toggleClass(menuIcon, 'fa-bars', 'fa-times')
}