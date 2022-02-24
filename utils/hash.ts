const hash = (str: string) => {
  let hashVal = 0;
  for (let i = 0; i < str.length; i++) {
    hashVal = (hashVal << 5) - hashVal + str.charCodeAt(i);
  }
  return Math.abs(hashVal & ~(0 << 31)).toString(16);
};

export default hash;
