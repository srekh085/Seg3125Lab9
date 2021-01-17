import React from 'react';
import { NavBar, NavItem } from "../Components/Navbar/Navbar"
import MainWrapper from "./MainWrapper";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { NavLink, Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
// import i18next from 'i18next';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
function Home() {
  const { t } = useTranslation();

  // function handleClick(lang) {
  //     i18next.changeLanguage(lang)
  // }
  return (
    <MainWrapper>
      <div className="navContain">
        <NavBar>
        <NavLink to="/scifi"
                        activeClassName="linkActive" className="linkInactive"><NavItem item={t('Nav.1')} /></NavLink>
                    <NavLink to="/mystery"
                        activeClassName="linkActive" className="linkInactive"><NavItem item={t('Nav.2')} /></NavLink>
                    <NavLink to="/fantasy"
                        activeClassName="linkActive" className="linkInactive"><NavItem item={t('Nav.3')} /></NavLink>
                    <NavLink to="/horror"
                        activeClassName="linkActive" className="linkInactive"><NavItem item={t('Nav.4')} /></NavLink>
        </NavBar>
      </div>
      <div className="mainContain">
        <div className="about">
          <Paper className="textBox">
            <ContactSupportIcon className="errorImage" />
            <p>
              <span className="logoboi">InkDrinker's</span> {t('Home.1')} <span className="emphasis"> {t('Home.2')}</span>
          </p>
            <p>
              <span className="emphasis">{t('Home.3')} </span> {t('Home.4')} <span className="emphasis"> {t('Home.5')} </span>{t('Home.6')} <span className="emphasis"> {t('Home.7')} </span> {t('Home.8')} <span className="emphasis"> {t('Home.9')}</span>
          </p>
          <p><span className="emphasis">{t('Home.10')} </span> {t('Home.11')} <span className="emphasis"> {t('Home.12')} </span>{t('Home.13')} <span className="emphasis"> {t('Home.14')} </span> {t('Home.15')}</p>
            <p>
            <span className="emphasis">{t('Home.16')} </span> {t('Home.17')}
          </p>
            <p>
            {t('Home.18')} <span className="emphasis"> {t('Home.19')} </span> {t('Home.20')}
          </p>
          </Paper>


        </div>
        <div className="lowerPart">
        <Link to="/scifi"><button className="startButton">{t('Home.21')}<span><DoubleArrowIcon /></span></button></Link>
        </div>

      </div>
    </MainWrapper>
  );
}

export default Home;