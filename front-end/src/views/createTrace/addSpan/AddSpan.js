import React from 'react';
import {
    CCol,
    CFormGroup,
    CInput,
    CInvalidFeedback,
    CLabel
  } from '@coreui/react'

const AddSpan = (props) => {
    const { span, onFromNodeChange, onToNodeChange } = props

    return (
        <>
            <CFormGroup row>
                <CCol md="6">
                    <CLabel htmlFor="password-input">From Node ID</CLabel>
                    <CInput
                        type="input"
                        placeholder="Enter the upstream node ID"
                        required
                        value={span.fromNodeId}
                        onChange={onFromNodeChange}
                    />
                    <CInvalidFeedback>Please input a valid node ID.</CInvalidFeedback>
                </CCol>
                <CCol md="6">
                    <CLabel htmlFor="password-input">To Node ID</CLabel>
                    <CInput
                        type="input"
                        placeholder="Enter the downstream node ID"
                        required
                        value={span.toNodeId}
                        onChange={onToNodeChange}
                    />
                    <CInvalidFeedback>Please input a valid node ID.</CInvalidFeedback>
                </CCol>
            </CFormGroup>
        </>
    )
}

export default AddSpan