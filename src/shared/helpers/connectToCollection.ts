import { collection } from "firebase/firestore"
import { database } from "shared/config/firebase"

export const connectToCollection = (collectionName: string) => {
    return collection(database, collectionName)
}
