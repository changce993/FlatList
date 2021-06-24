import styled from 'styled-components/native';

export default styled.TextInput`
  margin-top: ${props => props.marginTop || '12px'};
  margin-bottom: ${props => props.marginBottom || '12px'};
  border: 1px solid white;
  border-radius: 8px;
  color: white;
  width: 100%;
  height: 48px;
  padding: 12px;
`;