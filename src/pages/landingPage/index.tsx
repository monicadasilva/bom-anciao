import {
  Header,
  Functionalities,
  Voluntaries,
  InformationCard,
  Institutions,
  InstitutionsCard,
  Footer,
  Buttons,
  Container,
} from "./styles";
import logo from "../../Assets/img/logo.png";
import events from "../../Assets/img/events.svg";
import help from "../../Assets/img/help.svg";
import search from "../../Assets/img/search.svg";
import instsearch from "../../Assets/img/instsearch.svg";
import instevent from "../../Assets/img/instevent.svg";
import instdonation from "../../Assets/img/instdonation.svg";
import { useHistory } from "react-router-dom";
import homeimage from "../../Assets/img/idosos.png";

export const LandingPage = () => {
  const history = useHistory();

  return (
    <Container>
      <Header>
        <span>
          <img src={logo} alt="" />
        </span>
        <div>
          <Buttons onClick={() => history.push("/login-voluntary")}>
            Entrar
          </Buttons>

          <Buttons
            className="signup"
            onClick={() => history.push("/signup-voluntary")}
          >
            Cadastrar
          </Buttons>
        </div>
      </Header>
      <Functionalities>
        <div className="func__col-1">
          <img src={homeimage} alt="idosos" />
        </div>
        <div className="func__col-2">
          <h1>
            <img src={logo} alt="" />
            bom ancião
          </h1>
          <h2>Conheça, Ajude e Apoie</h2>
          <p>A melhor plataforma de busca, contato e descoberta de asilos</p>
          <button onClick={() => history.push("/login-voluntary")}>
            Descubra uma Instituição
          </button>
        </div>
      </Functionalities>
      <Voluntaries>
        <h2>Para Voluntários</h2>
        <div className="InformationsCards">
          <InformationCard>
            <h3>Encontre Asilos Próximos</h3>
            <img src={search} alt="" />
          </InformationCard>
          <InformationCard>
            <h3>Inscreva-se em Eventos</h3>
            <img src={events} alt="" />
          </InformationCard>
          <InformationCard>
            <h3>Descubra meios de Ajudar</h3>
            <img src={help} alt="" />
          </InformationCard>
        </div>
      </Voluntaries>
      <Institutions>
        <h2>Para Instituições</h2>
        <div className="InstitutionsCards">
          <InstitutionsCard>
            <h3>Coloque-se no Radar</h3>
            <img src={instsearch} alt="" />
          </InstitutionsCard>
          <InstitutionsCard>
            <h3>Divulgue Eventos</h3>
            <img src={instevent} alt="" />
          </InstitutionsCard>
          <InstitutionsCard>
            <h3>Inicie Campanhas de Doação</h3>
            <img src={instdonation} alt="" />
          </InstitutionsCard>
        </div>
        <button onClick={() => history.push("/login-institution")}>
          sou uma instituição
        </button>
      </Institutions>
      <Footer>
        <span>@ACME 2021 - All Rights Reserved</span>
      </Footer>
    </Container>
  );
};
