import '../App.css'

function UserCard() {

    return (
        <div className="md:mx-0 et md:ml-[350px] font-bold top-10 z-10 w-[300px] mx-auto h-40 bg-gray-100 shadow-md flex items-center justify-center relative">
            <div className="flex gap-2 text-[25px] md:text-[45px]">
                <span className="text-black font-bold text-[30px] ml-4 mt-20">Oles</span>
                <span className='text-black text-[20px] font-medium'>Basic fit Lille</span>
            </div>
        </div>
    )
}

export default UserCard
