import { RenderJobDetailsItem } from './RenderJobDetailsItem';
import { List } from './RenderJobDetails.styled';

export const RenderJobDetails = ({ respons, id }) => {
  const {
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
  } = respons;

  return (
    <>
      <List key={id}>
        <li>
          <RenderJobDetailsItem
            name={name}
            title={title}
            address={address}
            email={email}
            phone={phone}
            salary={salary}
            benefits={benefits}
            location={location}
            description={description}
            employment_type={employment_type}
            createdAt={createdAt}
            updatedAt={updatedAt}
            pictures={pictures}
          />
        </li>
      </List>
    </>
  );
};
