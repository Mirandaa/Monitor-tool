import React, { useState } from 'react'
import {
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

const fields = ['app', 'server', 'owner', 'rulesCount', 'modifyWhen', 'modifyBy', {
  key: 'action',
  label: 'Action',
  _style: { width: '10%' },
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
                  'action':
                    (item, index) => {
                      return (
                        <td>
                          <CButton
                            color="primary"
                            variant="outline"
                            shape="square"
                            size="sm"
                            // onClick={()=>{toggleDetails(index)}}
                            style={{ marginRight: 10 }}
                          >
                            edit
                          </CButton>
                          <CButton
                            color="secondary"
                            variant="outline"
                            shape="square"
                            size="sm"
                          // onClick={()=>{toggleDetails(index)}}
                          >
                            delete
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
