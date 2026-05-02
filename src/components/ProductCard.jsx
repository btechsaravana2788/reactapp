import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #ffffff;
  border-radius: 24px;
  padding: 20px;
  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  color: inherit;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 22px 46px rgba(15, 23, 42, 0.16);
  }
`;

const ImageWrap = styled.div`
  background: #f8fafc;
  border-radius: 20px;
  display: grid;
  place-items: center;
  min-height: 210px;
  margin-bottom: 18px;
`;

const Title = styled.h2`
  font-size: 1.1rem;
  margin: 0 0 10px;
  line-height: 1.4;
  min-height: 56px;
`;

const Price = styled.div`
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin: 0;
  color: #64748b;
  line-height: 1.6;
`;

function ProductCard({ product }) {
  return (
    <Card to={`/product/${product.id}`}>
      <ImageWrap>
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
      </ImageWrap>
      <Title>{product.title}</Title>
      <Price>${product.price}</Price>
      <Description>{product.description.slice(0, 90)}...</Description>
    </Card>
  );
}

export default ProductCard;
