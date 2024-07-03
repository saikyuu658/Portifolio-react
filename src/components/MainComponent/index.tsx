import './main.css'
function Main() {

    const open=()=>{
        window.open('https://api.whatsapp.com/send?phone=5588994563932')
    }

    return (
        <section className="body">
            <div className="content">
                <div className="hi">
                    <p>Olá, eu sou</p>
                    <h3 className='title-main'>David Pontes Silva</h3>
                    <p className="description">
                        Desenvolvedor full Stack
                    </p>
                    <button className="send-mesage" onClick={()=>{open()}}>
                        <span>
                            Enviar Mensagem!
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Main
