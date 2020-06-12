const users = [];

export const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.room === room && user.name === name,
  );

  if (!name || !room) return { error: 'Username and room are required.' };
  if (existingUser) return { error: 'Username is taken.' };

  const user = { id, name, room };

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
