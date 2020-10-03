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

function encrypt(array) {
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

function decrypt(array) {
  return array.split("-").map((word) => {
    let encoded = "";

    for (let i = 0; i < word.length; i++) {
      encoded += SECRET_TO_LETTER[word.charAt(i)];
    }

    return encoded;
  });
}

(async () => {
  const words = ["cat", "dog", "monkey"];

  const encrypted = encrypt(words);
  const decrypted = decrypt(encrypted);

  console.log({ encrypted, decrypted });

  const usp = new URLSearchParams(window.location.search);
  const code = usp.get("code");

  console.log(decrypt(code));
})();
