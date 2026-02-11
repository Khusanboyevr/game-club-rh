import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useDeleteRooms } from "@/hooks/useDeleteRooms";
import { Trash2Icon } from "lucide-react"

type props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  roomId: string;
};

export function DeleteItem({ open, setOpen, roomId }: props) {
  const { deleteRoom } = useDeleteRooms()
  const handleDelete = () => {
    deleteRoom(roomId)
    setOpen(false)
  }
  return (
    <AlertDialog open={open} onOpenChange={setOpen} >
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>
        Rostdan O'chirishni hohlaysizmi?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Agar ushbu elementni o'chirib tashlaysangiz, uning ma'lumotlari qayta tiklanmaydi!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Bekor qilish</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} variant="destructive">O'chirish</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
