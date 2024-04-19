import React from 'react'
import { CCard, CCardBody, CCardHeader, CRow, CCol, CListGroup, CListGroupItem } from '@coreui/react'
import { freeSet } from '@coreui/icons'
import { DocsCallout } from 'src/components'
import HolaplexPhoto1 from '../../assets/images/HolaplexPhoto1.png'
import HolaplexPhoto3 from '../../assets/images/HolaplexPhoto3.png'

const Holaplex = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Holaplex 👋👨‍💻</CCardHeader>
        <CCardBody>
          <CRow className="text-center">
            <CCol lg={4}>
              <CCard>
                <CListGroup flush>
                  <CListGroupItem><h3>What is it?</h3></CListGroupItem>
                  <CListGroupItem>
                  Holaplex is a cutting-edge platform that revolutionizes the way NFTs are bought and sold. With a focus on providing a seamless marketplace experience, Holaplex connects creators and collectors in a dynamic ecosystem.
                  <br></br><br></br>

                  Discover, trade, and showcase your unique digital assets with ease on this innovative NFT marketplace. Based in Santa Barbara, California, USA


                  </CListGroupItem>
                </CListGroup>
              </CCard>
            </CCol>
            <CCol lg={4}>
              <CCard>
                <CListGroup flush>
                  <CListGroupItem>Speaker, NFT NYC 2022</CListGroupItem>
                  <CListGroupItem>
                    <img src={HolaplexPhoto1} alt="Holaplex" width={200} />
                  </CListGroupItem>
                </CListGroup>
              </CCard>
            </CCol>
            <CCol lg={4}>
              <CCard>
                <CListGroup flush>
                  <CListGroupItem><h3>Size of impact</h3></CListGroupItem>
                  <CListGroupItem>
                  Holaplex raised over $6m and had over 2,000 stores, enabling the minting of thousands of Solana-based NFTs at its peak
                  <br></br><br></br>

                  Discover, trade, and showcase your unique digital assets with ease on this innovative NFT marketplace. Based in Santa Barbara, California, USA


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
          Was a software engineer intern (summer 2022) responsible for setting up an NFT token gated admin page using Lit protocol.
        </CCardBody>
        <CCardBody>
        <img style={{ borderRadius: 10 }} src={HolaplexPhoto3} alt="Pool Props Img" width={400} />
        </CCardBody>

      </CCard>
    </>
  )
}

export default Holaplex
