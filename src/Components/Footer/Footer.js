import styled from 'styled-components';
import { flexCenter } from '../../style/mixin';

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <FooterBoxTop>
        <FooterContent>
          <ContectInfo>고객센터 운영안내</ContectInfo>
          <ContectTime>
            <ContectTimeTitle>평일(채팅/유선) :</ContectTimeTitle> 09:00-18:00
            (12시~13시 제외)
            <br />
            <ContectTimeTitle>주말/공휴일 :</ContectTimeTitle> 채팅 상담만 가능
            <br />
            <ContectTimeTitle>※ 항공권 환불/변경 :</ContectTimeTitle>
            09:00-17:00까지 접수 가능
            <br />
            <ContectTimeTitle>유선상담 :</ContectTimeTitle> 1670-8208
          </ContectTime>
          <ConsultingButton>1:1 회원상담</ConsultingButton>
        </FooterContent>
        <FooterInfo>
          {MENU_LIST.map((menu, index) => (
            <FooterMenu key={index}>
              <FooterMenuTitle>{menu.menuName}</FooterMenuTitle>
              <FooterMenuList>
                {menu.menuItem.map((item, index) => (
                  <FooterMenuItem key={index}>
                    <FooterLink href="#">{item}</FooterLink>
                  </FooterMenuItem>
                ))}
              </FooterMenuList>
            </FooterMenu>
          ))}
        </FooterInfo>
      </FooterBoxTop>
      <FooterBoxBottom>
        <PolicyList>
          {POLICY_MENU_LIST.map((menu, index) => (
            <PolicyListItem key={index}>
              <PolicyLink href="#">{menu}</PolicyLink>
            </PolicyListItem>
          ))}
        </PolicyList>
        <LanguageButton>한국어</LanguageButton>
        <CompanyInfo>
          상호명 (주)마이리얼트립 | 대표 이동건 | 개인정보보호책임자 정재훈 |
          사업자등록번호 209-81-55339
          <br />
          주소 서울특별시 서초구 강남대로 327, 대륭서초타워 18층(서초동) |
          이메일 help@myrealtrip.com | 마케팅/제휴 문의 marketing@myrealtrip.com
          <br />
          <br />
          자사는 서울특별시관광협회 공제영업보증보험에 가입되어 있습니다.
          마이리얼트립은 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서
          상품·거래정보 및 거래에 대하여 책임을 지지않습니다
        </CompanyInfo>
      </FooterBoxBottom>
    </FooterContainer>
  </FooterWrapper>
);

const FooterWrapper = styled.footer`
  margin-top: 20px;
  border-top: 1px solid #e9ecef;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1060px;
  margin: 0px auto;
  padding: 40px 0px;
`;

const FooterBoxTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-bottom: 32px;
  font-size: 14px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const ContectInfo = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.23;
`;

const ContectTime = styled.p`
  margin-top: 10px;
  color: #848c94;
  font-size: 14px;
  line-height: 1.5;
`;

const ContectTimeTitle = styled.span`
  color: #495056;
`;

const ConsultingButton = styled.button`
  width: 110px;
  margin: 16px 0 0;
  padding: 8px 9px;
  background-color: ${props => props.theme.white};
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

const FooterInfo = styled.div`
  display: flex;
  width: 50%;
`;

const FooterMenu = styled.div`
  width: 33.33333%;
  text-align: left;
`;

const FooterMenuTitle = styled.span`
  padding-left: 5px;
  color: #666d75;
  font-size: 15px;
  font-weight: 700;
`;

const FooterMenuList = styled.ul`
  margin-top: 10px;
`;

const FooterMenuItem = styled.li`
  font-size: 14px;
  line-height: 2.29;
  cursor: pointer;
`;

const FooterLink = styled.a`
  padding: 5px;
  color: #666d75;
  text-decoration: none;

  &:hover {
    border-radius: 3px;
    background-color: #d3e8fc;
    color: ${props => props.theme.blueBackground};
  }
`;

const FooterBoxBottom = styled.div`
  ${flexCenter('flex', 'space-between', 'center')}
  flex-wrap: wrap;
  padding: 16px 0 0;
  border-top: 1px solid #e9ecef;
`;

const PolicyList = styled.ul`
  display: flex;
`;

const PolicyListItem = styled.li`
  margin-right: 20px;
  color: #666d75;
  font-size: 14px;
  line-height: 2.29;
  cursor: pointer;
`;

const PolicyLink = styled.a`
  padding: 5px;
  color: #666d75;
  text-decoration: none;

  &:hover {
    border-radius: 3px;
    background-color: #d3e8fc;
    color: ${props => props.theme.blueBackground};
  }
`;

const LanguageButton = styled.button`
  all: unset;
  width: 100px;
  height: 30px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`;

const CompanyInfo = styled.p`
  margin-top: 16px;
  color: #848c94;
  font-size: 12px;
  line-height: 1.67;
`;

const MENU_LIST = [
  { menuName: '소개', menuItem: ['회사소개', '채용', '공고'] },
  {
    menuName: '파트너',
    menuItem: [
      '파트너 등록하기',
      'Affiliate 프로그램',
      '리얼파트너',
      '파트너 블로그',
    ],
  },
  { menuName: '지원', menuItem: ['자주 묻는 질문', '최저가 보장제'] },
];

const POLICY_MENU_LIST = ['이용약관', '개인정보 처리방침', '취소 및 환불 정책'];

export default Footer;
