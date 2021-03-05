import React, { useState } from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton
} from '@coreui/react'
import Modal from './modal/Modal';

import data from './visualize-list'
import { Model } from 'echarts';

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['title', 'type', 'app', 'server', {
  key: 'action',
  label: 'Action',
  _style: { width: '1%' },
  sorter: false,
  filter: false
}]

const Visualize = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal show={modalVisible} onClose={setModalVisible}></Modal>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              Visualizations
              <div className="card-header-actions">
                <CButton block color="primary" onClick={() => setModalVisible(true)}>Create Visualization</CButton>
              </div>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={data}
                fields={fields}
                itemsPerPage={5}
                pagination
                tableFilter
                columnFilter
                scopedSlots={{
                  'status':
                    (item) => (
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge>
                      </td>
                    ),
                  'action':
                    (item, index)=>{
                      return (
                        <td className="py-2">
                          <CButton
                            color="primary"
                            variant="outline"
                            shape="square"
                            size="sm"
                            // onClick={()=>{toggleDetails(index)}}
                          >
                            edit
                          </CButton>
                        </td>
                        )
                    }
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Visualize
