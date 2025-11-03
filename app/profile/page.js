"use client"
import React, { useContext, useState } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import { updateProfile } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../components/context/AuthContext";
import Image from "next/image";
// import avatar from "../assets/avatar.png";

const Profile = () => {
  const { user,setUser,updateProfileFunc } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    if (!name.trim() || !photoURL.trim()) {
      toast.error("Please fill all fields");
      return;
    }

    updateProfileFunc(name,photoURL)
      .then(() => {
        setUser({
              ...user,
              displayName: name,
              photoURL: photoURL,
            });
        
        // setUser({ ...user, displayName: name, photoURL });
        setIsEditing(false);
        toast.success("Profile updated successfully!", { duration: 2000 });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to update profile");
      });
  };

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="card w-96 bg-base-100 shadow-2xl border border-gray-100">
        <div className="card-body items-center text-center">
          <div className="avatar mb-4">
            <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image width={112} height={112} src={user?.photoURL || "/avatar.png"} alt="Profile" />
            </div>
          </div>

          {!isEditing ? (
            <>
              <h2 className="text-2xl font-bold text-gray-800">
                {user?.displayName}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                {user?.email}
              </p>

              <div className="divider my-4"></div>

              <button
                onClick={() => setIsEditing(true)}
                className="btn bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] text-gray-800 w-full"
              >
                Update Profile
              </button>
            </>
          ) : (
            <form onSubmit={handleUpdateProfile} className="w-full">
              <div className="form-control mb-3">
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter new name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-control mb-3">
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter image URL"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="btn flex-1 bg-linear-to-tr from-[#a8d8ff] via-[#6ec1ff] to-[#ffffff] text-gray-800"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="btn flex-1 bg-linear-to-tr from-[#ffb3b3] via-[#ff6666] to-[#ffffff]"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
