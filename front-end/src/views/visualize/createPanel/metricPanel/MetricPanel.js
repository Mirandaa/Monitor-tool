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
  CFormText,
  CSelect
} from '@coreui/react';
import CIcon from '@coreui/icons-react'
import './MetricPanel.less';
import { v4 as uuidv4 } from 'uuid';
import { quickTimeRangeList } from '@/constants';
import MetricsCard from './MetricsCard';
import BucketsCard from './BucketsCard';

const MetricPanel = (props) => {
  const [metrics, setMetrics] = useState([
    {
      id: uuidv4(),
      aggregation: 'average',
      field: '',
      coustomLabel: '',
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
    <div className="panel-container">
      <div className="panel-toolbar">
        <CSelect custom name="aggregationSelect" id="aggregationSelect">
          {
            quickTimeRangeList.map((item) => {
              return <option key={item.key} value={item.key}>{item.name}</option>
            })
          }
        </CSelect>
      </div>
      <div className="panel-editor">
        <div className="visualization">
        </div>
        <div className="sidebar">
          <h3 className="title">{props.source.name}</h3>
          <div>
            <MetricsCard></MetricsCard>
            <BucketsCard></BucketsCard>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MetricPanel;