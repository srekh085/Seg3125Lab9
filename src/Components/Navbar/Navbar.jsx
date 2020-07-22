import React from "react";
import NavBarWrapper from "./NavBarWrapper";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import LanguageIcon from '@material-ui/icons/Language';
import Button from '@material-ui/core/Button';

function NavItem(props) {
  return (
    <li className="navItem">
      <p className="iconButton">
        {props.item}
      </p>
    </li>
  );
}

function NavBar(props) {
    const { t } = useTranslation();

    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }
  return (
    <NavBarWrapper>
      <nav className="navBar">
        <NavLink to="/">
          <section className="logo">
            InkDrinker's
        </section>
        </NavLink>
        <section className="title">
          <Button className="langSwitch" onClick={() => handleClick('fr')}variant="outlined" color="secondary"><NavItem item="FR" />< LanguageIcon /></Button>
          <Button className="langSwitch" onClick={() => handleClick('en')}variant="outlined" color="secondary"><NavItem item="EN" />< LanguageIcon /></Button>
        </section>
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    </NavBarWrapper>
  );
}

export { NavBar, NavItem };
