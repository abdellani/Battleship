const Ship = (size) => {
  const fields = [];
  for (let i = 0; i < size; i += 1) {
    fields.push(0);
  }
  const length = () => size;
  const hit = (field) => {
    if (field > size || fields[field] === 1) {
      return false;
    }
    fields[field] = 1;
    return true;
  };
  const getFields = () => fields;
  const isSunk = () => {
    const result = fields.some((x) => {
      if (x === 0) {
        return true;
      }
      return false;
    });
    return !result;
  };
  return {
    length,
    hit,
    isSunk,
    getFields,
  };
};

export default Ship;
