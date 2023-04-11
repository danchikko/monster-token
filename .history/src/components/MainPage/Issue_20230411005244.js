import styles from './Issue.module.css'
import zipper from '../aseets/img/zipper.png'

const Issue = () => {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.blockToken}>
                    <img src={zipper} alt='zipperImg' />
                    <div className={styles.shell}></div>
                </div>
            </div>
        </div>
    )
}

export default Issue;