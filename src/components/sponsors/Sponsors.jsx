import './Sponsors.css';
import Container from '../container/Container';
import logo1 from '../../assets/Company logo.png';
import logo2 from '../../assets/Company logo (1).png';
import logo3 from '../../assets/Company logo (2).png';
import logo4 from '../../assets/Company logo (3).png';



export default function Sponsors () {
    return (
        <Container>
            <div className='sponsors'>
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        </div>
        </Container>
    )
}