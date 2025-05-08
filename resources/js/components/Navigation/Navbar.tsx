import React, { useState } from 'react'
import { Link } from "@inertiajs/react"
import { Bell, Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useAppearance } from '@/hooks/use-appearance'
import AppLogo from '../app-logo'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { appearance, updateAppearance } = useAppearance()

  const menus = [
    {
      title: "Home",  href: "/",
    },
    
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b ">
      <div className=" container flex h-16 items-center justify-between border-x ">

        <div className="  flex items-center gap-6 md:gap-8 lg:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <AppLogo />
          </Link>
          <nav className="gap-6 hidden md:flex">
            {menus.map((menu)=> (
            <Link prefetch key={menu.title} href={menu.href} className="text-sm font-medium hover:underline underline-offset-4">
              {menu.title}
            </Link>

            ))}

          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => updateAppearance(appearance === 'dark' ? 'light' : 'dark')}>
            {appearance === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Menu</span>
          </Button>
          <Button variant="custom" className="hidden md:inline-flex">Connect</Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden",
        isOpen ? "block" : "hidden"
      )}>
        <div className="border-t px-2 py-4 space-y-2">
            {menus.map((menu)=>(
          <Link
          key={menu.title}
            href={menu.href}
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
          >
            {menu.title}
          </Link>

            ))}

          <div className="px-3 py-2">
            <Button variant="custom" className="w-full">Connect</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar