import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fullName: '',
  nationalID: '',
  createdAt: '',
}

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    createCustomer: {
      // prepare the data
      // Why do we do this ? Because reducers should be vanilla and NOT contain
      // Any async calls, timers, converts, etc
      // it should simply update the state+
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        }
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName
        state.nationalID = action.payload.nationalID
        state.createdAt = action.payload.createdAt
      },
    },
    updateName(state, action) {
      state.fullName = action.payload
    },
  },
})

console.log('customerSlice: ' + JSON.stringify(customerSlice))
export const { createCustomer, updateName } = customerSlice.actions

export default customerSlice.reducer

// This was the old way !!!!!!
// Notice we had no reducer, createCustomer and updateName in the new version
// This is now possible due to RTK !!!

/* 
export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}
*/
