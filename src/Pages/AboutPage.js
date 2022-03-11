import React from 'react'
import Title from '../Components/Title'
import { MainLayout, InnerLayout } from "../styles/Layout"
import styled from 'styled-components'
import Profile from '../Components/Profile'

const AboutPage = () => {
  return (
    <HomePageStyled>
    <>
        <MainLayout>
            <InnerLayout>
            <h1><span className='reveal-text'>About</span></h1>
            <h1><span className='reveal-text'><Title title={'About'} /></span></h1>
            <h1>___________________</h1>
            <Profile/> 
            <h1></h1>
            </InnerLayout>
        </MainLayout>

    </>
    </HomePageStyled>
  )
}

const HomePageStyled = styled.header`
.reveal-text,
    .reveal-text::after {
        animation-delay: var(--animation-delay, 2s);
        animation-iteration-count: var(--iterations, 1);
        animation-duration: var(--duration, 800ms);
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
    }
    
    .reveal-text {
        --animation-delay: var(--delay, 0);
        --animation-duration: var(--duration, 800ms);
        --animation-iterations: var(--iterations, 1);
        position: relative;
        animation-name: clip-text;
        white-space: nowrap;
        cursor: default;
        
        &::after {
            content: "";
            position: absolute;
            z-index: 999;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--primary-color);
            transform: scaleX(0);
            transform-origin: 0 50%;
            pointer-events: none;
            animation-name: text-revealer;
        }
        
    }
    
    
    @keyframes clip-text {
        from {
            clip-path: inset(0 100% 0 0);
        }
        to {
            clip-path: inset(0 0 0 0);
        }
    }
    
    
    @keyframes text-revealer {
        
        0%, 50% {
            transform-origin: 0 50%;
        }
        
        60%, 100% {
            transform-origin: 100% 50%;		
        }
    
        
        60% {
            transform: scaleX(1);
        }
        
        100% {
            transform: scaleX(0);
        }
    }
    
`;

export default AboutPage