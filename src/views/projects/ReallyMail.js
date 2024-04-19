import React from 'react'
import { CCard, CCardBody, CCardHeader, CRow, CCol, CListGroup, CListGroupItem } from '@coreui/react'
import { freeSet } from '@coreui/icons'
import { DocsCallout } from 'src/components'
import ReallyMailPhoto1 from '../../assets/images/ReallyMail1.png'
import ReallyMailPhoto2 from '../../assets/images/ReallyPhoto2.png'
import PropsPhoto3 from '../../assets/images/PropsPhoto3.png'
import MixerPhoto1 from '../../assets/images/MixerPhoto1.png'
import MixerPhoto2 from '../../assets/images/MixerPhoto2.png'
import FlashingHeader from './FlashingHeader';

const ReallyMail = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>ReallyMail 📬🏎️</CCardHeader>
        {/* <FlashingHeader /> */}
        <CCardBody>
          <CRow className="text-center">
            <CCol lg={4}>
              <CCard>
                <CListGroup flush>
                  <CListGroupItem><h3>What is it?</h3></CListGroupItem>
                  <CListGroupItem>
                  This one's more of a side project but I feel like it's worth mentioning as the UI is pretty good. Essentially an AI-buffed up version of Superhuman email client

                  <br></br><br></br>



                  </CListGroupItem>
                </CListGroup>
              </CCard>
            </CCol>
            <CCol lg={4}>
              <CCard>
                <CListGroup flush>
                  <CListGroupItem>Check it out for yourself</CListGroupItem>
                  <CListGroupItem>
                  <a href="https://reallymail.com">reallymail.com</a>
                  </CListGroupItem>
                </CListGroup>
              </CCard>
            </CCol>
            <CCol lg={4}>
              <CCard>
                <CListGroup flush>
                  <CListGroupItem>A lot of hard work</CListGroupItem>
                  <CListGroupItem>
                  The project started out as a tool to help sales people respond to leads faster, called SpeedLead. After some refurbishing it became ReallyMail. I don't work on it anymore as I don't think it will have a big enough impact on humantiy to be worth my time
                  </CListGroupItem>
                  <CListGroupItem>
                    <img style={{ borderRadius: 10 }} src={ReallyMailPhoto2} alt="ReallyMail image" width={200} />
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
          Programmed the frontend using React, TypeScript, TailwindCSS, and the backend using express js, node js, and mongo. 

          The AI aspect works through prompts and uses GPT 3.5

          
        </CCardBody>
        <CCardBody>
        <img style={{ borderRadius: 10 }} src={ReallyMailPhoto1} alt="ReallyMail image" width={400} />
        </CCardBody>

      </CCard>
    </>
  )
}

export default ReallyMail
