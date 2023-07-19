import '../stylesheets/code.scss'

export default function Code() {
    return (
        <section id="abt-me">
            <div className="code">
                <ul id='js'>
                    <li>
                        <span className="red">const</span> ik <span className="purple">= &#123;</span>
                    </li>
                    <li className='indent'>
                        <span className='dark-blue'>voornaam</span>: <span className='light-blue'>"Santos"</span>,
                    </li>
                    <li className='indent'>
                        <span className='dark-blue'>leeftijd</span>: <span className="red">new</span> <span className='orange'>Date</span>().<span className='purple'>getFullYear</span>() - <span className='light-blue'>{(new Date().getMonth() >= 6 ? 2007 : 2008)}</span>,
                    </li>
                    <li className='indent'>
                        <span className='dark-blue'>opleiding</span>: &#91;<span className='light-blue'>"VWO 6"</span>, <span className='light-blue'>"OSG West-Friesland"</span>&#93;,
                    </li>
                    <li className='indent'>
                        <span className='dark-blue'>hobbys</span>: &#91;<span className='light-blue'>"muziek luisteren"</span>, <span className='light-blue'>"programmeren"</span>, <span className='light-blue'>"lezen"</span>, <span className='light-blue'>"bakken"</span>&#93;,
                    </li>
                    <li className='indent'>
                        <span className='dark-blue'>stad</span>: <span className='light-blue'>"Hoorn"</span>,
                    </li>
                    <li>
                        <span className="purple">&#125;</span>
                    </li>
                    <li><br/></li>
                    <li>
                        <span className="red">const </span><span className='purple'>&#123;</span>voornaam, leeftijd, opleiding, hobbys, stad<span className="purple">&#125;</span> <span className='light-blue'>=</span> ik
                    </li>
                    <li><br /></li>
                    <li>
                        <span className="red">function </span><span className='purple'>voorstellen</span><span className="purple">(</span>naam, leeftijd, opleiding, hobbys, stad<span className="purple">) &#123;</span>
                    </li>
                    <li className='indent'>
                        console.<span className='purple'>log</span>(<span className='light-blue'>`Hoi! Ik ben </span>$&#123;naam&#125;<span className='light-blue'> en ik ben </span>$&#123;leeftijd&#125;<span className='light-blue'> jaar oud. Ik zit in </span>$&#123;opleiding&#91;0&#93;&#125;<span className='light-blue'> op het </span>$&#123;opleiding&#91;1&#93;&#125;<span className='light-blue'> in </span>$&#123;stad&#125;<span className='light-blue'>. Mijn hobby's zijn onder andere </span>$&#123;hobbys&#91;0&#93;&#125;<span className='light-blue'>, </span>$&#123;hobbys&#91;1&#93;&#125;<span className='light-blue'>,</span> $&#123;hobbys&#91;2&#93;&#125;<span className='light-blue'> en </span>$&#123;hobbys&#91;3&#93;&#125;<span className='light-blue'>. Leuk je te ontmoeten!`</span>)
                    </li>
                    <li>
                        <span className="purple">&#125;</span>
                    </li>
                    <li><br /></li>
                    <li>
                        <span className='purple'>voorstellen</span><span className="purple">(</span>voornaam, leeftijd, opleiding, hobbys, stad<span className="purple">)</span>
                    </li>
                </ul>
                <ul id='console'>
                    <li><span className='dark-blue'>Hoi! Ik ben Santos en ik ben {new Date().getFullYear() - (new Date().getMonth() >= 6 ? 2007 : 2008)} jaar oud. Ik zit in VWO 6 op het OSG West-Friesland in Hoorn. Mijn hobby's zijn onder andere muziek luisteren, programmeren, lezen en bakken. Leuk je te ontmoeten!</span></li>
                </ul>
                {
                    // Add styling in scss files!!!
                }
            </div>
        </section>
    )
}