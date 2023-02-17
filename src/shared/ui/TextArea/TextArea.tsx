import {FC} from 'react'

import styles from './TextArea.module.scss'

type PropsData = {
    placeholder: string
}

export const TextArea: FC<PropsData> = ({placeholder}) => {
    return(
        <textarea
            className={styles.textarea}
            placeholder={placeholder}
        ></textarea>
    )
}