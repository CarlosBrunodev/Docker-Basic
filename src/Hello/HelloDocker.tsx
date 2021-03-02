import  styles  from '../Hello/HelloDocker.module.css';


export function HelloDocker() {

    return (
        <div className={styles.container}>
            <div className={styles.react}>
                <img src="logo192.png" alt="logo" />
                <img className={styles.docker} src="docker-logo.png" alt=""/>
            </div>
        </div>
    )
}