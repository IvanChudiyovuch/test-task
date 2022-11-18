import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { RenderJobDetails } from 'components/JobDetailed/RenderJobDetails';

const JobDetails = () => {
  const { id } = useParams();
  const [respons] = useState(null);
  return (
    <>
      <RenderJobDetails id={id} respons={respons} />
    </>
  );
};

export default JobDetails;
