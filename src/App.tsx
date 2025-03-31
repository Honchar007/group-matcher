import React, { useState } from 'react';

// components
import GroupMemberCard from './components/GroupMemberCard';
import ParticipantList from './components/ParticipantList';

// utils
import createRandomPairs from './utils/create-groups';
import StyledButton from './components/StyledButton';
import GroupList from './components/GroupList';

interface Participant {
  name: string;
  group: string;
}

function App() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [groups, setGroups] = useState<Participant[][]>([]); // Состояние для групп

  const handleAddParticipant = (participant: Participant) => {
    setParticipants([...participants, participant]);
  };

  const handleGeneratePairs = () => {
    const generatedGroups = createRandomPairs(participants);
    setGroups(generatedGroups); // Устанавливаем сгенерированные группы в состояние
  };

  return (
    <div className="App">
      <header>
        <h1>Gruppen für Deutsch-Sprachpraxis</h1>
      </header>
      <GroupMemberCard onAdd={handleAddParticipant} />
      <ParticipantList participants={participants} />
      <StyledButton onClick={handleGeneratePairs} classNames="create-btn">
        So machen!
      </StyledButton>

      {/* Отображаем группы, если они есть */}
      {groups.length > 0 && <GroupList groups={groups} />}
    </div>
  );
}

export default App;
