import React from "react";
import { useState } from "react";
import styles from './styles.module.css';
const Counter = ({initialValue}) => {
    const [count,setCount] = useState(initialValue);
    if(count%2==0){
        console.log(count);
    }
    return (
        <>
        
            <h1>Counter Apk</h1>
            <h1 className={count%2==1 ? styles.color1 : styles.color2}>{count}</h1>
            <button className={styles.inc} onClick={()=>{setCount(count+1)}}>Increament</button>
            <button className={styles.dec} onClick={()=>{
                if(count>0){
                    setCount(count-1);
                }
            }}>Decreament</button>
            <button className={styles.double} onClick={()=>{setCount(count*2)}}>Double</button>
        </>
    );
};

export { Counter }