import React, { useState } from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CInput,
    CInvalidFeedback,
    CLabel
  } from '@coreui/react'
import CIcon from '@coreui/icons-react'

const CreateTrace = () => {
    const [traceName, setTraceName] = useState("");
    const [mainNodeId, setMainNodeId] = useState("");
    const [fromNodeId, setFromNodeId] = useState("");
    const [toNodeId, setToNodeId] = useState("");

    const createTraceReq = async (e) => {
        let forms = document.querySelectorAll('.needs-validation')
        forms[0].classList.add('was-validated')

        const payload = {
            traceName: traceName,
            mainNodeId: mainNodeId,
            fromNodeId: fromNodeId,
            toNodeId: toNodeId
        }
        // call api /createTrace
    }

    const resetForm = async (e) => {
        let forms = document.querySelectorAll('.needs-validation')
        forms[0].classList.remove('was-validated')
        setTraceName("");
        setMainNodeId("");
        setFromNodeId("");
        setToNodeId("");
    }

    return (
        <>
            <CCard>
                <CCardHeader>
                    Create a new trace
                </CCardHeader>
                <CCardBody>
                    <CForm
                        noValidate
                        onSubmit={(e) => createTraceReq(e)}
                        onReset={(e) => resetForm(e)}
                        className="form-horizontal needs-validation">
                    <CFormGroup row>
                        <CCol md="3">
                        <CLabel htmlFor="text-input">Trace Name</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                        <CInput
                            type="input"
                            placeholder="Enter trace name"
                            required
                            value={traceName}
                            onChange={(e) => setTraceName(e.target.value)}
                        />
                        <CInvalidFeedback>Please input a valid name.</CInvalidFeedback>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                        <CLabel htmlFor="email-input">Main Node ID</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                        <CInput
                            type="input"
                            placeholder="Enter main node ID"
                            required
                            value={mainNodeId}
                            onChange={(e) => setMainNodeId(e.target.value)}
                        />
                        <CInvalidFeedback>Please input a valid node ID.</CInvalidFeedback>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                        <CLabel htmlFor="password-input">From Node ID</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                        <CInput 
                            type="input"
                            placeholder="Enter the upstream node ID"
                            required
                            value={fromNodeId}
                            onChange={(e) => setFromNodeId(e.target.value)}
                        />
                        <CInvalidFeedback>Please input a valid node ID.</CInvalidFeedback>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                        <CLabel htmlFor="password-input">To Node ID</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                        <CInput 
                            type="input"
                            placeholder="Enter the downstream node ID"
                            required
                            value={toNodeId}
                            onChange={(e) => setToNodeId(e.target.value)}
                        />
                        <CInvalidFeedback>Please input a valid node ID.</CInvalidFeedback>
                        </CCol>
                    </CFormGroup>
                    <div className="c-datatable-filter">
                        <div className="mfs-auto">
                            <CButton type="submit" size="sm" color="success" className="mr-2"><CIcon name="cil-scrubber" /> Submit</CButton>
                            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
                        </div>
                    </div>
                    </CForm>
                </CCardBody>
            </CCard>
        </>
    )
}

export default CreateTrace