const objectId = (value, helpers) => {
  if (!value.match(/^[0-9a-fA-F]{24}$/)) {
    return helpers.message('Invalid ID');
  }
  return value;
};

const password = (value, helpers) => {
  if (value.length < 8) {
    return helpers.message('password must be at least 8 characters');
  }
  if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
    return helpers.message('password must contain at least 1 letter and 1 number');
  }
  return value;
};

const laneType = (value, helpers) => {
  if (!['EX', 'EN'].includes(value)) {
    return helpers.message('Please Provide Lane Type like:- EX/EN');
  }
  return value;
};
const laneDirection = (value, helpers) => {
  if (!['LHS', 'RHS'].includes(value)) {
    return helpers.message('Please Provide laneDirection Type:LHS/RHS ');
  }
  return value;
};

module.exports = {
  objectId,
  password,
  laneType,
  laneDirection,
};
