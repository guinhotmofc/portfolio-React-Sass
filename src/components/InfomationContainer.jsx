import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai";

import '../styles/components/informationcontainer.sass';

const InfomationContainer = () => {
  return (

  <section id="information">
    <div className="info-card">
      <AiFillPhone id="phone-icon" />
      <div>
        <h3>Telefone</h3>
        <p>(81)98577-1984</p>
      </div>
    </div>

    <div className="info-card">
      <AiOutlineMail id="email-icon" />
      <div>
        <h3>E-mail</h3>
        <p>@guinhotm22@gmail.com</p>
      </div>
    </div>

    <div className="info-card">
      <AiFillEnvironment id="pin-icon" />
      <div>
        <h3>Localização</h3>
        <p>Camaragibe / PE</p>
      </div>
    </div>
  </section>

  )
};

export default InfomationContainer