import styles from './HomePage.module.css'
import logo from '../aseets/img/logoMonster.png'

const HomePage = () => {
	return (
		<div className={styles.homeContainer}>
			<header className={styles.header}>
				<img src={logo} alt='logoImage' />
				
					<ul>
						<li>HOME</li>
						<li>ECOSYSTEM</li>
						<li>ISSUE</li>
						<li>ROADMAP</li>
                        <li>CONTRACT</li>
					</ul>
				</div>
			</header>
		</div>
	)
}

export default HomePage