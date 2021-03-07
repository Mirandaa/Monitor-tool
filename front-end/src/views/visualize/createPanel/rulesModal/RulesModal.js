import React from 'react'
import {
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import './Modal.less';
import types from './rule-types';
import { withRouter } from 'react-router-dom';

const Modals = (props) => {

  const handleClickCard = (e, cardType) => {
    props.onSelect(cardType);
    props.onClose();
  }

  const handleClickClose = () => {
    props.onClose();
  }

  return (
    <CModal
      show={props.show}
      onClose={handleClickClose}
      size="lg"
    >
      <CModalHeader closeButton>
        <CModalTitle>{`Choose a rule type`}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <div className="flex-grid">
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
      </CModalBody>
    </CModal>
  )
}

export default withRouter(Modals)
