import React from 'react';
import styled from 'styled-components';
import SchoolIcon from '@material-ui/icons/School';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmallTitle from '../Components/SmallTitle';
import Title from '../Components/Title';
import {InnerLayout} from '../styles/Layout';
import ResumeItem from '../Components/ResumeItem'
import ReactTypingEffect from 'react-typing-effect'

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} />
            <InnerLayout>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2019-Present'} 
                        title={'Bachelor'}
                        subTitle={'Thai-Nichi Institue of Technology'}
                        text={'Faculty of Information Technology '}
                    />
                    <ResumeItem 
                        year={'2016-2018'} 
                        title={'High School'}
                        subTitle={'Lasalle Bangkok'}
                        text={'Scine-Math'} 
                    />
                    <ResumeItem 
                       year={'2013-2015'} 
                       title={'Junior High School'}
                       subTitle={'lasalle bangkok'}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }

    .typingeffect {
        text-decoration: bolder;
        font-size: 50px;
      }

`;
export default Resume