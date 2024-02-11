const findTheOldest = function (people) {
  const old = people.reduce((oldest, current) => {
    if (oldest.yearOfDeath === undefined) oldest.yearOfDeath = new Date().getFullYear();
    if (current.yearOfDeath === undefined) current.yearOfDeath = new Date().getFullYear();
    const lifeOldest = oldest.yearOfDeath - oldest.yearOfBirth;
    const lifeCurrent = current.yearOfDeath - current.yearOfBirth;
    return (lifeOldest < lifeCurrent) ? current : oldest;
  }, people[0])
  return old;
};

// Do not edit below this line
module.exports = findTheOldest;
