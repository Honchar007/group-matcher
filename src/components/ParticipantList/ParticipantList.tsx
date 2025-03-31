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
  const morningParticipants = participants.filter((x) => x.group === 'Vormittag');
  const afternoonParticipants = participants.filter((x) => x.group === 'Nachmittag');

  return (
    <div className="participant-list-wrapper">
      <h2>Teilnehmerliste</h2>
      
      <div className="group-container">
        <div className="group">
          <h3>Vormittag ({morningParticipants.length})</h3>
          <div className="participant-list">
            {morningParticipants.map((p, index) => (
              <div className="participant-card" key={index}>
                {index + 1}. {p.name} - {p.group}
              </div>
            ))}
          </div>
        </div>

        <div className="group">
          <h3>Nachmittag ({afternoonParticipants.length})</h3>
          <div className="participant-list">
            {afternoonParticipants.map((p, index) => (
              <div className="participant-card" key={index}>
                {index + 1}. {p.name} - {p.group}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantList;
