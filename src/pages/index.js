import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from '../styles/landing.module.css'
import {Link} from 'gatsby'
const IndexPage = () => (
  <Layout>
    <Seo title="Начало" />
    <div className={styles.landingBG}>
      <div className={styles.welcomeMessage}>            
          <h1>МИНЕРАЛНИ ТОРОВЕ</h1>
          <div className={styles.bottom}></div>
          <h2>Кратък лозунг</h2>
          {/* <button>Прочети повече</button> */}
          <div>
            <Link to="/torove">Торове</Link>
          </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
/*    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />*/