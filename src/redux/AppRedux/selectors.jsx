export const selectContacts = state => state.contacts.contacts.items;

export const selectContactsFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.contacts.isLoading;

export const selectIsKeyLoading = state => state.contacts.contacts.isKeyLoading;

export const selectError = state => state.contacts.contacts.error;
