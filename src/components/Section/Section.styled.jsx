import styled from 'styled-components';

export const SectionWrap = styled.section`
  max-width: 600px;
  width: 100%;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.lg};
  padding: ${p => p.theme.spacing(10)};
  box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadow};
  -webkit-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadow};
  -moz-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadow};
`;

export const Tittle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  height: 100vh;
`;