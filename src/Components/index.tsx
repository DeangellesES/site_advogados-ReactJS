import styled from "styled-components"
import emailjs from '@emailjs/browser'
import { useState } from "react"

import logo from "./assets/logo.png"
import advogado from "./assets/advogada.png"
import fundoTopo from "./assets/fundo-topo.jpg"
import advogadoPapel from "./assets/advogado-trabalhando.webp"
import advogado1 from "./assets/advogado1.jpg"
import advogado2 from "./assets/advogado2.jpg"
import advogado3 from "./assets/advogado3.jpg"
import estatua from "./assets/statue.webp"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

// PARTE DE CIMA TOPO
const SecaoTopo = styled.section`
    display: grid;
    grid-template-columns: 50% 40%;
    background: url(${fundoTopo});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top;
    height: 100vh;
`
const ConteudoInicioCaixa = styled.div`
    background-color: #0e0b18c9;
    height: 100vh;
    width: 98.8vw;
    display: flex;
    justify-content: center;
    flex-direction: column;  
`
const ConteudoInicio = styled.div`
    text-align: start;   
`
const TituloLogo = styled.img`
    width: 10rem;
    padding-left: 5rem;
    margin-bottom: 2rem;
`
const ConteudoInicioCaixaDentro = styled.div`
    color: #fff;
    width: 50%;
    padding-left: 5rem;
    display: grid;
    gap: 1rem;
`
const ImagemTopo = styled.img`
    width: 130%;
    padding-top: 49px;
`
const ConteudoInicioCaixaDentroTitulo = styled.h1`
    font-size: 2.5rem;
`
const ConteudoInicioCaixaDentroParagrafo = styled.p`
    font-size: 1.3rem;
`
const ConteudoInicioCaixaDentroAncora = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
    background-color: #2d5c2dff;
    width: 31%;
    text-align- center;
    padding: .6rem .8rem .6rem 1rem;
    border-radius: 5px;
    text-align: center;
    &:hover {
        background-color: #004d00;
    }
`

const SecaoTopoDireita = styled.div`
    display: flex;
    justify-content: start;
    padding-right: 170px;
`

// SECAO PODEMOS AJUDAR
const SecaoAjudar = styled.section`
    display: grid;
    grid-template-columns: 45% 45%;
    padding-left: 4.5rem;
    align-items: center;
    gap: 4rem;
    height: 100vh;
    color: #444349ff;
    background-color: #efecf5ff;
`
const SecaoAjudarImagem = styled.img`
    width: 100%;
`
const SecaoAjudarCaixa = styled.div`
    display: grid;
    gap: 1rem;
`
const SecaoAjudarTitulo = styled.h1`
    font-size: 3rem;
`
const SecaoAjudarParagrafo = styled.p`
    font-size: 1.3rem;
`

// SECAO GARANTIR
const SecaoGarantir = styled.section`
    background-color: #35355cff;
    padding: 4rem;
`
const SecaoGarantirCima = styled.div`
    color: #fff;
`
const SecaoGarantirCimatitulo = styled.h1`
    font-size: 3rem;
`
const SecaoGarantirCimaParagrafo = styled.p`
    font-size: 1.3rem;
    padding: 1.7rem 0;
`
const SecaoGarantirCaixa = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
`
const SecaoGarantirCaixaDentro = styled.div`
    width: 45%;
    background-color: #efecf5ff;
    border-radius: 15px;
    padding: 1.3rem;
    cursor: pointer;
`
const SecaoGarantirCaixaDentroTitulo = styled.h1`
    font-size: 1.4rem;
    color: #444349ff;
`
const SecaoGarantirCaixaParagrafo = styled.p`
    font-size: 1.2rem;
    color: #444349ff;
    line-height: 1.3;
`
// SECAO CONHECA
const SecaoConheca = styled.section`
    padding: 3rem;
    background: linear-gradient(100deg,rgba(246, 246, 248, 1) 0%, rgba(238, 238, 240, 1) 35%, rgba(209, 208, 208, 1) 100%);
`
const SecaoConhecaCima = styled.div`
    text-align: center;
    color: #444349ff;
`
const SecaoConhecaCimaTitulo = styled.h1`
    font-size: 3rem;
`
const SecaoConhecaCimaParagrafo = styled.p`
    font-size: 1.3rem;
    margin-bottom: 2rem;
`
const SecaoConhecaBaixo = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;
`

const SecaoConhecaBaixoImagem = styled.img`
    width: 30%;
`
// SECAO ESCOLHER
const SecaoEscolher = styled.section`
    padding: 4rem;
`
const SecaoEscolherCima = styled.div`
    text-align: center;
    color: #444349ff;
`
const SecaoEscolherCimaTitulo = styled.h1`
    font-size: 2.6rem;
`
const SecaoEscolherCimaParagrafo = styled.p`
    font-size: 1.3rem;
    padding: 1rem 0;
`
const SecaoEscolherBaixo = styled.div`
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-top: 2rem;
`
const SecaoEscolherBaixocaixa = styled.div`
    width: 20%;
    text-align: center;
    background-color: #35355cff;
    padding: 2rem;
    color: #fff;
    display: grid;
    gap: .5rem;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 0 0 15px #afafaf;
`

const SecaoEscolherBaixocaixaTitulo = styled.h1`
    font-size: 3rem;
`
const SecaoEscolherBaixocaixaParagrafo = styled.p`
    font-weight: 600;
`

// SECAO ENCAIXA
const SectionEncaixa = styled.section`
    display: grid;
    grid-template-columns: 45% 45%;
    justify-content: center;
    align-items: center;
    background-color: #35355cff;
    padding: 3rem;
    color: #fff;
    gap: 8rem;
`
const SectionEncaixaCima = styled.div`
    display: grid;
    gap: 1.6rem;
`

const SectionEncaixaCimaTitulo = styled.h1`
    font-size: 2.3rem;
    text-align: justify;
`

const SectionEncaixaCimaParagrafo = styled.p`
    font-size: 1.2rem;
`

const SectionEncaixaBaixo = styled.div``

const SectionEncaixaBaixoImagem = styled.img`
    width: 90%;
    border-radius: 35px;
`

// SECAO LOCALIZACAO
const SecaoLocalizacao = styled.section`
    display: grid;
    grid-template-columns: 60% 30%;
    padding: 3rem 5rem;
    color: #444349ff;
    align-items: center;
`
const SecaoLocalizacaoCimaTitulo = styled.h1`
    font-size: 2.6rem;
`
const SecaoLocalizacaoCimaParagrafo = styled.p`
    font-size: 1.3rem;
`
const SecaoLoalizacaoBaixo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const SecaoLocalizacaoBaixoTitulo = styled.h1`
    font-size: 1.8rem;
`
const SecaoLoalizacaoBaixoinput = styled.input`
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid #bfbfbf;
    width: 110%;
`
const SecaoLoalizacaoBaixoTArea = styled.textarea`
    width: 115%;
    border-radius: 5px;
    border: 1px solid #bfbfbf;
    padding: 1rem 0 0 1rem;
    font-size: 1rem;
`
const SecaoLoalizacaoBaixoEnviar = styled.a`
    text-decoration: none;
    font-size: 1.3rem;
    background-color: #35355cff;
    color: #fff;
    width: 20%;
    padding: .8rem 2rem;
    text-align: center;
    border-radius: 5px;
    font-weight: bold;
`
const SecaoLocalizacaoCimaMapa = styled.iframe`
    width: 95%;
    border: none;
    outline: none;
    margin-top: 1rem;
`

// RODAPE
const SecaoRodape = styled.footer`
    text-align: center;
    background-color: #35355cff;
    padding: 2rem;
    color: #fff;
    font-size: 1.4rem;
`
const SecaoRodapeLogo = styled.h1`
    margin-right: 5rem;
`
const SecaoRodapeParagrafoUm = styled.p`
    margin-top: -3rem;
    margin-bottom: 3rem;
    text-transform: uppercase;
`
const SecaoRodapeParagrafoDois = styled.p`
    margin-bottom: 1rem;
`


// FUNCAO TRAZER DE LADO 
function mouseScroll() {
    const scroll = document.querySelectorAll('.js-scroll')
    const height = window.innerHeight * 0.6
    scroll[0].classList.add('ativo')
    scroll.forEach((section) => {
        const sectionTop = (section.getBoundingClientRect().top - height) < 0
        if (sectionTop) {
            section.classList.add('ativo')
        }
    })
}

window.addEventListener('scroll', mouseScroll)



function Pagina() {
    return (
        <>
            {/* INICIO SECAO PARTE DE CIMA TOPO */}
            <SecaoTopo>
                <ConteudoInicio>
                    <ConteudoInicioCaixa>
                        <h1><TituloLogo src={logo} alt="" /></h1>
                        <ConteudoInicioCaixaDentro>
                            <ConteudoInicioCaixaDentroTitulo>Está precisando de um Advogado especialista em Direito do Trabalho?</ConteudoInicioCaixaDentroTitulo>
                            <ConteudoInicioCaixaDentroParagrafo>Somos um escritório especializado em direito trabalhista. Fale agora com um de nossos advogados, vamos te ouvir atentamente e te orientar da melhor forma na defesa dos seus direitos trabalhistas.</ConteudoInicioCaixaDentroParagrafo>
                            <ConteudoInicioCaixaDentroAncora href="https://api.whatsapp.com/send?phone=5535997631949"><FontAwesomeIcon icon={faWhatsapp} className="whatsappIcon" /> Entrar em contato</ConteudoInicioCaixaDentroAncora>
                        </ConteudoInicioCaixaDentro>
                    </ConteudoInicioCaixa>

                </ConteudoInicio>
                <SecaoTopoDireita>
                    <ImagemTopo src={advogado} alt="" />
                </SecaoTopoDireita>
            </SecaoTopo>
            {/* FIM SECAO PARTE DE CIMA TOPO */}
            {/* INICIO SECAO PODEMOS AJUDAR */}
            <SecaoAjudar className="js-scroll">
                <SecaoAjudarCaixa className="ladoEsquerdo">
                    <SecaoAjudarTitulo>Como podemos te ajudar?</SecaoAjudarTitulo>
                    <SecaoAjudarParagrafo>Experiência em todos os tipos de casos. Saiba se você deixou de receber algum <b>direito</b>, <b>hora-extra</b>, <b>férias</b>, <b>13º</b>, <b>FGTS</b>, <b>rescisão</b>, <b>seguro desemprego</b>, <b>acidente de trabalho</b>, <b>dentre outros.</b></SecaoAjudarParagrafo>
                    <SecaoAjudarParagrafo>Atendemos a todas as demandas da área Trabalhista.</SecaoAjudarParagrafo>
                    <SecaoAjudarParagrafo>Agimos rápido para levantar o valor que você pode receber.</SecaoAjudarParagrafo>
                    <SecaoAjudarParagrafo>Fale com nosso especialista para mais informações.</SecaoAjudarParagrafo>
                    <ConteudoInicioCaixaDentroAncora href="https://api.whatsapp.com/send?phone=5535997631949"><FontAwesomeIcon icon={faWhatsapp} className="whatsappIcon" /> Entrar em contato</ConteudoInicioCaixaDentroAncora>
                </SecaoAjudarCaixa>
                <div className="ladoDireito">
                    <SecaoAjudarImagem src={advogadoPapel} alt="" />
                </div>
            </SecaoAjudar>
            {/* FIM SECAO PODEMOS AJUDAR */}
            {/* INICIO SECAO PARTE GARANTIR DIREITO */}
            <SecaoGarantir>
                <SecaoGarantirCima>
                    <SecaoGarantirCimatitulo>Quer Saber Como Garantir Seus Diretos?</SecaoGarantirCimatitulo>
                    <SecaoGarantirCimaParagrafo>Todos os nossos casos passam pelo nosso rigoroso processo. Assim, garantiremos os melhores resultados possíveis para a sua causa com os seguintes passos:</SecaoGarantirCimaParagrafo>
                </SecaoGarantirCima>
                <SecaoGarantirCaixa>
                    <SecaoGarantirCaixaDentro className="item">
                        <SecaoGarantirCaixaDentroTitulo>1. Consulta Inicial</SecaoGarantirCaixaDentroTitulo>
                        <SecaoGarantirCaixaParagrafo>Aqui, você discute sua situação legal com um advogado trabalhista. Durante essa conversa, você fornecerá informações sobre o seu caso e discutirá seus direitos, opções legais e possíveis estratégias a serem adotadas.</SecaoGarantirCaixaParagrafo>
                    </SecaoGarantirCaixaDentro>
                    <SecaoGarantirCaixaDentro className="item">
                        <SecaoGarantirCaixaDentroTitulo>2. Análise e investigação</SecaoGarantirCaixaDentroTitulo>
                        <SecaoGarantirCaixaParagrafo>Nossos Advogados realizarão uma análise mais aprofundada do seu caso. Isso pode envolver a revisão de documentos relevantes, coleta de evidências, pesquisa jurídica e a obtenção de informações adicionais necessárias para compreender totalmente a situação.</SecaoGarantirCaixaParagrafo>
                    </SecaoGarantirCaixaDentro>
                    <SecaoGarantirCaixaDentro className="item">
                        <SecaoGarantirCaixaDentroTitulo>3. Estratégia</SecaoGarantirCaixaDentroTitulo>
                        <SecaoGarantirCaixaParagrafo>Com base na análise do caso, desenvolveremos uma estratégia legal personalizada para buscar a solução mais favorável. Isso pode incluir ações como negociações, mediação, conciliação ou a preparação para um processo judicial.</SecaoGarantirCaixaParagrafo>
                    </SecaoGarantirCaixaDentro>
                    <SecaoGarantirCaixaDentro className="item">
                        <SecaoGarantirCaixaDentroTitulo>4. Representação Legal</SecaoGarantirCaixaDentroTitulo>
                        <SecaoGarantirCaixaParagrafo>Se o caso exigir uma ação judicial, iremos representá-lo perante o tribunal. Isso envolve a preparação de documentos legais, apresentação de petições, contestações e outros requerimentos necessários. Além disso, o advogado representará seus interesses durante audiências, julgamentos ou sessões de mediação.</SecaoGarantirCaixaParagrafo>
                    </SecaoGarantirCaixaDentro>
                    <SecaoGarantirCaixaDentro className="item">
                        <SecaoGarantirCaixaDentroTitulo>5. Resolução do Caso</SecaoGarantirCaixaDentroTitulo>
                        <SecaoGarantirCaixaParagrafo>O objetivo do advogado é alcançar uma resolução favorável para o seu caso. Isso pode ser por meio de um acordo extrajudicial, uma decisão judicial ou qualquer outro resultado que proteja seus direitos e interesses.</SecaoGarantirCaixaParagrafo>
                    </SecaoGarantirCaixaDentro>
                    <SecaoGarantirCaixaDentro className="item">
                        <SecaoGarantirCaixaDentroTitulo>6. Acompanhamento e Orientação Contínuos</SecaoGarantirCaixaDentroTitulo>
                        <SecaoGarantirCaixaParagrafo>Os serviços podem se estender além da resolução do caso. Eles podem fornecer orientação contínua em relação a quaisquer implicações legais futuras, esclarecer dúvidas adicionais e ajudá-lo a entender seus direitos e obrigações legais.</SecaoGarantirCaixaParagrafo>
                    </SecaoGarantirCaixaDentro>
                </SecaoGarantirCaixa>
            </SecaoGarantir>
            {/* FIM SECAO PARTE GARANTIR DIREITO */}
            {/* INICIO SECAO CONHEÇA */}
            <SecaoConheca className="js-scroll">
                <SecaoConhecaCima>
                    <SecaoConhecaCimaTitulo>Conheça nossos Advogados</SecaoConhecaCimaTitulo>
                    <SecaoConhecaCimaParagrafo>Especialistas preparados para atender o seu caso.</SecaoConhecaCimaParagrafo>
                </SecaoConhecaCima>
                <SecaoConhecaBaixo>
                    <SecaoConhecaBaixoImagem src={advogado1} alt="" />
                    <SecaoConhecaBaixoImagem src={advogado2} alt="" />
                    <SecaoConhecaBaixoImagem src={advogado3} alt="" />
                </SecaoConhecaBaixo>
            </SecaoConheca>
            {/* FIM SECAO CONHEÇA */}
            {/* INICIO SECAO ESCOLHER */}
            <SecaoEscolher>
                <SecaoEscolherCima>
                    <SecaoEscolherCimaTitulo>Por que escolher o nosso escritório?</SecaoEscolherCimaTitulo>
                    <SecaoEscolherCimaParagrafo>Temos ampla experiência com Direito Trabalhista. Estamos sempre defendendo e buscando os direitos de nossos clientes, prezando sempre pela ética e honestidade.</SecaoEscolherCimaParagrafo>
                </SecaoEscolherCima>
                <SecaoEscolherBaixo>
                    <SecaoEscolherBaixocaixa className="item">
                        <div>
                            <SecaoEscolherBaixocaixaTitulo>100%</SecaoEscolherBaixocaixaTitulo>
                            <SecaoEscolherBaixocaixaParagrafo>ATENDIMENTO PERSONALIZADO</SecaoEscolherBaixocaixaParagrafo>
                            <p>Atendimento rápido e eficiente, 100% focado nas necessidades de cada cliente.</p>
                        </div>
                    </SecaoEscolherBaixocaixa>
                    <SecaoEscolherBaixocaixa className="item">
                        <div>
                            <SecaoEscolherBaixocaixaTitulo>100%</SecaoEscolherBaixocaixaTitulo>
                            <SecaoEscolherBaixocaixaParagrafo>TRANSPARÊNCIA E ÉTICA</SecaoEscolherBaixocaixaParagrafo>
                            <p>Mantemos nossos clientes informados em todas as etapas do processo, com total clareza e honestidade.</p>
                        </div>
                    </SecaoEscolherBaixocaixa>
                    <SecaoEscolherBaixocaixa className="item">
                        <div>
                            <SecaoEscolherBaixocaixaTitulo>100%</SecaoEscolherBaixocaixaTitulo>
                            <SecaoEscolherBaixocaixaParagrafo>CLIENTES DE SUCESSO</SecaoEscolherBaixocaixaParagrafo>
                            <p>Já ajudamos muitos clientes a terem acesso a seus direitos, podemos ajudar você.</p>
                        </div>
                    </SecaoEscolherBaixocaixa>
                </SecaoEscolherBaixo>
            </SecaoEscolher>
            {/* FIM SECAO ESCOLHER */}
            {/* INICIO SECAO ENCAIXA */}
            <SectionEncaixa className="js-scroll">
                <SectionEncaixaCima>
                    <SectionEncaixaCimaTitulo>Não sabe se você se encaixa?
                        Entre em contato com nossos especialistas e tire suas dúvidas</SectionEncaixaCimaTitulo>
                    <SectionEncaixaCimaParagrafo>Possuímos uma equipe altamente qualificada e experiente.
                        Por isso oferecemos soluções eficientes e eficazes para cidadãos que lutam pelos seus direitos.</SectionEncaixaCimaParagrafo>
                    <ConteudoInicioCaixaDentroAncora href="https://api.whatsapp.com/send?phone=5535997631949"><FontAwesomeIcon icon={faWhatsapp} className="whatsappIcon" />Entrar em contato</ConteudoInicioCaixaDentroAncora>
                </SectionEncaixaCima>
                <SectionEncaixaBaixo>
                    <SectionEncaixaBaixoImagem src={estatua} alt="" />
                </SectionEncaixaBaixo>
            </SectionEncaixa>
            {/* FIM SECAO ENCAIXA */}
            {/* INICIO SECAO LOCALIZACAO */}
            <SecaoLocalizacao>
                <div>
                    <SecaoLocalizacaoCimaTitulo>Localização</SecaoLocalizacaoCimaTitulo>
                    <SecaoLocalizacaoCimaParagrafo>Estamos prontos para atendê-lo</SecaoLocalizacaoCimaParagrafo>
                    <SecaoLocalizacaoCimaMapa src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19047708.454670496!2d-60.07197403930594!3d-11.44835424588271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48e91c473de67%3A0xf3262dbb32890677!2sAv.%20Gov.%20Jos%C3%A9%20Malcher%2C%20153%20-%20Nazar%C3%A9%2C%20Bel%C3%A9m%20-%20PA%2C%2066035-065!5e0!3m2!1spt-BR!2sbr!4v1753193880834!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy" ></SecaoLocalizacaoCimaMapa>
                </div>
                <SecaoLoalizacaoBaixo>
                    <SecaoLocalizacaoBaixoTitulo>Deixe uma mensagem</SecaoLocalizacaoBaixoTitulo>

                    <SecaoLoalizacaoBaixoinput type="text" placeholder="Seu Nome" name="name" />
                    <SecaoLoalizacaoBaixoinput type="text" placeholder="Seu Email" name="email" />
                    <SecaoLoalizacaoBaixoTArea name="message" id="" rows={6} cols={100} placeholder="Digite uma mensagem"></SecaoLoalizacaoBaixoTArea>

                    <SecaoLoalizacaoBaixoEnviar href="">Enviar</SecaoLoalizacaoBaixoEnviar>
                </SecaoLoalizacaoBaixo>
            </SecaoLocalizacao>
            {/* FIM SECAO LOCALIZACAO */}
            {/* INICIO RODAPE */}
            <SecaoRodape>
                <SecaoRodapeLogo><TituloLogo src={logo} alt="" /></SecaoRodapeLogo>
                <SecaoRodapeParagrafoUm>Advogados associados</SecaoRodapeParagrafoUm>
                <SecaoRodapeParagrafoDois>© 2025 - Todos os direitos reservados | Advogado0, Advogado1 & advogado2 Advogados e Associados</SecaoRodapeParagrafoDois>
                <span>Desenvolvido por Felipe</span>
            </SecaoRodape>
            {/* FIM RODAPE */}
        </>
    )
}

export default Pagina