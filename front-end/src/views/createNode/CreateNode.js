import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import {
    CBadge,
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CFormText,
    CTextarea,
    CToastBody,
    CInput,
    CLabel,
    CInvalidFeedback,
    CToast,
    CToaster
  } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { createNode } from 'src/api/index'

const CreateNode = () => {
    const userSoeid = useSelector(state => state.user.userSoeid)
    const [appName, setAppName] = useState("");
    const [hostName, setHostName] = useState("");
    const [owner, setOwner] = useState("");
    const [group, setGroup] = useState("");
    const [groupMail, setGroupMail] = useState("");
    const [desciption, setDesciption] = useState("");
    const [submitSuccessShow, setSubmitSuccessShow] = useState(false);
    const [submitFailShow, setSubmitFailShow] = useState(false);
    const [resetToastShow, setResetToastShow] = useState(false);

    const createNodeReq = (e) => {
        let forms = document.querySelectorAll('.needs-validation')
        forms[0].classList.add('was-validated')
        if (!forms[0].checkValidity()) {
            return;
        }

        const payload = {
            userName: userSoeid,
            appName: appName,
            hostName: hostName,
            appOwner: owner,
            appGroup: group,
            appGroupMail: groupMail,
            appDesciption: desciption
        }
        const res = createNode(payload).then((res) => {
            if (res.nodeId === hostName + '#' + appName) {
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

    const resetForm = (e) => {
        setResetToastShow(true)
        let forms = document.querySelectorAll('.needs-validation')
        forms[0].classList.remove('was-validated')
        setAppName("");
        setHostName("");
        setOwner("");
        setGroup("");
        setGroupMail("");
        setDesciption("");
        setTimeout(() => {
            setResetToastShow(false)
        }, 3000)
    }

    return (
        <>
            <CCard>
                <CCardHeader>
                    Create a new node
                </CCardHeader>
                <CCardBody>
                    <CForm
                        noValidate
                        onSubmit={(e) => createNodeReq(e)}
                        onReset={(e) => resetForm(e)}
                        className="form-horizontal needs-validation">
                    <CFormGroup row>
                        <CCol md="3">
                        <CLabel htmlFor="text-input">Application Name</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                        <CInput
                            type="input"
                            placeholder="Enter name of your app"
                            required
                            value={appName}
                            onChange={(e) => setAppName(e.target.value)}
                        />
                        <CInvalidFeedback>Please input a valid name.</CInvalidFeedback>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                        <CLabel htmlFor="email-input">Host Name</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                        <CInput
                            type="input"
                            placeholder="Enter host name"
                            required
                            value={hostName}
                            onChange={(e) => setHostName(e.target.value)}
                        />
                        <CInvalidFeedback>Please input a valid host name.</CInvalidFeedback>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                        <CLabel htmlFor="password-input">App Owner</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                        <CInput 
                            type="input"
                            placeholder="Owner of this app (eg. group leader)"
                            required
                            value={owner}
                            onChange={(e) => setOwner(e.target.value)}
                        />
                        <CInvalidFeedback>Please input a valid owner.</CInvalidFeedback>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                        <CLabel htmlFor="password-input">Group Name</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                        <CInput 
                            type="input"
                            placeholder="Team developed and operated this app"
                            required
                            value={group}
                            onChange={(e) => setGroup(e.target.value)}
                        />
                        <CInvalidFeedback>Please input a valid group name.</CInvalidFeedback>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                        <CLabel htmlFor="email-input">Group Email</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                        <CInput
                            type="email"
                            placeholder="Contact email of the group. xxx@xx.com"
                            required
                            value={groupMail}
                            onChange={(e) => setGroupMail(e.target.value)}
                        />
                        <CInvalidFeedback>Please provid a valid email address.</CInvalidFeedback>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                        <CLabel htmlFor="textarea-input">Description</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                        <CTextarea 
                            type="input"
                            placeholder="Briefly describe your app"
                            required
                            value={desciption}
                            onChange={(e) => setDesciption(e.target.value)}
                            rows="3"
                        />
                        <CInvalidFeedback>Please input something.</CInvalidFeedback>
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
                        &nbsp;Create a new node successfully!
                    </CToastBody>
                </CToast>
                <CToast
                    show={submitFailShow}
                    autohide={1000}
                    >
                    <CToastBody>
                        <CBadge className="mr-1" color="danger">Error</CBadge>
                        &nbsp;Create a new node failed with error.
                    </CToastBody>
                </CToast>
                <CToast
                    show={resetToastShow}
                    autohide={1000}
                    >
                    <CToastBody>
                        <CBadge className="mr-1" color="success">Success</CBadge>
                        &nbsp;Reset create node form
                    </CToastBody>
                </CToast>
            </CToaster>
        </>
    )
}

export default CreateNode