export const selectContacts = state => {
  return {
    contacts: state.contacts.contacts,
    isLoading: state.contacts.isLoading,
    error: state.contacts.error,
  };
};
