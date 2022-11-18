import { BsCurrencyEuro } from 'react-icons/bs';
import { FormatEventDuration } from '../../Utils/FormatEventDuration';

export const RenderJobDetails = ({ respons, id }) => {
  const {
    name,
    title,
    address,
    email,
    phone,
    salary,
    benefits,
    location,
    description,
    employment_type,
    createdAt,
    updatedAt,
  } = respons;
  const EventDuration = FormatEventDuration(createdAt, updatedAt);
  return (
    <div>
      <div>
        <ul>
          <li>
            <h4>Job Details</h4>
          </li>
          <li>
            <p>Save to my list</p>
          </li>
          <li>Share</li>
        </ul>
        <button>Apply now</button>
        <ul key={id}>
          <li>
            <div>
              <h3>{title}</h3>
              <div>
                <BsCurrencyEuro />
                <p>{salary}</p>
                <p>Brutto, per year</p>
              </div>
              <p>Posted {EventDuration} ago</p>
              <p>{description}</p>
            </div>
          </li>
          <button>Apply now</button>
          <li>
            <h3>Additional info</h3>
            <p>Employment type</p>
            <div>
              {employment_type.map(e => (
                <>
                  <p>{e}</p>
                  <p>{e}</p>
                  <p>{e}</p>
                </>
              ))}
            </div>
            <h3>Benefits</h3>
            {benefits.map(e => (
              <>
                <p>{e}</p>
                <p>{e}</p>
              </>
            ))}
          </li>
        </ul>
      </div>
      <div>
        <ul key={id}>
          <li>
            <h4>{name}</h4>
            <p>{address}</p>
            <p>{phone}</p>
            <p>{email}</p>
          </li>
          <li>{location}</li>
        </ul>
      </div>
    </div>
  );
};
