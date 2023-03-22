const caesar13 = (text) => {
  const isOnlyAlphabetLetters = new RegExp('^[A-Za-z]+$');

  if (text.trim() === '')
    throw new Error('Brak podanego tesktu do zaszyfrowania. Proszę podać tekst w argumencie funkcji.');
  if (!isOnlyAlphabetLetters.test(text))
    throw new Error('Wartość argumentu musi być ciągiem znaków (bez polskich znaków)');

  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  const ALPHABET_CIPHER = 'nopqrstuvwxyzabcdefghijklm';
  const textInput = [...text.toLowerCase()];
  const output = [];
  let targetIndex = 0;

  for (const character of textInput) {
    targetIndex = ALPHABET.indexOf(character);
    output.push(ALPHABET_CIPHER[targetIndex]);
  }

  return output.join('').toUpperCase();
};

export default caesar13;
