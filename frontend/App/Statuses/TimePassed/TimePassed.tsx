import { ReactElement, useEffect, useState } from 'react';

type Props = {
    since: Date;
};

const getTimePassed = (since: Date): string => {
    const timePassed = Math.round((new Date().getTime() - new Date(since).getTime()) / 1000);

    if (timePassed < 10) {
        return 'just now';
    }

    if (timePassed < 60) {
        return 'last minute';
    }

    if (timePassed < 60 * 60) {
        const minutes = Math.floor(timePassed / 60);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }

    if (timePassed < 60 * 60 * 24) {
        const hours = Math.floor(timePassed / (60 * 60));
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }

    const days = Math.floor(timePassed / (60 * 60 * 24));
    return `${days} day${days > 1 ? 's' : ''} ago`;
};

const TimePassed = ({ since }: Props): ReactElement => {
    const [timePassed, setTimePassed] = useState(getTimePassed(since));

    useEffect(() => {
        const interval = setInterval(() => setTimePassed(getTimePassed(since)), 5000);

        return () => clearInterval(interval);
    });

    return <>{timePassed}</>;
};

export default TimePassed;
