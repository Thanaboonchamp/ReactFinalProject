import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layout';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';


function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    return (
        <MainLayout>
          
            <ContactPageStyled >
            <h1><span className='reveal-text'>Contact</span></h1>
            <Title title={'Contact'}  />
            <InnerLayout className={'contact-section'}>
               
                <div className="center-content">
                    <ContactItem title={'Phone'} icon={phone} cont1={'094-560-6344'} />
                    <ContactItem title={'Email'} icon={email} cont1={'lu.Thanaboon_st@tni.ac.th'} cont2={'Thanaboonchamp@gmail.com'} />
                    <ContactItem title={'Address'} icon={location} cont1={'39/304 9/4 Preecha Srinakarin '} cont2={'Samutprakarn Thailand'} />
                    
                </div>
            </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
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
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }
            
        }
    }
`;

export default ContactPage