import '../stylesheets/project_card.scss';


export default function ProjectCard (data: any) {
    
    const {name, id, html_url, owner, description, language, topics, homepage} = data.data

    const previewImg:string = `https://raw.githubusercontent.com/${owner.login}/${name}/master/preview.png`

    const deployUrl:string = `${homepage}`
    const projectName:string = name.replace('-', ' ')

    let color:string = ""
    switch (language) {
        case "HTML": color = "red"; break;
        case "JavaScript": color = "yellow"; break;
        case "CSS": color = "purple"; break;
        case "SCSS": color = "pink"; break;
        case "TypeScript": color = "blue"; break;
        case "Python": color = "blue"; break;
        case "PHP": color = "purple"; break;
        case "C": color = "grey"; break;
        case "Jupyter Notebook": color = "orange"; break;
        case "C++": color = "pink"; break;
        case "Vue": color = "green"; break;
        case "Java": color = "red"; break;
        case "Rust": color = "grey"; break;
    }
    const topicTags = topics.map((t: string) => <p className='topic-tag'>{t}</p>)



    return (
    <section className="project-card" id={id}>
        <div className="card">
            <div className='card-img'><img src={previewImg} id={id} alt="Website preview"/></div>
            <div className='card-text'>
                <span className='card-title'>
                    <h5>{projectName}</h5>
                </span>
                <span className="card-desc">
                    <p className='description'>{description}</p>
                </span>
                <span className='card-tags'>
                    <p className='lang-tag' id={color}>{language}</p>
                    {topicTags}
                </span>
            </div>
        </div>
        <div className="project-links">
            <a href={html_url} target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i>
            </a>
            <a href={deployUrl}  target="_blank" rel="noreferrer">
                <i className="bi bi-box-arrow-up-right"></i>
            </a>
        </div>
        {
            // Extra dingen toevoegen????
        }
    </section>
    )
}