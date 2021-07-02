import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexCenter } from '../../style/mixin';

const Header = ({ location: { pathname }, history }) => {
  const loginToken = localStorage.getItem('token');

  const goToSignIn = () => {
    history.push('/signin');
  };

  const goToMain = () => {
    history.push('/');
  };

  const goToSignup = () => {
    history.push('/signup');
  };

  return (
    <HeaderContainer home={pathname === '/'}>
      <HeaderBox>
        <HeaderContent>
          <Logo
            onClick={goToMain}
            src={
              pathname === '/'
                ? '/images/mywishtrip_white_logo.png'
                : '/images/mywishtrip_logo.png'
            }
            alt="로고 이미지"
          />
          <ButtonBox>
            <SLink home={pathname === '/'}>파트너로 등록하기</SLink>
            <SLink home={pathname === '/'} onClick={goToSignIn}>
              {`${loginToken ? '위시리스트' : '로그인'}`}
            </SLink>
            <Signup home={pathname === '/'} onClick={goToSignup}>
              {`${loginToken ? `마이페이지` : `회원가입`}`}
            </Signup>
          </ButtonBox>
        </HeaderContent>
        <NavList>
          {LINK_LIST.map((link, index) => (
            <List key={index} home={pathname === '/'}>
              <NavLink home={pathname === '/'}>{link}</NavLink>
            </List>
          ))}
        </NavList>
      </HeaderBox>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  ${flexCenter('flex', 'center', 'center')}
  background-color: ${props =>
    props.home ? props.theme.blueMain : props.theme.white};
  border-bottom: 1px solid
    ${props => (props.home ? '#1683db' : props.theme.lineGray)};
`;

const HeaderBox = styled.div`
  flex-direction: column;
  width: 1075px;
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
  color: ${props =>
    props.home ? props.theme.white : props.theme.fontDarkGray};
  cursor: pointer;
`;

const Signup = styled.button`
  all: unset;
  padding: 10px 30px;
  margin-right: 5px;
  border: 1px solid
    ${props => (props.home ? props.theme.white : props.theme.blueMain)};
  border-radius: 2px;
  color: ${props => (props.home ? props.theme.white : props.theme.blueMain)};
  cursor: pointer;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

const List = styled.li`
  padding: 20px;
  font-size: 15px;
  text-align: center;
  color: ${props => (props.home ? props.theme.white : 'black')};
`;

const NavLink = styled.a`
  padding-bottom: 15px;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid
      ${props => (props.home ? props.theme.white : props.theme.blueMain)};
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

export default withRouter(Header);
