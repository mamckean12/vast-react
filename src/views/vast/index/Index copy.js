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
  CPlaceholder,
  CRow,
} from '@coreui/react'
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
          <CCardHeader>
            <strong>React Collapse</strong> <small> multi target</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              A <code>&lt;CButton&gt;</code> can show and hide multiple elements.
            </p>
            <DocsExample href="components/collapse#multiple-targets">
              <CDropdown>
                <CDropdownToggle color="secondary">Threats</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Adversaries</CDropdownItem>
                  <CDropdownItem href="#">Kill Chains</CDropdownItem>
                  <CDropdownItem href="#">Intel Feeds</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CButton onClick={() => setVisibleA(!visibleA)}>Toggle first element</CButton>
              <CButton onClick={() => setVisibleB(!visibleB)}>Toggle second element</CButton>
              <CButton
                onClick={() => {
                  setVisibleA(!visibleA)
                  setVisibleB(!visibleB)
                }}
              >
                Toggle both elements
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
              <div className="d-flex justify-content-around p-3">
                <CCard style={{ width: '18rem' }}>
                  <CCardImage orientation="top" src={ReactImg} />
                  <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      Some quick example text to build on the card title and make up the bulk of the
                      card&#39;s content.
                    </CCardText>
                    <CButton href="#">Go somewhere</CButton>
                  </CCardBody>
                </CCard>
                <CCard style={{ width: '18rem' }}>
                  <CCardImage orientation="top" src={ReactImg} />
                  <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                      Some quick example text to build on the card title and make up the bulk of the
                      card&#39;s content.
                    </CCardText>
                    <CButton href="#">Go somewhere</CButton>
                  </CCardBody>
                </CCard>
                <CCard style={{ width: '18rem' }}>
                  <CCardImage
                    component="svg"
                    orientation="top"
                    width="100%"
                    height="162"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                  </CCardImage>
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
