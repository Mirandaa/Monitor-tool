import React, { useState, useEffect } from 'react';
import {
  CCol,
  CRow,
  CFormGroup,
  CInputRadio,
  CLabel
} from '@coreui/react';
import './MetricPanel.less';
import MetricsCard from './MetricsCard';
import BucketsCard from './BucketsCard';

const MetricPanel = (props) => {
  const [metricRules, setMetricRules] = useState([]);
  const [bucketsRules, setBucketsRules] = useState([]);
  const [group, setGroup] = useState('owner');

  const handleGroupChange = (e) => {
    console.log(e.target.value);
    setGroup(e.target.value);
  }

  useEffect(() => {
    props.onChange({aggs: [...metricRules, ...bucketsRules], group})
  }, [metricRules, bucketsRules, group])

  return (
    <div className="rule-container">
      <CRow>
      <CCol md="12">
        <CFormGroup>
            <CLabel style={{marginRight: 10}}>Group Control:</CLabel>
            <CFormGroup variant="custom-radio" inline>
              <CInputRadio custom checked id="inline-radio1" name="inline-radios" value="owner" onChange={handleGroupChange}/>
              <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Owner</CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
              <CInputRadio custom id="inline-radio2" name="inline-radios" value="other" onChange={handleGroupChange}/>
              <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Other</CLabel>
            </CFormGroup>
        </CFormGroup>
        </CCol>
      </CRow>
      <CRow>
        <CCol md="6">
          <MetricsCard onChange={data => setMetricRules(data)}></MetricsCard>
        </CCol>
        <CCol md="6">
          <BucketsCard onChange={data => setBucketsRules(data)}></BucketsCard>
        </CCol>
      </CRow>
    </div>
  )
}
export default MetricPanel;