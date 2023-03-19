import { render } from '@testing-library/react';

import FeatureDashboard from './feature-dashboard';

describe('FeatureDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureDashboard />);
    expect(baseElement).toBeTruthy();
  });
});
