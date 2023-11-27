import './Showcase.css';
import Container from '../container/Container';
import girl from '../../assets/showcase.png';
import Button from '../button/Button';

export default function Showcase () {
    return (
        <div className='showcase'>
            <Container>
                <div className='showcase__content'>
                    <h2>look stylish be stylish</h2>
                    <h1>Look Stylish <br /> Be Stylish</h1>
                    <p>Before starting this business you should have ideas about the market and products to Compete with the Existing Businesses.</p>
                    <Button text='join shop'/>
                </div>
                <img src={girl} alt="" className='girl' />
            </Container>
        </div>
    )
}