import styled, { css } from "styled-components";

// * Start Common Style ==============================================================
const commonFlexStyles = css`
  display: flex;
  align-items: center;
`;

const commonIconSocialFollow = css`
  display: flex;
  align-items: center;
  margin: 0 5px;
`;

const hoverStyles = css`
  &:hover {
    color: lightgray;
    /* box-shadow: 0 0 8px 2px rgba(211, 211, 211, 0.7); // เอฟเฟกต์เรืองแสง lightgray */
  }
`;
// * End Common Style ================================================================

// * Start Layout ====================================================================
export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #0f0f0f;
  color: gray;
  padding: 10px 200px;
`;

export const StyleFooterMainTop = styled.main`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 20px 0;
`;

export const StyleUlContainer = styled.ul`
  margin: 0 50px;
`;
export const StyleUl = styled.ul`
  list-style: none;
`;

export const StyleFooterMainBottom = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 0;
`;

export const StyleHr = styled.hr`
  width: 100%;
  margin: 20px 0;
  border: 1px solid gray;
`;

export const SocialFollow = styled.div`
  /* width: 100%;
  margin: 20px 0;
  border: 1px solid gray; */
`;
// * End Layout ======================================================================

// * Start Text ======================================================================
export const StyleUlTitleText = styled.p`
  font-size: large;
  font-weight: 600;
  margin: 0 0 20px 0;
  color: lightgray;
`;

export const StyleLiText = styled.li`
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    color: lightgray;
  }
`;

export const SocialText = styled.span`
  color: gray;
`;
// * End Text ========================================================================

// * Start Icon ======================================================================
export const SocialIcons = styled.div`
  ${commonFlexStyles};
  margin-left: 15px;
`;

export const FacebookIcon = styled.div`
  ${commonIconSocialFollow}
`;

export const InstagramIcon = styled.div`
  ${commonIconSocialFollow}
`;

export const LineIcon = styled.div`
  ${commonIconSocialFollow}
`;

// * End Icon ========================================================================

// * Start Link ======================================================================
export const Link = styled.a`
  color: gray;
  text-decoration: none;
  ${hoverStyles};

  &.header-link__item--help,
  &.header-link__item--register,
  &.header-link__item--login {
    margin: 0 15px;
    ${hoverStyles};
  }

  &.header-alarm,
  &.header-language,
  &.header-link__item--cart {
    ${commonFlexStyles};
  }
`;
// * End Link ========================================================================