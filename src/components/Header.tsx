import '../stylesheets/header.scss'

export default function Header () {
    const tags = ['javascript', 'html', 'css', 'scss', 'php', 'laravel','react','typescript']
    const tag = tags.map(t => <span className='header-tag'>{t}</span>)
    return (
        <header>
            <ul className='header'>
                <li>
                    <h1>Santos</h1>
                </li>
                <li>
                    <h1>van der</h1>
                </li>
                <li>
                    <h1>Wansem</h1>
                </li>
            </ul>
            <div className='tags'>
                {tag}
            </div>
        </header>
    )
}