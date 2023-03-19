import styled from 'styled-components';

const StyledSharedComponentsButton = styled.div`
  color: pink;
`;

export function SharedComponentsButton() {
  return (
    <StyledSharedComponentsButton>
      <h1>Welcome to SharedComponentsButton!</h1>
    </StyledSharedComponentsButton>
  );
}

export default SharedComponentsButton;
