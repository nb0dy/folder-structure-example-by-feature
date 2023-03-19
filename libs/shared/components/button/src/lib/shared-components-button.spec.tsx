import { render } from '@testing-library/react';

import SharedComponentsButton from './shared-components-button';

describe('SharedComponentsButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedComponentsButton />);
    expect(baseElement).toBeTruthy();
  });
});
