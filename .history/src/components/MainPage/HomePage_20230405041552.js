import styles from './HomePage.module.css'
import logo from '../aseets/img/logoMonster.png'

const HomePage = () => {
	return (
		<div className={styles.homeContainer}>
			<header className={styles.header}>
                <img src={logo} alt="logoImage" />
			</header>
		</div>
	)
}

export default HomePage
