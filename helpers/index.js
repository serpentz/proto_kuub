import _ from 'lodash'

let names = {"GroupUsers": "additional"}

const toPlain = response => {
  const flattenDataValues = ({ dataValues }) =>
    _.mapValues(dataValues, value => (
      _.isArray(value) && _.isObject(value[0]) && _.isObject(value[0].dataValues)
        ? _.map(value, flattenDataValues)
        : _.isObject(value) && _.isObject(value.dataValues)
          ? flattenDataValues(value)
          : value
    ));

  return _.isArray(response) ? _.map(response, flattenDataValues) : flattenDataValues(response);
};

const replace = (obj) => {

  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      replace(obj[i]);
    }
  }
  else if (typeof obj === "object") {
    for (const key in obj) {
      const newKey = names[key] || key;
      obj[newKey] = obj[key];
      if (key !== newKey) {
        delete obj[key];
      }
      replace(obj[newKey]);
    }
  }

  return obj;
};

function format(data){
  return replace(toPlain(data))
}



export { toPlain, replace, format };
