import React from 'react'
import styled from 'styled-components'
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import ReactTypingEffect from 'react-typing-effect'
import Member from './Member';
import MemberTwo from './MemberTwo';

const Port = () => {
    return (
      <PortStyled>    

          <div className='first'>
              <p><b>Mafia Run(Demo)</b></p>
              <h2>Unity</h2>
              <div className='video'>
                  <iframe id="ytplayer" type="text/html" width="640" height="480" src="https://www.youtube.com/embed/N_AYtbqxkwc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className='image'>    
              </div>
              <Member/>

              <div className='other'>
            <p><b>ITE-301</b></p>
            <h2>Data base</h2>
            <div className='video'>
                <iframe width="640" height="480" src="https://www.youtube.com/embed/JPjp_sBURBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <MemberTwo/>
              
              
          </div>
          </PortStyled>
          )
}

          const PortStyled = styled.div`
    margin-top: 3rem;
    b{
        font-size: 2.5rem;
        text-decoration-line: underline;
        
    }
    .video{
        margin: 1.5rem 0;
        text-align: center;
    }
    .image{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 2rem;
        img{
            width: 95%;
        }
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
    .other{
        margin-top: 3rem;
        border-top: 5px dashed var(--border-colorR);
    }
    h5{
        margin-top: 1rem;
        a{
            color: var(--primary-color);
            &:hover{
                color: #0059b8;
            }
            &:not(:last-child){
                margin-right: 1rem;
            }
            svg{
                margin: .5rem;
            }
        }
    }

    .typingeffect {
        text-decoration: bolder;
        font-size: 30px;
      }
    
`

export default Port