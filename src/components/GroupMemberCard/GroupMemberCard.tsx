import { useState } from 'react';
import StyledSelect from '../StyledSelect';
import StyledInput from '../StyledInput';
import StyledButton from '../StyledButton';
import './GroupMemberCard.scss';

interface GroupMemberCardProps {
  onAdd: (participant: { name: string; group: string }) => void;
}

const GroupMemberCard: React.FC<GroupMemberCardProps> = ({
  onAdd,
}: GroupMemberCardProps) => {
  const [name, setName] = useState<string>('');
  const [group, setGroup] = useState<{ value: string; label: string }>({
    value: 'Vormittag',
    label: 'Vormittag',
  });

  const handleAdd = () => {
    if (name.trim()) {
      onAdd({ name, group: group.value });
      setName('');
    }
  };

  return (
    <div className="group-member-card">
      <h2 className="group-member-card__title">Teilnehmer hinzufügen</h2>
      <StyledInput
        id="name-member"
        label="Name"
        type="text"
        placeholder="Name eingeben"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <StyledSelect
        label="Gruppe"
        name="MemberName"
        value={group}
        onChange={(selectedOption: any) => setGroup(selectedOption)}
        options={[
          { value: 'Vormittag', label: 'Vormittag' },
          { value: 'Nachmittag', label: 'Nachmittag' },
        ]}
      />
      <StyledButton onClick={handleAdd}>Hinzufügen</StyledButton>
    </div>
  );
};

export default GroupMemberCard;
