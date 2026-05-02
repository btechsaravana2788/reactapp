import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loadProducts, setCategory, setSearch, setSize } from '../store/productsSlice';
import ProductCard from '../components/ProductCard';
import SearchFilterBar from '../components/SearchFilterBar';
import LoadingSkeleton from '../components/LoadingSkeleton';
import ErrorMessage from '../components/ErrorMessage';

const Content = styled.section`
  padding: 30px 16px 48px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(1.9rem, 2.6vw, 2.6rem);
  letter-spacing: -0.03em;
`;

const Summary = styled.p`
  margin: 0;
  color: #475569;
`;

function Home() {
  const dispatch = useDispatch();
  const { items, categories, filters, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(loadProducts());
    }
  }, [dispatch, status]);

  const filteredProducts = useMemo(() => {
    return items.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(filters.search.toLowerCase());
      const matchesCategory = filters.category === 'All' || product.category === filters.category;
      const matchesSize = filters.size === 'All' || product.size === filters.size;
      return matchesSearch && matchesCategory && matchesSize;
    });
  }, [items, filters]);

  return (
    <Content className="container">
      <TopBar>
        <div>
          <Title>Modern clothing store</Title>
          <Summary>Browse more than 100 products with quick filtering and fast loading.</Summary>
        </div>
      </TopBar>

      <SearchFilterBar
        search={filters.search}
        category={filters.category}
        size={filters.size}
        categories={categories}
        sizes={['All', 'S', 'M', 'L', 'XL']}
        onSearch={(value) => dispatch(setSearch(value))}
        onCategory={(value) => dispatch(setCategory(value))}
        onSize={(value) => dispatch(setSize(value))}
      />

      {status === 'loading' && <LoadingSkeleton count={8} />}
      {status === 'failed' && <ErrorMessage message={error || 'Could not load products.'} />}
      {status === 'succeeded' && (
        <>
          <Summary>{filteredProducts.length} products found</Summary>
          <ProductGrid>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        </>
      )}
    </Content>
  );
}

export default Home;
