import React, { useState } from 'react'
// import { CButton, CCard, CCardBody, CCardHeader, CCol, CCollapse, CRow } from '@coreui/react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CCollapse,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CPlaceholder,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilStar, cilFeaturedPlaylist, cilHistory, cilPlus, cilPencil, cilShare, cilTrash, cilCloudUpload, cilChatBubble, cilCommentBubble, cilUser, cilBorderAll, cilBrightness, cilChevronRight, cilChevronDoubleRight, cilApplications, cilAperture, cilContact, cilFont, cilTerminal, cilBlur, cilBolt, cilAudio, cilCast, cibBootstrap, cibMicrosoft, cibAdobeAcrobatReader, cibAsana, cilCode, cilQrCode } from '@coreui/icons'
import { DocsExample } from 'src/components'

import ReactImg from 'src/assets/images/react.jpg'

const Collapses = () => {
  const [visible, setVisible] = useState(false)
  const [visibleHorizontal, setVisibleHorizontal] = useState(false)
  const [visibleA, setVisibleA] = useState(false)
  const [visibleB, setVisibleB] = useState(false)

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <DocsExample href="components/collapse#multiple-targets">
              <CButton color="light" shape="rounded-0">
                <CIcon icon={cilPlus} className="me-2" />
                <small>Start New Session</small>
              </CButton>
              <CRow>
                <CCol xs={6}>
                  <CCollapse visible={visibleA}>
                    <CCard className="mt-3">
                      <CCardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident.
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </CCol>
                <CCol xs={6}>
                  <CCollapse visible={visibleB}>
                    <CCard className="mt-3">
                      <CCardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident.
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </CCol>
              </CRow>
              <div className="bg-light d-flex justify-content-around p-3">
                <CCard style={{ width: '18%' }}>
                  <CCardBody>
                    <CCardTitle>Favorites</CCardTitle>
                    <CCardText>
                      <CIcon icon={cilStar} className="me-2" />
                      <small>Financial losses by adversary...</small>
                      <CIcon icon={cilPencil} className="me-2" />
                      <CIcon icon={cilCloudUpload} className="me-2" />
                      <CIcon icon={cilTrash} className="me-2" />
                    </CCardText>
                    <CCardTitle>Data Stories</CCardTitle>
                    <CCardText>
                      <CIcon icon={cilFeaturedPlaylist} className="me-2" />
                      <small>Pre-built storyline</small>
                    </CCardText>
                    <CCardTitle>Session History</CCardTitle>
                    <CCardText>
                      <p>
                        <small>Today</small>
                        <br></br>
                        <small>
                          <CIcon icon={cilCommentBubble} className="me-2" />A chat Q&A from today.
                        </small>
                        <br></br>
                        <small>
                          <CIcon icon={cilCommentBubble} className="me-2" />A chat Q&A from today.
                        </small>
                      </p>
                      <p>
                        <small>Yesterday</small>
                        <br></br>
                        <small>
                          <CIcon icon={cilCommentBubble} className="me-2" />A chat Q&A from today.
                        </small>
                        <br></br>
                        <small>
                          <CIcon icon={cilCommentBubble} className="me-2" />A chat Q&A from today.
                        </small>
                      </p>
                      <p>
                        <small>Last Week</small>
                        <br></br>
                        <small>
                          <CIcon icon={cilCommentBubble} className="me-2" />A chat Q&A from today.
                        </small>
                      </p>
                    </CCardText>
                  </CCardBody>
                </CCard>
                <CCard style={{ width: '45%' }}>
                  <CCardBody>
                    <CListGroup>
                      <CListGroupItem color="secondary">
                        <CIcon icon={cilContact} className="me-2" />
                        Clop MoveIt CVE
                      </CListGroupItem>
                      <CListGroupItem>
                        <CIcon icon={cilQrCode} className="me-2" />
                        Starting 31 May 2023, <a href="#">Clop</a> has exploited seven <a href="#">MoveIt</a> CVEs:
                        <ol>
                          <li>CVE-2023-34362...</li>
                          <li>CVE-2023-34362...</li>
                          <li>CVE-2023-34362...</li>
                        </ol>
                      </CListGroupItem>
                      <CListGroupItem color="secondary">
                        <CIcon icon={cilContact} className="me-2" />
                        Cras justo odio
                      </CListGroupItem>
                      <CListGroupItem>
                        <CIcon icon={cilQrCode} className="me-2" />
                        Dapibus ac facilisis in
                      </CListGroupItem>
                    </CListGroup>
                  </CCardBody>
                </CCard>
                <CCard style={{ width: '35%' }}>
                  <CCardBody>
                    <CPlaceholder component={CCardTitle} animation="glow" xs={7}>
                      <CPlaceholder xs={6} />
                    </CPlaceholder>
                    <CPlaceholder component={CCardText} animation="glow">
                      <CPlaceholder xs={7} />
                      <CPlaceholder xs={4} />
                      <CPlaceholder xs={4} />
                      <CPlaceholder xs={6} />
                      <CPlaceholder xs={8} />
                    </CPlaceholder>
                    <CPlaceholder
                      component={CButton}
                      disabled
                      href="#"
                      tabIndex={-1}
                      xs={6}
                    ></CPlaceholder>
                  </CCardBody>
                </CCard>
              </div>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Collapses
