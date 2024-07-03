import './nav.css'

function Nav(){
    return(
        <>
            <input type="checkbox" id="id_control_side" />

            <label className="label-icon-menu" htmlFor="id_control_side" >
                <span className="material-symbols-outlined">
                    menu_open
                </span>
            </label>
            <nav>
                <label className="label-icon-menu-insed" htmlFor="id_control_side" >
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </label>
                <ul>
                    <li>
                        <a href="#about_me">
                            <span className="material-symbols-outlined"> 
                                person
                            </span>
                            Sobre mim
                        </a>
                    </li>

                    <li>
                        <a href="#tools">
                            <span className="material-symbols-outlined">
                                handyman
                            </span>
                                Ferramentas
                        </a>
                    </li>

                    <li>
                        <a href="#project">
                            <span className="material-symbols-outlined">
                                apps
                            </span>
                                Projetos
                        </a>
                    </li>

                </ul>
            </nav>
        </>
    ) 
  
}

export default Nav;