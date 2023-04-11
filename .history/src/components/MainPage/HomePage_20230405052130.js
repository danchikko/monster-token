import styles from './HomePage.module.css'
import logo from '../aseets/img/logoMonster.png'
import welcomLogo from '../aseets/img/welomeLogo.png'

const HomePage = () => {
	return (
		<div className={styles.homeContainer}>
			<header className={styles.header}>
				<img className={styles.logo} src={logo} alt='logoImage' />
					<ul className={styles.ulList}>
						<li>HOME</li>
						<li>ECOSYSTEM</li>
						<li>ISSUE</li>
						<li>ROADMAP</li>
                        <li>CONTRACT</li>
					</ul>
			</header>
            <div className={styles.explain}>
                <h3>WELCOME TO THE UNIVERCE</h3>
                <image src={} />
            </div>
		</div>
	)
}

export default HomePage
