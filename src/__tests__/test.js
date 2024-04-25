import sortCharactersByHealth from '../index';

test('heroes already sorted', () => {
  const heroes = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const heroesSorted = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sortCharactersByHealth(heroes)).toEqual(heroesSorted);
});

test('heroes not sorted', () => {
  const heroes = [
    { name: 'маг', health: 10 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 50 },
  ];

  const heroesSorted = [
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 50 },
    { name: 'маг', health: 10 },
  ];

  expect(sortCharactersByHealth(heroes)).toEqual(heroesSorted);
});
