import { render } from '@testing-library/react';

import FeatureQuickMenu from './feature-quick-menu';

describe('FeatureQuickMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureQuickMenu />);
    expect(baseElement).toBeTruthy();
  });
});
