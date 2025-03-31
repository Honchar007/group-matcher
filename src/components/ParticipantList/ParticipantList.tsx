import React from 'react';
import './ParticipantList.scss';

interface Participant {
  name: string;
  group: string;
}

interface ParticipantListProps {
  participants: Participant[];
}

const ParticipantList: React.FC<ParticipantListProps> = ({ participants }) => {
  return (
    <div className="participant-list-wrapper">
      <h2>Teilnehmerliste</h2>
      <div className="participant-list">
        {participants.map((p, index) => (
          <div className="participant-card" key={index}>
            {index + 1}. {p.name} - {p.group}
          </div>
        ))}
      </div>

      <h2>
        Teilnehmer des Vormittag -{' '}
        {participants.filter((x) => x.group === 'Vormittag').length}
      </h2>
      <h2>
        Teilnehmer des Nachmittag -{' '}
        {participants.filter((x) => x.group === 'Nachmittag').length}
      </h2>
    </div>
  );
};

export default ParticipantList;
