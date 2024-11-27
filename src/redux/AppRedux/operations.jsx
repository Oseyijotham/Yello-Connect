import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

export const openModal = createAsyncThunk('modal/open', async (_, thunkAPI) => {
  return true;
});

export const closeModal = createAsyncThunk(
  'modal/close',
  async (_, thunkAPI) => {
    console.log("Now");
    return false;
  }
);

export const clearModal = createAsyncThunk(
  'modal/clear',
  async (_, thunkAPI) => {
    return false;
  }
);

export const fetchContactById = createAsyncThunk(
  'contacts/fetchById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/contacts/${id}`);
      //console.log (response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const retrieveApiKey = createAsyncThunk(
  'contacts/retrieveKey',
  async (_, thunkAPI) => {
    Notiflix.Loading.pulse('Loading data, please wait...', {
      svgColor: '#FFB8CA',
      fontFamily: 'DM Sans',
    });
    try {
      const res = await axios.get('/contacts/retrieve');
      //console.log(res.data);
      Notiflix.Loading.remove();
      return res.data;
    } catch (error) {
      Notiflix.Loading.remove();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        //console.log (response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);



export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, thunkAPI) => {
    try {
      const response = await axios.post(`/contacts/`, { name, phone });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);



export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (taskId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${taskId}`);
      const res = await axios.get('/contacts');
      const state = thunkAPI.getState();
      const selectedContact = state.contacts.contacts.selectedContact;
      //const newContacts = res.data;
      //console.log(newContacts);
       //const exist = newContacts.find(contact => contact._id === taskId);
    
    if (selectedContact._id === taskId) {
      thunkAPI.dispatch(closeModal());
    }
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);          

                                          