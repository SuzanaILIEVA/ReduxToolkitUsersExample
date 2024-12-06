const compareNameSurname = (name, surname) => {
  return `${name} ${surname}`;
};

const getFirsLetterNameSurname = (name, surname) => {
  const nameLetter = name[0].charAt(0).toUpperCase();
  const surnameLetter = surname[0].charAt(0).toUpperCase();
  return `${nameLetter}${surnameLetter}`;
};

const getRandomColor = () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;

  return randomColor;
};

export {compareNameSurname, getFirsLetterNameSurname, getRandomColor};
