import useFetch from 'react-fetch-hook';
import '../stylesheets/projects.scss';
import ProjectCard from './ProjectCard';


export default function Projects() {
    const githubUrl: string = 'https://api.github.com/users/santosvdw/repos'
    const {isLoading, error, data} = useFetch(githubUrl)

    if (isLoading) {return <p>Loading...</p>}
    if (error) {return <p>An error has occurred.</p>}
    
    const items: any = data
    console.log(items)
    const filteredItems = items.filter((i: { size: number; }) => i.size > 4500)
    const cards = filteredItems.map((d: { node_id: any; })=> <ProjectCard key={d.node_id} data={d} />)

    return (
    <section id='projects'>
        {cards}
    </section>
    )
}