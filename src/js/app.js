export default function extractSpecial(obj) {
  const arraySpecial = [];

  obj.special.forEach((hit) => {
    let {
      // eslint-disable-next-line prefer-const
      id, name, icon, description,
    } = hit;
    if (description === undefined) {
      description = 'Описание недоступно';
    }
    arraySpecial.push({
      id, name, icon, description,
    });
  });
  return arraySpecial;
}
