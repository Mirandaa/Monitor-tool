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
// import './BucketPanel.less';
import { v4 as uuidv4 } from 'uuid';
import { bucktesAggregationTypeList, intervalList } from '@/constants';

const BucketsCard = (props) => {
  const [buckets, setBuckets] = useState([
    {
      id: uuidv4(),
      aggregation: 'date_histogram',
      interval: 'minute',
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

  const addBucket = () => {
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

  const deleteBucket = (id) => {
    const index = buckets.findIndex(item => item.id === id);
    const bucketsCopy = buckets.slice();
    bucketsCopy.splice(index, 1)
    console.log(bucketsCopy);
    setBuckets(bucketsCopy);
  };

  const updateBucket = (bucket, field, value) => {
    const bucketsCopy = buckets.slice();
    bucketsCopy.map(item => {
      if (item.id === bucket.id) {
        item[field] = value;
      }
      return item;
    });
    setBuckets(bucketsCopy);
    props.onChange(buckets);
  };

  const aggregationSelectChange = (e, bucket) => {
    updateBucket(bucket, 'aggregation', e.target.value);
  };

  const intervalChange = (e, bucket) => {
    updateBucket(bucket, 'interval', e.target.value);
  };

  const fieldChange = (e, bucket) => {
    updateBucket(bucket, 'field', e.target.value);
  };

  return (
    <CCard>
      <CCardHeader>
        Buckets
      </CCardHeader>
      <CCardBody>
        {
          buckets.map((bucket) => {
            return (
              <div className="collapse-wrapper" key={bucket.id}>
                <div className="trigger-wrapper">
                  <button
                    color="primary"
                    onClick={e => toggle(bucket.id)}
                    className="collapse-btn"
                  >
                    {bucket.aggregation ? `Split group / ${bucket.aggregation}` : 'Split group'}
                  </button>
                  <button
                    color="primary"
                    onClick={e => deleteBucket(bucket.id)}
                    className="collapse-btn close-btn"
                  >
                    <CIcon name="cil-X"></CIcon>
                  </button>
                </div>
                <CCollapse
                  show={bucket.collapse}
                >
                  <div className="child-wrapper">
                    <CForm>
                      <CFormGroup>
                        <CLabel htmlFor="aggregationSelect" className="label">Aggregation</CLabel>
                        <CSelect custom name="aggregationSelect" id="aggregationSelect" value={bucket.aggregation} onChange={(e) => aggregationSelectChange(e, bucket)}>
                          {
                            bucktesAggregationTypeList.map((item) => {
                              return <option key={item.key} value={item.key}>{item.name}</option>
                            })
                          }

                        </CSelect>
                      </CFormGroup>
                      {/* <CFormGroup>
                        <CLabel htmlFor="aggregationSelect" className="label">Aggregation</CLabel>
                        <CSelect custom name="aggregationSelect" id="aggregationSelect" value={bucket.aggregation} onChange={(e) => aggregationSelectChange(e, bucket)}>
                          {
                            aggregationTypeList.map((item) => {
                              return <option key={item.key} value={item.key}>{item.name}</option>
                            })
                          }

                        </CSelect>
                      </CFormGroup> */}
                      <CFormGroup>
                        <CLabel htmlFor="intervalSelect" className="label">Minimum interval</CLabel>
                        <CSelect custom name="intervalSelect" id="intervalSelect" value={bucket.interval} onChange={(e) => intervalChange(e, bucket)}>
                          {
                            intervalList.map((item) => {
                              return <option key={item.key} value={item.key}>{item.name}</option>
                            })
                          }
                        </CSelect>
                      </CFormGroup>
                    </CForm>
                  </div>
                </CCollapse>
              </div>
            )
          })
        }
        <div className="btn-wrapper">
          <CButton size="sm" color="success" variant="outline" onClick={addBucket}>Add</CButton>
        </div>
      </CCardBody>
    </CCard>
  )
}
export default BucketsCard;