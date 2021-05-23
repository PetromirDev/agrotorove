import React from 'react'
import Layout from "../components/layout"
import * as styles from "../styles/contact.module.css"

export default function contact() {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.contactWrapper}>
                    <form action="https://formsubmit.co/your@email.com" method="POST" className={styles.contactForm}>
                        <h2>Изпратете ни съобщение</h2>
                        <input type="text" name="name" required placeholder="Вашето име"/>
                        <input type="email" name="email" required placeholder="Вашият имейл адрес"/>
                        <textarea type="message" required placeholder="Вашето съобщение"></textarea>
                        <button type="submit">Изпрати</button>
                    </form> 
                    {/* <div className={styles.sideInfo}>
                        <h3>Яна Радева</h3>
                        <h3>+359 887 697 749 </h3>
                        <h3>agrotorove@email</h3>
                    </div> */}
                </div>
            </div>
        </Layout>
    )
}
