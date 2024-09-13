import { FC } from 'react';

interface EventProps {
  event: { date: string, title: string, description: string, media: string[] };
}

const Event: FC<EventProps> = ({ event }) => {
  return (
    <div className="event">
      <h2>{event.title}</h2>
      <p>{event.date}</p>
      <p>{event.description}</p>
      {event.media.map((src, index) => (
        <img key={index} src={src} alt={`Event Media ${index}`} />
      ))}
    </div>
  );
};

export default Event;
