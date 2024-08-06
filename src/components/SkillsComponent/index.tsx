import './skills.css'
interface habilits {
    name: string
    age: string
    img : string
}
function Skills() {
    const habilits : Array<habilits> = [
        {
            name: 'JavaScript',
            age: '6 anos',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
        },
        {
            name: 'TypeScript',
            age: '4 anos',
            img: 'data:image/png;base64,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'
        },
        
        {
            name: 'Angular.js',
            age: '3 anos',
            img: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/angularjs_original_logo_icon_146649.png'
        },
        {
            name: 'Spring Boot',
            age: '2 anos',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1200px-Spring_Boot.svg.png'
        },
        
        {
            name: 'Java',
            age: '2 anos',
            img: 'https://cdn-icons-png.flaticon.com/512/226/226777.png'
        },
        {
            name: 'Vue.js',
            age: '2 anos',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/555px-Vue.js_Logo_2.svg.png'
        },
        {
            name: 'React.js',
            age: '2 anos',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png'
        },
        {
            name: 'Node.js',
            age: '4 anos',
            img: 'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png'
        },
        {
            name: 'Nest.js',
            age: '1 anos',
            img: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg'
        },
        {
            name: 'css & html',
            age: '6 anos',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/791px-CSS3_and_HTML5_logos_and_wordmarks.svg.png'
        },
        {
            name: 'Flutter',
            age: '2 anos',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flutter_logo.svg/2048px-Flutter_logo.svg.png'
        },
    
    ]

    const skills: any = [];

    for (const [index, iterator] of habilits.entries()) {
        skills.push(
            <div className="card-skills" key={index}>
                <div className="img-card">
                    <img src={iterator.img}  alt=""/>
                </div>
                <div className="title-card">
                    {iterator.name}
                    <div className="subtitle-card">
                        ({iterator.age})
                    </div>
                </div>
                
            </div>
        )
    }
  
       

    return (
        <div className="body-skills" id="tools">
            <h3 className="title-skills">Minhas Habilidades</h3>
            <div className="content-skills">
                { skills }
            </div>
            
        </div>

    )
}

export default Skills