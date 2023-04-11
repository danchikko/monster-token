import styles from './HomePage.module.css'
import logo from '../aseets/img/logoMonster.png'

const HomePage = () => {
	return (
		<div className={styles.homeContainer}>
			<header className={styles.header}>
				<img src={logo} alt='logoImage' />
					<ul className={styles.ulList}>
						<li className=''>HOME</li>
						<li className=''>ECOSYSTEM</li>
						<li className=''>ISSUE</li>
						<li className=''>ROADMAP</li>
                        <li className=''>CONTRACT</li>
					</ul>
			</header>
		</div>
	)
}

export default HomePage
