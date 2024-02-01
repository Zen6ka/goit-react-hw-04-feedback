import styled from 'styled-components';

export const ButtonsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${p => p.theme.spacing(4)};
`;

export const ButtonLi = styled.li`
  width: 120px;
  height: 40px;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.backround};
	font-family: Georgia, serif;
  color: ${p => p.theme.colors.white};
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  border: none;
  border-radius: ${p => p.theme.radii.md};
  transition: all 200ms linear;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.bgfocus};
    color: ${p => p.theme.colors.text};
    font-weight: 700;
    box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadow};
    -webkit-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadow};
    -moz-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadow};
  }
`;


