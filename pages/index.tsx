import styled from 'styled-components';

const Container = styled.div`
  display: grid;
`;

const Button = styled.button`
  border: 2px solid lime;
`;

export default () => (
  <Container>
    <Button>This is styled</Button>
  </Container>
);
