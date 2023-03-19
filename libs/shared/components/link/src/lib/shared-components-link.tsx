import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface SharedComponentsLinkProps {
  to: string;
}

const StyledSharedComponentsLink = styled.div`
  color: pink;
`;

export function SharedComponentsLink({
  to,
  children,
}: PropsWithChildren<SharedComponentsLinkProps>) {
  return (
    <StyledSharedComponentsLink>
      <Link to={to}>{children}</Link>
    </StyledSharedComponentsLink>
  );
}

export default SharedComponentsLink;
