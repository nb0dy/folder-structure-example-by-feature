import { render } from '@testing-library/react';

import FeatureSettingsDetails from './feature-settings-details';

describe('FeatureSettingsDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureSettingsDetails />);
    expect(baseElement).toBeTruthy();
  });
});
