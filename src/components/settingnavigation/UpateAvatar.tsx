import { Avatar } from '@mantine/core'
import React from 'react'
import { IoCamera } from "react-icons/io5";

export interface IUpdateAvatarProps {}

const UpdateAvatar: React.FunctionComponent<IUpdateAvatarProps> = () => {
  return (
    <div className='g-change-avatar-section relative cursor-pointer' onClick={() => console.log("success")}>
        <Avatar
            src="/src/assets/avatar.jpg"
            alt="it's me"
            size="xl"
            className='rounded-3xl'
        />
        <IoCamera className='absolute -right-1 -bottom-1 text-white border-4 border-white rounded-3xl bg-[#475569] w-8 h-8 p-[4px]'/>
    </div>
  )
}

export default UpdateAvatar