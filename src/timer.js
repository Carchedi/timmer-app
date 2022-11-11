import { useEffect, useState } from "react";
import Blink from 'react-blink-text';

function Timer({maxRange}){
    const [counter,setCounter] = useState(maxRange);

    useEffect (()=>{ 
         if(counter > 0){
            setTimeout(()=>setCounter(counter-1),100);
         }
 
    },[counter])
 
        if(counter <  51){
            if(counter > 9){
                return ( 
                    /*uncomment to blink effect*/
                    /*<Blink color='red' text={(Math.round(counter * 10) / 100).toFixed(1)} fontSize='20'/> */
                    <div>
                        <span  style={{ color: 'red' }}>0</span>
                        <span  style={{ color: 'red' }}>{(Math.round(counter * 10) / 100).toFixed(1)}</span>   
                    </div>
                )   
            }else{ 
                return(
                    <div> 
                        <span  style={{ color: 'red' }}>00.0</span>
                    </div>
                )
            }
        }else{
            if(counter < 100){
                return (
                    <div style={{ color: 'black' }}>                    
                        <span>0</span>
                        <span>{(Math.round(counter * 10) / 100).toFixed(1)}</span>
                    </div>

                )
            }else{
                return (
                    <div style={{ color: 'black' }}>                     
                        <span>{(Math.round(counter * 10) / 100).toFixed(1)}</span>
                    </div>

                )
            }
        }
}
export default Timer;