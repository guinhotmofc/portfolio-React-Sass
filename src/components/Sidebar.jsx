import SocialNetWorks from './SocialNetWorks';
import InfomationContainer from './InfomationContainer';

import Avatar from '../img/eu2.jpg';

import '../styles/components/sidebar.sass';



const sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Alexander silva" />
    <p className="title">Desenvolvedor</p>
    <SocialNetWorks />
    <InfomationContainer />
    <a href="" className="btn">
      Download currículo
    </a>
  </aside>
}

export default sidebar