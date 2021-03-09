import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import * as QueryString from 'query-string';
import MetricPanel from './metricPanel/MetricPanel';
import {
  CButton,
  CCard,
  CCardHeader,
  CCardBody,
  CCollapse,
  CListGroup,
  CListGroupItem,
  CModal,
  CModalBody,
  CModalHeader,
  CModalFooter
} from '@coreui/react';
import CIcon from '@coreui/icons-react'
import RulesModal from './rulesModal/RulesModal';
import { v4 as uuidv4 } from 'uuid';
import './CreatePanel.less';
import { createDashboard } from '@/api';


const CreatePanel = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const host = QueryString.parse(props.location.search).host;
  const app = QueryString.parse(props.location.search).app;
  // const sourceName = QueryString.parse(props.location.search).sourceName;
  const [confirmCancelModal, setConfirmCancelModal] = useState(false);
  const [rules, setRules] = useState([]);

  const toggleConfirmCancelModal = ()=>{
    setConfirmCancelModal(!confirmCancelModal);
  }

  const toggle = (id) => {
    const rulesCopy = rules.slice().map(item => {
      if (item.id === id) {
        item.collapse = !item.collapse;
      }
      return item;
    })
    setRules(rulesCopy);
  }

  const addRule = (type) => {
    const rules1 = rules.slice().map((item) => {
      return { ...item, collapse: false }
    });
    setRules([...rules1, {
      id: uuidv4(),
      collapse: true,
      data: {},
      type: type,
      group: 'owner'
    }])
  };

  const deleteRule = (id) => {
    const index = rules.findIndex(item => item.id === id);
    const rulesCopy = rules.slice();
    rulesCopy.splice(index, 1)
    setRules(rulesCopy);
  };

  const handleSelectRuleType = (type) => {
    addRule(type);
  };

  const cancelCreateVisualization = () => {
    props.history.push('/visualize');
  }

  const saveVisualization = async () => {
    console.log(rules)
    const data = {
      nodeId: `${host}#${app}`,
      rule: rules
    }
    // await createDashboard(data);
  };

  const updateMetric = async (id, data) => {
    const rulesCopy = rules.slice().map(item => {
      if (item.id === id) {
        item.data = data.aggs;
        item.group = data.group;
      }
      return item;
    })
    setRules(rulesCopy);
  };

  // const updateMetric = (metric, field, value) => {
  //   const metricsCopy = metrics.slice();
  //   metricsCopy.map(item => {
  //     if (item.id === metric.id) {
  //       item[field] = value;
  //     }
  //     return item;
  //   });
  //   setMetrics(metricsCopy);
  // };

  return (
    <div className="create-panel-container">
      <CModal
        show={confirmCancelModal}
        onClose={toggleConfirmCancelModal}
      >
        <CModalHeader closeButton>Confirm dialog</CModalHeader>
        <CModalBody>
          Are you sure you want to cancel the configurations?
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={cancelCreateVisualization}>Confirm</CButton>{' '}
          <CButton
            color="secondary"
            onClick={toggleConfirmCancelModal}
          >Cancel</CButton>
        </CModalFooter>
      </CModal>
      <RulesModal
        show={modalVisible}
        onClose={setModalVisible}
        onSelect={handleSelectRuleType}
      >
      </RulesModal>
      <div className="btn-wrapper">
        <CButton color="primary" variant="outline" onClick={() => toggleConfirmCancelModal()}>Cancel</CButton>
        <CButton color="primary" onClick={() => saveVisualization()}>Save all</CButton>
      </div>
      <CCard >
        <CCardHeader>
          Create rule guide
        </CCardHeader>
        <CCardBody>
          <CListGroup accent>
            <CListGroupItem accent="primary">
              1. Please click 'Add rule' button and choose a rule. Here are twelve rules for you to choose. All the rules you create will be associated with this dashboard. 
            </CListGroupItem>
            <CListGroupItem accent="primary">
              2. Please click 'Save all' button after finishing configuring rule. Then, the page will redirect to dashboard.
            </CListGroupItem>
          </CListGroup>
        </CCardBody>
      </CCard>
      {
        rules.map((rule) => {
          return (
            <div className="collapse-wrapper" key={rule.id}>
                <div className="trigger-wrapper">
                  <button
                    color="primary"
                    onClick={() => toggle(rule.id)}
                    className="collapse-btn"
                  >
                    <h3 className="collapse-title">{rule.type.name}</h3>
                  </button>
                  <button
                    color="primary"
                    onClick={() => deleteRule(rule.id)}
                    className="collapse-btn close-btn"
                  >
                    <CIcon name="cil-X"></CIcon>
                  </button>
                </div>
                <CCollapse
                  show={rule.collapse}
                >
                  <div className="child-wrapper">
                    {
                      // TODO
                      rule.type.key === 'metric' ?
                      <MetricPanel onChange={data => updateMetric(rule.id, data)}></MetricPanel>
                      : <MetricPanel onChange={data => updateMetric(rule.id, data)}></MetricPanel>
                    }
                    
                  </div>
                </CCollapse>
              </div>
            
          )
        })
      }
      <CButton color="primary" block variant="outline" className="mt-2 mb-2"
        onClick={() => setModalVisible(true)}
      >
        Add rule
      </CButton>
    </div>
  )
}
export default withRouter(CreatePanel);