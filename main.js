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

  //   I'm committing this for reference because it works, technically.
  //   However the generated string is an usable string of non-English
  //   characters.
  
  //   const enc = new TextEncoder();
  //   const encoded = enc.encode(words.join(","));

  //   const key = await crypto.subtle.generateKey(
  //     {
  //       name: "RSA-OAEP",
  //       modulusLength: 2048, //can be 1024, 2048, or 4096
  //       publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
  //       hash: { name: "SHA-256" }, //can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
  //     },
  //     true, //whether the key is extractable (i.e. can be used in exportKey)
  //     ["encrypt", "decrypt"] //must be ["encrypt", "decrypt"] or ["wrapKey", "unwrapKey"]
  //   );

  //   const encrypted = await window.crypto.subtle.encrypt(
  //     {
  //       name: "RSA-OAEP",
  //     },
  //     key.publicKey,
  //     encoded
  //   );

  //   function ab2str(buf) {
  //     return String.fromCharCode.apply(null, new Uint16Array(buf));
  //   }
  //   function str2ab(str) {
  //     var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
  //     var bufView = new Uint16Array(buf);
  //     for (var i = 0, strLen = str.length; i < strLen; i++) {
  //       bufView[i] = str.charCodeAt(i);
  //     }
  //     return buf;
  //   }

  //   const string = ab2str(encrypted);

  //   console.log("string", string);

  //   const decrypted = await window.crypto.subtle.decrypt(
  //     {
  //       name: "RSA-OAEP",
  //     },
  //     key.privateKey,
  //     str2ab(string)
  //     // encrypted
  //   );

  //   const dec = new TextDecoder();
  //   console.log(dec.decode(decrypted));
})();
