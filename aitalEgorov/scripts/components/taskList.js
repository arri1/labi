import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from "./taskItem";

const TaskList = ({ taskItems, completeTaskItem, removeTaskItem }) => {
    return (
        <FlatList
            data={taskItems}
            renderItem={({ item }) => (
                <TaskItem
                    title={item.title}
                    completed={item.completed}
                    complete={() => completeTaskItem(item.id)}
                    remove={() => removeTaskItem(item.id)}
                />
            )}
            keyExtractor={item => item.id.toString()}
        />
    )
}

export default TaskList