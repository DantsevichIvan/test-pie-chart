import React, {useEffect, useState} from "react";
import styles from './../styles/GraphPage.module.css'

export default function GraphPage() {
    const [pieData, setPieData] = useState([])

    useEffect(() => {
        const array = localStorage.getItem('arrValue')
        setPieData(JSON.parse(array))
    }, [])
    const calculatePos = (width, height, radius, theta) => {
        return [
            (width / 2.0 + (radius * (Math.sin(theta)))),
            (height / 2.0 - (radius * (Math.cos(theta))))
        ];

    }
    const calculatePathPlain = () => {
        let width = 400
        let height = 400
        let radius = 200
        let theta = 0;
        let currentPos = calculatePos(width, height, radius, theta);
        const pathData = pieData.reduce((acc, curr, ind) => {
            theta += (curr.count / 100) * 2 * Math.PI;
            const nextPos = calculatePos(width, height, radius, theta);
            const isBigCurveInt = (curr.count / 100) > 0.5 ? 1 : 0;
            const path = <path
                onMouseOver={() => showValue(curr)}
                d={
                    `M${+width / 2} ${+height / 2} 
                L ${currentPos[0]} ${currentPos[1]}
                 A ${radius} ${radius} 
                 0 ${isBigCurveInt}
                  1 ${nextPos[0]} ${nextPos[1]}
                   L ${width / 2.0} ${height / 2.0}`
                }
                fill={getRandomColor()}
                key={ind}
            />;
            currentPos = nextPos;
            acc.push(path);
            return acc;
        }, []);

        return pathData;
    }

    const showValue = (curr) => {
        return <span>{curr.name}</span>
    }
    function getRandomColor() {
        let letters = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }

    return (
        <div className={styles.wrap}>
            It's Graph Page
            <svg className={styles.svg}>
                {calculatePathPlain()}
            </svg>
        </div>
    )
}
