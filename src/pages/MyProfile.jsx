import React, { useState } from 'react';

const MyProfile = () => {
  const [editMode, setEditMode] = useState(false);

  const [name, setName] = useState('Edward Vincent');
  const [email, setEmail] = useState('richardjameswap@gmail.com');
  const [phone, setPhone] = useState('+1 123 456 7890');
  const [address, setAddress] = useState('57th Cross, Richmond Circle, Church Road, London');
  const [gender, setGender] = useState('Male');
  const [birthday, setBirthday] = useState('2024-07-20');

  const handleSave = () => {
    setEditMode(false);
    alert('Information saved!');
    console.log({ name, email, phone, address, gender, birthday });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      {/* Profile Picture */}
      <div className="flex items-center gap-6">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-xl object-cover"
        />
        <div className="w-24 h-24 bg-gray-200 rounded-xl flex items-center justify-center">
          <svg
            className="w-10 h-10 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
          </svg>
        </div>
      </div>

      {/* Name */}
      <div className="mt-6">
        <label className="block text-sm font-medium">Name:</label>
        {editMode ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md"
          />
        ) : (
          <p className="mt-1">{name}</p>
        )}
      </div>

      {/* Contact Info */}
      <div className="mt-6">
        <h3 className="uppercase text-sm text-gray-500 font-medium border-b pb-1 mb-2">
          Contact Information
        </h3>
        <div className="space-y-4 text-sm">
          <div>
            <label className="font-medium block">Email:</label>
            {editMode ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 p-2 border rounded-md"
              />
            ) : (
              <p className="mt-1 text-blue-600">{email}</p>
            )}
          </div>
          <div>
            <label className="font-medium block">Phone:</label>
            {editMode ? (
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full mt-1 p-2 border rounded-md"
              />
            ) : (
              <p className="mt-1 text-blue-600">{phone}</p>
            )}
          </div>
          <div>
            <label className="font-medium block">Address:</label>
            {editMode ? (
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full mt-1 p-2 border rounded-md"
                rows={2}
              />
            ) : (
              <p className="mt-1">{address}</p>
            )}
          </div>
        </div>
      </div>

      {/* Basic Info */}
      <div className="mt-6">
        <h3 className="uppercase text-sm text-gray-500 font-medium border-b pb-1 mb-2">
          Basic Information
        </h3>
        <div className="space-y-4 text-sm">
          <div>
            <label className="font-medium block">Gender:</label>
            {editMode ? (
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full mt-1 p-2 border rounded-md"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            ) : (
              <p className="mt-1">{gender}</p>
            )}
          </div>
          <div>
            <label className="font-medium block">Birthday:</label>
            {editMode ? (
              <input
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                className="w-full mt-1 p-2 border rounded-md"
              />
            ) : (
              <p className="mt-1">
                {new Date(birthday).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        {editMode ? (
          <>
            <button
              className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition"
              onClick={handleSave}
            >
              Save information
            </button>
            <button
              className="border border-blue-500 text-blue-500 px-5 py-2 rounded-full hover:bg-blue-50 transition"
              onClick={() => setEditMode(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            className="border border-blue-500 text-blue-500 px-5 py-2 rounded-full hover:bg-blue-50 transition"
            onClick={() => setEditMode(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
