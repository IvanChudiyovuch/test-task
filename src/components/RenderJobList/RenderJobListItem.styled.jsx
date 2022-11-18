import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  margin: 0;
  padding: 0;
  list-style-type: none;
  gap: ${p => p.theme.space[3]}px;
`;

export const Item = styled.li`
  //   position: relative;
  flex-basis: calc((100% - 60px) / 2);
  padding: ${p => p.theme.space[2]}px;
  flex-wrap: wrap;
  flex-grow: 1;
  object-fit: cover;
  margin: 0;
  padding: 0;
`;

export const MaineWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const MaineWrapperItem = styled.li`
  margin: 0;
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[6]}px;
  }
`;

export const Img = styled.img`
  border-radius: ${p => p.theme.radii.round};
`;

export const Text = styled.h2`
margin: 0 0 8px 0;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: line-height: ${p => p.theme.lineHeights.heading};
`;

export const Svg = styled.p`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${p => p.theme.colors.bookMarkSwg};
`;

export const Duration = styled.p`
  position: absolute;
  bottom: 24px;
  right: 16px;
  margin: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  color: ${p => p.theme.colors.secondaryTextcolor};
`;

export const TextStyle = styled.p`
  margin: 0;
  align-items: center;
  margin-left: ${p => p.theme.space[3]}px;
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }

  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.secondaryTextcolor};
`;
