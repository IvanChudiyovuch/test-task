import formatDistanceStrict from 'date-fns/formatDistanceStrict';

export const FormatEventDuration = (createdAt, updatedAt) => {
  return formatDistanceStrict(Date.parse(createdAt), Date.parse(updatedAt));
};
