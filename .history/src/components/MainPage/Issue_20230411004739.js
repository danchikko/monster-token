import styles from './Issue.module.css'
import zipper from '../aseets/img/zipper.png'
import 

const Issue = () => {
    return (
        <div className={styles.container}>
            <div>
                <div>
                    <img src={zipper} alt='zipperImg' />
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Issue;