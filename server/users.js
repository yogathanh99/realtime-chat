const users = [];

export const addUser = ({ id, name, room }) => {
  const nameLower = name.trim().toLowerCase();
  const roomLower = room.trim().toLowerCase();

  const isExistUser = users.find(
    (user) => user.name === name && user.room === room,
  );

  if (isExistUser) return { error: 'User exist in this room' };
  const user = { id, user, room };
  users.push(user);

  return { user };
};

export const removeUser = (id) => {
  const indexUser = users.findIndex((user) => user.id === id);
  users = [...users.slice(0, index), ...users.slice(index + 1)];

  return users;
};

export const getUser = (id) => users.find((user) => user.id === id);

export const getUserInRoom = (room) => users.find((user) => user.room === room);
