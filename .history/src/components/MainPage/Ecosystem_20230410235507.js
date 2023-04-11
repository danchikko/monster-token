import styles from './Ecosystem.module.css'
import scan from '../aseets/img/scan.png'
import gecko from '../aseets/img/coingecko.png'
import tools from '../aseets/img/dextools.png'
import swap from '../aseets/img/swap.png'
import coin from '../aseets/img/poocoin.png'

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
				
					<img className={styles.scan} src={scan} alt='imgScan' />
					<img className={styles.gecko} src={gecko} alt='imgGecko' />
					<img className={styles.tools} src={tools} alt='imgTools' />
					<img className={styles.swap} src={swap} alt='imgSwap' />
					<img className={styles.coin} src={coin} alt='imgCoin' />
			</div>
		</div>
	)
}

export default Ecosystem
