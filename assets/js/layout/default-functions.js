const toggleElement = ($element) => {
    if ($element.classList.contains('invisible')) {
        showElement($element)
    } else {
        hideElement($element)
    }
}

const showElement = ($element) => {
    $element.classList.remove('invisible')
}
const hideElement = ($element) => {
    $element.classList.add('invisible')
}

const showAllElements = ($elements) => {
    $elements.forEach(element => { showElement(element) })
}

const hideAllElements = ($elements) => {
    $elements.forEach(element => { hideElement(element) })
}

const login = () => {
    isLogged = true
    const userIcon = document.getElementById('session-icon')
    userIcon.classList.remove('fal')
    userIcon.classList.add('fas')
}