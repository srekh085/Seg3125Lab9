import styled from "styled-components";
import bgblue from "../Images/bg-blue.jpg";
export default styled.div`
height: 100%;
width:100%;

display: grid;
grid-template-rows: auto 1fr;
grid-template-columns:1fr;
grid-template-areas: "containerNav" "containerMain";
.navContain{
    grid-area:containerNav;
    height:100%;
    width:100%;
    z-index:99;
}
a{
    color:#fafafa;
    text-decoration: none;
    display:flex;
    align-items:center;
}
.mainContain{
    grid-area: containerMain;
    height:100%;
    width:100%;
    display:grid;
    grid-template-rows: 1fr auto;
}
.buttons{
    display:grid;
    grid-template-rows:1fr;
    grid-template-columns:1fr 1fr 1fr;
    box-shadow: 0 3px 10px 0 rgb(45, 48, 46, 0.25);
    /* background:#F4F3E1; */
    background:#212121;
    
}
.previousCategory, .navigationBooks, .nextCategory{
    display:flex;
    position:relative;
    height:100%;
    width:100%;
}
.nextCategory{
    justify-content:flex-end;
}
.navigationBooks{
    place-content:space-between;
    align-items: center;
    color:#fafafa;
    font-weight:500;
    font-size:1.3rem;
    /* background:#F1B817; */
    /* background:#29b6f6; */
    /* box-shadow: 0 3px 5px 0 rgb(45, 48, 46, 0.25); */
    svg{
        /* fill:#fafafa; */
    }
    /* .three, .four{
        color:#F4F3E1;
    } */
    }
    
.nextButton, .previousButton{
    height: 90%;
    width: fit-content;
    outline:none;
    background:none;
    border:none;
    transition: transform 0.3s linear;
    font-size:1.5rem;
    font-weight:600;
    font-family:Rockwell;
    display:flex;
    align-items:center;
    justify-content:center;
    color: #fafafa;
    /* position:absolute; */
    :hover{
        cursor:pointer;
        transform:scale(1.05);
    }
    svg{
        height:45px;
        width:45px;
        fill:#e91e63;
    }
}


.previousButton svg{
    transform:rotate(180deg);
}

.one{
        /* left:10px; */
    }
.two{
        right:10px;
        position:absolute;

    }

.three{
    left:10px;
    font-size:1.2rem;
}
.four{
    right:10px;
    font-size:1.2rem;
}
.three, .four{
    svg{
        height:30px;
        width:30px;
    }
}
.booksContain{
    /* background: #E5E5E5; */
    background: #FBB03B;
    display:flex; 
    align-items: center;
    justify-content:center;
}
`

