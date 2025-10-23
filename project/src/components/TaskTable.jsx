import { useState } from "react";
import { Table, Tag } from "antd";
import TaskSearch from "./TaskSearch";
import useTasks from "../hooks/useTask";

function TaskTable() {
    const { data, loading } = useTasks();
    const [serachText , setSerachText] = useState('');

    const handleSeach = (value) => {
        setSerachText(value.toLowerCase() );
    };

    const filterData = data.filter(item => 
        item.title.toLowerCase().includes(serachText) 
        
        
    );
    

    const columns =[
        { title: 'ID', dataIndex: 'id', key: 'id', sorter: (a, b) => a.id - b.id },
        { title: 'Title', dataIndex: 'title', key: 'title', sorter: (a, b) => a.title.localeCompare(b.title) },
        { 
          title: 'DifficultyTitle', 
          dataIndex: 'difficultyTitle', 
          key: 'difficultyTitle', 
          render: (text, record) => <Tag color="blue">{record.difficultyTitle}</Tag> 
        },
        { title: 'Solved', dataIndex: 'solved', key: 'solved' },
        { title: 'likesCount', dataIndex: 'likesCount', key: 'likesCount' },
        { title: 'attemptsCount', dataIndex: 'attemptsCount', key: 'attemptsCount' ,},
    ]



    return (
        <>
        <div>
            <TaskSearch onSearch={handleSeach} />
            <Table
            columns={columns}
            dataSource={filterData}
            loading={loading}
            rowKey="id"
            pagination={{pageSize:10}} 
            />
        </div>
        </>
    )
};

export default TaskTable;