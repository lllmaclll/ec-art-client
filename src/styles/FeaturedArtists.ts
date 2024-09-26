import styled from "styled-components";
import { Avatar, Card, CardContent } from "@mui/material";

// * Start Layout ====================================================================
export const FeaturedArtistsContainer = styled.main`
  width: 1733.33px;
  margin: 50px 200px;
`;

export const FeaturedArtistsMain = styled.main`
  width: 1733.33px;
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
  gap: 20px;
  border-radius: 10px;
  padding: 10px 24px;
  cursor: pointer;
`;
// * End Layout ======================================================================

// * Start Card ======================================================================
export const StyledCard = styled(Card)`
  width:  264px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s ease;
  position: relative; /* Ensure that the child is positioned relative to the card */

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledCardContent = styled(CardContent)`
  width: 100% !important;
  margin-top: 20px;
  padding-bottom: 16px !important;
  text-align: center;
`;
// * End Card ========================================================================

// * Start Avatar ====================================================================
export const StyleAvatarContainer = styled.div<{ bgColor: string }>`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
  width: 100%;
  position: relative;
`;

export const StyledAvatar = styled(Avatar)<{ borderColor: string }>`
  width: 100px !important;
  height: 100px !important;
  object-fit: cover !important;
  position: absolute;
  top: 40px;
  border: 1px solid ${(props) => props.borderColor} !important;
  transition: transform 0.3s ease !important;

  ${StyledCard}:hover & {
    transform: scale(1.05) !important;
  }
`;
// * End Avatar ======================================================================