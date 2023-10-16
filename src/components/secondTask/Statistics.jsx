import css from './Statistics.module.css'
import {StatisticsItem} from './StatisticItem'


export function Statistics({ title, stats }) { 
    return (
        <section className={css.statistics }>
            {title && (
                <h2 className={css.title}>{title}</h2>
            )}

            <ul className={css.statList}>
                {stats.map(({label, percentage, id}) => {
                    return <StatisticsItem key={id} label={label} percentage={percentage} />
                })}
            </ul>
         </section>
    )
}



