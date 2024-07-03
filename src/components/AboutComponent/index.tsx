import './about.css'

function About() {
    return (
        <div className="body-about"  id="about_me">
            <div className="content-about">
                <h3 className='title-about'>Sobre Mim</h3>
                <p className="description-about">
                    Sou casado e pai aos 24 anos, tenho adiquirido durante minhas experiencias em empresas e na execução de projetos pessoais,
                    qualidades para exercer minhas função como programador com maestria, principalemente envolvendo javaScript e seus frameworks.
                    Apesar do foco em Js, não me limitei a isso, sempre gosto de explorar novas alternativas. para ampliar meu leque de conheciemnto.

                    Hoje sou programador full Stack com mais de 4 anos de experiência como desenvolvedor Web. 
                </p>

                <div>
                    <p></p>
                </div>
                <a href="/newCVDavid.pdf" target="_blank" download="newCVDavid.pdf" className="download-cv-about">
                    Baixar CV 
                    <span className="material-symbols-outlined">
                        download
                    </span>
                </a>
            </div>
        </div>
    )
}

export default About
