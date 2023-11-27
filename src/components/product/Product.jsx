import './Product.css';
import Container from '../container/Container';
import product from '../../assets/product.png';
import Button from '../button/Button';


export default function Product () {
    return (
        <Container>
            <div className='product'>
            <div className='heading'>
                <h1>our available product</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
            <div className='catalog'>
                <img src={product} alt="" />
                <img src={product} alt="" />
                <img src={product} alt="" />
                <img src={product} alt="" />
                <img src={product} alt="" />
                <img src={product} alt="" />
                <img src={product} alt="" />
                <img src={product} alt="" />
            </div>
            <Button text='see more'/>
            </div>
        </Container>
    )
}