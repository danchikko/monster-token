import styles from './Issue.module.css'
import zipper from '../aseets/img/zipper.png'

const Issue = () => {
    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <div className={styles.blockToken}>
                    <img src={zipper} alt='zipperImg' />
                    <div className={styles.shell}>
                        <h3>TOKENOMIC</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Issue;