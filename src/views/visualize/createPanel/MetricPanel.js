import React, { useState } from 'react';
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
  CListGroupItem,
  CCollapse,
  CForm,
  CFormGroup,
  CLabel,
  CFormText
} from '@coreui/react';
import CIcon from '@coreui/icons-react'
import './MetricPanel.less';

const MetricPanel = (props) => {
  const [collapse, setCollapse] = useState(false);
  const [collapse2, setCollapse2] = useState(false);

  const onEntering = () => {};
  const onEntered = () => {};
  const onExiting = () => {};
  const onExited = () => {};

  const toggle = (e)=>{
    setCollapse(!collapse);
    e.preventDefault();
  }

  // inner
  const toggle2 = (e)=>{
    setCollapse2(!collapse2);
    e.preventDefault();
  }

  return (
    <div className="panel-container">
      <div className="visualization">
      </div>
      <div className="sidebar">
        <h3 className="title">{props.source.name}</h3>
        <div>
          <CCard>
            <CCardHeader>
              Metrics
            </CCardHeader>
            <CCardBody>
              <div className="collapse-wrapper">
                <div className="trigger-wrapper">
                  <button
                    color="primary"
                    onClick={toggle}
                    className="collapse-btn"
                  >
                    Metric
                  </button>
                  <button
                    color="primary"
                    // onClick={toggle}
                    className="collapse-btn close-btn"
                  >
                    <CIcon name="cil-X"></CIcon>
                  </button>
                </div>
                <CCollapse
                  show={collapse}
                  onEntering={onEntering}
                  onEntered={onEntered}
                  onExiting={onExiting}
                  onExited={onExited}
                >
                  <div className="child-wrapper">
                    <CForm action="" method="post">
                      <CFormGroup>
                        <CLabel htmlFor="nf-email" className="label">Aggregation</CLabel>
                        <CInput
                          type="email"
                          id="nf-email"
                          name="nf-email"
                          placeholder=""
                          autoComplete="email"
                        />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="nf-password" className="label">Custom label</CLabel>
                        <CInput
                          type="password"
                          id="nf-password"
                          name="nf-password"
                          placeholder=""
                          autoComplete="current-password"
                        />
                      </CFormGroup>
                    </CForm>
                  </div>
                </CCollapse>
                <div>
                  <CButton size="sm" color="primary">add</CButton>
                </div>
              </div>
            </CCardBody>
          </CCard>
          <CCard>
            <CCardHeader>
              Buckets
            </CCardHeader>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCardBody>
          </CCard>
        </div>
      </div>
    </div>
  )
}
export default MetricPanel;