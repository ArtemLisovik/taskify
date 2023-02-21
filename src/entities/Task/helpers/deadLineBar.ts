const colorsIndicator = {
    green: 'green',
    yellow: 'yellow',
    red: 'red'
}

export const deadLineBar = (startPoint: string, endPoint: string) => {
    const now = new Date()
    const start = new Date(startPoint)
    const deadline = new Date(endPoint)
    const taskTime = +deadline - +start
    const timeRemainig = +deadline - +now
                
    let progress = (((+now - +start)/taskTime) * 100)

    let colors
    if (progress <= 33) {
        colors = colorsIndicator.green
    } else if (progress >= 34 && progress <= 77) {
        colors = colorsIndicator.yellow
    } else if (progress > 78){
        colors = colorsIndicator.red
    }
    
    const days = Math.floor(timeRemainig/(1000*60*60*24))
    const hours = Math.floor(timeRemainig/(1000*60*60)%24)
    const minutes = Math.ceil(timeRemainig/(1000*60)%60) 

    return {days, hours, minutes, progress, colors, timeRemainig}
}
