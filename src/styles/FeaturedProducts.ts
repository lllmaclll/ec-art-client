import styled from "styled-components";
import { Card, CardActions, CardMedia } from "@mui/material";

// * Start Layout ====================================================================
export const FeaturedProductsContainer = styled.main`
  width: 1733.33px;
  margin: 50px 200px;
`;

export const FeaturedProductsMain = styled.main`
  width: 1733.33px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  border-radius: 10px;
  cursor: pointer;
`;
// * End Layout ======================================================================

// * Start Card ======================================================================
export const StyledCard = styled(Card)`
  transition: box-shadow 0.3s ease;
  position: relative; /* Ensure that the child is positioned relative to the card */
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  transition: transform 0.3s ease;
  
  ${StyledCard}:hover & {
    transform: scale(1.05); /* Scale up image when parent card is hovered */
  }
`;

export const StyleCardActions = styled(CardActions)`
    display: flex;
    justify-content: center;
`
// * End Card ========================================================================