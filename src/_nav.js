import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilPool,

  
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Stuff Zac has worked on',
  },
  {
    component: CNavItem,
    name: 'PoolProps',
    to: '/stuff/poolprops',
    icon: <CIcon icon={cilPool} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Holaplex',
    to: '/stuff/holaplex',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'College Mixer',
    to: '/stuff/college-mixer',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'ReallyMail',
    to: '/stuff/reallymail',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  
]

export default _nav
