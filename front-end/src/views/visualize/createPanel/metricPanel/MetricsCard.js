import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CInput,
  CCollapse,
  CForm,
  CFormGroup,
  CLabel,
  CSelect
} from '@coreui/react';
import CIcon from '@coreui/icons-react'
import './MetricPanel.less';
import { v4 as uuidv4 } from 'uuid';
import { aggregationTypeList } from '@/constants';

const MetricsCard = (props) => {
  const [metrics, setMetrics] = useState([
    {
      id: uuidv4(),
      aggregation: 'average',
      field: '',
      coustomLabel: '',
      collapse: true
    }
  ]);

  const toggle = (id) => {
    const metricsCopy = metrics.slice();
    metricsCopy.map(item => {
      if (item.id === id) {
        item.collapse = !item.collapse;
      }
      return item;
    })
    setMetrics(metricsCopy);
  }

  const addMetric = () => {
    const metrics1 = metrics.slice().map((item) => {
      return { ...item, collapse: false }
    });
    setMetrics([...metrics1, {
      id: uuidv4(),
      aggregation: 'average',
      field: '',
      coustomLabel: '',
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

  const updateMetric = (metric, field, value) => {
    const metricsCopy = metrics.slice();
    metricsCopy.map(item => {
      if (item.id === metric.id) {
        item[field] = value;
      }
      return item;
    });
    setMetrics(metricsCopy);
  };

  const aggregationSelectChange = (e, metric) => {
    updateMetric(metric, 'aggregation', e.target.value);
  };

  const customLabelChange = (e, metric) => {
    updateMetric(metric, 'coustomLabel', e.target.value);
  };

  const fieldChange = (e, metric) => {
    updateMetric(metric, 'field', e.target.value);
  };

  return (
    <CCard>
      <CCardHeader>
        Metrics
            </CCardHeader>
      <CCardBody>
        {
          metrics.map((metric) => {
            return (
              <div className="collapse-wrapper" key={metric.id}>
                <div className="trigger-wrapper">
                  <button
                    color="primary"
                    onClick={e => toggle(metric.id)}
                    className="collapse-btn"
                  >
                    {metric.aggregation ? `Metric / ${metric.aggregation}` : 'Metric'}
                  </button>
                  <button
                    color="primary"
                    onClick={e => deleteMetric(metric.id)}
                    className="collapse-btn close-btn"
                  >
                    <CIcon name="cil-X"></CIcon>
                  </button>
                </div>
                <CCollapse
                  show={metric.collapse}
                >
                  <div className="child-wrapper">
                    <CForm action="" method="post">
                      <CFormGroup>
                        <CLabel htmlFor="aggregationSelect" className="label">Aggregation</CLabel>
                        <CSelect custom name="aggregationSelect" id="aggregationSelect" value={metric.aggregation} onChange={(e) => aggregationSelectChange(e, metric)}>
                          {
                            aggregationTypeList.map((item) => {
                              return <option key={item.key} value={item.key}>{item.name}</option>
                            })
                          }

                        </CSelect>
                      </CFormGroup>
                      {
                        metric.aggregation === 'count' ? (
                          null
                        ) : (
                          <CFormGroup>
                            <CLabel htmlFor="field" className="label">Field</CLabel>
                            <CInput
                              type="text"
                              id="field"
                              name="field"
                              placeholder=""
                              value={metric.field}
                              onChange={(e) => fieldChange(e, metric)}
                            />
                          </CFormGroup>
                        )
                      }
                      <CFormGroup>
                        <CLabel htmlFor="customLabel" className="label">Custom label</CLabel>
                        <CInput
                          type="text"
                          id="customLabel"
                          name="customLabel"
                          placeholder=""
                          value={metric.coustomLabel}
                          onChange={(e) => customLabelChange(e, metric)}
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
          <CButton size="sm" color="primary" variant="outline" onClick={addMetric}>add</CButton>
        </div>
      </CCardBody>
    </CCard>
  )
}
export default MetricsCard;