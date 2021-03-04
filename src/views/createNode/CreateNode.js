import React, { useState, useEffect } from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CFormText,
    CTextarea,
    CInput,
    CLabel
  } from '@coreui/react'
import CIcon from '@coreui/icons-react'

const CreateNode = () => {

  return (
      <>
        <CCard>
            <CCardHeader>
                Create a new node
            </CCardHeader>
            <CCardBody>
                <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                    <CCol md="3">
                    <CLabel htmlFor="text-input">Application Name</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Enter App Name" />
                    <CFormText>This is a help text</CFormText>
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                    <CCol md="3">
                    <CLabel htmlFor="email-input">Host Name</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                    <CInput type="email" id="email-input" name="email-input" placeholder="Enter Server Name" autoComplete="email"/>
                    <CFormText className="help-block">Please enter host name</CFormText>
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                    <CCol md="3">
                    <CLabel htmlFor="password-input">App Owner</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                    <CInput type="password" id="password-input" name="password-input" placeholder="Group name" autoComplete="new-password" />
                    <CFormText className="help-block">Please enter owner group name</CFormText>
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                    <CCol md="3">
                    <CLabel htmlFor="email-input">Owner Group Email</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                    <CInput type="email" id="email-input" name="email-input" placeholder="jane.doe@example.com" autoComplete="email"/>
                    <CFormText className="help-block">Please enter email</CFormText>
                    </CCol>
                </CFormGroup>
                <CFormGroup row>
                    <CCol md="3">
                    <CLabel htmlFor="textarea-input">Description</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                    <CTextarea 
                        name="textarea-input" 
                        id="textarea-input" 
                        rows="3"
                        placeholder="Briefly describe your app" 
                    />
                    </CCol>
                </CFormGroup>
                </CForm>
            </CCardBody>
            <CCardFooter className="c-datatable-filter">
                <div className="mfs-auto">
                    <CButton type="submit" size="sm" color="primary" className="mr-2"><CIcon name="cil-scrubber" /> Submit</CButton>
                    <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
                </div>
            </CCardFooter>
        </CCard>
    </>
  )
}

export default CreateNode