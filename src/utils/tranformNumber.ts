export const transformNumber = (value: string, replaceCaracter: string) => {
  const regex = new RegExp(`\\${replaceCaracter}`, 'g');
  const number = parseInt(value.replace(regex, ''));

  return number;
}