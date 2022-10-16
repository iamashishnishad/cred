import React, {useEffect, useState} from 'react';
import "./ProductShowcase.css";

const ProductShowcase = () => {
    const [showAnimation, setShowAnimation] = useState(false);

    const ref = useState(null);

    const toggleAnimation =(e) =>{
        if(e[0].isIntersecting){
            setShowAnimation(true);
        }
        
    }; 

    const options = {
        root: null,
        rootMargin:'0px',
        threshold: 0.5,
    };


    
  
    useEffect(()=>{
        const observer = new IntersectionObserver(toggleAnimation, options);

        if(!showAnimation){
            if(ref.current){
                observer.observe(ref.current);

            }
        }

        return ()=>{
            if(ref.current){
                observer.unobserve(ref.current);
            }
        };
    });
  
    return (
    <div className= {`product-showcase  ${showAnimation? "scale-in-bottom":""}`}
    ref={ref}
    >
        {showAnimation && (

        
        <div className='showcase-wrapper'>

            <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/new-left-2.png' className='showcase-ui showcase-mockup-1' alt='img' />
            <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/new-left-1.png' className='showcase-ui showcase-mockup-2' alt='img' />
            <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/new-center.png' className='showcase-ui showcase-mockup-3' alt='img' />
            <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/new-right-1.png' className='showcase-ui showcase-mockup-4' alt='img' />
            <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/new-right-2.png' className='showcase-ui showcase-mockup-5' alt='img' />

        </div>
        )}
    </div>
  )
}

export default ProductShowcase