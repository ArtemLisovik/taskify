export type IStatus = 'active' | 'completed' | 'failed'

export type ITask = {
    id: string
    title: string,
    text: string,
    timeCreation: string,
    endPointTime: string
    endPointDate: string
    status: IStatus,
    users: string
}