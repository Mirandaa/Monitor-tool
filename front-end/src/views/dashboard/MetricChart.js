import React from 'react'
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader
} from '@coreui/react'
import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea
} from '@coreui/react-chartjs'
import { DocsLink } from 'src/reusable'
import exampleData from './metric-chart-data.js';

const Charts = () => {

  return (
    <CCardGroup columns className = "cols-2" >
      <CCard>
        <CCardHeader>
          Count Metric Bar Chart
        </CCardHeader>
        <CCardBody>
          <CChartBar
            datasets={[
              {
                label: 'doc count',
                backgroundColor: '#f87979',
                data: exampleData.aggregations['2'].buckets.map(item => item.doc_count)
              }
            ]}
            labels={exampleData.aggregations['2'].buckets.map(item => item.key_as_string)}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>
    </CCardGroup>
  )
}

export default Charts
