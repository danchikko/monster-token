import styles from './HomePage.module.css'
import logo from '../aseets/img/logoMonster.png'
import welcomeLogo from '../aseets/img/welomeLogo.png'
import neon from '../aseets/img/neon.png'

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
				<h3 className={styles.TitleWelcom}>WELCOME TO THE UNIVERCE</h3>
				<img
					className={styles.imgWelcomeLogo}
					src={welcomeLogo}
					alt='imgWelcome'
				/>
			</div>
			<div className={styles.}>
				<div className={styles.shell}>
					<h3>CONTRACT:</h3>
					<p>0x5D66e2a05F72e8dB9D30604116E85EAe4f1BEcD0</p>
				</div>
			</div>
		</div>
	)
}

export default HomePage
