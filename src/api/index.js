let users = [
  {id: 1, name: 'Alice'},
  {id: 2, name: 'Beck'},
  {id: 3, name: 'Chris'},
];

let delay = 800

export const fetchUser = () => {
  console.log('api fetchUsers');
  return new Promise(resolve => {
    setTimeout(_=> resolve(users), delay)
  })
}

export const createUser = ({name}) => {
  console.log('api createUser', name)
  users.push({
    id: users[users.length - 1].id + 1,
    name
  })
  return Promise.resolve(users)
}

export const deleteUser = (id) => {
  console.log('api deleteUser', id);
  users = users.filter(u => u.id !== id)
  return Promise.resolve(users)
}

export const updateUser = ({id, name}) => {
  console.log('api updateUser', id, name);
  const user = users.filter(u => u.id === id)[0]
  if (!user) return Promise.reject(Error('no user'))
  user.name = name 
  return Promise.resolve(users);
}