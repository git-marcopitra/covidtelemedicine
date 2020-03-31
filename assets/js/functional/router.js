console.log('JavaScriptRouter was executed...')
const components = document.querySelectorAll('link[rel="import"]')
const target = document.querySelector('#router')

const router = ($route) => {
    let component
    target.innerHTML = ''
    components.forEach(comp => {
        if (comp.id == $route) {
            component = comp.import.querySelector(`#${$route}`).cloneNode(true)
        }
    })
    if (target.appendChild(component))
        console.log("Routing successfully")
}