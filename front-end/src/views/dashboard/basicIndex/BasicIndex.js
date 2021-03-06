import React, { useEffect, useState } from 'react'
import {
    CButton,
    CCardGroup,
    CCard,
    CCardBody,
    CProgress
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { getNodeInfo } from 'src/api/index'

const BasicIndex = () => {
    const [nodeID, setNodeID] = useState('')
    const [commonMetrics, setCommonMetrics] = useState({
        hostname: '',
        hostIP: '',
        cpuCores: 0,
        cpuCount: 0,
        cpuProcessors: 0,
        date: '',
        diskUsed: 0,
        diskTotal: 0,
        idleRation: 0,
        memoryUsed: 0,
        memoryTotal: 0,
        systemRation: 0,
        userRatio: 0
    })

    useEffect(() => {
        const fetchData = async () => {
            const resData = await getNodeInfo(nodeID);
            setCommonMetrics(resData)
        }

        fetchData()
    }, [])

    return (
        <>
        <h5 className="mb-2">Host: {commonMetrics.hostIP} | {commonMetrics.hostname}</h5>
        <CCardGroup className="mb-4">
            <CCard>
                <CCardBody>
                    <div className="mb-2">
                        <b>CPU Usage</b>
                        <CIcon className="card-header-actions" name="cil3d" height="24"/>
                    </div>
                    <CProgress className="mb-1" size="xs" color="info" value={commonMetrics.userRatio + commonMetrics.systemRation} />
                    <small className="text-muted">{commonMetrics.cpuProcessors} Processes. {commonMetrics.cpuCores} Cores.</small>
                </CCardBody>
            </CCard>
            <CCard>
                <CCardBody>
                    <div className="mb-2">
                        <b>Memory Usage</b>
                        <CIcon className="card-header-actions" name="cil-memory" height="24"/>
                    </div>
                    <CProgress className="mb-1" size="xs" color="warning" value={(commonMetrics.memoryUsed / commonMetrics.memoryTotal) * 100} />
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
                    <CProgress className="mb-1" size="xs" color="info" value={(commonMetrics.diskUsed / commonMetrics.diskTotal) * 100} />
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
                        <span className="ml-auto font-weight-bold">{commonMetrics.userRatio} %</span>
                    </div>
                    <div className="progress-group-bars">
                        <CProgress className="progress-xs" color="success" value={commonMetrics.userRatio} />
                    </div>
                </div>

                <div className="progress-group">
                    <div className="progress-group-header">
                        <CIcon name="cil-monitor" className="progress-group-icon" />
                        <span className="title">System Ratio</span>
                        <span className="ml-auto font-weight-bold">{commonMetrics.systemRation} %</span>
                    </div>
                    <div className="progress-group-bars">
                        <CProgress className="progress-xs" color="warning" value={commonMetrics.systemRation} />
                    </div>
                </div>
                <div className="progress-group">
                    <div className="progress-group-header">
                        <CIcon name="cil-speedometer" className="progress-group-icon" />
                        <span className="title">Idle Ratio</span>
                        <span className="ml-auto font-weight-bold">{commonMetrics.idleRation}%</span>
                    </div>
                    <div className="progress-group-bars">
                        <CProgress className="progress-xs" color="success" value={commonMetrics.idleRation} />
                    </div>
                </div>
            </CCardBody>
        </CCard>
      </>
    )
}

export default BasicIndex
