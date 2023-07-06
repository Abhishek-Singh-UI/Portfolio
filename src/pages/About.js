import About_main from './components/About/About_main';
import Contact_us from './components/About/Contact_us';
import '../styles/About.scss'
function About() {
    return(
        <div className="About">
            <About_main />
            <Contact_us />
        </div>
    )

}
export default About;