import React from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Workflow = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Navs</strong> <small>Tabs</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Takes the basic nav from above and adds the <code>variant=&#34;tabs&#34;</code> class
              to generate a tabbed interface
            </p>
            <DocsExample href="components/nav#tabs">
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink href="#" active>
                    Active
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CNav>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Workflow
