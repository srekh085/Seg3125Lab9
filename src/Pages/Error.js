import React from 'react';
import { NavBar, NavItem } from "../Components/Navbar/Navbar"
import MainWrapper from "./MainWrapper";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { NavLink, Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import FeedbackIcon from '@material-ui/icons/Feedback';
function Error() {
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
            <FeedbackIcon className="errorImage" />
            <h3 className="eh3">{t('Error.1')}</h3>
            <h4 className="eh4">{t('Error.2')}</h4>
            <h2 className="eh2">:)</h2>
            </Paper>


        </div>
        <div className="lowerPart">
        <Link to="/"><button className="startButton">{t('Nav.5')}<span><DoubleArrowIcon /></span></button></Link>
        </div>

      </div>
    </MainWrapper>
  );
}

export default Error;