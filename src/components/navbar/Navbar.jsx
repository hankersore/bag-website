import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Container from '../container/Container'
import Button from '../button/Button';

export default function Navbar () {
    return (
        <nav>
            <Container>
                <img src={logo} alt="" className='logo' />
                <ul>
                   <li><Link to='/'>Home</Link></li>
                    <li><Link to='#'>Feature</Link></li>
                    <li><Link to='#'>About</Link></li>
                    <li><Link to='#'>Contact</Link></li>
                </ul>
                <Button text='shop now'/>
            </Container>
        </nav>
    )
}