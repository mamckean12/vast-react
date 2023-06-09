import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCheckCircle,
  cilCloud,
  cilCursor,
  cilDescription,
  cilDrop,
  cilGraph,
  cilInput,
  cilList,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSearch,
  cilSpeedometer,
  cilStar,
  cilWeightlifitng,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Vast Playground',
    to: '/vast/dashboard',
    icon: <CIcon icon={cilWeightlifitng} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavGroup,
    name: 'Vast Prototype',
    to: '/vast',
    items: [
      {
        component: CNavItem,
        name: 'Security Posture',
        to: '/vast/dashboard',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Research',
        to: '/vast/research',
        icon: <CIcon icon={cilSearch} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Analyze',
        to: '/vast/analyze',
        icon: <CIcon icon={cilGraph} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Plan',
        to: '/vast/plan',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Act',
        to: '/vast/act',
        icon: <CIcon icon={cilCheckCircle} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Theme',
    to: '/theme',
    items: [
      {
        component: CNavItem,
        name: 'Colors',
        to: '/theme/colors',
        icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Typography',
        to: '/theme/typography',
        icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Mode (Coming Soon!)',
        to: '/theme/modes',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'CoreUI',
    to: '/coreui',
    items: [
      {
        component: CNavGroup,
        name: 'Base',
        to: '/coreui/base',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Accordion',
            to: '/base/accordion',
          },
          {
            component: CNavItem,
            name: 'Breadcrumb',
            to: '/base/breadcrumbs',
          },
          {
            component: CNavItem,
            name: 'Cards',
            to: '/base/cards',
          },
          {
            component: CNavItem,
            name: 'Carousel',
            to: '/base/carousels',
          },
          {
            component: CNavItem,
            name: 'Collapse',
            to: '/base/collapses',
          },
          {
            component: CNavItem,
            name: 'List group',
            to: '/base/list-groups',
          },
          {
            component: CNavItem,
            name: 'Navs & Tabs',
            to: '/base/navs',
          },
          {
            component: CNavItem,
            name: 'Pagination',
            to: '/base/paginations',
          },
          {
            component: CNavItem,
            name: 'Placeholders',
            to: '/base/placeholders',
          },
          {
            component: CNavItem,
            name: 'Popovers',
            to: '/base/popovers',
          },
          {
            component: CNavItem,
            name: 'Progress',
            to: '/base/progress',
          },
          {
            component: CNavItem,
            name: 'Spinners',
            to: '/base/spinners',
          },
          {
            component: CNavItem,
            name: 'Tables',
            to: '/base/tables',
          },
          {
            component: CNavItem,
            name: 'Tooltips',
            to: '/base/tooltips',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Buttons',
        to: '/buttons',
        icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Buttons',
            to: '/buttons/buttons',
          },
          {
            component: CNavItem,
            name: 'Buttons groups',
            to: '/buttons/button-groups',
          },
          {
            component: CNavItem,
            name: 'Dropdowns',
            to: '/buttons/dropdowns',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Forms',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Form Control',
            to: '/forms/form-control',
          },
          {
            component: CNavItem,
            name: 'Select',
            to: '/forms/select',
          },
          {
            component: CNavItem,
            name: 'Checks & Radios',
            to: '/forms/checks-radios',
          },
          {
            component: CNavItem,
            name: 'Range',
            to: '/forms/range',
          },
          {
            component: CNavItem,
            name: 'Input Group',
            to: '/forms/input-group',
          },
          {
            component: CNavItem,
            name: 'Floating Labels',
            to: '/forms/floating-labels',
          },
          {
            component: CNavItem,
            name: 'Layout',
            to: '/forms/layout',
          },
          {
            component: CNavItem,
            name: 'Validation',
            to: '/forms/validation',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Charts',
        to: '/charts',
        icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
      },
      {
        component: CNavGroup,
        name: 'Icons',
        icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'CoreUI Free',
            to: '/icons/coreui-icons',
            badge: {
              color: 'success',
              text: 'NEW',
            },
          },
          {
            component: CNavItem,
            name: 'CoreUI Flags',
            to: '/icons/flags',
          },
          {
            component: CNavItem,
            name: 'CoreUI Brands',
            to: '/icons/brands',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Notifications',
        icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Alerts',
            to: '/notifications/alerts',
          },
          {
            component: CNavItem,
            name: 'Badges',
            to: '/notifications/badges',
          },
          {
            component: CNavItem,
            name: 'Modal',
            to: '/notifications/modals',
          },
          {
            component: CNavItem,
            name: 'Toasts',
            to: '/notifications/toasts',
          },
        ],
      },
      {
        component: CNavItem,
        name: 'Widgets',
        to: '/widgets',
        icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
        badge: {
          color: 'info',
          text: 'NEW',
        },
      },
      {
        component: CNavGroup,
        name: 'Extras',
        to: '/extras',
        icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
        items: [
          {
            component: CNavGroup,
            name: 'Pages',
            items: [
              {
                component: CNavItem,
                name: 'Login',
                to: '/login',
              },
              {
                component: CNavItem,
                name: 'Register',
                to: '/register',
              },
              {
                component: CNavItem,
                name: 'Error 404',
                to: '/404',
              },
              {
                component: CNavItem,
                name: 'Error 500',
                to: '/500',
              },
            ],
          },
          {
            component: CNavItem,
            name: 'Docs',
            href: 'https://coreui.io/react/docs/templates/installation/',
          },
        ],
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Material UI',
    to: '/mui',
    items: [
      {
        component: CNavItem,
        name: 'Templates Library',
        href: 'https://mui.com/store/?utm_source=marketing&utm_medium=referral&utm_campaign=templates-cta#populars',
        icon: <CIcon icon={cilInput} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'MUI System',
        href: 'https://mui.com/system/getting-started/overview/',
        icon: <CIcon icon={cilCloud} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Docs',
        href: 'https://mui.com/material-ui/getting-started/overview/',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'D3 Graphics',
    to: '/d3',
    items: [
      {
        component: CNavItem,
        name: 'Image Library',
        href: 'https://observablehq.com/@d3/gallery/',
        icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Create New Graphic',
        to: 'https://github.com/d3/d3/blob/main/API.md',
        icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Docs',
        href: 'https://github.com/d3/d3/wiki',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Gradio Demos',
    to: '/gradio',
    items: [
      {
        component: CNavItem,
        name: 'Vast Demos Library',
        href: 'https://www.gradio.app/demos/',
        icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Build New Demo',
        href: 'https://www.gradio.app/guides/',
        icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Docs',
        href: 'https://www.gradio.app/docs/',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'CoLabs Notebooks',
    to: '/notebooks',
    items: [
      {
        component: CNavItem,
        name: 'Vast Notebooks Library',
        href: 'https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/en/chapter2/section2_pt.ipynb',
        icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Google CoLabs',
        href: 'https://colab.research.google.com/',
        icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Docs',
        href: 'https://colab.research.google.com/notebooks/basic_features_overview.ipynb',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Streamlit',
    to: '/streamlit',
    items: [
      {
        component: CNavItem,
        name: 'Gallery',
        href: 'https://streamlit.io/gallery',
        icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Add Component',
        href: 'https://streamlit.io/components',
        icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Docs',
        href: 'https://docs.streamlit.io/',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Mitre',
    items: [
      {
        component: CNavItem,
        name: 'Att&ck',
        href: 'https://attack.mitre.org/',
        icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Navigator',
        to: '/mitre/navigator',
        icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Att&ck Flow',
        href: 'https://center-for-threat-informed-defense.github.io/attack-flow/developers/',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Experimental',
    items: [
      {
        component: CNavItem,
        name: 'TBD',
        to: '/',
        icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Workflow',
        href: '/experimental/workflow',
        icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'TBD',
        href: '/',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
    ],
  },
]

export default _nav
