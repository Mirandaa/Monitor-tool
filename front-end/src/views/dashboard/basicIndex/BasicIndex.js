import React from 'react'
import {
    CButton,
    CCardGroup,
    CCard,
    CCardBody,
    CProgress
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const BasicIndex = () => {
    return (
        <>
        <CCardGroup className="mb-4">
            <CCard>
                <CCardBody>
                    <div className="mb-2">
                        <b>CPU Usage</b>
                        <CIcon className="card-header-actions" name="cil3d" height="24"/>
                    </div>
                    <CProgress className="mb-1" size="xs" color="info" value={25} />
                    {/* (value = userRatio + systemRation) */}
                    <small className="text-muted">348 Processes. 1/4 Cores.</small>
                </CCardBody>
            </CCard>
            <CCard>
                <CCardBody>
                    <div className="mb-2">
                        <b>Memory Usage</b>
                        <CIcon className="card-header-actions" name="cil-memory" height="24"/>
                    </div>
                    <CProgress className="mb-1" size="xs" color="warning" value={70} />
                    {/* value = memoryUsed / memoryTotal */}
                    <small className="text-muted">11444GB / 16384MB</small>
                </CCardBody>
            </CCard>
            {/* <CCard>
                <CCardBody>
                    <div className="mb-2">
                        <b>JVM</b>
                        <CIcon className="card-header-actions" name="cil-monitor" height="24"/>
                    </div>
                    <CProgress className="mb-1" size="xs" color="warning" value={80} />
                    <small className="text-muted">xxx</small>
                </CCardBody>
            </CCard> */}
            <CCard>
                <CCardBody>
                    <div className="mb-2">
                        <b>Disk Usage</b>
                        <CIcon className="card-header-actions" name="cil-save" height="24"/>
                    </div>
                    <CProgress className="mb-1" size="xs" color="info" value={28} />
                    {/* value = diskUsed / diskTotal */}
                    <small className="text-muted">60.9 GB / 256 GB</small>
                </CCardBody>
            </CCard>
        </CCardGroup>
        <CCard>
            <CCardBody>
                <div className="progress-group">
                    <div className="progress-group-header">
                        <CIcon className="progress-group-icon" name="cil-user" />
                        <span className="title">User Ratio</span>
                        <span className="ml-auto font-weight-bold">23%</span>
                    </div>
                    <div className="progress-group-bars">
                        <CProgress className="progress-xs" color="success" value="23" />
                    </div>
                </div>

                <div className="progress-group">
                    <div className="progress-group-header">
                        <CIcon name="cil-monitor" className="progress-group-icon" />
                        <span className="title">System Ratio</span>
                        <span className="ml-auto font-weight-bold">30%</span>
                    </div>
                    <div className="progress-group-bars">
                        <CProgress className="progress-xs" color="warning" value="30" />
                    </div>
                </div>
                <div className="progress-group">
                    <div className="progress-group-header">
                        <CIcon name="cil-speedometer" className="progress-group-icon" />
                        <span className="title">Idle Ratio</span>
                        <span className="ml-auto font-weight-bold">47%</span>
                    </div>
                    <div className="progress-group-bars">
                        <CProgress className="progress-xs" color="success" value="47" />
                    </div>
                </div>
            </CCardBody>
        </CCard>
      </>
    )
}

export default BasicIndex
