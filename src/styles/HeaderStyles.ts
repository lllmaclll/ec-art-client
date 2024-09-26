import styled, { css } from "styled-components";

// * Start Common Style ==============================================================
const commonFlexStyles = css`
  display: flex;
  align-items: center;
`;

const commonFlexWithoutAlign = css`
  display: flex;
`;

const hoverStyles = css`
  &:hover {
    color: lightgray;
    /* box-shadow: 0 0 8px 2px rgba(211, 211, 211, 0.7); // เอฟเฟกต์เรืองแสง lightgray */
  }
`;

const hoverTextStyles = css`
  &:hover {
    text-decoration: underline;
    color: lightgray;
    /* box-shadow: 0 0 8px 2px rgba(211, 211, 211, 0.7); // เอฟเฟกต์เรืองแสง lightgray */
  }
`;

const commonHeaderIcon = css`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 15px;
  color: gray;
`

const commonIconSocialFollow = css`
  display: flex;
  align-items: center;
  margin: 0 5px;
`
const commonIcon = css`
  margin: 0 0 0 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  ${hoverStyles};
`

const commonText = css`
  margin: 0 15px;
  color: gray;
  text-decoration: none;
  cursor: pointer;
  ${hoverTextStyles}
`
// * End Common Style ================================================================

// * Start Layout ====================================================================
export const StyledHeader = styled.header`
  ${commonFlexStyles};
  background-color: #0f0f0f;
  padding: 10px 200px;
`;

export const HeaderLogo = styled.div`
  ${commonFlexStyles};
  justify-content: space-between;
  padding: 0 20px;
`;

export const HeaderContainer = styled.div`
  ${commonFlexWithoutAlign};
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  width: 100%;
`;

export const HeaderTop = styled.div`
  ${commonFlexStyles};
  justify-content: space-between;
  margin: 20px 0;
`;

export const HeaderBottom = styled.div`
  ${commonFlexStyles};
  justify-content: center;
  margin: 20px 0;
`;

export const HeaderItems = styled.div`
  ${commonFlexStyles};

  &.header-bottom__item--cart {
    margin-left: 40px;
  }
`;
// * End Layout ======================================================================

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

// * Start Icon ======================================================================
export const HeaderAlarm = styled.div`
  ${commonHeaderIcon}
`;

export const HeaderLanguage = styled.div`
  ${commonHeaderIcon}
`;

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

export const BellIcon = styled.div`
  ${commonIcon};
`;

export const LanguageIcon = styled.div`
  ${commonIcon};
`;

export const KeyDownIcon = styled.div`
  ${commonIcon};
`;

export const ShoppingCartIcon = styled.div`
  ${commonIcon};
`;

export const Logo = styled.img`
  width: 150px;
  height: 150px;
  cursor: pointer;
`;
// * End Icon ========================================================================

// * Start Text ======================================================================
export const SocialText = styled.span`
  color: gray;
`;

export const TextLanguage = styled.span`
  ${commonText}
`;

export const TextAlarm = styled.span`
  ${commonText}
`;
// * End Text ========================================================================
