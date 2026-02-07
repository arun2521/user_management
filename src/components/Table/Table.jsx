import { Table as AntTable } from "antd";
import "./Table.css";

const Table = ({
  columns,
  dataSource,
  loading = false,
  rowKey = "id",
  pagination = { pageSize: 5 },
}) => {
  return (
    <div className="app-table">
      <AntTable
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={rowKey}
        pagination={pagination}
      />
    </div>
  );
};

export default Table;
