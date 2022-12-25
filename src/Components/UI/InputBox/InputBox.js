import React from "react";
import styles from "./InputBox.module.css";

const InputBox=(props)=>{
    return (
        <input className={styles.inputbox} onChange={props.onChangeHandler}/>
    )
}

export default InputBox;