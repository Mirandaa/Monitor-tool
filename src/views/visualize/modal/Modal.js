import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CCardFooter,
  CSwitch,
  CBadge,
  CInput,
  CListGroup,
  CListGroupItem
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import './Modal.less';
import types from './chart-types';
import sources from './data-sources'

const Modals = (props) => {
  const [card, setCard] = useState(null);
  const [step, setStep] = useState(1);

  const handleClickCard = (e, cardType) => {
    setCard(cardType);
    setStep(2);
  }

  const handleClickClose = () => {
    props.onClose();
    setStep(1);
  }
  const goBackStepOne =() => {
    setStep(1);
  }

  return (
    <CModal
      show={props.show}
      onClose={handleClickClose}
      size="lg"
    >
      <CModalHeader closeButton>
        <CModalTitle>{step === 1 ? 'New Visualization' : `${card.name} / Choose a source`}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <div className="flex-grid" style={{ display: step === 1 ? 'flex' : 'none' }}>
          {
            types.map((type) => {
              return (
                <div className="flex-item" key={type.key}>
                  <div className="aggre-card aggre-card--isClickable" onClick={(e) => handleClickCard(e, type)}>
                    <div><CIcon name={type.icon} size={'2xl'} /></div>
                    <div className="content">
                      <p className="title">{type.name}</p>
                      <p className="detail">{type.des}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="source" style={{ display: step === 2 ? 'block' : 'none' }}>
          <div className="source-item">
            <CButton color="primary" onClick={goBackStepOne}>Go Back</CButton>
          </div>
          <div className="source-item">
            <CInput id="searchSource" placeholder="Search" />
          </div>
          <ul className="source-item list-group">
            {
              sources.map((source) => {
                return (
                  <li className="list-item" key={source.id}>
                    <button className="list-item-btn">{source.name}</button>
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

export default Modals
