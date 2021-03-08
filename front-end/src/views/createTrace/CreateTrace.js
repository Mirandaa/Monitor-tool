import React, { useState } from 'react';
import { useSelector, useStore } from 'react-redux'
import {
    CBadge,
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
    CToaster,
    CToastBody,
    CRow
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
    const [submitSuccessShow, setSubmitSuccessShow] = useState(false);
    const [submitFailShow, setSubmitFailShow] = useState(false);
    const [resetToastShow, setResetToastShow] = useState(false);

    function addNewSpan() {
        let newSpans = spans.slice()
        newSpans.push({
            fromNodeId: '',
            toNodeId: ''
        })
        setSpans(newSpans)
    }

    function removeSpan() {
        let newSpans = spans.slice(0, -1)
        setSpans(newSpans)
    }

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
        const res = createTrace(payload).then((res) => {
            if (res) {
                setSubmitSuccessShow(true)
                setTimeout(() => {
                    setSubmitSuccessShow(false)
                }, 3000)
            } else {
                setSubmitFailShow(true)
                setTimeout(() => {
                    setSubmitFailShow(false)
                }, 3000)
            }
        })
    }

    const resetForm = async (e) => {
        setResetToastShow(true)
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
        setTimeout(() => {
            setResetToastShow(false)
        }, 3000)
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
                    <CRow>
                        <CCol md="6">
                            <CLabel >From Node ID</CLabel>
                        </CCol>
                        <CCol md="6">
                            <CLabel >To Node ID</CLabel>
                        </CCol>
                    </CRow>
                    {spans.map((data, index) => {
                        return <AddSpan span={data} key={index}
                            onFromNodeChange={e => fromNodeChangeHandle(e, index)}
                            onToNodeChange={e => toNodeChangeHandle(e, index)}
                        />
                    })}
                    <CButton 
                        size="sm"
                        color="success"
                        variant="outline"
                        onClick={addNewSpan}
                    >
                        + Add a new trace
                    </CButton>
                    {spans.length > 1 ? 
                        <CButton
                            size="sm"
                            color="danger"
                            variant="outline"
                            className="ml-2"
                            onClick={removeSpan}
                        >
                            - Remove last trace
                        </CButton>
                    : null}
                    <div className="c-datatable-filter">
                        <div className="mfs-auto">
                            <CButton type="submit" size="sm" color="success" className="mr-2"><CIcon name="cil-scrubber" /> Submit</CButton>
                            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
                        </div>
                    </div>
                    </CForm>
                </CCardBody>
            </CCard>
            <CToaster 
                position="top-right"
                className="mt-5"
            >
                <CToast
                    show={submitSuccessShow}
                    autohide={1000}
                    >
                    <CToastBody>
                        <CBadge className="mr-1" color="success">Success</CBadge>
                        &nbsp;Create a new trace successfully!
                    </CToastBody>
                </CToast>
                <CToast
                    show={submitFailShow}
                    autohide={1000}
                    >
                    <CToastBody>
                        <CBadge className="mr-1" color="danger">Error</CBadge>
                        &nbsp;Create a new trace failed with error.
                    </CToastBody>
                </CToast>
                <CToast
                    show={resetToastShow}
                    autohide={1000}
                    >
                    <CToastBody>
                        <CBadge className="mr-1" color="success">Success</CBadge>
                        &nbsp;Reset create trace form
                    </CToastBody>
                </CToast>
            </CToaster>
        </>
    )
}

export default CreateTrace