import { connect } from 'react-redux'

function formatCurrency(value) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(value)
}

function BalanceDisplay({ balance }) {
  return <div className='balance'>{formatCurrency(balance)}</div>
}

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  }
}

// Note: 'connect' is the OLD Way to connecting redux to react. Should not use this way anymore
// This was before there was hook available
export default connect(mapStateToProps)(BalanceDisplay)
