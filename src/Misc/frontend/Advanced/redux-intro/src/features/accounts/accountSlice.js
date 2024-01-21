import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
}

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload
      state.isLoading = false
    },
    withdraw(state, action) {
      state.balance -= action.payload
    },
    requestLoan: {
      // Q. WTH is this ?
      // This is prepare method which has the same parameters as requestLoan(loanAmount, loanPurpose)
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        }
      },

      reducer(state, action) {
        if (state.loan > 0) return

        state.loan = action.payload.amount
        state.loanPurpose = action.payload.purpose
        state.balance = state.balance + action.payload.amount
      },
    },
    payLoan(state) {
      state.balance -= state.loan
      state.loan = 0
      state.loanPurpose = ''
    },
    convertingCurrency(state) {
      state.isLoading = true
    },
  },
})

//Note: we do not add 'deposit' since it is being export as part of a middleware below
export const { withdraw, requestLoan, payLoan } = accountSlice.actions

console.log('accountSlice: ' + JSON.stringify(accountSlice))

//Note - This is a middlware function. Hence we dont need to import dispatch
// Needs to match the name of the action.creator above
export function deposit(amount, currency) {
  if (currency === 'USD') return { type: 'account/deposit', payload: amount }

  // Yo this is the middlware
  return async function (dispatch, getState) {
    dispatch({ type: 'account/convertingCurrency' })

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    )
    const data = await res.json()
    const converted = data.rates.USD

    // We then dispatch here !!!!
    dispatch({ type: 'account/deposit', payload: converted })
  }
}

export default accountSlice.reducer

/*
export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      // LATER
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    case "account/convertingCurrency":
      return { ...state, isLoading: true };

    default:
      return state;
  }
}

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    dispatch({ type: "account/deposit", payload: converted });
  };
}

export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

export function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}

export function payLoan() {
  return { type: "account/payLoan" };
}
*/
