function Success() {
  return (
    <>
      <div className="relative bg-black text-white min-h-screen p-4 space-y-4">
        <h1 className="text-red-600 font-bold text-3xl sm:text-4xl cursor-pointer">THE WITCHER</h1>
        <p className="text-red-500 text-lg sm:text-xl hover:underline cursor-pointer">Episode 1</p>
        <p className="text-sm sm:text-base text-slate-300">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus id pariatur,
          iure eligendi accusantium aliquam porro inventore dolores in quibusdam ratione
          quam fugiat veniam omnis. Tempora ea expedita alias sequi?
        </p>
        <button className="text-red-500 p-3 bg-gray-700 rounded-md hover:bg-gray-400">Play</button>

        
        <div className="w-full mt-4">
          <img
            src="https://m.media-amazon.com/images/M/MV5BN2U3NzNmNjYtZTM0MC00MjAyLWEyODYtMGY4ZjdhNjliNTQ5XkEyXkFqcGc@._V1_.jpg"
            alt="Episode Banner"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Success;
