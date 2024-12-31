import Image from 'next/image'

import { ProfileDto } from '@/dto/profile'
import ProfileApi from '@/api/profile';

import React, { useState } from "react";
import { authStore } from '@/stores/auth';

export default function ProfileInfo({ profile, profileId, username }: { profile: ProfileDto; profileId: string; username: string}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({ ...profile });
  const defaultAvatar = "/tutors/defaultAvatar.jpg";

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleInputChange = (field: string, value: string) => {
    setEditedProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      const { id, ...profileWithoutId } = editedProfile;
      const response = await ProfileApi.editByProfileId(profileId, profileWithoutId, authStore.getState().accessToken)

      if (response.ok) {
        setIsEditing(false);
        alert("Profile updated successfully!");
      } else {
        alert("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 border border-gray-200">
      <div className="flex flex-col items-center">
        <Image
          src={editedProfile.avatar || defaultAvatar}
          alt={`${editedProfile.firstname} ${editedProfile.lastname}` || username}
          width={150}
          height={150}
          className="rounded-full mb-4 shadow-lg"
        />
        {isEditing ? (
          <>
            <input
              className="text-2xl font-semibold text-gray-800 border p-2 rounded"
              value={editedProfile.firstname}
              onChange={(e) => handleInputChange("firstname", e.target.value)}
            />
            <input
              className="text-2xl font-semibold text-gray-800 border p-2 rounded"
              value={editedProfile.lastname}
              onChange={(e) => handleInputChange("lastname", e.target.value)}
            />
          </>
        ) : (
          <h2 className="text-2xl font-semibold text-gray-800">
            {`${editedProfile.firstname} ${editedProfile.lastname}`}
          </h2>
        )}
        <p className="text-gray-600 mb-4 text-center">
          {isEditing ? (
            <textarea
              className="border p-2 rounded w-full"
              value={editedProfile.bio}
              onChange={(e) => handleInputChange("bio", e.target.value)}
            />
          ) : (
            editedProfile.bio
          )}
        </p>
      </div>
      <div className="space-y-6">
        {/* Dynamic fields */}
        {[
          { label: "Degree", field: "degree", value: editedProfile.degree || ''},
          { label: "Experience", field: "experienceYears", value: `${editedProfile.experienceYears || 0} years`},
          { label: "Address", field: "address", value: editedProfile.address || ''},
          { label: "Date of Birth", field: "birthOfDate", value: new Date(editedProfile.birthOfDate).toLocaleDateString()},
          { label: "Phone", field: "phoneNumber", value: `${editedProfile.phoneCode || ''} ${editedProfile.phoneNumber || ''}`},
        ].map(({ label, field, value }) => (
          <div className="flex items-center border-t pt-4" key={field}>
            <span className="text-gray-700 font-semibold mr-4">{label}:</span>
            {isEditing ? (
              <input
                className="border p-2 rounded w-full"
                value={editedProfile[field as keyof ProfileDto] as string}
                onChange={(e) => handleInputChange(field, e.target.value)}
              />
            ) : (
              <span className="text-gray-700">{value}</span>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEditToggle}
            className="px-4 py-2 bg-gray-500 text-white rounded shadow hover:bg-gray-600"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}
