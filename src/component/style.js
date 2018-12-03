import styled from 'styled-components';
import { Col, Row } from 'react-flexbox-grid';
import { border, color, fontSize, fontWeight } from '.';

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
