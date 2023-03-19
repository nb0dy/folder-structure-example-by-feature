import { useMemo } from 'react';
import styled from 'styled-components';

import ApplicationList from './components/application-list';
import { getApps } from './services/get-apps';

export interface FeatureDashboardProps {
  type?: 'game' | 'multimedia';
}

const StyledFeatureDashboard = styled.div`
  color: pink;
`;

export function FeatureDashboard({ type }: FeatureDashboardProps) {
  const data = useMemo(() => getApps(type), [type]);

  return (
    <StyledFeatureDashboard>
      <h1>Welcome to FeatureDashboard!</h1>

      <ApplicationList apps={data} />
    </StyledFeatureDashboard>
  );
}

export default FeatureDashboard;
