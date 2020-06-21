import React from 'react';
import styled from 'styled-components';

const categories = [
  {
    name: 'all',
    label: '전체보기',
  },
  {
    name: 'business',
    label: '비지니스',
  },
  {
    name: 'entertainment',
    label: '엔터테인먼트',
  },
  {
    name: 'health',
    label: '건강',
  },
  {
    name: 'science',
    label: '과학',
  },
  {
    name: 'sports',
    label: '스포츠',
  },
  {
    name: 'technology',
    label: '기술',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  & + & {
    margin-left: 1rem;
  }
`;

function Categories(props) {
  return (
    <CategoriesBlock>
      {categories.map((category, index) => {
        return <Category key={index}>{category.label}</Category>;
      })}
    </CategoriesBlock>
  );
}

export default Categories;
