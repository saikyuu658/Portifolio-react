import './contact.css'

function Contact() {

    function openUrl(url: string){
        window.open(url);
    }
    return (
        <div className="body-contact">
            <h3 className='title-contact'>Contato</h3>
            <p className='describe-contact'>Quer falar comigo!? Essas são meus principais meios de contato, enquanto isso estarei codando!</p>
            <div className="content-contact">
                <div className="contat" 
                >
                    <span className="material-symbols-outlined">
                        mail
                    </span>
                    davidpontes461@gmail.com
                </div>

                <div className="contat" 
                    role='button'
                    onClick={()=>{openUrl('https://api.whatsapp.com/send?phone=5588994563932')}} 
                    >
                    <span className="material-symbols-outlined">
                        call
                    </span>
                    +55 (88) 99456-3932
                </div>

                <div className="contat" 
                    role='button'
                    onClick={()=>{openUrl('https://www.google.com/maps/place/Frecheirinha,+CE,+62340-000/data=!4m2!3m1!1s0x7eb31953d42c2f7:0xf7af08ffe3d16851?sa=X&ved=1t:242&ictx=111')}}>
                    <span className="material-symbols-outlined">
                        pin_drop
                    </span>
                    Frecheirinha, Ceará, Brasil
                </div>

                
            </div>

        </div>
    )
}

export default Contact