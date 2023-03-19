import { render } from '@testing-library/react';

import FeatureSettingsList from './feature-settings-list';

describe('FeatureSettingsList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureSettingsList />);
    expect(baseElement).toBeTruthy();
  });
});
