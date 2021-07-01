import styled from 'styled-components';
import { flexCenter } from '../../style/mixin';

const Header = () => (
  <HeaderContainer>
    <HeaderBox>
      <HeaderContent>
        <Logo src="/images/mywishtrip_white_logo.png" alt="로고 이미지" />
        <ButtonBox>
          <SLink>파트너로 등록하기</SLink>
          <SLink>로그인</SLink>
          <Signup>회원가입</Signup>
        </ButtonBox>
      </HeaderContent>
      <NavList>
        {LINK_LIST.map((link, index) => (
          <List key={index}>
            <NavLink>{link}</NavLink>
          </List>
        ))}
      </NavList>
    </HeaderBox>
  </HeaderContainer>
);

const HeaderContainer = styled.header`
  ${flexCenter('flex', 'center', 'center')}
  background-color: ${props => props.theme.blueMain};
  border-bottom: 1px solid #1683db;
`;

const HeaderBox = styled.div`
  flex-direction: column;
  width: 1060px;
  margin-top: 15px;
`;

const HeaderContent = styled.div`
  ${flexCenter('flex', 'space-between', 'center')}
  margin-bottom: 20px;
`;

const Logo = styled.img`
  margin-left: 20px;
  width: 128px;
  cursor: pointer;
`;

const ButtonBox = styled.div`
  font-size: 14px;
`;

const SLink = styled.span`
  margin-right: 30px;
  color: ${props => props.theme.white};
`;

const Signup = styled.button`
  all: unset;
  padding: 10px 30px;
  margin-right: 5px;
  border: 1px solid ${props => props.theme.white};
  border-radius: 2px;
  color: ${props => props.theme.white};
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

const List = styled.li`
  padding: 20px;
  font-size: 15px;
  text-align: center;
  color: ${props => props.theme.white};
`;

const NavLink = styled.a`
  padding-bottom: 15px;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid ${props => props.theme.white};
  }
`;

const LINK_LIST = [
  '홈',
  '항공권',
  '숙소',
  '렌터카·교통',
  '투어·티켓',
  '랜선투어',
  '할인혜택',
];

export default Header;
