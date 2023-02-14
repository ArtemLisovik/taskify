import { createSlice } from "@reduxjs/toolkit";

import { ITask } from "../../../entities/ui/Task/types/ITask";

interface IState {
    tasks: [] | ITask[]
    tasksLoadingStatus: string
}

const initialState: IState = {
    tasks: [],
    tasksLoadingStatus: 'idle'
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        tasksFetching: state => {state.tasksLoadingStatus = 'loading'},
        tasksFetched: (state,action) => {
            state.tasksLoadingStatus = 'idle'
            state.tasks = action.payload
        },
        tasksFetchingError: state => {state.tasksLoadingStatus = 'error'}
    },
})

const {actions, reducer} = tasksSlice;

export const {
    tasksFetching,
    tasksFetched,
    tasksFetchingError
} = actions

export default reducer;