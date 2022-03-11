import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import avatar from '../img/avatar.jpg'

const Navigation = () => {
    return(
        <NavigationStyled>
           <div className='avatar'>
               <img src = {avatar} alt = ""/>
           </div>
           <ul className="nav-items">
             <li className="nav-items">
                 <NavLink to = "/" activeclassName = "active" exact >Home</NavLink>
             </li>   
             <li className="nav-items">
                 <NavLink to = "/about" activeclassName = "active" exact >About</NavLink>
             </li>   
             <li className="nav-items">
                 <NavLink to = "/resume" activeclassName = "active" exact >Resume</NavLink>
             </li>   
             <li className="nav-items">
                 <NavLink to = "/portfolio" activeclassName = "active" exact >Portfolio</NavLink>
             </li>   
             <li className="nav-items">
                 <NavLink to = "/Product" activeclassName = "active" exact >Product</NavLink>
             </li>   
             <li className="nav-items">
                 <NavLink to = "/Cart" activeclassName = "active" exact >Cart </NavLink>
             </li>   
             <li className="nav-items">
                 <NavLink to = "/contact" activeclassName = "active" exact >Contact</NavLink>
             </li>     

           </ul>
           <footer className="footer">
              <p>@2022 Thanaboon Portfolio.</p>    
           </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
height: 100%;
width: 100%;
border-left: 1px solid var(--border-color);
.avatar{
    width: 100;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 2rem 0;
    img{
        width: 80%;
        border-radius: 50%;
        border: 8px solid var(--border-color);
    }
}
.nav-items{
    width: 100%;
    text-align: center;
    .active{
        background-color: var(--primary-color);
    }
    li{
        display: block;
        a{
            display: block;
            padding: .2rem 0;
            position: relative;
            text-decoration: none;
            font-size: 1=rem;
            &:hover{
                cursor: pointer;
                color: var(--white-color);
            }
            &::before{
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 50%;
                background-color: var(--primary-color);
                z-index: 3;
                opacity: 0.21;
                transition: width 0.4s cubic-bezier(.37,0,.68,1)
            }
        }
        a:hover::before{
            width: 100%;
            height: 100%;
        }
    }
}
footer{
    border-top: 1px solid var(--border-color);
    width: 100%;
    p{
        padding: 1rem 0;
        font-size: 0.5rem;
        display: block;
        text-align: center;
    }
}
`

export default Navigation