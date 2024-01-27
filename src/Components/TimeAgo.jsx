import React, { useEffect, useState } from 'react';
import moment from 'moment';

const TimeAgo = ({ date }) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const calculateTimeAgo = () => {
      const now = moment();
      const then = moment(date);
      const secondsDiff = now.diff(then, 'seconds');

      if (secondsDiff < 60) {
        setTimeAgo(`${secondsDiff}s`);
      } else if (secondsDiff < 3600) {
        setTimeAgo(`${Math.floor(secondsDiff / 60)}min`);
      } else if (secondsDiff < 86400) {
        setTimeAgo(`${Math.floor(secondsDiff / 3600)}h`);
      } else if (secondsDiff < 604800) {
        setTimeAgo(`${Math.floor(secondsDiff / 86400)}days`);
      } else {
        setTimeAgo(`${Math.floor(secondsDiff / 604800)}wk`);
      }
    };

    calculateTimeAgo(); // Calculate on mount

    // Update the time every seconds
    const interval = setInterval(calculateTimeAgo, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return <span>{timeAgo}</span>;
};

export default TimeAgo;
