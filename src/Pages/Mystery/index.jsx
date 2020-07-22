import React, { useState } from 'react';
import { NavBar, NavItem } from "../../Components/Navbar/Navbar"
import PageWrapper from "../PageWrapper";
import { NavLink } from "react-router-dom";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CardDisplay from "../../Components/CardDisplayer/CardDisplayer";
import bookList from "./booksMystery";
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Mystery() {


    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    function navigateBooks(num){
        if(num===0){
            if(currentIndex===0){
                return;
            }
            setCurrentIndex(currentIndex-1);
        }
        if(num===1){
            if(currentIndex===2){
                return
            }
            setCurrentIndex(currentIndex+1);
        }
    }
    
    return (
        <PageWrapper>
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
                <div className="booksContain">
                    <CardDisplay 
                    bookListImport={bookList}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}/>
                </div>
                <div className="buttons">
                    <div className="previousCategory">
                        <button className="previousButton one">
                        <Link to="/scifi"><DoubleArrowIcon /> {t('Nav.1')} </Link>
                        </button>
                    </div>
                    <div className="navigationBooks">
                        <button className="previousButton three" onClick={()=>navigateBooks(0)}>
                            <ArrowForwardIosIcon />{t('Nav.6')}
                        </button>
                        <span>{currentIndex+1}/{bookList.length}</span>
                        <button className="nextButton four" onClick={()=>navigateBooks(1)}>
                        {t('Nav.7')}<ArrowForwardIosIcon />
                        </button>
                    </div>
                    <div className="nextCategory">
                        <button className="nextButton two">
                        <Link to="/fantasy">{t('Nav.3')} <DoubleArrowIcon /></Link>
                        </button>
                    </div>
                </div>
            </div>
        </PageWrapper >
    )
}

export default Mystery;