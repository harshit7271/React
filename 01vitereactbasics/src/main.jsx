import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

export default function MyApp() {
    return (
        <>
            <h1>Garima is the best</h1>
        </>
    )
}

/*
const ReactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank',
    },
        children : 'Click here to visit Google'
}
*/

/*
const anotherElement = (
    <a href="https://www.google.com" target='_blank'>Click here to visit Google</a>
)
*/

/*
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click here to visit Google'
)
*/
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)