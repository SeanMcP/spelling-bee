// TODO: Find a better approach. This system won't work
// with non-English characters.

const LETTER_TO_SECRET = {
  a: "Q",
  b: "q",
  c: "P",
  d: "p",
  e: "N",
  f: "n",
  g: "M",
  h: "m",
  i: "L",
  j: "l",
  k: "K",
  l: "k",
  m: "J",
  n: "j",
  o: "H",
  p: "h",
  q: "G",
  r: "g",
  s: "F",
  t: "f",
  u: "D",
  v: "d",
  w: "C",
  x: "c",
  y: "B",
  z: "b",
};

const SECRET_TO_LETTER = Object.entries(LETTER_TO_SECRET).reduce(
  (acc, [letter, secret]) => {
    acc[secret] = letter;
    return acc;
  },
  {}
);

export function encrypt(array) {
  return array
    .map((word) => {
      let encoded = "";

      for (let i = 0; i < word.length; i++) {
        encoded += LETTER_TO_SECRET[word.charAt(i)];
      }
      return encoded;
    })
    .join("-");
}

export function decrypt(array) {
  return array.split("-").map((word) => {
    let encoded = "";

    for (let i = 0; i < word.length; i++) {
      encoded += SECRET_TO_LETTER[word.charAt(i)];
    }

    return encoded;
  });
}
