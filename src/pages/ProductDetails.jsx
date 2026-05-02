import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loadProductById } from '../store/productsSlice';
import LoadingSkeleton from '../components/LoadingSkeleton';
import ErrorMessage from '../components/ErrorMessage';

const DetailWrapper = styled.section`
  padding: 30px 16px 48px;
`;

const BackButton = styled.button`
  border: none;
  background: transparent;
  color: #334155;
  cursor: pointer;
  margin-bottom: 24px;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 32px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  min-height: 420px;
  background: #ffffff;
  border-radius: 24px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
`;

const ProductImage = styled.img`
  max-height: 520px;
  width: auto;
  border-radius: 20px;
`;

const InfoPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const CategoryTag = styled.span`
  display: inline-flex;
  padding: 10px 14px;
  background: #e2e8f0;
  border-radius: 999px;
  font-size: 0.95rem;
  color: #334155;
  width: fit-content;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(2rem, 2.6vw, 2.8rem);
`;

const Price = styled.strong`
  font-size: 2rem;
  color: #0f172a;
`;

const Description = styled.p`
  margin: 0;
  line-height: 1.8;
  color: #475569;
`;

const MetaList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
`;

const MetaBox = styled.div`
  background: #ffffff;
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.05);
`;

const Label = styled.div`
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 8px;
`;

const Value = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
`

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, selectedProduct, selectedStatus, selectedError } = useSelector((state) => state.products);

  const productFromList = items.find((item) => String(item.id) === String(id));
  const product = productFromList || selectedProduct;

  useEffect(() => {
    if (!productFromList || (selectedProduct && String(selectedProduct.id) !== String(id))) {
      dispatch(loadProductById(id));
    }
  }, [dispatch, id, productFromList, selectedProduct]);

  const loading = selectedStatus === 'loading' && !productFromList;

  return (
    <DetailWrapper className="container">
      <BackButton onClick={() => navigate(-1)}>{'<'} Back to products</BackButton>
      {loading && <LoadingSkeleton count={1} />}
      {selectedStatus === 'failed' && <ErrorMessage message={selectedError || 'Unable to load details.'} />}
      {product && (
        <Layout>
          <ImageContainer>
            <ProductImage src={product.thumbnail} alt={product.title} />
          </ImageContainer>
          <InfoPanel>
            <CategoryTag>{product.category}</CategoryTag>
            <Title>{product.title}</Title>
            <Price>${product.price}</Price>
            <Description>{product.description}</Description>
            <MetaList>
              <MetaBox>
                <Label>Size</Label>
                <Value>{product.size}</Value>
              </MetaBox>
              <MetaBox>
                <Label>Brand</Label>
                <Value>{product.brand || 'Standard'}</Value>
              </MetaBox>
            </MetaList>
          </InfoPanel>
        </Layout>
      )}
    </DetailWrapper>
  );
}

export default ProductDetails;
