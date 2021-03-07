import React, { useState } from 'react';
import { useSelector, useStore } from 'react-redux'
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
    CLabel,
    CToast,
    CToastHeader,
    CToastBody
  } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { createTrace } from 'src/api/index'
import AddSpan from './addSpan/AddSpan'

const CreateTrace = () => {
    const userSoeid = useSelector(state => state.user.userSoeid)
    const [traceName, setTraceName] = useState("");
    const [mainNodeId, setMainNodeId] = useState("");
    const [spans, setSpans] = useState([
        {
            fromNodeId: '',
            toNodeId: ''
        }
    ]);

    function fromNodeChangeHandle(event, index) {
        let newSpans = spans.slice()
        newSpans[index].fromNodeId = event.target.value
        setSpans(newSpans)
    }

    function toNodeChangeHandle(event, index) {
        let newSpans = spans.slice()
        newSpans[index].toNodeId = event.target.value
        setSpans(newSpans)
    }

    const createTraceReq = async (e) => {
        let forms = document.querySelectorAll('.needs-validation')
        forms[0].classList.add('was-validated')
        if (!forms[0].checkValidity()) {
            return;
        }

        const payload = {
            username: userSoeid,
            traceName: traceName,
            nodeId: mainNodeId,
            spans: spans
        }
        // call api /createTrace
        const res = createTrace(payload)
        if (res === true) {
            // do something
        }
    }

    const resetForm = async (e) => {
        let forms = document.querySelectorAll('.needs-validation')
        forms[0].classList.remove('was-validated')
        setTraceName("");
        setMainNodeId("");
        setSpans([
            {
                fromNodeId: '',
                toNodeId: ''
            }
        ])
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
                    {/* <CFormGroup row>
                        <CCol md="6">
                            <CLabel htmlFor="password-input">From Node ID</CLabel>
                            <CInput 
                                type="input"
                                placeholder="Enter the upstream node ID"
                                required
                                value={fromNodeId}
                                onChange={(e) => setFromNodeId(e.target.value)}
                            />
                            <CInvalidFeedback>Please input a valid node ID.</CInvalidFeedback>
                        </CCol>
                        <CCol md="6">
                            <CLabel htmlFor="password-input">To Node ID</CLabel>
                            <CInput 
                                type="input"
                                placeholder="Enter the downstream node ID"
                                required
                                value={toNodeId}
                                onChange={(e) => setToNodeId(e.target.value)}
                            />
                            <CInvalidFeedback>Please input a valid node ID.</CInvalidFeedback>
                        </CCol>
                    </CFormGroup> */}
                    {spans.map((data, index) => {
                        return <AddSpan span={data} key={index}
                            onFromNodeChange={e => fromNodeChangeHandle(e, index)}
                            onToNodeChange={e => toNodeChangeHandle(e, index)}
                        />
                    })}
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