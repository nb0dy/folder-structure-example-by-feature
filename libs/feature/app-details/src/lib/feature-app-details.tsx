import { SharedComponentsLink } from '@folder-structure-example-by-feature/shared/components/link';
import { routes } from '@folder-structure-example-by-feature/shared/utils/routes';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { getApp } from './services/get-app';

const StyledFeatureAppDetails = styled.div`
  color: pink;
`;

const getBoBackUrl = (type: 'game' | 'multimedia'): string => {
  switch (type) {
    case 'game': {
      return routes.game.url();
    }

    case 'multimedia': {
      return routes.multimedia.url();
    }

    default: {
      return routes.dashboard.url();
    }
  }
};

export function FeatureAppDetails() {
  const { id } = useParams<{ id: string }>();
  const data = useMemo(() => getApp(id), [id]);

  if (!data) {
    return (
      <StyledFeatureAppDetails>
        <h1>No App</h1>
      </StyledFeatureAppDetails>
    );
  }

  return (
    <StyledFeatureAppDetails>
      <SharedComponentsLink to={getBoBackUrl(data.type)}>
        Go Back
      </SharedComponentsLink>

      <h1>Welcome to FeatureAppDetails!</h1>

      <h3>{data.name}</h3>
    </StyledFeatureAppDetails>
  );
}

export default FeatureAppDetails;
