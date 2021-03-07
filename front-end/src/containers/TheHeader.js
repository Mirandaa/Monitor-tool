import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CDropdown,
  // CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// routes config
import routes from '../routes'

import {
  TheHeaderDropdown,
  // TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks
} from './index'
import * as QueryString from 'query-string';
import { useLocation } from 'react-router-dom'
import { getAllNodes } from "src/api/index";

const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebar.sidebarShow)
  const currentPath = useLocation().pathname;
  const currentSearch = useLocation().search;
  const currentNodeId = useSelector(state => state.node.nodeId)
  const [nodeList, setNodeList] = useState([])

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({ type: 'SET_SIDEBAR_SHOW', sidebarShow: val })
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({ type: 'SET_SIDEBAR_SHOW', sidebarShow: val })
  }

  const getNodeList = () => {
    const fetchData = async () => {
      let allNodes = await getAllNodes()
      let newNodeList = []
  
      if (allNodes) {
        allNodes.map(async (node) => {
          newNodeList.push({
            nodeId: node.nodeId,
            nodeStatus: node.status
          })
        })
        setNodeList(newNodeList)
      }
    }
    fetchData()
  }

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo" />
      </CHeaderBrand>

      <CHeaderNav className="ml-auto px-3">
        <TheHeaderDropdownNotif/>
        <TheHeaderDropdownTasks/>
        {/* <TheHeaderDropdownMssg/> */}
        <TheHeaderDropdown />
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={routes}
        />
        {['/dashboard', '/visualize'].includes(currentPath) ? 
          <div className="d-md-down-none mfe-2 c-subheader-nav">
            <CDropdown className="c-subheader-nav-link">
              <CDropdownToggle onClick={getNodeList}>
                <CIcon name="cil-graph" alt="Dashboard" />&nbsp;{currentNodeId}
              </CDropdownToggle>
              <CDropdownMenu>
                {nodeList.map((node, index) => {
                  return (
                  <CDropdownItem key={node+index}>
                    <CLink 
                      className="c-subheader-nav-link" 
                      aria-current="page" 
                      onClick={e => {
                        dispatch({type: 'SET_CURRENT_NODE', nodeId: node.nodeId})
                        dispatch({type: 'SET_NODE_STATUS', nodeStatus: node.status})
                      }}
                      to="/dashboard"
                    >
                      {node.nodeId}
                    </CLink>
                  </CDropdownItem>
                  )
                })}
              </CDropdownMenu>
            </CDropdown>
            {/* <CLink className="c-subheader-nav-link" href="#">
              <CIcon name="cil-settings" alt="Settings" />&nbsp;Settings
            </CLink> */}
          </div>
          : null}
        {currentPath.search('/visualize/create') !== -1 ?
          <div className="d-md-down-none mfe-2 c-subheader-nav" style={{ fontWeight: 'bold' }}>
            {`Current Node: ${QueryString.parse(currentSearch).sourceName}`}
          </div>
          : null}
      </CSubheader>
    </CHeader>
  )
}

export default TheHeader
