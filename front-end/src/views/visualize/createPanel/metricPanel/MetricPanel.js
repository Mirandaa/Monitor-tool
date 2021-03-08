import React from 'react';
import {
  CCol,
  CRow,
} from '@coreui/react';
import './MetricPanel.less';
import MetricsCard from './MetricsCard';
import BucketsCard from './BucketsCard';

const MetricPanel = (props) => {

  return (
    <div className="rule-container">
      <CRow>
        <CCol md="6">
          <MetricsCard></MetricsCard>
        </CCol>
        <CCol md="6">
          <BucketsCard></BucketsCard>
        </CCol>
      </CRow>
    </div>
  )
}
export default MetricPanel;