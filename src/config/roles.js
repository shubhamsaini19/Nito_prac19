const allRoles = {
  user: [],
  admin: ['getUsers', 'manageUsers'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};


// const roles = ['buyer', 'supplier', 'admin'];

// const roleRights = new Map();
// roleRights.set(roles[0], []);
// roleRights.set(roles[1], []);
// roleRights.set(roles[2], ['getUsers', 'manageUsers']);

// module.exports = {
//   roles,
//   roleRights,
// };
