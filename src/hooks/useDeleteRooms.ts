
import { deleteRoom as removeRoom} from "@/firebase/firebaseRoom"

export const useDeleteRooms = () => {

    const deleteRoom = async function (roomId: string) {
        await removeRoom(roomId)
    }
    return { deleteRoom }
}