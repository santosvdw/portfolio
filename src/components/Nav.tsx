import '../stylesheets/nav.scss'

export default function Nav () {
    return (
        <nav>
            <ul>
                <li><a href="#abt-me">over mij</a></li>
                <li><a href="#projects">projecten</a></li>
                <li><a href="#footer">contact</a></li>
                <li><a href="./CV.pdf" className='underline' download={'CV.pdf'}>mijn cv</a></li>
            </ul>
        </nav>
    )
}