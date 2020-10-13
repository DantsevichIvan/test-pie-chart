import React from "react";
import {NavLink} from "react-router-dom";
import styles from './../styles/Header.module.css'

export default function Header() {
    return (
        <div className={styles.wrap}>
            <ul className={styles.listLinks}>
                <NavLink exact to='/'>Страница Ввода данных</NavLink>
                <NavLink to='/graph'>Страница Графика</NavLink>
            </ul>
        </div>
    )
}
