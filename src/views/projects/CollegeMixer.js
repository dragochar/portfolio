import React from 'react'
import { CCard, CCardBody, CCardHeader, CRow, CCol, CListGroup, CListGroupItem } from '@coreui/react'
import { freeSet } from '@coreui/icons'
import { DocsCallout } from 'src/components'
import PropsPhoto2 from '../../assets/images/PropsPhoto2.png'
import PropsPhoto3 from '../../assets/images/PropsPhoto3.png'
import MixerPhoto1 from '../../assets/images/MixerPhoto1.png'
import MixerPhoto2 from '../../assets/images/MixerPhoto2.png'

const CollegeMixer = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>College Mixer 🏫🍸</CCardHeader>
        <CCardBody>
          <CRow className="text-center">
            <CCol lg={4}>
              <CCard>
                <CListGroup flush>
                  <CListGroupItem><h3>What is it?</h3></CListGroupItem>
                  <CListGroupItem>
                  College Mixer is a dating app created exclusively for University students, wherein users sign up for the service using their school email. The app has over 1000 users, and is continuing to grow.

                  <br></br><br></br>

                  The platform also offers unique features beyond exclusivity not found in other dating apps, such as Double Dates, Games, Analytics, Search, and much more.

                  </CListGroupItem>
                </CListGroup>
              </CCard>
            </CCol>
            <CCol lg={4}>
              <CCard>
                <CListGroup flush>
                  <CListGroupItem>User interface</CListGroupItem>
                  <CListGroupItem>
                    <img style={{ borderRadius: 10 }} src={MixerPhoto1} alt="College Mixer" width={200} />
                  </CListGroupItem>
                </CListGroup>
              </CCard>
            </CCol>
            <CCol lg={4}>
              <CCard>
                <CListGroup flush>
                  <CListGroupItem>Featured in...</CListGroupItem>
                  <CListGroupItem>
                    https://westerngazette.ca/culture/student_life/review-swiping-right-on-college-mixer-the-dating-app-for-western-students/article_c73dce46-c9c2-11ee-90c4-27de88c99ac6.html
                  </CListGroupItem>
                  <CListGroupItem>
                    https://westerngazette.ca/culture/student_life/meet-winder-tinder-but-for-western-students/article_2c86cb7a-cfed-11ed-810d-0316f436202f.html                  </CListGroupItem>
                  </CListGroup>
              </CCard>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>Zac...</CCardHeader>
        <CCardBody>
          Programmed the frontend, backend, and marketed the app from the ground up with the help of some friends, and more red bull.

          
        </CCardBody>
        <CCardBody>
        <img style={{ borderRadius: 10 }} src={MixerPhoto2} alt="Pool Props Img" width={400} />
        </CCardBody>

      </CCard>
    </>
  )
}

export default CollegeMixer
