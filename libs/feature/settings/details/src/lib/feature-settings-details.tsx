import { getSettings } from '@folder-structure-example-by-feature/feature/settings/shared';
import { SharedComponentsLink } from '@folder-structure-example-by-feature/shared/components/link';
import { routes } from '@folder-structure-example-by-feature/shared/utils/routes';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledFeatureSettingsDetails = styled.div`
  color: pink;
`;

export function FeatureSettingsDetails() {
  const { id } = useParams<{ id: string }>();
  const data = useMemo(
    () => getSettings().find((settings) => settings.id === id),
    [id]
  );

  if (!data) {
    return (
      <StyledFeatureSettingsDetails>
        <h1>No setting exists</h1>
      </StyledFeatureSettingsDetails>
    );
  }

  return (
    <StyledFeatureSettingsDetails>
      <SharedComponentsLink to={routes.settings.url()}>
        Go Back
      </SharedComponentsLink>

      <h1>Welcome to FeatureSettingsDetails!</h1>

      <h3>{data.name}</h3>
    </StyledFeatureSettingsDetails>
  );
}

export default FeatureSettingsDetails;
