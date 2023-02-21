// Progress bar color
const progressBarColors = {
    green: { background: '#21f21b', boxShadow: '0 0 10px #21f21b' },
    yellow: { background: '#FFE81F', boxShadow: '0 0 10px #FFE81F' },
    red: { background: 'red', boxShadow: '0 0 10px red' }
}

export const deadLineBar = (startPoint: string, endPointTime: string, endPointDate: string) => {
    const now = new Date()
    const start = new Date(startPoint)
    const deadline = new Date(`${endPointDate}T${endPointTime}`)
    const taskTime = +deadline - +start
    const timeRemainig = +deadline - +now
    let progress = (((+now - +start) / taskTime) * 100)

    let progressBarColor
    if (progress <= 33) {
        progressBarColor = progressBarColors.green
    } else if (progress >= 33 && progress <= 77) {
        progressBarColor = progressBarColors.yellow
    } else if (progress > 77) {
        progressBarColor = progressBarColors.red
    }
    // Time remaining viewed 
    const days = Math.floor(timeRemainig / (1000 * 60 * 60 * 24))
    const hours = Math.floor(timeRemainig / (1000 * 60 * 60) % 24)
    const minutes = Math.ceil(timeRemainig / (1000 * 60) % 60)

    console.log(days)


    return { days, hours, minutes, progress, progressBarColor, timeRemainig }
}
