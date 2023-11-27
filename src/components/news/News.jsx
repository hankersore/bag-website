import './News.css';
import Container from '../container/Container';
import Button from '../button/Button';
import news from '../../assets/newsletter.png';


export default function News () {
    return (
        <Container>
            <div className='news'>
                <img src={news} alt="" />
                <div className='news__content'>
                    <h1>Lorem ipsum dolor sit amet  adipiscing elit.</h1>
                    <form>
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email'/>
                        <input type="text" placeholder='Address'/>
                    </form>
                    <div className='check'>
                        <div>
                        <input type="checkbox" name="" id="check" />
                        <label htmlFor="check">  Lorem ipsum dolor sit amet.</label>
                        </div>
                        <Button text='join now'/>
                    </div>
                </div>
            </div>
        </Container>
    )
}