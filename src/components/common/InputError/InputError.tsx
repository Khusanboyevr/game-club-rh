
type Props = {
    message: string | undefined
};
function InputError({ message }: Props) {
    return <div className="relative ">
        <p className='absolute text-[0.7rem] text-red-500'>{message}</p>
    </div>;

}

export default InputError