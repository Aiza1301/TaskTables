import { Space, Input } from "antd";

const { Search } = Input; 

function TaskSearch({ onSearch }) {
  return (
    <Space style={{ marginBottom: 16 }}>
      <Search
        placeholder="Nomi boyicha qidirish..."
        onSearch={onSearch}
        onChange={(e) => onSearch(e.target.value)}
        style={{ width: 400 }}
      />
    </Space>
  );
}

export default TaskSearch;
