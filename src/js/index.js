import data from '../data.json' assert { type: 'json' };

const year = new Date().getFullYear();
const birthYear = new Date().getMonth() >= 6 ? 2007 : 2008;
const age = year - birthYear;

document.querySelector('.year_js').innerHTML = `${year}`;
document.querySelector('.birth_year_js').innerHTML = `${birthYear}`;
document.querySelector('.age').innerHTML = `${age}`;

const stack = data.info.stack;
const stackElement = document.querySelector('#header-tags');

stack.map((tag) => {
    stackElement.innerHTML += `<span class='header-tag'>${tag}</span>`;
});

const projects = data.projects;
const projectsElement = document.querySelector('#projects');

// Loop over an object
const objectMap = (obj) => Object.fromEntries(Object.entries(obj).map((project) => addCard(project)));

function addCard(project) {
    const language = project[1].tags[0];
    let color = '';
    switch (language) {
        case 'html':
            color = 'red';
            break;
        case 'js':
            color = 'yellow';
            break;
        case 'css':
            color = 'purple';
            break;
        case 'scss':
            color = 'pink';
            break;
        case 'typescript':
            color = 'blue';
            break;
        case 'python':
            color = 'blue';
            break;
        case 'php':
            color = 'purple';
            break;
        case 'c':
            color = 'grey';
            break;
        case 'jupiter notebook':
            color = 'orange';
            break;
        case 'c++':
            color = 'pink';
            break;
        case 'vue':
            color = 'green';
            break;
        case 'java':
            color = 'red';
            break;
        case 'rust':
            color = 'grey';
            break;
    }

    let urlIcon = '';

    if (project[1].url !== '') {
        if (project[1].document) {
            urlIcon = `<a href='${project[1].url}' target='_blank' rel='noreferrer'>
            <i class='bi bi-file-earmark-text'></i>
        </a>`;
        } else {
            urlIcon = `<a href='${project[1].url}' target='_blank' rel='noreferrer'>
            <i class='bi bi-box-arrow-up-right'></i>
        </a>`;
        }
    }

    let githubIcon = '';

    if (project[1].github !== '') {
        githubIcon = `<a href='${project[1].github}' target='_blank' rel='noreferrer'>
                <i class='bi bi-github'></i>
            </a>`;
    }

    let tag_1 = '';
    let tag_2 = '';

    if (project[1].tags[1]) {
        tag_1 = project[1].tags[1];
    }
    if (project[1].tags[2]) {
        tag_2 = `, ${project[1].tags[2]}`;
    }

    projectsElement.innerHTML += `<section class='project-card' id='${project[0]}_card'>
        <div class='card'>
            <div class='card-img'>
                <img src='${project[1].image}' id='${project[0]}_img' alt='Website preview' />
            </div>
            <div class='card-text'>
                <span class='card-title'>
                    <h5>${project[1].naam}</h5>
                </span>
                <span class='card-desc'>
                    <p class='description'>${project[1].beschrijving}</p>
                </span>
                <span class='card-tags'>
                    <p class='lang-tag' id='${color}'>
                        ${project[1].tags[0]}
                    </p>
                    ${tag_1}${tag_2}
                </span>
            </div>
        </div>
        <div class='project-links'>
            ${githubIcon}
            ${urlIcon}
        </div>
    </section>`;
}

objectMap(projects);
