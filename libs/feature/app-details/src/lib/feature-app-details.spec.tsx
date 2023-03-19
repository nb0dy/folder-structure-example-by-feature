import { render } from '@testing-library/react';

import FeatureAppDetails from './feature-app-details';

describe('FeatureAppDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureAppDetails />);
    expect(baseElement).toBeTruthy();
  });
});
