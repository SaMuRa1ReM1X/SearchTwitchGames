import React from 'react'
import { render } from 'react-dom'
import App from './components/App';

class NavBar extends React.Component {
    render() {
        <div>
            <ul id="nav">
                <li>TEST</li>
            </ul>
        </div>
    }
}

class App extends React.Component {
    render () {
        return (
            <div>
                <NavBar/>
                <div>
                    TEST
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />
    document.getElementById('app')
);