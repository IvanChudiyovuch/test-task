import PropTypes from 'prop-types';
import { RenderJobListItem } from './RenderJobListItem';
import { Container, List, ListItem } from './RenderJobList.styled';

export const RenderJobList = ({ results }) => {
  return (
    <Container>
      <List>
        {results.map(
          ({ id, name, title, address, pictures, createdAt, updatedAt }) => (
            <ListItem key={id}>
              <RenderJobListItem
                id={id}
                name={name}
                title={title}
                address={address}
                pictures={pictures}
                createdAt={createdAt}
                updatedAt={updatedAt}
              />
            </ListItem>
          )
        )}
      </List>
    </Container>
  );
};

RenderJobList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      pictures: PropTypes.array.isRequired,
    })
  ).isRequired,
};
