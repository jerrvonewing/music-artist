import React from 'react'
import {CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'

function Card() {
  return (
    <>
    <CCard style={{ width: '18rem' }}>
        <CCardBody>
            <CCardTitle> title</CCardTitle>
            <CCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </CCardText>
            <CButton href="#">Go somewhere</CButton>
        </CCardBody>
    </CCard>
</>

  )
}

export default Card