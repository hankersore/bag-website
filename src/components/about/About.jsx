import './About.css';
import Container from '../container/Container';
import Button from '../button/Button';
import bags from '../../assets/section2.png';



export default function About () {
    return (
        <Container>
            <div className='about'>
            <img src={bags} alt="" />
            <div className='about__content'>
                <h2>Creative bag only for you.</h2>
                <h1>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <Button text='see more'/>
            </div>
            </div>
        </Container>
    )
}