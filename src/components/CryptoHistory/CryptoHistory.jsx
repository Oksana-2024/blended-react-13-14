import { format } from 'date-fns';
import style from './CryptoHistory.module.css';

const CryptoHistory = ({transaction}) => {
  
  
  return (

    <div>
      <h2>CryptoHistory</h2>
      <table className={style.table}>
  <thead className={style.thead}>
    <tr>
      <th className={style.th}>№</th>
      <th className={style.th}>PRICE</th>
      <th className={style.th}>AMOUNT</th>
      <th className={style.th}>DATE</th>
    </tr>
  </thead>

  <tbody>
    {transaction.map((item, index) =>  <tr key={item.id} className={style.tr}>
      <td className={style.td}>{index + 1}</td>
      <td className={style.td}>{item.price}</td>
      <td className={style.td}>{item.amount}</td>
      <td className={style.td}>{format(item.date, "Pp")}</td>
    </tr>)}
    </tbody>
</table>
    </div>
  );
};

export default CryptoHistory;
