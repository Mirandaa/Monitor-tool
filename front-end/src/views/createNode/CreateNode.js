import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CFormText,
    CTextarea,
    CToastHeader,
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

    // const [toastShow, setToastShow] = useState(false);

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
        const res = createNode(payload)
    }

    const resetForm = (e) => {
        // setToastShow(true)
        let forms = document.querySelectorAll('.needs-validation')
        forms[0].classList.remove('was-validated')
        setAppName("");
        setHostName("");
        setOwner("");
        setGroup("");
        setGroupMail("");
        setDesciption("");
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
            {/* <CToaster 
                position="top-right"
            >
                <CToast
                    show={toastShow}
                    autohide={1000}
                    fade={true}
                    >
                    <CToastHeader >
                        Toast title
                    </CToastHeader>
                    <CToastBody>
                        {`This is a toast in  xxx positioned toaster number xx.`}
                    </CToastBody>
                </CToast>
            </CToaster> */}
        </>
    )
}

export default CreateNode