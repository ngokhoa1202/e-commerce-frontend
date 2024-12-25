import Image from 'next/image'

interface ProfileHeaderProps {
  name: string
  title: string
  image: string
}

export function ProfileHeader({ name, title, image }: ProfileHeaderProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative w-24 h-24 rounded-full overflow-hidden">
        <Image src={image} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{name}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">{title}</p>
      </div>
    </div>
  )
}

