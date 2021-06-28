import { useState } from 'react';
import styled from 'styled-components';
import categoryList from './categoryList';
import { flexCenter } from '../../../style/mixin';

const CategoryMenu = props => {
  const [toggleMenu, setToggleMenu] = useState(
    Array(categoryList.length).fill(false)
  );

  const handleClick = id => {
    setToggleMenu(
      toggleMenu.map((menu, index) => {
        return id === index ? !menu : menu;
      })
    );
  };

  return (
    <CategoryWrapper>
      <CategoryMenuContainer>
        {categoryList.map((list, index) => (
          <CategoryMenuBox key={index}>
            <CategoryMenuTitle onClick={() => handleClick(index)}>
              <CategoryName>{list.categoryName}</CategoryName>
              <span role="img">▽</span>
            </CategoryMenuTitle>
            <CategoryMenuList
              height={toggleMenu[index] ? list.categoryItem.length : 0}
            >
              <CategoryMenuItemList>
                {list.categoryItem.map((item, index) => (
                  <CategoryMenuItem key={index}>
                    <div
                      onClick={
                        item === '전체보기'
                          ? () => props.selectMainCategory(list.categoryName)
                          : () => props.selectCategory(item)
                      }
                    >
                      <span
                        className={
                          item === '전체보기' ? 'mainCategory' : 'subCategory'
                        }
                      >
                        {item}
                      </span>
                    </div>
                  </CategoryMenuItem>
                ))}
              </CategoryMenuItemList>
            </CategoryMenuList>
          </CategoryMenuBox>
        ))}
      </CategoryMenuContainer>
    </CategoryWrapper>
  );
};

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 36px;
`;

const CategoryMenuContainer = styled.div`
  width: 100%;
  padding: 8px 0px;
  border: 1px solid ${props => props.theme.lineGray};
`;

const CategoryMenuBox = styled.div``;

const CategoryMenuTitle = styled.div`
  ${flexCenter('flex', 'space-between', 'center')}
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: #f1f3f5;
  }
`;

const CategoryName = styled.h2``;

const CategoryMenuList = styled.ul`
  position: relative;
  height: ${props => `${props.height * ItemHeight}px`};
  transition: height 250ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`;

const CategoryMenuItemList = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const CategoryMenuItem = styled.li`
  width: 100%;
  padding: 10px 16px 10px 46px;
  cursor: pointer;

  &:hover {
    background-color: #f1f3f5;
  }
`;

const ItemHeight = 36;

export default CategoryMenu;
