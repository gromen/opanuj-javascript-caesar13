function caesar13(text) {
  const isOnlyAlphabetLetters = new RegExp('^[A-Za-z]+$');

  if (text.trim() === '') throw new Error('Brak podanego tesktu do zaszyfrowania. Proszę podać tekst.');
  if (!isOnlyAlphabetLetters.test(text)) throw new Error('Wartość argumentu musi być ciągiem znaków');

  const ALPHABET = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const textInput = text.toLowerCase();
  const output = [];
  let targetIndex = 0;

  for (const character of textInput) {
    targetIndex = ALPHABET.indexOf(character);
    output.push(ALPHABET[targetIndex + 13]);
  }

  return output.join('').toUpperCase();
}

caesar13(`PRZEPROGRAMOWANI`);
