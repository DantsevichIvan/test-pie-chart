import React from "react";
import styles from "../styles/DateEntryPage.module.css";


export default function Form({onChangeValue,el, deleteElement}) {
    return(
        <form action="" className={styles.form} onChange={onChangeValue} id={el.id}>
            <input type="text" id='textValue' placeholder={el.name}/>
            <input type="number" id='countValue' className={styles.inputNumber} placeholder={el.count}/>
            <div className={styles.value}>
                <span>{el.name}</span>
                <span>-</span>
                <span>{!!el.count ? el.count : 0}</span>
            </div>
            <button onClick={() => deleteElement(el)}>Delete</button>
        </form>
    )

}
