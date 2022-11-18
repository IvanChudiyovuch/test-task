import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: centr;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style-type: none;
  background-color: ${p => p.theme.colors.backgroundPrimary};
`;

export const ListItem = styled.li`
  width: 1200px;
  position: relative;
  //   flex-grow: 1;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  margin-bottom: 15px;
  margin-top: 15px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.white};
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
    0px 1px 1px rgba(0, 0, 0, 0.12);
`;
