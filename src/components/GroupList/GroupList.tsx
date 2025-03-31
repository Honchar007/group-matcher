import React from 'react';

// styles
import './GroupList.scss';

interface Participant {
  name: string;
  group: string;
}

interface GroupListProps {
  groups: Participant[][];
}

const GroupList: React.FC<GroupListProps> = ({ groups }) => {
  return (
    <div className="group-list">
      {groups.map((group, index) => (
        <div key={index} className="group">
          <h3>Group {index + 1}</h3>
          <ul>
            {group.map((participant, i) => (
              <li key={i}>
                {participant.name} ({participant.group})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GroupList;
