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
import { v4 as uuidv4 } from 'uuid';

const MetricPanel = (props) => {
  const [metrics, setMetrics] = useState([
    {
      id: uuidv4(),
      aggregation: '',
      coustomLable: '',
      collapse: true
    }
  ]);

  const onEntering = () => { };
  const onEntered = () => { };
  const onExiting = () => { };
  const onExited = () => { };

  const toggle = (id) => {
    const metricsCopy = metrics.slice();
    metricsCopy.map(item => {
      if(item.id === id) {
        item.collapse = !item.collapse;
      }
      return item;
    })
    console.log(metricsCopy);
    setMetrics(metricsCopy);
  }

  const addMetric = () => {
    setMetrics([...metrics, {
      id: uuidv4(),
      aggregation: '',
      coustomLable: '',
      collapse: true
    }])
  };

  const deleteMetric = (id) => {
    const index = metrics.findIndex(item => item.id === id);
    const metricsCopy = metrics.slice();
    metricsCopy.splice(index, 1)
    console.log(metricsCopy);
    setMetrics(metricsCopy);
  };

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
              {
                metrics.map((item) => {
                  return (
                    <div className="collapse-wrapper" key={item.id}>
                      <div className="trigger-wrapper">
                        <button
                          color="primary"
                          onClick={e => toggle(item.id)}
                          className="collapse-btn"
                        >
                          Metric
                        </button>
                        <button
                          color="primary"
                          onClick={e => deleteMetric(item.id)}
                          className="collapse-btn close-btn"
                        >
                          <CIcon name="cil-X"></CIcon>
                        </button>
                      </div>
                      <CCollapse
                        show={item.collapse}
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
                    </div>
                  )
                })
              }

              <div className="btn-wrapper">
                <CButton size="sm" color="primary" onClick={addMetric}>add</CButton>
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