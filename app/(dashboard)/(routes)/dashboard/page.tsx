"use client"

import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card"
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react"


const tools = [
  {
    label: "Chat-Bot",
    icon: MessageSquare,
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
    href: "/conversation"
  },
  {
    label: "Image Generator",
    icon: ImageIcon,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    href: "/image"
  },
  {
    label: "Video Generator",
    icon: VideoIcon,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: "/video"
  },
  {
    label: "Audio Generator",
    icon: Music,
    color: "text-orange-600",
    bgColor: "bg-orange-600/10",
    href: "/conversation"
  },
  {
    label: "Code Generator",
    icon: Code,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    href: "/conversation"
  },

]

const DashboardPage = () => {

  const router = useRouter();

  return (
    
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the Power Of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the Smarter AI - Explore Yourself on Different World
        </p>
      </div>

      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >

            <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon className={cn("w-8 h-8", tool.color)} />
                </div>
                <div className="font-semibold">
                  {tool.label}
                </div>
            </div>

            <ArrowRight className="w-5 h-5" />

          </Card>
        ))}
      </div>
    </div>

  )
}

export default DashboardPage
