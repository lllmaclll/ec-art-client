import styled from "styled-components";
import { NavLink } from 'react-router-dom';

// * Start Layout ====================================================================
export const CategoryContainer = styled.div`
  width: 1733.33px;
  margin: 50px 200px;
  background-color: #eeeeee;
  border-radius: 10px;
`;

export const CategoryHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 15px;
  border-bottom: 1px solid #dddddd;
`;

export const CategoryMain = styled.main`
  display: flex;
`;

export const CategoryMainNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #dddddd;
  width: 200px;
  height: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s, box-shadow 0.3s, color 0.3s;

  /* กำหนดสีของข้อความเริ่มต้นเป็นสีดำ */
  & > .category-text {
    color: black; /* Default color */
  }

  &:hover {
    background-color: #E7E7E7;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);

    & > .category-text {
      color: blue;
    }
  }
`;

export const CategoryImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;
// * End Layout ======================================================================