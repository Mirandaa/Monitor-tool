import { withRouter } from 'react-router-dom';
import * as QueryString from 'query-string';
import MetricPanel from './metricPanel/MetricPanel';

const CreatePanel = (props) => {
  const panelType = QueryString.parse(props.location.search).type;
  const sourceId = QueryString.parse(props.location.search).sourceId;
  const sourceName = QueryString.parse(props.location.search).sourceName;
  if (panelType === 'metric') {
    return <MetricPanel source={{ id: sourceId, name: sourceName }}></MetricPanel>
  } else {
    return null
  }
}
export default withRouter(CreatePanel);