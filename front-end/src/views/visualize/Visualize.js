import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  // CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton
} from '@coreui/react'
// import Modal from './modal/Modal';
import { getAllNodes } from '@/api';
import { useHistory } from 'react-router-dom';
const fields = [
  { key: 'nodeId', label: 'Node' },
  { key: 'appOwer', label: 'App Owener' },
  { key: 'rulesCount', label: 'Rules Count' },
  { key: 'modifyWhen', label: 'Modify When' },
  { key: 'modifyBy', label: 'Modify When' },
  {
    key: 'action',
    label: 'Action',
    _style: { width: '200px' },
    sorter: false,
    filter: false
  }
]

const Visualize = () => {
  // const [modalVisible, setModalVisible] = useState(false);
  const [nodes, setNodes] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const allNodes = await getAllNodes();
      if (allNodes) {
        setNodes(allNodes);
      } else {
        setNodes([]);
      }
    }
    fetchData();
  }, []);

  const createVisualization = (source) => {
    console.log(source);
    history.push(`/visualize/create?host=${source.nodeId.split('#')[0]}&app=${source.nodeId.split('#')[1]}`);
  }

  return (
    <>
      {/* <Modal show={modalVisible} onClose={setModalVisible}></Modal> */}
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            {/* <CCardHeader>
              Visualizations
              <div className="card-header-actions">
                <CButton block color="primary" onClick={() => setModalVisible(true)}>Create Visualization</CButton>
              </div>
            </CCardHeader> */}
            <CCardBody>
              <CDataTable
                items={nodes}
                fields={fields}
                itemsPerPage={5}
                pagination
                tableFilter
                columnFilter
                scopedSlots={{
                  'appOwer': (item, index) => {
                    return <td>{item.appOwer ? item.appOwer : '-'}</td>
                  },
                  'rulesCount': (item, index) => {
                    return <td>{item.rulesCount ? item.rulesCount : '-'}</td>
                  },
                  'action':
                    (item, index) => {
                      return (
                        <td key={index}>
                          <CButton
                            color="primary"
                            variant="outline"
                            shape="square"
                            size="sm"
                            onClick={() => { createVisualization(item) }}
                            style={{ marginRight: 10 }}
                          >
                            Config Viz
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
