import { getSettings } from '@folder-structure-example-by-feature/feature/settings/shared';
import { SharedComponentsLink } from '@folder-structure-example-by-feature/shared/components/link';
import { routes } from '@folder-structure-example-by-feature/shared/utils/routes';
import { useMemo } from 'react';
import styled from 'styled-components';

const StyledFeatureSettingsList = styled.div`
  color: pink;
`;

const MenuList = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-evenly;
`;

export function FeatureSettingsList() {
  const settingsList = useMemo(() => getSettings(), []);

  return (
    <StyledFeatureSettingsList>
      <SharedComponentsLink to={routes.dashboard.url()}>
        Go Back
      </SharedComponentsLink>

      <h1>Welcome to FeatureSettingsList!</h1>

      <MenuList>
        {settingsList.map((settings) => (
          <SharedComponentsLink key={settings.name} to={settings.link}>
            {settings.name}
          </SharedComponentsLink>
        ))}
      </MenuList>
    </StyledFeatureSettingsList>
  );
}

export default FeatureSettingsList;
