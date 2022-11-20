import { Link } from 'react-router-dom';
import { CiBookmark } from 'react-icons/ci';
import { ImLocation2 } from 'react-icons/im';
import { FormatEventDuration } from '../../Utils/FormatEventDuration';

import {
  List,
  Item,
  MaineWrapper,
  MaineWrapperItem,
  Text,
  Img,
  Svg,
  Duration,
  TextStyle,
  Wrapper,
} from './RenderJobListItem.styled';

export const RenderJobListItem = ({
  id,
  name,
  title,
  address,
  pictures,
  createdAt,
  updatedAt,
}) => {
  const EventDuration = FormatEventDuration(createdAt, updatedAt);
  return (
    <>
      <List>
        <Item>
          <MaineWrapper>
            <MaineWrapperItem>
              <Img src={pictures[0]} alt={name} width="85" height="85" />
            </MaineWrapperItem>
            <MaineWrapperItem>
              <Link to={`${id}`}>
                <Text>{title}</Text>
              </Link>

              <TextStyle>Department name : {name}</TextStyle>
              <Wrapper>
                <ImLocation2 width="13" height="18" />
                <TextStyle>{address}</TextStyle>
              </Wrapper>
            </MaineWrapperItem>
          </MaineWrapper>
        </Item>
        <Item>
          <Svg>
            <CiBookmark size={32} />
          </Svg>
          <Duration>
            <TextStyle>Posted {EventDuration} ago</TextStyle>
          </Duration>
        </Item>
      </List>
    </>
  );
};
