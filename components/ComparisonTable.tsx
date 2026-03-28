type ComparisonTableProps = {
  headers: string[];
  rows: string[][];
  caption?: string;
};

export default function ComparisonTable({ headers, rows, caption }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-soft">
      <table className="min-w-full text-left text-sm">
        {caption ? (
          <caption className="bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-700">
            {caption}
          </caption>
        ) : null}
        <thead className="bg-slate-50">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 font-semibold text-slate-900">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`} className="border-t border-slate-100">
              {row.map((cell, cellIndex) => (
                <td key={`${cell}-${cellIndex}`} className="px-4 py-3 text-slate-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
