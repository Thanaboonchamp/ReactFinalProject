import React from 'react'
import styled from 'styled-components'

const Member = () => {
  return (
    <MemberStyled>
        <h2>Member</h2>
        <h3>1) ภควัต หนูสะอาด </h3>
        <h3>2) ภาสวีร์ วรรณวิไลย</h3>
        <h3>3) วีรภัทร ขันติกุล</h3>
        <h3>4) ณัธพล ฉัตรอินแก้ว</h3>
        <h3>5) ธนบูรณ์ ลือขจรศักดิ์</h3>
        <h3>6) พลภูมิ พูลวงษ์</h3>
    </MemberStyled>
  )
}
 const MemberStyled = styled.div`
    margin: 1rem 0;
    h2{
        text-decoration-line: underline;
        text-decoration-thickness: 3px;
    }
    f4{
        text-decoration-line: underline;
        text-decoration-thickness: 3px;
    }
 `

export default Member