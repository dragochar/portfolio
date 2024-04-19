import React from 'react'
import { CCard, CCardBody, CCardHeader, CRow, CCol, CListGroup, CListGroupItem } from '@coreui/react'
import { freeSet } from '@coreui/icons'
import { DocsCallout } from 'src/components'
import PropsPhoto1 from '../../assets/images/PropsPhoto1.png'
import PropsPhoto2 from '../../assets/images/PropsPhoto2.png'
import PropsPhoto3 from '../../assets/images/PropsPhoto3.png'

const PoolProps = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Pool Props 🛟👊</CCardHeader>
        <CCardBody>
          <CRow className="text-center">
            <CCol lg={4}>
              <CCard>
                <CListGroup flush>
                  <CListGroupItem><h3>What is it?</h3></CListGroupItem>
                  <CListGroupItem>
                  Poolprops is a decentralized sports betting platform on the Solana blockchain that aims to shift the paradigm by utilizing smart contracts to generate yield on all assets used for wagers.	

                  <br></br><br></br>

                  PoolProps is a new way to bet on sports without having to trust any third party. It is a decentralized sportsbook where everyone gets paid directly from bets placed on games.

                  </CListGroupItem>
                </CListGroup>
              </CCard>
            </CCol>
            <CCol lg={4}>
              <CCard>
                <CListGroup flush>
                  <CListGroupItem>Over $1,000,000 in total volume</CListGroupItem>
                  <CListGroupItem>
                    <img src={PropsPhoto1} alt="Pool Props" width={200} />
                  </CListGroupItem>
                </CListGroup>
              </CCard>
            </CCol>
            <CCol lg={4}>
              <CCard>
                <CListGroup flush>
                  <CListGroupItem>Placed 4th, DeFi track, Solana Summercamp Hackathon</CListGroupItem>
                  <CListGroupItem>
                    <img src={PropsPhoto2} alt="Pool Props" width={200} />
                  </CListGroupItem>
                </CListGroup>
              </CCard>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>Zac...</CCardHeader>
        <CCardBody>
          Programmed the frontend using TypeScript, React, Solana libraries, and red bull
        </CCardBody>
        <CCardBody>
        <img style={{ borderRadius: 10 }} src={PropsPhoto3} alt="Pool Props Img" width={400} />
        </CCardBody>

      </CCard>
    </>
  )
}

export default PoolProps
