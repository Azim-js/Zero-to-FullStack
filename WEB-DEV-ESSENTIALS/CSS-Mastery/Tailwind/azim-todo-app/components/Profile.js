function Profile() {
  return (
    <div className="flex flex-col text-center sm:text-left sm:items-center sm:flex-row ">
      <img
        className="w-full cursor-pointer sm:w-2/5 sm:rounded-full sm:max-w-sm sm:ring-4 transition duration-[500ms] transform sm:hover:scale-110"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjolKECSJUmBQXNu1j7oLp7uygV5C9ojfKj6OH0ECQGFHPH6_3G0IHqWrLnXCxo7eq0c4&usqp=CAU"
        alt="profile_pic"
      />
      <div className="mt-5 sm:ml-5 animate-pulse">
        <h1 className="text-5xl">Baki Hanma</h1>
        <h2 className="text-2xl">I am code quite alot ....</h2>
      </div>
    </div>
  );
}

export default Profile;
