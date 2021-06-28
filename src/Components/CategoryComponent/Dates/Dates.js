import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import { flexCenter } from '../../../style/mixin';

registerLocale('ko', ko);

const Dates = props => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const formatDate = date => {
    date = new Date(date);
    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const changeDateString = date => {
    date = new Date(date);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${date.getFullYear()}-${month < 10 ? `0${month}` : month}-${
      day < 10 ? `0${day}` : day
    }`;
  };

  const handleCloseClick = () => {
    props.setCalenderDate(startDate, endDate);
  };

  const handleCloseModal = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const MyContainer = ({ children }) => {
    return (
      <CalendarContainer>
        <CalenderBox>{children}</CalenderBox>
        <CalenderButtonContainer>
          <CalendarButtonBox>
            <ClearButton onClick={handleCloseModal}>초기화</ClearButton>
            <SetCalenderButton
              onClick={handleCloseClick}
              disabled={endDate ? false : true}
            >
              적용하기
            </SetCalenderButton>
          </CalendarButtonBox>
        </CalenderButtonContainer>
      </CalendarContainer>
    );
  };

  return (
    <SelectCalenderContainer>
      <CalenderSelectTab>
        <Schedule>일정</Schedule>
        <CalenderOpenButton onClick={props.handleToggleCalender}>
          {props.selectedStart && props.selectedEnd
            ? `${formatDate(props.selectedStart)} ~ ${formatDate(
                props.selectedEnd
              )}`
            : '날짜선택'}
        </CalenderOpenButton>
      </CalenderSelectTab>
      {props.toggleCalender && (
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          shouldCloseOnSelect={false}
          calendarContainer={MyContainer}
          inline
          locale="ko"
          minDate={new Date()}
          selectsRange
          dateFormatCalendar="yyyy.MM."
          showDisabledMonthNavigation
        />
      )}
    </SelectCalenderContainer>
  );
};

const SelectCalenderContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 24px 0px;
  border-bottom: 1px solid ${props => props.theme.lineGray};
  z-index: 10;
`;

const CalenderSelectTab = styled.div`
  ${flexCenter('flex', 'space-between', 'center')}
  width: 100%;
`;

const Schedule = styled.span`
  font-size: 15px;
`;

const CalenderOpenButton = styled.button`
  all: unset;
  padding: 4px 6px;
  color: ${props => props.theme.blueMain};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.blueDim};
  }
`;

const CalendarContainer = styled.div`
  position: absolute;
  background-color: white;
  top: 60px;
  left: 0;
  width: 325px;
  height: 392px;
`;

const CalenderBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;

  .react-datepicker__month-container {
    width: 100%;
    height: 100%;
    padding: 10px;
    border: 1px solid gray;

    .react-datepicker__header {
      background-color: white;
      border: none;

      .react-datepicker__day-names {
        display: flex;
        justify-content: space-evenly;
        margin-top: 20px;
      }

      .react-datepicker__current-month {
        font-size: 20px;
        font-weight: 500;
      }
    }

    .react-datepicker__month {
      margin: 0.4rem 0px;

      .react-datepicker__week {
        display: flex;
        justify-content: space-evenly;

        &:hover {
          border-radius: 50%;
        }

        .react-datepicker__day,
        .react-datepicker__month-text,
        .react-datepicker__quarter-text,
        .react-datepicker__year-text {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 40px;
          width: 40px;

          cursor: pointer;

          &:hover {
            border-radius: 50%;
            background-color: ${props => props.theme.blueMain};
            color: white;
          }

          &--today {
            font-weight: bold;
          }

          &--highlighted {
            border-radius: 50%;
            background-color: green;
            color: #fff;

            &:hover {
              border: 1px solid gray;
              background-color: black;
            }

            &-custom-1 {
              color: magenta;
            }

            &-custom-2 {
              color: green;
            }
          }

          &--selected {
            border: 2px solid ${props => props.theme.blueMain};
            background-color: ${props => props.theme.blueMain};
            border-radius: 50%;

            &:hover {
              /* background-color: ${props => props.theme.lineGray}; */
            }
          }

          &--in-selecting-range {
            background-color: white;
            border-radius: 50%;
            color: black;
          }

          &--in-range {
            border-radius: 50%;
            background-color: ${props => props.theme.blueMain};
            color: white;
          }
          &:hover {
            background-color: white;
            color: black;
            border: 2px solid ${props => props.theme.blueMain};
          }

          &--keyboard-selected {
            border-radius: 50%;
            background-color: ${props => props.theme.blueMain};
            color: #fff;
          }
          &--disabled {
            cursor: not-allowed;
            text-decoration: line-through;

            &:hover {
              background-color: transparent;
            }
          }
        }
      }
    }
  }
`;

const CalenderButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const CalendarButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px 20px;
`;

const ClearButton = styled.button`
  all: unset;
  color: ${props => props.theme.blueMain};
  cursor: pointer;
`;

const SetCalenderButton = styled.button`
  all: unset;
  height: 32px;
  padding: 0px 11px;
  background-color: ${props => props.theme.blueMain};
  color: ${props => props.theme.white};
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: ${props => props.theme.blueDim};
  }
`;

export default Dates;
