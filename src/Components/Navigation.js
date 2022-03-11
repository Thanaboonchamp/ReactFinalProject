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
           </ul>
           <footer className="footer">
              <p>@2022 React Port.</p>    
           </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
`;

export default Navigation