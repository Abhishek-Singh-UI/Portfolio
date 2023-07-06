import data from '../../../data/projects.json';
import Articles from './Information/articles';
import Experience from './Information/experience';

function Information() {
    return (
        <div className='information'>
            <Articles />
            <Experience />
        </div>
    );
}
export default Information;