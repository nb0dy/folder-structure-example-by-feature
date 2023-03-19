import { render } from '@testing-library/react';

import SharedComponentsLink from './shared-components-link';

describe('SharedComponentsLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedComponentsLink to="" />);
    expect(baseElement).toBeTruthy();
  });
});
