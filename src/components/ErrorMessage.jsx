import styled from 'styled-components';

const Alert = styled.div`
  padding: 22px 24px;
  border-radius: 20px;
  background: #fee2e2;
  color: #991b1b;
  border: 1px solid #fecaca;
  margin-bottom: 24px;
`;

function ErrorMessage({ message }) {
  return <Alert>{message}</Alert>;
}

export default ErrorMessage;
