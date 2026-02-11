"use client"


import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Field, FieldGroup } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import InputError from '../InputError/InputError'
import { Button } from '@/components/ui/button'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"
import { Dispatch, SetStateAction } from 'react'
import { useSetRooms } from '@/hooks/useSetRooms'

const roomShchema = z.object({
    name: z
        .string()
        .min(2, "Honaning nomi kamida 2 ta belgidan iborat bo'lishi kerak")
        .max(20, "Honaning nomi ko'pida 20ta harff bolishi kerak"),
    price: z.number().min(10000, "Xonaning narxi kamida 10000 so'm bo'lishi kerak").max(1000000, "Xonaning narxi ko'pida 1000000 so'm bo'lishi kerak"),
})

export type TRoom = z.infer<typeof roomShchema>
type Props = {
    setShowModal: Dispatch<SetStateAction<boolean>>

}
function RoomsModalForm({ setShowModal }: Props) {
    const { setRoom } = useSetRooms()
    const { register, handleSubmit, reset, formState: { errors } } = useForm<TRoom>({
        resolver: zodResolver(roomShchema),
    })
    const onsubmit = (room: TRoom) => {
        setRoom(room)
        reset()
        setShowModal(false)
    }
    return (
        <DialogContent className="sm:max-w-sm">
            <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-4">
                <DialogHeader>
                    <DialogTitle>Xona Qo'shish</DialogTitle>
                    <DialogDescription>
                        Malumotlarni E'tibor bilan kiritng, chunki ular keyinchalik o'zgartirilmaydi.
                    </DialogDescription>
                </DialogHeader>
                <FieldGroup>
                    <Field className="gap-1">
                        <Label htmlFor="name-1">Honaning Nomi</Label>
                        <Input id="name-1" placeholder="Masalan: 1-xona" {...register("name")} />
                        {errors.name && <InputError message={errors.name.message} />}
                    </Field>
                    <Field className="gap-1">
                        <Label htmlFor="price-1">Xonaning narxi </Label>
                        <Input type="number" id="price-1" placeholder="Masalan: 15000 so'm" {...register("price", { valueAsNumber: true })} />
                        {errors.price && <InputError message={errors.price.message} />}
                    </Field>
                </FieldGroup>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Bekor qilish</Button>
                    </DialogClose>
                    <Button type="submit">Qo'shish</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}

export default RoomsModalForm