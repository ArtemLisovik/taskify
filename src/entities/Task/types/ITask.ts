export type IStatus = 'active' | 'completed' | 'failed'

export type ITask = {
    id: number
    title: string,
    text: string,
    timeCreation: Object,
    deadline: Object,
    status: IStatus,
    users: string
}