
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  openModal,
  closeModal,
  fetchContactById,
} from './operations';

const handlePending = state => {
  state.contacts.isLoading = true;
};

/*const handleKeyPending = state => {
  state.contacts.isKeyLoading = true;
  state.contacts.error = null;
};

const handleKeyRejected = (state, action) => {
  state.contacts.isKeyLoading = false;
  state.contacts.error = action.payload;
};*/

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      isKeyLoading: false,
      error: null,
      openMyModal: false,
      selectedContact: {},
      isSlideLoading: false,
      isSlideError:false,
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
        //console.log(action.payload);
        //myContacts.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        /*state.contacts.isLoading = false;
        state.contacts.error = null;
        const index = state.contacts.items.findIndex(
          item => item._id === action.payload
        );
        state.contacts.items.splice(index, 1);*/
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(openModal.fulfilled, (state, action) => {
        state.contacts.openMyModal = action.payload;
      })

      .addCase(closeModal.fulfilled, (state, action) => {
        state.contacts.openMyModal = action.payload;
        state.contacts.selectedContact = {};
      })
      /*.addCase(fetchContactById.fulfilled, (state, action) => {
        const myContact = myContacts.find(contact => {
          return contact._id === action.payload;
        });
        state.contacts.selectedContact = myContact;
      });*/
      .addCase(fetchContactById.pending, (state) => {
        state.contacts.isSlideLoading = true;
      })
      .addCase(fetchContactById.fulfilled, (state, action) => {
        state.contacts.selectedContact = action.payload;
        state.contacts.isSlideLoading = false;
      })
      .addCase(fetchContactById.rejected, (state, action) => {
        state.contacts.isSlideLoading = false;
        state.contacts.isSlideError = action.payload;
      });
  },
});



export const contactsReducer = contactsSlice.reducer;