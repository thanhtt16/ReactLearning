import React, {Component} from 'react';
import {BrowserRouter as Router, Route, NavLink, Link} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (<Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({match}) => {
        var active = match
            ? 'active abc'
            : '';
        return (
            <li className={active}>
                <Link to={to} className='my-link'>{label}</Link>
            </li>
        )
    }}/>)
}

let mn = new MenuLink({label: 'home', to: '/', activeOnlyWhenExact: true});
console.log(mn);

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* Menu */}
                    <nav className="navbar navbar-inverse">
                        <ul className="nav navbar-nav">
                            <MenuLink label='Trang chủ' to='/' activeOnlyWhenExact={true}/>
                            <MenuLink label='Liên hệ' to='/about'/>
                        </ul>
                    </nav>
                    {/* Noi dung */}
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/about' component={About}></Route>
                </div>
            </Router>
        );
    }
}

export default App;
