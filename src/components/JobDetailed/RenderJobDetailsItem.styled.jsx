import styled from '@emotion/styled';

export const MaineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin: 0 100px;
  padding: 0;
`;

export const ContainerMaineInfo = styled.div`
  margin: 0;
  padding: 20px;
  margin-right: ${p => p.theme.space[8]}px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 39px 0;
  padding: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const HeaderNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  font-family: ${p => p.theme.fonts.body};

  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.mainText};
`;

export const HeaderMark = styled.p`
  margin: 0;
  padding: 0;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};

  margin-right: 24px;
`;

export const HeadText = styled.h4`
  margin: 0;
  padding: 0;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
`;

export const Buttom = styled.button`
  padding: 18px 30px;
  background-color: ${p => p.theme.colors.backgroundButtom};
  border-radius: ${p => p.theme.radii.normal};
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-alight: centr;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-top: ${p => p.theme.space[6]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  padding: 0;
`;

export const TitleWrapperText = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.mainText};
`;

export const TitleWrapperTextPrice = styled.p`
  width: 200px;
  margin: 0;
  padding: 0;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.mainText};
`;

export const TitleWrapperTextPriceSecond = styled.p`
  margin: 0;
  padding: 0;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.mainText};
`;

export const Duration = styled.p`
  margin: 0;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.mainText};
`;

export const Text = styled.p`
  margin: 0;
  margin-bottom: ${p => p.theme.space[6]}px;
  padding: 0;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.mainText};
`;

export const ButtomEmploy = styled.button`
  width: 222px;
  height: 49px;
  padding: 17px auto;
  background-color: ${p => p.theme.colors.backgroundButtomEmploy};
  border-radius: ${p => p.theme.radii.normal};
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-alight: centr;
  color: ${p => p.theme.colors.mainText};
  margin-bottom: ${p => p.theme.space[5]}px;
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }
`;

export const ButtomBenefits = styled.button`
  width: 222px;
  height: 49px;
  padding: 17px auto;
  background-color: #ffe600;
  border-radius: ${p => p.theme.radii.normal};
  border: 1px solid #ffcf00;
  cursor: pointer;
  text-alight: centr;
  color: #988b49;
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }
`;

export const TextTitle = styled.h3`
  margin: 0;
  padding: 0;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const AdditionalInfoWrapper = styled.div`
  margin-top: ${p => p.theme.space[7]}px;
  margin-bottom: ${p => p.theme.space[7]}px;
`;

export const TextTitlesecond = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.mainText};
`;

export const LocationWrapper = styled.div`
  width: 100%;
  padding: 62px 31px;
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.white};
  background-color: #202336;
  flex-grow: 1;
`;

export const TextTitleLocation = styled.h4`
  margin: 0;
  padding: 0;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const TextLocation = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
`;

export const Images = styled.img`
  width: 200px;
  height: 116px;
  margin-top: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }
`;
