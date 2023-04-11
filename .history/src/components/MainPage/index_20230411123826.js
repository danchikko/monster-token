import Ecosystem from './Ecosystem';
import HomePage from './HomePage';
import Issue from './Issue';
import styles from './index.module.css';

const MainPage = () => {
    return (
        <div className={styles.container}>
            <HomePage />
            <Ecosystem />
            {/* <Issue /> */}
        </div>
    )
}

export default MainPage;