import data from '../../../../data/projects.json';
import '../../../../styles/components/Homepage/articles.scss';
function Articles() {
return(
    <div className='articles'>
        {data.information.article.map((ele) => {
            return (
                <div className="card" key={ele.id}>
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{ele.card_subtitle}</h6>
                        <h5 className="card-title">{ele.card_title}</h5>
                        <p className="card-text">{ele.card_text}</p>
                        <a href={ele.card_link} className="card-link" target="_blank">Read article <span className="material-symbols-outlined">chevron_right</span>
                        </a>
                    </div>
                </div>
            )
        })}
    </div>
);
}
export default Articles;