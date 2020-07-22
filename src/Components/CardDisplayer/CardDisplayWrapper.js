import styled from "styled-components";

export default styled.div`
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height:90%;
    width:90%;
    /* --bg: teal; */
    /* background: var(--bg); */
    .cardContainer{
        /* padding: 0.5rem 1rem; */
        display:grid;
        background:#F4F3E1;
        /* background:#FBB03B; */
        grid-template-rows: 1fr;
        grid-template-columns: 0.5fr 1fr 1fr;
        height:100%;
        grid-gap:10px;
        width: 100%;
        /* outline:1px solid #283593; */
        /* box-shadow: 0 3px 10px 0 rgb(45, 48, 46, 0.20); */
        @media(max-width: 1024px){
            grid-template-rows: 1fr 1fr 1fr;
            grid-template-columns: 1fr;
        }
    }
    .coverImage{
        height:90%;
        width:90%;
    }
    .imageContainer{
        align-items:center;
        display:flex;
        justify-content:center;
        background:#424242;
    }
    .statsAndImage{
        display:grid;
        grid-template-rows:auto auto;
        grid-template-columns:1fr;
        height:100%;
        width:100%;
        /* @media(max-width: 1024px){
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 1fr;
        } */
        /* box-shadow: 0 3px 15px 0 rgb(45, 48, 46, 0.25); */
    }
    .statsBook{
        grid-auto-rows:auto;
        padding: 0 1rem;
        font-weight:500;
        color:#fafafa;
        background: #212121;
    }
    .bookInformation{
        padding:0.5rem 1.5rem;
        h1{
            height:fit-content;
            margin:5px 0 7px 0;
        }
    }
    .reviewSection{
        display:grid;
        grid-template-rows:1fr 1fr;
        grid-template-columns:1fr;
        background:#F4F3E1;
        /* background:#9fa8da; */
        /* color:white; */
        /* border-radius:px; */
        /* outline:1px solid #283593; */
        height:100%;
        width:100%;
        /* box-shadow: 0 3px 15px 0 rgb(45, 48, 46, 0.15); */
        /* @media(max-width: 1024px){
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 1fr;
        } */
    }
    .rating{
        display:grid;
        grid-template-rows:1fr;
        grid-template-columns:auto auto;
        /* background: #283593; */
        background:#212121;
        color:white;
        padding: 0 0.5rem;
        
    }
    .reviewRead{
        /* padding: 0 0.5rem; */
        display:grid;
        grid-template-rows:auto 1fr;
        grid-template-columns:1fr;
    }
    .reviews{
        max-height:285px;
        padding: 0 0.5rem;
        overflow-y:scroll;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        border: 1px solid #3949ab;
    }
    .reviewAdd{
        display:flex;
        align-items:start;
        /* justify-content:start; */
        flex-direction:column;
        height:100%;
        width:100%;
        padding: 0 0.5rem;
        
        /* h2{
            justify-self:start;
            align-self: start;
        } */
    }
    .reviews::-webkit-scrollbar {
        display: none;
    }
    .reviewForm{
        display:grid;
        width:96%;
        grid-auto-rows:auto;
        grid-row-gap:10px;
    }
    .starsReview{
        /* font-size:1rem; */
        top:5px;
        svg{
            height:20px;
            width:20px;
        }
        /* width:50px;
        height:auto; */
    }
    .starsTop{
        align-self: center;
        justify-self:end;
        svg{
            height:40px;
            width:40px;
        }
    }
    .starsAdding{
        svg{
            height:30px;
            width:30px;
        }
    }
    .reviewInput{
        input{
            height:15px;
            width:100%;
        }
        label{
            height:15px;
            width:100%;
        }
        svg{
                height:30px;
                width:30px
            }
        button{
            height:15px;
            background:#29b6f6;
        }
        
    }
    .iconEmpty{
        color:#424242;
    }
`