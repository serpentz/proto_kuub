import { readFileSync } from "fs";
import path from "path";
import _ from 'lodash'

function getTypeDefs(filename) {
  return gql(
    readFileSync(path.join(process.cwd(), "resources", filename), "utf8")
  );
}

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

export { getTypeDefs, toPlain };
