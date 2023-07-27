import React from 'react'
import styles from './Quote.module.css';
const Quote = (props) => {
    return (
        <li className={styles.quote}>
            <span>
                <p>{props.text}</p>
                <h5> ~ {props.author}</h5>
            </span>
            <button>View Fullscreen</button>
        </li>
    )
}

export default Quote;