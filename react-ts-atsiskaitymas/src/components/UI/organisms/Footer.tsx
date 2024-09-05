import styled from "styled-components";

const FooterStyled = styled.footer`
>p{
margin: 10px;
}
`;

const Footer = () => {

  return (
    <FooterStyled>
      <p>
        Copyrights, 2024, Dainius, soc. tinklai, cookies, privacy policy, terms and uses
      </p>
    </FooterStyled>
  );
}

export default Footer;