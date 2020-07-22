import styled from "styled-components";
import booksBackground from "../Images/booksBackground.png"
// source for image : https://www.columnfivemedia.com/best-books-on-branding

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
.logoboi{
    font-weight:700;
    font-size:1.5rem;
    margin-right:3px;
}
.emphasis{
    font-weight:600;
    font-size:1.2rem;
    font-style:oblique;
    color: #e91e63;
}
a{
    text-decoration:none;
    color:#fafafa;
}
.mainContain{
    grid-area: containerMain;
    height:100%;
    width:100%;
    /* background-color: #262626; */
    display:grid;
    grid-template-rows:70% 30%;
    grid-template-columns:1fr;
    grid-template-areas: "welcomeSection" "lowerPart";
    background-image:url(${booksBackground});
    background-repeat: no-repeat;
    background-size: cover;
    .about{
        grid-area:welcomeSection;
    }
    .lowerPart{
        grid-area:lowerPart;
    }
}
.about{
    /* width:100%; */
    height:100%;
    width:100%;
    /* background:white; */
    /* color:black; */
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:0;
    /* display:none; */
}
.textBox{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background:#212121;
    color:#fafafa;
    /* color:#212121;
    background:#fafafa; */
    /* width:60%;
    border-radius: 5px; */
    opacity:0.9;
    overflow-wrap: break-word;
    width:40%;
    display: grid;
    grid-auto-rows: auto;
    grid-gap:10px;
    padding:1rem;
    p{
        margin:5px;
    }
}
.lowerPart{
    display: flex;
    place-content: center;
}
.startButton{
    font-size:2rem;
    color:#fafafa;
    outline:none;
    background:#212121;
    height:70px;
    border:none;
    font-weight:650;
    font-family:Rockwell;
    display:flex;
    align-items:center;
    padding-left:20px;
    justify-content:flex-end;
    transition: transform 0.5s ease-in-out;
    border-radius:3px;
    box-shadow: 0 3px 15px 0 rgb(45, 48, 46, 0.25);
    
    :hover{
        cursor:pointer;
        transform:scale(1.2);
        

    }
    svg{
            fill:#e91e63;
            height:100px;
            width:100px;
            margin-top:10%;
        }
}
.errorImage{

            height:70px;
            width:70px;
            fill: #e91e63;
            align-self: center;
            justify-self:center;
        }
    .eh3{
        font-size: 1.6rem;
        align-self: center;
        justify-self:center;
    }
    .eh4, .eh2{
        align-self: center;
        justify-self:center;
    }
    .eh4{
        font-size:1.3rem;
    }
    .eh2{
        font-size:2rem;
    }
    .eh4, .eh2, .eh3{
        margin:0;
    }
    
`