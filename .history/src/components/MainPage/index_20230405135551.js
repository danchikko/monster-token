import Ecosystem from './Ecosystem';
import HomePage from './HomePage';
import styles from './index.module.css';

const MainPage = () => {
    return (
        <div className={styles.container}>
            <HomePage />
            <Ecosystem />
        </div>
    )
}

export default MainPage;