import React from 'react'
import { InnerLayout, MainLayout } from '../styles/Layout'
import Title from '../Components/Title'
import Detail from '../Components/Detail'

const DetailPage = () => {
  return (
    <>
    <MainLayout>
            <Title title={'Detail'} span={'Detail'}/>
              <InnerLayout>
                  <Detail/>
                </InnerLayout>
             
    </MainLayout>
    </>
  )
}

export default DetailPage