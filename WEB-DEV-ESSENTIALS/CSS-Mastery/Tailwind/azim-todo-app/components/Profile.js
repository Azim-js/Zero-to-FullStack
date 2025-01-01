function Profile() {
  return (
    <div className="flex dark:bg-gray-700 flex-col text-center sm:text-left sm:items-center sm:flex-row ">
      <div className="w-full sm:w-2/5 relative">
        <img
          className="w-full cursor-pointer sm:rounded-full sm:max-w-sm sm:ring-4 transition duration-[500ms] transform sm:hover:scale-110"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjolKECSJUmBQXNu1j7oLp7uygV5C9ojfKj6OH0ECQGFHPH6_3G0IHqWrLnXCxo7eq0c4&usqp=CAU"
          alt="profile_pic"
        />
        <div className="absolute top-0 right-0 bg-red-600 h-7 w-7 rounded-full animate-ping"></div>
      </div>

      <div className="mt-5 sm:ml-5 text-blue-500 dark:text-red-500 animate-pulse">
        <h1 className="text-5xl xbox:text-red-500">Baki Hanma</h1>
        <h2 className="text-2xl">I code quite alot ....</h2>
      </div>
    </div>
  );
}

export default Profile;
