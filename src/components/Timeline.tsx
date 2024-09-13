import React, { useState } from 'react';
import Icon from './Icon';
import Card from './Card';
import Button from './Button';

interface MediaProps{
  url: string;  
}

// interface Event {
//   date: string;
//   title: string;
//   description: string;
//   media: MediaProps[];
// }

interface TimelineEventProps {
  date: string;
  title: string;
  description: string;
  media: MediaProps;
  onEdit: () => void;
  onDelete: () => void;

}

const Timeline: React.FC<TimelineEventProps> = ({ date, title, description, media, onEdit, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-8 animate-fadeIn">
      <div className="flex items-center">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center">
          <Icon name="heart" />
        </div>
        <div className="ml-4 flex-grow">
          <Card>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-pink-600 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                {title}
              </h3>
              <p className="text-sm text-gray-500">{date}</p>
              {isExpanded && (
                <>
                  <p className="mt-2 text-gray-700">{description}</p>
                  {media && (
                    <div className="mt-2">
                      <img src={media.url} alt={title} className="w-full h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105" />
                    </div>
                  )}
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button variant="outline" icon={<Icon name="edit" />} onClick={onEdit}>
                      Editar
                    </Button>
                    <Button variant="outline" icon={<Icon name="trash" />} onClick={onDelete}>
                      Deletar
                    </Button>
                  </div>
                </>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Timeline;