import data from '../../../data/projects.json';
function Article_section() {
    return (
        <div className='articles ARTICLES'>

            {data.information.article.map((ele) => {
                return (
                <div className='d-flex'>
                    <h6 className="card-subtitle CARD-SUBTITLE mb-2 text-muted">{ele.card_subtitle}</h6>
                    <div className="card CARD" key={ele.id}>
                        <div className="card-body">
                            <h5 className="card-title">{ele.card_title}</h5>
                            <p className="card-text">{ele.card_text}</p>
                            <a href={ele.card_link} className="card-link" target="_blank">Read article <span className="material-symbols-outlined">chevron_right</span>
                            </a>
                        </div>
                    </div>
                </div>

                )
            })}
        </div>
    )



}
export default Article_section;