import { useEffect, useState } from 'react';
import './styles.css';
import family from '../assets/family.jpeg';
import home from '../assets/home.jpg';
import keroarts from '../assets/keroarts.jpg';
import Image from 'next/image';

export default function Home() {
    const [clicked, setClicked] = useState(false);
    const [position, setPosition] = useState(0);

    const imageList = [home, family, keroarts];

    useEffect(() =>{
        if(!clicked) return;
        
        if(position >= imageList.length){
            setClicked(false);
            setPosition(0);
            return;
        }
        setTimeout(() => {  
            setPosition(position+1);
        }, 3000);

    },[position, clicked]);

    return(
    <div className="main">
        {!clicked ?
        <>
            <h1>Olá Linda minha</h1>
            <div className='button' onClick={() => setClicked(true)}>Clique aqui para ver o futuro acontecer</div>
        </>
        :
        <div className='image-container'>
            <Image src={imageList[position]}  onClick={() => setClicked(false)}/>
        </div>
    }
    </div>
    )
}