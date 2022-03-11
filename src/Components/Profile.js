import React from 'react'
import styled from 'styled-components';
import avatar2 from '../img/avatar2.jfif';

const Profile = () => {
    return (
        <ProfileStyled>
            <div className="left-content">
                <img src={avatar2} alt=''/>
            </div>
            <div className="right-content">
                <h1>I'm <span>Thanaboon Luekajornsak </span></h1>
                <p> </p>
                <p> Full Name &nbsp; : Thanaboon Luekajornsak <br/>
                <br/>
                    Age &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;: 21 <br/>
                    <br/>
                    Nationality : Thai<br/>
                    <br/>
                    Languages&nbsp;: Thai, Japanese, English<br/>
                    <br/>
                    Location &#160;&nbsp;&nbsp; : Samutprakarn<br/>
                     </p>
            </div>
        </ProfileStyled>
    )
}

const ProfileStyled = styled.div`
    display: flex;
    img{
        width: 80%;
        border-radius: 30%;
    }
    .left-content{
        width: 50%;
        padding-left: 20px;
        position: relative;
       
    }
    .right-content{
        padding-left: 3.5rem;
        position: relative;
        h1{
            font-size: 2rem;
            padding-bottom: 1rem;
            span{
                font-size: 2rem;
            }
        }
        p{
            font-size: 1.4rem;
            padding-bottom: 2rem;
            
        }

        p1{
            padding-top: 1rem;
            font-size: 1.2rem;
            padding-bottom: 1rem;
            
        }

    }
`;
export default Profile;