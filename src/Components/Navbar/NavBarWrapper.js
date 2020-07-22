import styled from "styled-components";
// #F4F3E1
export default styled.div`
  z-index: 99;
  
  .logo{
    font-weight:700;
    font-size:2rem;
  }
  .atHome{
    transform:unset;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    padding: 0 1rem;
    font-weight:600;
  }
  /* --bg: #F4F3E1; */
  --bg:#212121;
  color: #fafafa;
  a {
    color: #fafafa;
    text-decoration: none;
  }
  .button {
    outline: none;
    background-color: var(--bg);
  }
  height: 100%;
  box-shadow: 0 3px 10px 0 rgb(45, 48, 46, 0.25);
  .navBar {
    background-color: var(--bg);
    padding: 0 0.5rem 0 1rem;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "logo title items";
    .logo {
      position: relative;
      padding: 0.5rem;
      grid-area: logo;
      display: flex;
      align-items: center;
      /* > img {
        @media (max-width: 1024px) {
          /* left: 37%; */
        /* } */
        position: absolute; */
        /* left: 50%;
        transform: translateX(-50%); */
        /* max-width: 100%;
        max-height: 100%; */
        :hover {
          cursor: pointer;
          opacity: 0.6;
        }
    }
    .title {
      grid-area: title;
      font-size: 2rem;
      > img {
        width: 100;
        max-height: 100%;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      button{
        display:flex;
        flex-direction:row;
        align-items: center;
        justify-content: center;
        border:none;
        outline:none;
        background:none;
        color:#fafafa;
        svg{
          fill:#e91e63;
        }
      }
    }
  }
  .navbar-nav {
    grid-area: items;
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    .navItem {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .iconButton {
      display: flex;
      align-items: center;
      justify-content: center;
      > svg {
        fill: #ffffff;
        height: 35px;
        width: 35px;
        padding-right: 10px;
        :hover {
          cursor: pointer;
          opacity: 0.6;
        }
      }
    }
  }

  .linkInactive{
    transition: transform 0.5s ease-in-out;
    transition: border-bottom 1s ease-in-out;
    border-bottom: 3px solid transparent;
    :hover{
      transform:translateY(2px);
      transform:scale(1.1);
    }
  }
  .linkActive{
    /* box-shadow: 0 4px 2px -2px #e91e63; */
    border-bottom: 3px solid #e91e63;
    transition: border-bottom .5s ease-in-out;
    :hover{
      cursor:default;
    }
    
  }
  width: 100%;
`;
