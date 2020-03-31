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
    changeUserIcon()
}

const logout = () => {
    isLogged = false
    changeUserIcon()
}

const changeUserIcon = () => {
    const userIcon = document.getElementById('user-icon')
    toggleClass(userIcon, 'fal', 'fas')
}
const toggleClass = ($element, $class1, $class2) => {
    if ($element.classList.contains($class1)) {
        $element.classList.remove($class1)
        $element.classList.add($class2)
    } else {
        $element.classList.remove($class2)
        $element.classList.add($class1)
    }
}