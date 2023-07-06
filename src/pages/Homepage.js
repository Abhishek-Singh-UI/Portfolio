import Project_section from './components/Homepage/Project_section';
import Information from './components/Homepage/Information';
import Main from './components/Homepage/Main'
import '../styles/Homepage.scss';

export default function Homepage() {
    return (
        <>
            <Main />
            <Project_section />
            <Information />
        </>
    );
}