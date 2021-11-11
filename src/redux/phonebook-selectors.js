export const getFilter = (state) => state.contacts.filter;
export const getContacts = (state) => state.contacts.items;

export const getVisibleContacts = (state) => {
  const filter = getFilter(state);
  const contacts = getContacts(state);
  console.log(contacts);
  const normalizedFilter = filter.toLowerCase();
  console.log(filter);

  return contacts.filter((contact) => {
    // console.log(contact.name.name);
    return contact.name.name.toLowerCase().includes(normalizedFilter);
  });
};
