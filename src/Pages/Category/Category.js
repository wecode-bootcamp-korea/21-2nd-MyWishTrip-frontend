import React, { useEffect, useState } from 'react';
import CategoryMenu from '../../Components/CategoryComponent/CategoryMenu/CategoryMenu';
import Dates from '../../Components/CategoryComponent/Dates/Dates';
import RcSlider from '../../Components/CategoryComponent/RcSlider/RcSlider';
import styled from 'styled-components';
import CategoryCheck from '../../Components/CategoryComponent/CategoryCheck/CategoryCheck';
import LandMark from '../../Components/CategoryComponent/Landmark/Landmark';
import { flexCenter } from '../../style/mixin';
import { FilterApi } from '../../api';
import Card from '../../Components/Card/Card';

const Category = props => {
  const [toggleCalender, setToggleCalender] = useState(false);
  const [filter, setFilter] = useState({
    region: '경상도',
    mainCategory: '',
    subCategory: '',
    price: [3000, 750000],
    selectedStartDate: '',
    selectedEndDate: '',
    rating: '',
    landmark: [],
  });
  const [categoryData, setCategoryData] = useState([]);

  const makeQueryString = obj => {
    // memorial code
    return (
      '?' +
      Object.keys(obj)
        .map(i => obj[i] && i + '=' + obj[i])
        .filter(item => !!item)
        .join('&')
    );
  };

  const changeDateString = selectedDate => {
    const newDate = new Date(selectedDate);
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    if (isNaN(month)) return '';
    return `${newDate.getFullYear()}-${month < 10 ? `0${month}` : month}-${
      day < 10 ? `0${day}` : day
    }`;
  };

  const queryObj = {
    region: filter.region,
    main_category: filter.mainCategory,
    sub_category: filter.subCategory,
    price: `${filter.price[0]}~${filter.price[1]}`,
    date: `${
      !filter.selectedEndDate
        ? ''
        : `${changeDateString(filter.selectedStartDate)}~${changeDateString(
            filter.selectedEndDate
          )}`
    }`,
    landmarks: filter.landmark.join('&'),
    score: filter.rating,
  };

  const handleToggleCalender = () => {
    setToggleCalender(true);
  };

  const handleMainCategory = item => {
    handleFilter('mainCategory', item);
    handleFilter('subCategory', '');
  };

  const handleFilter = (key, value) => {
    setFilter(filter => ({ ...filter, [key]: value }));
  };

  const setCalenderDate = (startDate, endDate) => {
    handleFilter('selectedStartDate', startDate);
    handleFilter('selectedEndDate', endDate);
    setToggleCalender(false);
  };

  const handleRatingClick = event => {
    const { value } = event.target;
    handleFilter('rating', value);
  };

  const handleLandmarkClick = event => {
    const { value } = event.target;
    let checkedLandmark = [...filter.landmark, value];
    if (filter.landmark.includes(value)) {
      checkedLandmark = checkedLandmark.filter(landmark => landmark !== value);
    }
    handleFilter('landmark', checkedLandmark);
  };

  const rePecthUrl = queryObj => {
    const qpm = makeQueryString(queryObj);
    FilterApi(qpm).then(response => setCategoryData(response.data.products));
    props.history.push({
      pathname: '/product',
      search: qpm,
    });
  };

  useEffect(() => {
    rePecthUrl(queryObj);
  }, [filter]);

  return (
    categoryData && (
      <CategoryContainer>
        <MenuContainer>
          <MenuTitle>카테고리</MenuTitle>
          <CategoryMenu
            selectCategory={item => handleFilter('subCategory', item)}
            selectMainCategory={handleMainCategory}
          />
          <FilterContainer>
            <MenuTitle>필터</MenuTitle>
            <FilterBox>
              <Dates
                handleFilter={(key, value) => handleFilter(key, value)}
                selectedStart={filter.selectedStartDate}
                selectedEnd={filter.selectedEndDate}
                toggleCalender={toggleCalender}
                handleToggleCalender={handleToggleCalender}
                setCalenderDate={(startDate, endDate) =>
                  setCalenderDate(startDate, endDate)
                }
              />
              <RcSlider
                price={filter.price}
                handleSelectChange={event => handleFilter('price', event)}
              />
              <CategoryCheck handleRatingClick={handleRatingClick} />
              <LandMark
                landmarkTitle={DUMMY_LandMark}
                handleLandmarkClick={handleLandmarkClick}
              />
            </FilterBox>
          </FilterContainer>
        </MenuContainer>
        <CategoryPage>
          <Card cardData={categoryData} />
        </CategoryPage>
      </CategoryContainer>
    )
  );
};

const CategoryContainer = styled.div`
  ${flexCenter('flex', 'center', 'flex-start')}
  width: 1060px;
  margin: 0px auto;
  margin-top: 50px;
`;

const MenuContainer = styled.div`
  margin-right: 20px;
`;

const MenuTitle = styled.h2`
  margin: 16px 0px;
  font-size: 18px;
  font-weight: bold;
`;

const FilterContainer = styled.div`
  width: 250px;
`;

const CategoryPage = styled.div``;

const FilterBox = styled.div`
  padding: 0px 16px;
  border: 1px solid ${props => props.theme.lineGray};
`;

const DUMMY_LandMark = ['올레', '성산', '연동', '서귀포'];

export default Category;
