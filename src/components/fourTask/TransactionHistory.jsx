import css from './TransactionHistory.module.css'
import { TransactionHistoryItem } from "./TransactionHistoryItem";

export function TransactionHistory({ items }) {
    return (<table className={ css.transactionHistory }>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
        </thead>
        <tbody>
            {items.map(({  type, amount, currency, id }) => {
                    return <TransactionHistoryItem key={id} type={type} amount={amount} currency={currency}  />
                })}
        </tbody>
</table>)
}