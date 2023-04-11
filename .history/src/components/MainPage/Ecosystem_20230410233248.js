import styles from './Ecosystem.module.css'
import scan from '../aseets/img/scan.png'
import gecko from '../aseets/img/coingecko.png'

const Ecosystem = () => {
	return (
		<div className={styles.container}>
			<div className={styles.containerInfo}>
				<div className={styles.lioneBlock}>
					<div className={styles.blockShell}>
						<h5>NEW HISTORY IN THE WORLD OF</h5>
						<h4>CRYPTOCURRENCIES</h4>
					</div>
				</div>
				<div className={styles.ecosystemTitle}>
					<h4 className={styles.title}>
						MONSTER IS A WHOLE ECOSYSTEM WHICH WILL INTRODUCE YOU
						VERY SOON:
					</h4>
					<p>- MONSTER NFT MARKETPLACE</p>
					<p>- MONSTER SWAP</p>
					<p>- MONSTER P2E GAME</p>
					<p>- MONSTER STARTUP SPONSORSHIP</p>
				</div>
			</div>
			<div className={styles.shellInfo}>
				<ul>
					<li><img src={scan} alt='imgScan' /></li>
					<li><img src={gecko} alt='imgGecko' /></li>
					<li><img /></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
	)
}

export default Ecosystem
