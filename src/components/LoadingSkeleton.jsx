import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.45; }
  100% { opacity: 1; }
`;

const SkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
`;

const SkeletonBox = styled.div`
  height: 320px;
  border-radius: 24px;
  background: linear-gradient(90deg, #e2e8f0 25%, #cbd5e1 50%, #e2e8f0 75%);
  background-size: 200% 100%;
  animation: ${pulse} 1.4s ease infinite;
`;

function LoadingSkeleton({ count = 6 }) {
  return (
    <SkeletonGrid>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonBox key={index} />
      ))}
    </SkeletonGrid>
  );
}

export default LoadingSkeleton;
