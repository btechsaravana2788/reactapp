import styled from 'styled-components';

const Toolbar = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 1fr) minmax(160px, 1fr) minmax(160px, 1fr);
  gap: 18px;
  margin-bottom: 24px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 0.95rem;
  color: #475569;
`;

const Input = styled.input`
  border: 1px solid #cbd5e1;
  border-radius: 16px;
  padding: 14px 16px;
  background: #ffffff;
  color: #0f172a;
  outline: none;

  &:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.12);
  }
`;

const Select = styled.select`
  border: 1px solid #cbd5e1;
  border-radius: 16px;
  padding: 14px 16px;
  background: #ffffff;
  color: #0f172a;
  outline: none;

  &:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.12);
  }
`;

function SearchFilterBar({ search, category, size, categories, sizes, onSearch, onCategory, onSize }) {
  return (
    <Toolbar>
      <Field>
        Search by title
        <Input value={search} onChange={(event) => onSearch(event.target.value)} placeholder="Search products" />
      </Field>
      <Field>
        Category
        <Select value={category} onChange={(event) => onCategory(event.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </Select>
      </Field>
      <Field>
        Size
        <Select value={size} onChange={(event) => onSize(event.target.value)}>
          {sizes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </Field>
    </Toolbar>
  );
}

export default SearchFilterBar;
