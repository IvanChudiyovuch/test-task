import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { RenderJobDetails } from 'components/JobDetailed/RenderJobDetails';
import initialJob from '../components/job.json';
import Return from 'components/return/Return';

const JobDetails = () => {
  const { id } = useParams();
  const [result, setResult] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const getJobById = jobId => {
    return initialJob.find(job => job.id === jobId);
  };

  useEffect(() => {
    (async () => {
      const respons = await getJobById(id);
      setResult(respons);
    })();
  }, [id]);

  return (
    <>
      {result && (
        <div>
          {<RenderJobDetails id={id} respons={result} />}
          {<Return to={backLinkHref}>RETURN TO JOB BOARD</Return>}
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default JobDetails;
