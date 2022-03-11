import React from 'react'
import styled from 'styled-components'

const MemberTwo = () => {
  return (
    <MemberStyled>
        <h2>Member</h2>
        <h3>1) ธนบูรณ์ ลือขจรศักดิ์</h3>
        <h3>2) ภควัต หนูสะอาด</h3>
    </MemberStyled>
  )
}
 const MemberStyled = styled.div`
    margin: 1rem 0;
    h2{
        text-decoration-line: underline;
        text-decoration-thickness: 3px;
    }
 `;

export default MemberTwo