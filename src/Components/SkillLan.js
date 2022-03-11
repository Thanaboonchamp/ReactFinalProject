import React from 'react'
import styled from 'styled-components';
import {InnerLayout, MainLayout, } from '../styles/Layout'
import Title from '../Components/Title'
import ProgressBar from './Progressbar'

const SkillLan = () => {
    return (
        <SkillsStyled>
            
                <Title title={'My Language'}  />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'Thai'}
                            width={'100%'}
                            text={'Native'}
                        /> 
                        
                        <ProgressBar 
                            title={'English'}
                            width={'65%'}
                            text={'Intermediate'}
                        />
                        <ProgressBar 
                            title={'Japaness'}
                            width={'20%'}
                            text={'Beginer'}
                        />
                       
                       

                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;


export default SkillLan