import { BsCurrencyEuro } from 'react-icons/bs';
import { CiBookmark } from 'react-icons/ci';
import { HiShare } from 'react-icons/hi';
import { FormatEventDuration } from '../../Utils/FormatEventDuration';
import {
  MaineWrapper,
  HeaderWrapper,
  HeaderNavWrapper,
  HeaderMark,
  HeadText,
  Buttom,
  TitleWrapper,
  TitleWrapperText,
  TitleWrapperTextPrice,
  TitleWrapperTextPriceSecond,
  Duration,
  Text,
  ButtomEmploy,
  ButtomBenefits,
  TextTitle,
  AdditionalInfoWrapper,
  TextTitlesecond,
  LocationWrapper,
  ContainerMaineInfo,
  TextTitleLocation,
  TextLocation,
  Images,
} from './RenderJobDetailsItem.styled';
export const RenderJobDetailsItem = ({
  name,
  title,
  address,
  email,
  phone,
  salary,
  benefits,
  pictures,
  location,
  description,
  employment_type,
  createdAt,
  updatedAt,
}) => {
  console.log(pictures);
  const EventDuration = FormatEventDuration(createdAt, updatedAt);
  return (
    <MaineWrapper>
      <ContainerMaineInfo>
        <HeaderWrapper>
          <HeadText>Job Details</HeadText>
          <HeaderNavWrapper>
            <HeaderMark>
              <CiBookmark size={32} /> Save to my list
            </HeaderMark>

            <HeaderMark>
              <HiShare size={32} />
              Share
            </HeaderMark>
          </HeaderNavWrapper>
        </HeaderWrapper>
        <Buttom>Apply now</Buttom>

        <TitleWrapper>
          <TitleWrapperText>{title}</TitleWrapperText>
          <div>
            <TitleWrapperTextPrice>
              <BsCurrencyEuro />
              {salary}
            </TitleWrapperTextPrice>
            <TitleWrapperTextPriceSecond>
              Brutto, per year
            </TitleWrapperTextPriceSecond>
          </div>
        </TitleWrapper>
        <Duration>Posted {EventDuration} ago</Duration>
        <Text>{description}</Text>
        <Buttom>Apply now</Buttom>
        <AdditionalInfoWrapper>
          <TextTitle>Additional info</TextTitle>
          <TextTitlesecond>Employment type</TextTitlesecond>
          <div>
            {employment_type.map(e => (
              <>
                <ButtomEmploy>{e}</ButtomEmploy>
              </>
            ))}
          </div>
          <TextTitlesecond>Benefits</TextTitlesecond>
          {benefits.map(e => (
            <>
              <ButtomBenefits>{e}</ButtomBenefits>
            </>
          ))}
        </AdditionalInfoWrapper>
        <TextTitle>Attached images</TextTitle>
        {pictures.map(e => (
          <>
            <Images src={e} alt="" />
          </>
        ))}
      </ContainerMaineInfo>
      <LocationWrapper>
        <TextTitleLocation>Department name.</TextTitleLocation>
        <TextTitleLocation>{name}</TextTitleLocation>
        <TextLocation>{address}</TextLocation>
        <TextLocation>{phone}</TextLocation>
        <TextLocation>{email}</TextLocation>

        {/* <li>{location}</li> */}
      </LocationWrapper>
    </MaineWrapper>
  );
};
