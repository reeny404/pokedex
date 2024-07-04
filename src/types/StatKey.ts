interface KeyMap {
  [key: string]: string;
}

const statKey: KeyMap = {
  hp: "체력",
  speed: "속도",
  attack: "물리공격",
  defense: "물리방어",
  "special-attack": "특수공격",
  "special-defense": "특수방어",
};

export const translateStatKey = (key: string): string => {
  const str = statKey[key];
  return str ?? key;
};