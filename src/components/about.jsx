import styles from './about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AboutKor from './aboutKor'
function About(props) {
    return (
        <div className={styles.about}>
            <div className={styles.body}>
                {
                    props.eng === true && <div className={styles.flex}>
                        <div className={styles.info_top}>
                            <div className={styles.profileimg}>
                                <img src="img/about.jpg" alt="profile" />
                            </div>
                            <div className={styles.profiletxt}>
                                <div className={styles.bio}>
                                    <h2>Minyeo Kang</h2>
                                    <p>I genuinely love making creative Website <br />
                                        Focused on crafting clean ＆ user-friendly <br />experiences with trendy design
                                    </p>
                                </div>

                                <div className={styles.provide}>
                                    <h2>Service</h2>
                                    <div>
                                        <dl>
                                            <dt><FontAwesomeIcon icon="fa-solid fa-hand-holding-heart" /></dt>
                                            <dd>Ability to establish Website from ground level to a flawless enterprise in a timely matter </dd>
                                        </dl>
                                        <dl>
                                            <dt><FontAwesomeIcon icon="fa-solid fa-people-roof" /></dt>
                                            <dd>Excellent communication skills, Bubbly personality to improve workflow efficiencies</dd>
                                        </dl>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.info_bottom}>
                            <div className={styles.edu}>
                                <h2>Education</h2>

                                <div className={styles.edu_flex}>
                                    <FontAwesomeIcon icon="fa-solid fa-book-open" className={styles.degree} />
                                    <div><p className={styles.major}> Responsive Web Design</p>
                                        <p className={styles.school}>  Busan IT training center in 2021-2022</p></div>

                                </div>
                                <div className={styles.edu_flex}>
                                    <FontAwesomeIcon icon="fa-solid fa-graduation-cap" className={styles.degree} />
                                    <div>
                                        <p className={styles.major}>  Hotel Management Tourism</p>
                                        <p className={styles.school}>KIT in 2013-2017</p>
                                    </div>
                                </div>

                            </div>
                            <div className={styles.skill}>
                                <h2>My Skills</h2>

                                <div className={styles.box}>

                                    <p> <img src="img/icon/html.svg" alt="html" /></p>
                                    <p><img src="img/icon/css.svg" alt="css" /></p>
                                    <p><img src="img/icon/js.svg" alt="js" /></p>
                                    <p><img src="img//icon/jquery.svg" alt="jquery" /></p>
                                    <p> <img src="img/icon/react.svg" alt="react" /></p>

                                    <p> <img src="img/icon/redux.svg" alt="redux" /></p>
                                    <br /><p><img src="img/icon/bootstrap.svg" alt="bootstrap" /></p>
                                    <p><img src="img/icon/sasslogo.svg" alt="sass" /></p>

                                    <p><img src="img/icon/ps.svg" alt="psd" /></p>
                                    <p><img src="img/icon/ai.svg" alt="ai" /></p>

                                    <p><img src="img/icon/figma.svg" alt="figma" /></p>
                                    <p><img src="img/icon/git.svg" alt="git" /></p>

                                </div>

                            </div>
                        </div>
                    </div>
                }
                {
                    props.eng === false && <AboutKor />
                }
            </div>
        </div>
    )

}

export default About;