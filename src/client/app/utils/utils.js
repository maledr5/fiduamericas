
function isNaNSafeForString(value) {
    if (typeof value === "number" && isNaN(value)) {
      return true;
    }
    return false;
}

const areValuesInserted = (values) => {
    for (let i = 0; i < values.length; i++) {
      var value = values[i];
      if (
        value === 0 ||
        value === undefined ||
        value === "" ||
        value === "0" ||
        isNaNSafeForString(value)
      ) {
        return false;
      }
    }
    return true;
}

const round = (number) => {
    number = parseFloat(number)
    return number.toFixed(2)
}

export {areValuesInserted}
export {round}