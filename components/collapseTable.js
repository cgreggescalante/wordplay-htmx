customElements.define('collapse-table', class extends HTMLElement {
  constructor() {
    super();

    const root = this.attachShadow({mode: 'closed'});
    root.innerHTML = `
      <style>
        .collapseTableTitle {
          margin: 0;
          padding: 0;
          font-size: 1.2em;
        }

        .collapseTable {
          borderRadius: 8px;
          border: 1px solid #e0e0e0;
          margin: 8px;
          padding: 8px;
          max-width: fit-content;
          display: grid;
          place-items: center;
          justify-content: center;
        }

        .collapseTable table {
          border-collapse: collapse;
        }

        .collapseTable th {
          padding: 5px;
        }

        .collapseTable td {
          padding: 3px;
        }
        
        .collapseTable tr:not(:last-child) td:not(:first-child) {
          border-top: 1px solid rgba(255, 255, 255, 0.5);
          border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        }
        
        .collapseTable th:not(:first-child):not(:last-child) {
          border-right: 1px solid rgba(255, 255, 255, 0.5);
        }
        
        .collapseTable td:not(:last-child):not(:first-child) {
          border-left: 1px solid rgba(255, 255, 255, 0.5);
          border-right: 1px solid rgba(255, 255, 255, 0.5);
        }
        
        .collapseControl {
          color: #747bff;
        }
      </style>
      
      <div className={"collapseTable"}>
      {title && <h3 className={"collapseTableTitle"}>{title}</h3>}
      <table>
        <thead>
          <tr>
            <th className={"collapseControl"} onClick={() => setOpen(!open)}>
              {open ? "⮟" : "➤"}
            </th>
            {header}
          </tr>
        </thead>
        <tbody>
          {open &&
            rows.map((row) => (
              <tr>
                <td />
                {row}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    `;
  }
});