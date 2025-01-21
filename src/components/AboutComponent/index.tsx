import './about.css'

function About() {
    return (
        <div className="body-about"  id="about_me">
            <div className="content-about">
                <h3 className='title-about'>Sobre Mim</h3>
                <p className="description-about">
                    Sou casado e pai aos 25 anos, tenho adiquirido durante minhas experiências em empresas e na execução de projetos pessoais,
                    qualidades para exercer minhas função como programador com maestria, principalmente envolvendo javaScript e seus frameworks e Java.
                    Mas não me limitei a isso,  gosto de sempre explorar novas alternativa e ferramentas para ampliar meu de conhecimento.

                    Hoje sou programador full Stack com mais de 5 anos de experiência como desenvolvedor Web. 
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
