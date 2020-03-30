console.log("JavaScriptLayout is running")
window.onload = () => {
    const changeModal = document.querySelectorAll('#change-modal')
    const closeModal = document.querySelectorAll('#close-modal')
    const modals = document.querySelectorAll('.modal')
    const fields = document.querySelectorAll('.field')
    const userIcon = document.getElementById('session-icon')

    const modal = document.getElementById('modal')
    const logRequest = document.getElementById('logRequest')

    changeModal.forEach(changeTo => {
        changeTo.addEventListener('click', () => {
            let value = changeTo.value
            if (value == 'login' || value == 'signup') {
                login()
                hideAllElements(modals)
                hideElement(modal)
            } else {
                let target = document.getElementById(changeTo.value)
                hideAllElements(modals)
                showElement(target)
            }
        })
    })

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

    userIcon.addEventListener('click', () => {
        let target = document.getElementById('logRequest')
        hideAllElements(modals)
        showElement(target)
    })

}