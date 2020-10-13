import React, {useEffect, useState} from "react";
import styles from './../styles/DateEntryPage.module.css'
import Form from "./Form";

export default function DateEntryPage() {
    const [arrValue, setValue] = useState([{name: '', count: 0, id: Math.random()}])
    useEffect(() => {
        const array = localStorage.getItem('arrValue')
        setValue(JSON.parse(array))
    }, [])
    const addValue = () => {
        setValue([...arrValue, {name: 'Данные не введены', count: 0, id: Math.random()}])
    }
    function setArr() {
        localStorage.setItem('arrValue', JSON.stringify(arrValue))
    }
    const onChangeValue = (e) => {
        const id = +e.currentTarget.id
        let name = e.currentTarget.textValue.value
        let count = e.currentTarget.countValue.value
        setValue(() => (
            arrValue.map(el => el.id === id ?
                {
                    ...el,
                    name: name,
                    count: count
                } : el)

        ))
        setArr()
    }
    function deleteElement(el) {
        const id = el.id
        setValue(() => (
            arrValue.map(el => el.id === id ? arrValue.splice(el.id, 1) : el)
        ))
        setArr()
    }


    return (
        <div className={styles.wrap}>
            It's Date Entry Page
            {
                arrValue.map((el) => {
                    return <Form el={el} key={el.id} onChangeValue={onChangeValue} deleteElement={deleteElement}/>
                })
            }
            <button onClick={addValue} className={styles.btn}>Добавить позицию</button>
        </div>
    )
}
