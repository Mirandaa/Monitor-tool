import React from 'react'
import {
    CCardGroup,
    CCard,
    CCardBody,
    CProgress
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const BasicIndex = () => {
    return (
        <CCardGroup className="mb-4">
            <CCard>
                <CCardBody>
                    <div className="mb-2">
                        <b>CPU Usage</b>
                        <CIcon className="card-header-actions" name="cil3d" height="24"/>
                    </div>
                    <CProgress className="mb-1" size="xs" color="info" value={25} />
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
                    <small className="text-muted">11444GB/16384MB</small>
                </CCardBody>
            </CCard>
            <CCard>
                <CCardBody>
                    <div className="mb-2">
                        <b>JVM</b>
                        <CIcon className="card-header-actions" name="cil-monitor" height="24"/>
                    </div>
                    <CProgress className="mb-1" size="xs" color="warning" value={80} />
                    <small className="text-muted">xxx</small>
                </CCardBody>
            </CCard>
            <CCard>
                <CCardBody>
                    <div className="mb-2">
                        <b>Disk Usage</b>
                        <CIcon className="card-header-actions" name="cil-save" height="24"/>
                    </div>
                    <CProgress className="mb-1" size="xs" color="info" value={28} />
                    <small className="text-muted">60.9 GB / 256 GB</small>
                </CCardBody>
            </CCard>
            <CCard>
                <CCardBody>
                    <div className="mb-2">
                        <b>Avg. Time</b>
                        <CIcon className="card-header-actions" name="cil-speedometer" height="24"/>
                    </div>
                    <CProgress className="mb-1" size="xs" color="danger" value={75} />
                    <small className="text-muted">5:34:11</small>
                </CCardBody>
            </CCard>
        </CCardGroup>
    )
}

export default BasicIndex
