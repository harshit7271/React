function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
}

const reactElements = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank',
    },
        children : 'Google Link'
    // props is an object
}

const mainContainer = document.querySelector('#root')

customRender(reactElements, mainContainer)