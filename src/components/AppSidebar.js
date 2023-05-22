import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// added line below by matt mckean
import { NavLink } from 'react-router-dom'
// added CNavLink below by matt mckean
import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler, CNavLink } from '@coreui/react'
// import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

// import { logoNegative } from 'src/assets/brand/logo-negative'
// import { sygnet } from 'src/assets/brand/sygnet'
// added by matt mckean
// import { cylogoNegative } from '../assets/brand/cy-logo-negative'
// end added

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      {/* uncomment below line (original coreui code) when using logos */}
      {/* <CSidebarBrand className="d-none d-md-flex" to="/"> */}
      <CSidebarBrand className="d-block d-md-flex p-2" to="/">
        {/* added by matt mckean */}
        <CNavLink to="/dashboard" component={NavLink}>
          * Insert Cyvergence Logo *
        </CNavLink>
        {/* end added */}
        {/* 
        <CIcon className="sidebar-brand-full" icon={cylogoNegative} height={35} />
        <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
        */}
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
