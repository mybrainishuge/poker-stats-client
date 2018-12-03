import styled from 'styled-components';
import { Col, Row } from 'react-flexbox-grid';
import { Link as RouterLink } from 'react-router-dom';
import { border, color, fontSize, fontWeight } from '..';

export const ColMiddle = styled(Col)`
  align-items: center;
  display: flex;
`;

export const TableRowHeading = styled(Row)`
  background-color: ${color.greyDark};
  border-radius: ${border.radius};
  color: ${color.white};
  padding: 0.75em;
`;

export const TableRowData = styled(Row)`
  border-bottom: ${border.greyLight};
  cursor: pointer;
  padding: 0.25em;
  :hover {
    background-color: ${color.greyLight};
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15), 0 0 1px -2px rgba(0, 0, 0, 0.15),
      0 0 20px -2px rgba(0, 0, 0, 0.35);
  }
`;

export const Flag = styled.img`
  margin-right: 0.25em;
`;

export const Avatar = styled.img`
  margin: 0 0.5em;
`;

export const TitlePrimary = styled.h1`
  font-size: ${fontSize.primary};
  font-weight: ${fontWeight.primary};
  padding-bottom: 0.5em;
  text-transform: uppercase;
`;

export const TitleSecondary = styled.h2`
  font-size: ${fontSize.secondary};
  font-weight: ${fontWeight.primary};
`;

export const Text = styled.span`
  color: ${({ textColor }) => textColor || color.black};
`;

export const Container = styled.div`
  margin: 1.25em;
`;

export const Input = styled.input`
  border-radius: ${border.radius} ${border.radius}
    ${({ listVisible }) => (listVisible ? '0 0' : null)};
  border: ${border.greyDark};
  box-sizing: border-box;
  color: ${color.black};
  font-size: ${fontSize.secondary};
  height: 44px;
  padding: 0.5em;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

export const SearchItemsContainer = styled.div`
  border-left: ${border.greyDark};
  border-right: ${border.greyDark};
  border-bottom: ${border.greyDark};
  border-radius: 0 0 ${border.radius} ${border.radius};
  ${({ hide }) => (hide ? 'display: none;' : null)}
`;

export const SearchItem = styled.div`
  border-bottom: ${border.greyLight};
  cursor: pointer;
  font-size: ${fontSize.secondary};
  padding: 0.5em;
  :hover {
    background-color: ${color.greyLight};
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15), 0 0 1px -2px rgba(0, 0, 0, 0.15),
      0 0 20px -2px rgba(0, 0, 0, 0.35);
  }
`;

export const Link = styled(RouterLink)`
  color: ${color.black};
  text-decoration: none;
`;

export const BackButton = styled(Col)`
  padding-bottom: 1em;
`;
