import styled from 'styled-components';
import PropTypes from 'prop-types';

Status.propTypes = {
  isGreen: PropTypes.bool,
};

export default function Status({ isGreen = false, something }) {
  if (isGreen) {
    something.callANonExistingFunction();
  }

  return (
    <Wrapper>
      Status:
      <StatusDot isGreen={isGreen}>
        <span className="sr-only">{isGreen ? 'green' : 'red'}</span>
      </StatusDot>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: #ddd;
`;

const StatusDot = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${props => (props.isGreen ? 'green' : 'crimson')};
  border-radius: 50%;
`;
