const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // случайный индекс
    [array[i], array[j]] = [array[j], array[i]]; // меняем элементы местами
  }
};

const createRandomPairs = (participants: { name: string; group: string }[]) => {
  if (participants.length === 1) {
    // Возвращаем участника как одиночную группу
    return [[...participants]];
  }

  // Перемешиваем участников для случайности
  shuffleArray(participants);

  // Группируем участников по группам
  const groupMap: { [key: string]: { name: string; group: string }[] } = {};

  participants.forEach((participant) => {
    if (!groupMap[participant.group]) {
      groupMap[participant.group] = [];
    }
    groupMap[participant.group].push(participant);
  });

  const pairs: { name: string; group: string }[][] = [];
  const groups = Object.keys(groupMap);

  // Сначала формируем пары из разных групп
  while (groups.length > 1) {
    const group1 = groups[0];
    const group2 = groups[1];

    // Берем одного участника из каждой группы
    const participantFromGroup1 = groupMap[group1].pop();
    const participantFromGroup2 = groupMap[group2].pop();

    // Если участники есть в обеих группах, формируем пару
    if (participantFromGroup1 && participantFromGroup2) {
      pairs.push([participantFromGroup1, participantFromGroup2]);
    }

    // Если в группе больше участников, оставляем её в очереди
    if (groupMap[group1].length === 0) {
      groups.shift();
    }
    if (groupMap[group2].length === 0) {
      groups.shift();
    }
  }

  // Проверяем, если после формирования пар остаются участники
  const remainingParticipants = participants.filter(
    (p) => !pairs.flat().some((pair) => pair.name === p.name)
  );

  // Теперь пытаемся составить пары для оставшихся участников
  // Если количество участников в группе нечетное, добавляем третьего
  while (remainingParticipants.length > 1) {
    const participant1 = remainingParticipants.pop();
    const participant2 = remainingParticipants.pop();
    if (participant1 && participant2) {
      pairs.push([participant1, participant2]);
    }
  }

  // Если остался один участник, добавляем его в пару с другими
  if (remainingParticipants.length === 1) {
    pairs[pairs.length - 1].push(remainingParticipants[0]);
  }

  return pairs;
};

export default createRandomPairs;
