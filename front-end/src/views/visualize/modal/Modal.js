import React, { useState, useEffect } from 'react'
import {
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CInput,
} from '@coreui/react'
import './Modal.less';
import { withRouter } from 'react-router-dom';
import { getAllNodes } from '@/api';

const Modals = (props) => {
  const [nodes, setNodes] = useState([]);

  const handleClickClose = () => {
    props.onClose();
  }

  const createVisualization = (e, source) => {
    props.history.push(`/visualize/create?host=${source.nodeId.split('#')[0]}&app=${source.nodeId.split('#')[1]}`);
  }

  useEffect(() => {
    const fetchData = async () => {
      const allNodes = await getAllNodes();
      setNodes(allNodes);
    }
    fetchData();
  }, [])

  return (
    <CModal
      show={props.show}
      onClose={handleClickClose}
      size="lg"
    >
      <CModalHeader closeButton>
        <CModalTitle>New Visualization / Choose a source</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <div className="source">
          <div className="source-item">
            <CInput id="searchSource" placeholder="Search" />
          </div>
          <ul className="source-item list-group">
            {
              nodes.map((node) => {
                return (
                  <li className="list-item" key={node.nodeId}>
                    <button className="list-item-btn" onClick={(e) => createVisualization(e, node)}>{node.nodeId}</button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </CModalBody>
    </CModal>
  )
}

export default withRouter(Modals)
