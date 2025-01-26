import { UserUpdateRequest } from "@/api/forUser";
import React, { useEffect, useState } from "react";
import { Tabs } from "@mantine/core";
import { useAccount } from "@/lib/features/user/hooks";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const userSession = useAccount();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    name: userSession.username || "",
    email: userSession.email || "",
    password: "",
    address: userSession.address || '',
    city: userSession.city || '',
    country: userSession.country || '',
  });
  const { enqueueSnackbar } = useSnackbar();
  const [activeTab, setActiveTab] = useState("user");
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: "Gold Necklace",
      isFavorite: false,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Silver Ring",
      isFavorite: false,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Diamond Earrings",
      isFavorite: false,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Leather Jacket",
      isFavorite: false,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Vintage Watch",
      isFavorite: false,
      imageUrl: "https://via.placeholder.com/150",
    },
  ]);

  const toggleFavorite = (item) => {
    item.isFavorite = !item.isFavorite;
    setFavorites([...favorites]); // Update the state
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await UserUpdateRequest(userDetails);
      enqueueSnackbar("User informations are updated.", {
        variant: "success",
      });

    } catch (error) {
      enqueueSnackbar("Someting went wrong...", {
        variant: "error",
      });
    }
  };

  useEffect(() => {
    if (userSession.authControl === false) {
      navigate("/");
    }
  }, [userSession]);

  return (
    <div className="w-full p-4">
      <Tabs
        value={activeTab}
        onChange={setActiveTab}
        orientation="vertical"
        variant="unstyled"
      >
        <Tabs.List className="mr-16">
          <Tabs.Tab
            value="user"
            className={`px-6 py-3 font-semibold transition-all duration-200 ease-in-out ${activeTab === "user" ? "bg-gradient-to-r from-[#fbe4c5] via-[#d7b79b] to-[#c5a093] text-[#5c4d43]" : "bg-transparent text-gray-500 hover:bg-[#fbe4c5] hover:text-[#5c4d43]"} rounded-t-md`}
          >
            My User Information
          </Tabs.Tab>
          <Tabs.Tab
            value="address"
            className={`px-6 py-3 font-semibold transition-all duration-200 ease-in-out ${activeTab === "address" ? "bg-gradient-to-r from-[#fbe4c5] via-[#d7b79b] to-[#c5a093] text-[#5c4d43]" : "bg-transparent text-gray-500 hover:bg-[#fbe4c5] hover:text-[#5c4d43]"} rounded-t-md`}
          >
            My Address Information
          </Tabs.Tab>
          <Tabs.Tab
            value="favorites"
            className={`px-6 py-3 font-semibold transition-all duration-200 ease-in-out ${activeTab === "favorites" ? "bg-gradient-to-r from-[#fbe4c5] via-[#d7b79b] to-[#c5a093] text-[#5c4d43]" : "bg-transparent text-gray-500 hover:bg-[#fbe4c5] hover:text-[#5c4d43]"} rounded-t-md`}
          >
            My Favorites
          </Tabs.Tab>
        </Tabs.List>

        {/* User Info */}
        <Tabs.Panel value="user">
          <h1 className="mb-4 bg-gradient-to-r from-[#d7b79b] via-[#c5a093] to-[#a0897b] bg-clip-text text-2xl font-bold text-transparent">
            Profile Settings
          </h1>
          <form
            className="rounded bg-white p-8 shadow-lg shadow-gray-400"
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label className="block font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-gray-300 p-4 transition-all ease-in-out focus:border-[#d7b79b] focus:ring-2 focus:ring-[#d7b79b]"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-6">
              <label className="block font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-gray-300 p-4 transition-all ease-in-out focus:border-[#d7b79b] focus:ring-2 focus:ring-[#d7b79b]"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={userDetails.password}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-gray-300 p-4 transition-all ease-in-out focus:border-[#d7b79b] focus:ring-2 focus:ring-[#d7b79b]"
                placeholder="Enter a new password"
              />
            </div>
            <button
              type="submit"
              className="mx-auto mt-6 max-w-xs rounded bg-gradient-to-r from-[#f5e1c7] via-[#d7b79b] to-[#c5a093] p-2 font-semibold text-white hover:opacity-90"
            >
              Save Changes
            </button>
          </form>
        </Tabs.Panel>

        {/* Address Info */}
        <Tabs.Panel value="address">
          <h1 className="mb-4 bg-gradient-to-r from-[#d7b79b] via-[#c5a093] to-[#a0897b] bg-clip-text text-2xl font-bold text-transparent">
            Address Settings
          </h1>
          <form
            className="rounded bg-white p-8 shadow-lg shadow-gray-400"
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label className="block font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={userDetails.address}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-gray-300 p-4 transition-all ease-in-out focus:border-[#d7b79b] focus:ring-2 focus:ring-[#d7b79b]"
                placeholder="Enter your address"
              />
            </div>
            <div className="mb-6">
              <label className="block font-medium text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={userDetails.city}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-gray-300 p-4 transition-all ease-in-out focus:border-[#d7b79b] focus:ring-2 focus:ring-[#d7b79b]"
                placeholder="Enter your city"
              />
            </div>
            <div className="mb-6">
              <label className="block font-medium text-gray-700">Country</label>
              <input
                type="text"
                name="country"
                value={userDetails.country}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-gray-300 p-4 transition-all ease-in-out focus:border-[#d7b79b] focus:ring-2 focus:ring-[#d7b79b]"
                placeholder="Enter your country"
              />
            </div>
            <button
              type="submit"
              className="mx-auto mt-6 max-w-xs rounded bg-gradient-to-r from-[#f5e1c7] via-[#d7b79b] to-[#c5a093] p-2 font-semibold text-white hover:opacity-90"
            >
              Save Changes
            </button>
          </form>
        </Tabs.Panel>

        {/* Favorites Tab */}
        <Tabs.Panel value="favorites">
          <h1 className="mb-4 bg-gradient-to-r from-[#d7b79b] via-[#c5a093] to-[#a0897b] bg-clip-text text-2xl font-bold text-transparent">
            My Favorite Items
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favorites.map((item) => (
              <div
                key={item.id}
                className="w-full max-w-xs rounded-lg bg-white p-4 shadow-lg"
              >
                <div className="relative">
                  <div
                    onClick={() => toggleFavorite(item)}
                    className={`absolute right-2 top-2 cursor-pointer ${item.isFavorite ? "text-red-600" : "text-gray-500"}`}
                  >
                    ❤️
                  </div>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="h-32 w-full rounded-md object-cover"
                  />
                  <h2 className="mt-4 text-lg font-semibold">{item.name}</h2>
                  <p className="mt-2 text-sm text-gray-500">
                    Description for {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
