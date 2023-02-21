export type IStatus = 'active' | 'completed' | 'failed'

export type ITask = {
    id: number
    title: string,
    text: string,
    timeCreation: Object,
    endPointTime: string
    endPointDate: string
    status: IStatus,
    users: string
}