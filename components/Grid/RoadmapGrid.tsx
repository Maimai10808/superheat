import React from 'react'
import Image from 'next/image'
import { Map, Zap, PawPrint, CircleStar, Ban ,LucideIcon} from 'lucide-react'

export  function RoadmapGrid({
    Title,
    Subtitle,
    icon,
 }: {
    Title: string
    Subtitle: string
    icon: string
  }) {

  const iconMap: Record<string, LucideIcon> = {
    map: Map,
    zap: Zap,
    paw: PawPrint,
    star: CircleStar,
  }

  const IconComponent = iconMap[icon] || Ban


  return (
    <div className='flex flex-col justify-center items-center gap-5'>
        {/* icon */}
        <div className=''>
        <IconComponent color="#3e9392"  size={60} />
        </div>

        {/* Comment */}
        <div className=' w-3/5 text-center space-y-5'>
            {/* title */}
            <p className='font-section5-Roadmap-title'>{Title}</p>
            {/* subtitle */}
            <p className='font-section5-Roadmap-subtitle'>{Subtitle}</p>

        </div>

    </div>
  ) }
