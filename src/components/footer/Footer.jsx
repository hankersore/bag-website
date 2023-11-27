import './Footer.css';
import Container from '../container/Container';
import Button from '../button/Button';
import logo from '../../assets/logo.png';

export default function Footer () {
    return (
        <footer>
            <Container>
                <div className='footer'>
                    <ul style={{width:'20%'}}>
                        <img src={logo} alt="" />
                        <li >Lorem ipsum dolor sit amet consectetur adipiscing 
sed do eiusmod.</li>
                    </ul>
                    <ul>
                        <h1>special catagories</h1>
                        <li>water resistant</li>
                        <li>charging system</li>
                        <li>artificial leather</li>
                    </ul>
                    <ul>
                        <h1>contact us</h1>
                        <li>(808) 555-0111</li>
                        <li>michelle.rivera@example.com</li>
                        <li>http://www.codehow.com</li>
                    </ul>
                    <ul style={{width:'25%'}}>
                        <h1>news letter</h1>
                        <input type="email" placeholder='Enter your Email' />
                        <Button text='subscribe'/>
                    </ul>
                </div>
            </Container>
        </footer>
    )
}