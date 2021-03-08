import React from 'react'
import {
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CInput,
} from '@coreui/react'
import './Modal.less';
import sources from './data-sources';
import { withRouter } from 'react-router-dom';

const Modals = (props) => {

  const handleClickClose = () => {
    props.onClose();
  }

  const createVisualization = (e, source) => {
    props.history.push(`/visualize/create?sourceId=${source.id}&sourceName=${source.name}`);
  }

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
              sources.map((source) => {
                return (
                  <li className="list-item" key={source.id}>
                    <button className="list-item-btn" onClick={(e) => createVisualization(e, source)}>{source.name}</button>
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
