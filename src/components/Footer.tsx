import '../stylesheets/footer.scss'

export default function footer() {
    return (
        <footer id='footer'>
            <div className='footer-content'>
                <p id='mail'>Wilt u graag contact met me opnemen? Stuur me een <a href='mailto:srrvdwansem@gmail.com'>mailtje</a>.</p>
                <p>Santos van der Wansem &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}