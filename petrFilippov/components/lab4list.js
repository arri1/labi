import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from "./lab4item";

const TaskList = ({ taskItems }) => {
    return (
        <FlatList
            data={taskItems}
            renderItem={({ item }) => (
                <TaskItem
                    title={item.title}
                    completed={item.completed}
                />
            )}
            keyExtractor={item => item.id.toString()}
        />
    )
}

export default TaskList