import { useState } from 'react';

import initialJob from '../components/job.json';
import { RenderJobList } from '../components/RenderJobList/RenderJobList';

const Jobs = () => {
  const [job] = useState(initialJob);

  return (
    <div>
      <RenderJobList results={job} />
    </div>
  );
};

export default Jobs;
