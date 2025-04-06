import './project.css'

interface projects {
    name: string;
    describe: string;
    img: string;
}
function Project() {

    const projects: Array<projects> = [
        {
            name: 'Chrunch Control',
            describe: 'Gestão de igreja, financeiro, débitos, membros, agenda',
            img: 'https://www.creativefabrica.com/wp-content/uploads/2021/08/07/Image-Gallery-Icon-Graphics-15590538-1.jpg'
        },
        {
            name: 'Style Pro',
            describe: 'Gestão de salão, ou outros estabelecimentos com agendamentos, e metricas de serviço',
            img: 'https://www.creativefabrica.com/wp-content/uploads/2021/08/07/Image-Gallery-Icon-Graphics-15590538-1.jpg'
        },
        {
            name: 'Stakesheet',
            describe: 'Venda de palpites, App de acompanhamento sobre apostas, bankroll',
            img: 'https://www.creativefabrica.com/wp-content/uploads/2021/08/07/Image-Gallery-Icon-Graphics-15590538-1.jpg'
        },
        {
            name: 'Painel de Senhas',
            describe: 'Criação de senhas por setor, multiplos guichê, painel sonoro, administrativo de configuração de estilo',
            img: 'https://www.creativefabrica.com/wp-content/uploads/2021/08/07/Image-Gallery-Icon-Graphics-15590538-1.jpg'
        },
        {
            name: 'Clinica Escola Odontologia',
            describe: ' Cadastro de triagem, controle de usuário, autenticação de níveis de acesso, controle de esterlização de equipamentos',
            img: 'https://www.creativefabrica.com/wp-content/uploads/2021/08/07/Image-Gallery-Icon-Graphics-15590538-1.jpg'
        },
        {
            name: 'Revisaço',
            describe: ' Aplicativo para auxilio de revisão, AdMob, SqLite',
            img: 'https://www.creativefabrica.com/wp-content/uploads/2021/08/07/Image-Gallery-Icon-Graphics-15590538-1.jpg'
        },
        {
            name: 'Raiox 2.0',
            describe: 'Aplicativo que mostra status de vendas, metas e clientes para vendedoras.',
            img: 'https://www.creativefabrica.com/wp-content/uploads/2021/08/07/Image-Gallery-Icon-Graphics-15590538-1.jpg'
        },
        {
            name: 'Painel de automações',
            describe: 'Possibilitava a criação de querys sql que executavam agendadamente',
            img: 'https://www.creativefabrica.com/wp-content/uploads/2021/08/07/Image-Gallery-Icon-Graphics-15590538-1.jpg'
        },
        {
            name: 'Forms',
            describe: 'Uma versão do google formulário',
            img: 'https://www.creativefabrica.com/wp-content/uploads/2021/08/07/Image-Gallery-Icon-Graphics-15590538-1.jpg'
        },
    ]

    const project: any = [];

    for (const [index, iterator] of projects.entries()) {
        project.push(
            <div className="card-project" key={index}>
                <div className="messagem">
                    <span className="title">{iterator.name}</span>
                    <div className="desc" >
                        {iterator.describe}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <section className="body-project" id="project">
            <h3 className='title-project'>Meus Projetos</h3>
            <div className="content-project">
                {project}
            </div>

        </section>
    )
}

export default Project