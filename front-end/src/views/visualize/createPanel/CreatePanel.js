import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import * as QueryString from 'query-string';
import MetricPanel from './metricPanel/MetricPanel';
import {
  CButton,
  CCollapse,
  CAlert
} from '@coreui/react';
import CIcon from '@coreui/icons-react'
import Modal from './rulesModal/RulesModal';
import { v4 as uuidv4 } from 'uuid';
import './CreatePanel.less';


const CreatePanel = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  // const sourceId = QueryString.parse(props.location.search).sourceId;
  // const sourceName = QueryString.parse(props.location.search).sourceName;

  const [rules, setRules] = useState([]);

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
      type: type
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

  const saveVisualization = () => {

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
      <Modal
        show={modalVisible}
        onClose={setModalVisible}
        onSelect={handleSelectRuleType}
      >
      </Modal>
      <div className="btn-wrapper">
        <CButton color="primary" variant="outline" onClick={() => cancelCreateVisualization(true)}>Cancel</CButton>
        <CButton color="primary" onClick={() => saveVisualization()}>Save all</CButton>
      </div>
      <CAlert color="secondary">
        <h4 className="alert-heading">Create rule guide</h4>
        <hr />
        <p>
          1. Please click 'Add rule' button and choose a rule. Here are twelve rules for you to choose. All the rules you create will be associated with this dashboard. 
        </p>
        <p className="mb-0">
          2. Please click 'Save all' button after finishing configuring rule. Then, the page will redirect to dashboard.
        </p>
      </CAlert>
      {
        rules.map((rule) => {
          return (
            <div className="collapse-wrapper" key={rule.id}>
                <div className="trigger-wrapper">
                  <button
                    color="primary"
                    onClick={e => toggle(rule.id)}
                    className="collapse-btn"
                  >
                    <h3 className="collapse-title">{rule.type.name}</h3>
                  </button>
                  <button
                    color="primary"
                    onClick={e => deleteRule(rule.id)}
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
                      rule.type.key === 'metric' ? <MetricPanel></MetricPanel> : null
                    }
                    
                  </div>
                </CCollapse>
              </div>
            
          )
        })
      }
      <div>
        <CButton color="primary" block variant="outline" onClick={() => setModalVisible(true)}>Add rule</CButton>
      </div>
    </div>
  )
}
export default withRouter(CreatePanel);