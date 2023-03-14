import {ref, getDownloadURL} from 'firebase/storage'

import {storage} from 'config/firebase'

export const getFiles = async (path: string, name: string) => {
    const storageRef = ref(storage, `${path}/${name}`)
    const fileURL = await getDownloadURL(storageRef)
    return fileURL
}