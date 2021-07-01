import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Card = () => {
  const [data, setData] = useState([]);
  const [isLiked, setLike] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('/data/CardData.json')
      .then(response => response.json())
      .then(data => setData(data));
  };

  return (
    <SlideContainer>
      {data.map((item, index) => (
        <CardContainer key={index}>
          <CardImage src={item.image_url} alt={item.name} />
          <LikeImage
            src={
              isLiked
                ? 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNGQTVCNEEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjRkZGIiBkPSJNMTIuMTA1IDE5Ljk0bDcuMTg4LTcuMTg5YTQuODMzIDQuODMzIDAgMSAwLTYuODM1LTYuODM1bC0uMzUzLjM1My0uMzU0LS4zNTNhNC44MzMgNC44MzMgMCAxIDAtNi44MzUgNi44MzVsNy4xODkgNy4xODl6Ii8+Cjwvc3ZnPgo='
                : 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyLjEwNSAxOS41ODZsNy4wMTItNy4wMTJhNC41ODMgNC41ODMgMCAxIDAtNi40ODItNi40ODJsLS41My41My0uNTMtLjUzYTQuNTgzIDQuNTgzIDAgMCAwLTYuNDgzIDYuNDgybDcuMDEzIDcuMDEyeiIvPgo8L3N2Zz4K'
            }
            alt="like-heart"
            onClick={() => setLike(!isLiked)}
          />
          <CardInfoBox>
            <CardTitle>
              <CardCategory>{`${item.main}·${item.sub}`}</CardCategory>
              <CardName>{item.name}</CardName>
            </CardTitle>
            <div>
              <StarsRating>{`★★★★★`}</StarsRating>
              <Rating>{`${item.rating}`}</Rating>
              <PriceBox>
                <OriginPrice>{`${item.price.toLocaleString()}원`}</OriginPrice>
                <DiscountedPrice>{`${(
                  item.price -
                  item.price * item.discount
                ).toLocaleString()}원`}</DiscountedPrice>
                <MemberLimit> / 1인</MemberLimit>
              </PriceBox>
            </div>
          </CardInfoBox>
        </CardContainer>
      ))}
    </SlideContainer>
  );
};

const SlideContainer = styled.div`
  display: flex;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 311px;
  width: 270px;
  position: relative;
  margin: 20px 0px 0px 20px;
  border: 1px solid #d0d2d5;
  border-radius: 4px;
`;

const CardImage = styled.img`
  height: 166px;
  width: 100%;
  border: none;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
`;

const LikeImage = styled.img`
  height: 24px;
  width: 24px;
  position: absolute;
  top: 5px;
  right: 5px;
`;

const CardInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 16px 16px;
  height: 145px;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
`;

const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardCategory = styled.span`
  font-size: 12px;
  color: #848c94;
  line-height: 1.5;
`;

const CardName = styled.span`
  width: 100%;
  color: #343a40;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
`;

const StarsRating = styled.span`
  color: #51abf3;
  font-size: 14px;
`;

const Rating = styled.span`
  color: #848c94;
  font-size: 12px;
  margin-left: 4px;
  vertical-align: middle;
`;

const PriceBox = styled.div`
  margin-top: 5px;
`;

const OriginPrice = styled.span`
  margin-right: 4px;
  color: #848c94;
  font-size: 12px;
  text-decoration: line-through;
`;

const DiscountedPrice = styled.span`
  color: #666d75;
  font-size: 14px;
  font-weight: 500;
`;

const MemberLimit = styled.span`
  color: #848c94;
  font-size: 12px;
  margin-left: 4px;
`;

export default Card;
