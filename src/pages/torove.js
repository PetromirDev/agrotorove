import React from 'react'
import Layout  from '../components/layout'
import * as styles from '../styles/torove.module.css'
import Seo from '../components/seo'

export default function torove() {
    return (
        <Layout>
            
            <div className={styles.containerWrapperT}>
            <Seo title="Торове"/>
                <div className={styles.header1}><h1>Минерални торове</h1></div>
                <div className={styles.containerT}>
                    <div className={styles.torove}>
                        <div className={styles.toroveRow}>
                            <div className={styles.tor}>
                                <h2>Карбамид<br/>(UREA)</h2>
                                <img alt="karbamid" src="https://cdn4.amcn.in/a/zemedelie.alle.bg/assets/be74d0afa744-w200-c999999999-v9c36318a4b/a0d9zbysv9.jpg"/>
                            </div>
                            <div className={styles.tor}>
                                <h2>Амониев Нитрат</h2>
                                <img alt="AN" src="/images/an.png"/>
                            </div>
                            <div className={styles.tor}>
                                <h2>Моноамониев фосфат</h2>
                                <img alt="mf" src="https://cdn4.amcn.in/a/zemedelie.alle.bg/assets/87742afea53a-w200-c999999999-vbbd3f2e73f/ttazz8r25l.jpg"/>
                            </div>
                        </div>
                        <div className={styles.toroveRow}>
                            <div className={styles.tor}>
                                <h2>УАН</h2>
                                <img alt="UAN" src="/images/bubble.png"/>
                            </div>
                            <div className={styles.tor}>
                                <h2>Диамониев фосфат</h2>
                                <img alt="DF" src="https://cdn4.amcn.in/a/zemedelie.alle.bg/assets/42d2f9fe9ed5-w200-c999999999-v92b9d59f20/8mhq75hepd.jpg"/>
                            </div>
                            <div className={styles.tor}>
                                <h2>Троен супер фосфат</h2>
                                <img alt="TSF" src="https://cdn4.amcn.in/a/zemedelie.alle.bg/assets/0fa3bab812e1-w180-c999999999-v8843de9148/wlogjm106r.jpg"/>
                            </div>
                        </div>
                        <div className={styles.toroveRow}>
                            <div className={styles.tor}>
                                <h2>NP</h2>
                                <img alt="NP" src="http://www.fertbul.com/uploads/2018/02/1cbca60306a602b308be29f87f604a25.png"/>
                            </div>
                            <div className={styles.tor}>
                                <h2>NPK 15:15:15</h2>
                                <img alt="npk" src="https://cdn4.amcn.in/a/zemedelie.alle.bg/assets/7ff0ab8c60fe-w200-c999999999-vaf20ceea85/j8w5u1z4rp.jpg"/>
                            </div>

                        </div>
                    </div>
                </div>
                                                                   
            </div>
        </Layout>
    )
}
