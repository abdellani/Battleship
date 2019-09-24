let Ship = (size) => {
  let fields = []
  for (let i = 0; i < size; i += 1) {
    fields.push(0)
  }
  let length = () => {
    return size;
  }
  let hit = (field) => {
    if (field > size || fields[field] === 1) {
      return false
    }
    fields[field] = 1;
    return true;
  }
  const getFields = () => {
    return fields
  }
  let isSunk = () => {
    let result = fields.some((x) => {
      if (x === 0) {
        return true;
      }
    })
    return !result;
  }
  return {
    length,
    hit,
    isSunk,
    getFields
  }
}

export default  Ship ;