let users = [
  {id: 1, name: 'Alice'},
  {id: 2, name: 'Beck'},
  {id: 3, name: 'Chris'},
];

let delay = 300

export const fetchUser = () => {
  console.log('api fetchUsers');
  return new Promise(resolve => {
    setTimeout(_=> resolve(users), delay)
  })
}

export const createUser = ({name}) => {
  console.log('api createUser', name)
  return new Promise(resolve => {
    users.push({
      id: users[users.length - 1].id + 1,
      name
    })
    setTimeout(_=>resolve(users), delay) 
  })
}

export const deleteUser = ({id}) => {
  return new Promise(resolve => {
    users = users.filter(u => u.id !== id)
    setTimeout(_=> resolve(users), delay)
  })
  
}

export const updateUser = ({id, name}) => {
  console.log('api updateUser', id, name);
  return new Promise(resolve => {
    const user = users.filter(u => u.id === id)[0]
    if (!user) return Promise.reject(Error('no user'))
    user.name = name 
    setTimeout(_=> resolve(users), delay)
  })
}