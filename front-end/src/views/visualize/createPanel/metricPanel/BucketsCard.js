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
import { bucktesAggregationTypeList } from '@/constants';

const BucketsCard = (props) => {
  const [buckets, setBuckets] = useState([
    {
      id: uuidv4(),
      aggregation: 'date_histogram',
      field: '',
      coustomLabel: '',
      collapse: true
    }
  ]);

  const toggle = (id) => {
    const bucketsCopy = buckets.slice();
    bucketsCopy.map(item => {
      if (item.id === id) {
        item.collapse = !item.collapse;
      }
      return item;
    })
    setBuckets(bucketsCopy);
  }

  const addMetric = () => {
    const buckets1 = buckets.slice().map((item) => {
      return { ...item, collapse: false }
    });
    setBuckets([...buckets1, {
      id: uuidv4(),
      aggregation: 'average',
      field: '',
      coustomLabel: '',
      collapse: true
    }])
  };

  const deleteMetric = (id) => {
    const index = buckets.findIndex(item => item.id === id);
    const bucketsCopy = buckets.slice();
    bucketsCopy.splice(index, 1)
    console.log(bucketsCopy);
    setBuckets(bucketsCopy);
  };

  const updateMetric = (metric, field, value) => {
    const bucketsCopy = buckets.slice();
    bucketsCopy.map(item => {
      if (item.id === metric.id) {
        item[field] = value;
      }
      return item;
    });
    setBuckets(bucketsCopy);
    props.onChange(buckets);
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
        Buckets
      </CCardHeader>
      <CCardBody>
        {
          buckets.map((metric) => {
            return (
              <div className="collapse-wrapper" key={metric.id}>
                <div className="trigger-wrapper">
                  <button
                    color="primary"
                    onClick={e => toggle(metric.id)}
                    className="collapse-btn"
                  >
                    {metric.aggregation ? `Split group / ${metric.aggregation}` : 'Split group'}
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
                    <CForm>
                      <CFormGroup>
                        <CLabel htmlFor="aggregationSelect" className="label">Aggregation</CLabel>
                        <CSelect custom name="aggregationSelect" id="aggregationSelect" value={metric.aggregation} onChange={(e) => aggregationSelectChange(e, metric)}>
                          {
                            bucktesAggregationTypeList.map((item) => {
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
export default BucketsCard;