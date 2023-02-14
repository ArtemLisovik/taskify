export const useHttp = () => {

    const request = async (
        url: string,
        method = 'GET',
        body: string | null = null,
        headers: string = `'Content-Type': 'application/json'`
    ) => {
        try {
            const response = await fetch(url, { method, body, headers: { headers } })
            return await response.json()
        }
        catch (error) {
            console.log(`Something went wrong ${error}`)
            throw error
        }
    }
    return { request }
}

