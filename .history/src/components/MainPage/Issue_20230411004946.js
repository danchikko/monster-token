import styles from './Issue.module.css'
import zipper from '../aseets/img/zipper.png'

const Issue = () => {
    return (
        <div className={styles.container}>
            <div>
                <div>
                    <img src={zipper} alt='zipperImg' />
                    <div c></div>
                </div>
            </div>
        </div>
    )
}

export default Issue;