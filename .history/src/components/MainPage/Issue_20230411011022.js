import styles from './Issue.module.css'
import zipper from '../aseets/img/zipper.png'

const Issue = () => {
    return (
        <div className={styles.container}>
            <divr>
                <div className={styles.blockToken}>
                    <img src={zipper} alt='zipperImg' />
                    <div className={styles.shell}>
                        <h3>TOKENOMIC</h3>
                    </div>
                </div>
            </divr>
        </div>
    )
}

export default Issue;