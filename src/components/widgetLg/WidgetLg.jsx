import "./widgetLg.css";
import id29 from './images/id29.jpg'
import id30 from './images/id30.jpg' 
import id31 from './images/id31.jpg'
import id32 from './images/id32.jpg'

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={id29}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={id30}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Sue barakat</span>
          </td>
          <td className="widgetLgDate">4 Jun 2021</td>
          <td className="widgetLgAmount">$250.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={id31}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Samia Bahmad</span>
          </td>
          <td className="widgetLgDate">16 Jun 2021</td>
          <td className="widgetLgAmount">$450.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={id32}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Samira Malak</span>
          </td>
          <td className="widgetLgDate">7 Jun 2021</td>
          <td className="widgetLgAmount">$500.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
