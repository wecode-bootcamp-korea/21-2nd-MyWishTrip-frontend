import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import styled from 'styled-components/macro';
import { flexCenter, Icon } from '../../style/mixin';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
registerLocale('ko', ko);

export default function Calendar() {
  const [startDate, setStartDate] = useState(null);
  const MyContainer = ({ className, children }) => {
    return (
      <div>
        <CalendarContainer className={className}>
          <StyledCalendar style={{ position: 'relative' }}>
            {children}
          </StyledCalendar>
        </CalendarContainer>
      </div>
    );
  };

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <CustomButton
      className="example-custom-input"
      onClick={onClick}
      ref={ref}
      locale="ko"
    >
      <CalendarIcon src="/images/calendar_fill.svg" alt="icon" />
      {value === '' ? '날짜를 선택해 주세요' : value}
    </CustomButton>
  ));

  return (
    <DatePicker
      locale="ko"
      selected={startDate}
      onChange={date => setStartDate(date)}
      calendarContainer={MyContainer}
      customInput={<CustomInput />}
      dateFormat="yyyy년 MM월 dd일(eee)"
    />
  );
}

const CalendarContainer = styled.div`
  border: none;
`;

const CustomButton = styled.button`
  ${flexCenter('flex', 'flex-start', 'center')}
  flex-direction: row;
  margin-right: 10px;
  width: 255px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.whiteGray};
  background-color: ${({ theme }) => theme.whiteGray};
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.fontBlack};
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.fontGray};
  }
`;

const CalendarIcon = styled.img`
  ${Icon}
`;

const StyledCalendar = styled.div`
  .react-datepicker__header {
    padding: 0px;
    background-color: white;
    border: none;
  }

  .react-datepicker__month-container {
    padding: 20px 0px;
    width: 325px;
    font-size: 16px;
    font-weight: 400;
    background-color: #fff;
    color: #495056;
    border: 1px solid #ddddde;
    border-radius: 2px;
    display: inline-block;
    position: relative;
  }

  .react-datepicker__input-container {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    margin-top: 0;
    color: #343a40;
    font-size: 16px;
    font-weight: 500;
  }

  .react-datepicker__day,
  .react-datepicker__time-name {
    color: #495056;
    font-weight: 400;
    font-size: 15px;
    display: inline-block;
    width: 2.1rem;
    line-height: 2.1rem;
    text-align: center;
  }

  .react-datepicker__day-name {
    color: #666d75;
    font-size: 12px;
    display: inline-block;
    width: 2.1rem;
    text-align: center;
  }

  .react-datepicker__day-names {
    margin-top: 20px;
    margin-bottom: 0px;
  }

  .react-datepicker__day,
  .react-datepicker__month-text,
  .react-datepicker__quarter-text,
  .react-datepicker__year-text {
    cursor: pointer;

    &:hover {
      border-radius: 50%;
    }

    &--today {
      font-weight: bold;
    }

    &--highlighted {
      border-radius: $datepicker__border-radius;
      background-color: $datepicker__highlighted-color;
      color: #fff;

      &:hover {
        background-color: darken($datepicker__highlighted-color, 5%);
      }

      &-custom-1 {
        color: magenta;
      }

      &-custom-2 {
        color: green;
      }
    }

    &--selected,
    &--in-selecting-range,
    &--in-range {
      border-radius: 50%;
      background-color: #51abf3;
      color: #fff;

      &:hover {
        background-color: darken(#51abf3, 5%);
      }
    }

    &--keyboard-selected {
      border-radius: 50%;
      background-color: lighten(#51abf3, 10%);
      color: #fff;

      &:hover {
        background-color: darken(#51abf3, 5%);
      }
    }

    &--in-selecting-range:not(&--in-range) {
      background-color: rgba(#51abf3, 0.5);
    }

    &--in-range:not(&--in-selecting-range) {
      .react-datepicker__month--selecting-range & {
        background-color: #51abf3;
        color: $datepicker__text-color;
      }
    }

    &--disabled {
      cursor: default;
      color: $datepicker__muted-color;

      &:hover {
        background-color: transparent;
      }
    }
  }

  .react-datepicker__week-number {
    color: #495056;
    font-weight: 400;
    font-size: 15px;
    display: inline-block;
    width: 2.1rem;
    line-height: 2.1rem;
    text-align: center;

    &.react-datepicker__week-number--clickable {
      cursor: pointer;

      &:hover {
        border-radius: 50%;
        background-color: $datepicker__background-color;
      }
    }
  }
  .react-datepicker__navigation {
    align-items: center;
    background: none;
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 20px;
    padding: 0;
    border: none;
    z-index: 1;
    border-width: 2px 2px 0px;
    height: 22px;
    width: 22px;
    text-indent: -999em;
    overflow: hidden;

    &--previous {
      left: 40px;
    }

    &--next {
      right: 40px;

      &--with-time:not(&--with-today-button) {
        right: 85px;
      }
    }

    &--years {
      position: relative;
      top: 0;
      display: block;
      margin-left: auto;
      margin-right: auto;

      &-previous {
        top: 4px;
      }

      &-upcoming {
        top: -4px;
      }
    }

    &:hover {
      *::before {
        border-color: darken($datepicker__muted-color, 15%);
      }
    }
  }

  .react-datepicker__navigation-icon::before,
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    border-color: #ccc;
    border-style: solid;
    border-width: 2px 2px 0 0;
    content: '';
    display: block;
    height: 9px;
    position: absolute;
    top: 6px;
    width: 9px;
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    border-radius: 50%;
    background-color: #51abf3;
    color: #fff;
  }
`;
