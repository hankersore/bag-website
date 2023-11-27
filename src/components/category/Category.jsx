import './Category.css';
import Container from "../container/Container";
import Card from "../card/Card";
import React, {useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';


export default function Category () {
    const [data, setData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const category = searchParams.get('category');

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data)=>{
            if(!category){
                setData(data)
            } else{
                const filteredData = data.filter((item)=>{
                    return item.category == category
                })
                setData(filteredData);
            }
        })
    },[category])
    
    return (
        <div>
           <Container>
          <div className='buttons'>
          <button onClick={()=>{setSearchParams({category:"men's clothing"})}}>men's clothing</button>
            <button onClick={()=>{setSearchParams({category:'jewelery'})}}>jewelery</button>
            <button onClick={()=>{setSearchParams({category:'electronics'})}}>electronics</button>
            <button onClick={()=>{setSearchParams({category:"women's clothing"})}}>women's clothing</button>
          </div>
           <div className='cards'>
           {
            data.map((product)=>(
                    <Card key={product.id} image={product.image}/>
                ))
            }
           </div>
           </Container>
        </div>
    )
}
