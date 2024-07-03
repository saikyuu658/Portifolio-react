import './up.css'
import React, { useState, useEffect, useRef } from 'react';


function UpButton() {
    const upButton = useRef<HTMLElement>(null)
    const [scrollPosition, setScrollPosition] = useState(0);
    let isShow: boolean = false;
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
        console.log(window.scrollY)
        console.log(isShow)
        if(window.scrollY <= 400 && isShow){
            isShow = false
            upButton.current?.classList.toggle("showBox")
        }else if(window.scrollY > 400 && !isShow){
            upButton.current?.classList.toggle("showBox")
            isShow = true;
        }
        
    };

    function scrollToTop(){
        let val = scrollPosition;

        setInterval(()=>{
            if(val <= 10 ){
                return
            }
            window.scrollTo(0, val-20)
            val -= 20
        }, 3)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="button-up showBox" 
            ref={upButton}
            onClick={()=>scrollToTop()}>
            <span className="material-symbols-outlined .button-up">
                vertical_align_top
            </span>
        </div>
        
    )
}

export default UpButton