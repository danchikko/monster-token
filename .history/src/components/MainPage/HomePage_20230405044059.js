import styles from './HomePage.module.css'
import logo from '../aseets/img/logoMonster.png'

const HomePage = () => {
	return (
		<div className={styles.homeContainer}>
			<header className={styles.header}>
				<img className={sty} src={logo} alt='logoImage' />
					<ul className={styles.ulList}>
						<li>HOME</li>
						<li>ECOSYSTEM</li>
						<li>ISSUE</li>
						<li>ROADMAP</li>
                        <li>CONTRACT</li>
					</ul>
			</header>
		</div>
	)
}

export default HomePage
