import { useParams } from 'react-router-dom';

import { RenderJobDetails } from 'components/JobDetailed/RenderJobDetails';
import initialJob from '../components/job.json';

const JobDetails = () => {
  const { id } = useParams();

  const getJobById = jobId => {
    return initialJob.find(job => job.id === jobId);
  };

  const respons = getJobById(id);

  return (
    <>
      <RenderJobDetails id={id} respons={respons} />
    </>
  );
};

export default JobDetails;
