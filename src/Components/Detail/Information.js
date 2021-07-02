import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';

export default function Information() {
  const [information, setInformation] = useState([]);

  useEffect(() => {
    let completed = false;

    async function getData() {
      const response = await axios.get('data/detail_info.json');
      if (!completed) setInformation(response.data);
    }
    getData();
    return () => {
      completed = true;
    };
  }, []);

  return (
    <>
      {information &&
        information.map((info, index) => (
          <InformationWrapper key={index}>
            <GrayLine></GrayLine>
            <InfoTitle>{info.title}</InfoTitle>
            <InfoSmallTitle>{info.small_title}</InfoSmallTitle>
            <InfoDescription>{info.description}</InfoDescription>
            <InfoSmallTitle>{info.small_title2}</InfoSmallTitle>
            <InfoDescription>{info.description2}</InfoDescription>
          </InformationWrapper>
        ))}
    </>
  );
}

const InformationWrapper = styled.div``;

const GrayLine = styled.div`
  padding-top: 32px;
  width: 700px;
  border-top: 1px solid #dee2e6;
`;

const InfoTitle = styled.h2`
  margin-bottom: 32px;
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.fontBlack};
`;

const InfoSmallTitle = styled.p`
  margin-bottom: 16px;
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.fontBlack};
`;

const InfoDescription = styled.p`
  margin-bottom: 32px;
  font-size: 15px;
  font-weight: 400;
  line-height: 28px;
  color: ${({ theme }) => theme.fontBlack};
`;
