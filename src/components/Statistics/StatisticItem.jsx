import css from './Statistics.module.css'


export function StatisticsItem({ label, percentage }) { 
    return (
        
        <li className={css.item }>
      <span className={css.label }> {label}</span>
      <span className={css.percentage }>{percentage}</span>
    </li>
    )
}
