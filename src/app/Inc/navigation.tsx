"use client"

import * as React from "react"
import { MenubarDemo } from "@/components/shared/homepage-navigation-menubar"
import { NavigationMenuDemo } from "@/components/shared/homepage-navigation-menu"
import { NavigationMenuDemo2 } from "@/components/shared/homepage-navigation-menu-2"
import { Toggle } from "@/components/ui/toggle"
import { Button } from "@/components/ui/button"
import { Sun, Moon, MoveRight } from "lucide-react"
import { useTheme } from "next-themes"
import { CommandDialogDemo } from "@/components/shared/homepage-search"
import { Separator } from "@/components/ui/separator"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/shared/homepage-navigation-menu-sidebar"
import { useIsMobile } from "@/hooks/use-mobile"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Navigation() {
  const { theme, setTheme } = useTheme()
  const isMobile = useIsMobile()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
        {isMobile ? (
          <div className="block md:hidden">
            <div className="flex items-center justify-between p-4">
              <SidebarProvider>
                <AppSidebar />
                <SidebarTrigger />
                <div className="flex-grow mx-2">
                  <CommandDialogDemo />
                </div>
                <Toggle aria-label="Toggle theme" onClick={toggleTheme}>
                  {theme === "light" ? (
                    <Moon className="h-4 w-4" />
                  ) : (
                    <Sun className="h-4 w-4" />
                  )}
                </Toggle>
              </SidebarProvider>
            </div>
            <Separator />
          </div>
        ) : (
          <div className="hidden md:block">
            <div className="flex items-center justify-between p-4">
              <CommandDialogDemo />
              <NavigationMenuDemo />

              <div className="flex items-center gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link" className="group">Log in<MoveRight className="inline-block transition-transform duration-300 group-hover:translate-x-2"/></Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] px-10 rounded-2xl">
                    <Tabs defaultValue="login">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="login">Log In</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                      </TabsList>
                      <TabsContent value="login">
                        <Card className="border-0 shadow-none bg-transparent">
                          {/* <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                              Enter your email and password below to login to your account
                            </CardDescription>
                          </CardHeader> */}
                          <CardContent className="space-y-2 px-0">
                            <div className="space-y-1">
                              <Label htmlFor="email">Email</Label>
                              <Input id="email" type="email" placeholder="xxx@xxx.xxx" />
                            </div>
                            <div className="space-y-1">
                              <Label htmlFor="password">Password</Label>
                              <Input id="password" type="password" placeholder="password" />
                            </div>
                          </CardContent>
                          <CardFooter className="px-0">
                            <div className="w-full text-center">
                              <Button type="button" className="w-full my-2">Log In</Button>
                              <Button type="button" variant="secondary" className="w-full my-2">Log In With Google</Button>
                              Don't have an account?
                              <TabsList className="bg-transparent">
                                <TabsTrigger className="hover:underline" value="signup">Sign Up</TabsTrigger>
                              </TabsList>
                            </div>
                          </CardFooter>
                        </Card>
                      </TabsContent>
                      <TabsContent value="signup">
                        <Card className="border-0 shadow-none bg-transparent">
                          {/* <CardHeader>
                            <CardTitle>Signup</CardTitle>
                            <CardDescription>
                              Craate account to signup
                            </CardDescription>
                          </CardHeader> */}
                          <CardContent className="space-y-2 px-0">
                            <div className="space-y-1">
                              <Label htmlFor="signUpFullname">Fullname</Label>
                              <Input id="signUpFullname" type="text" />
                            </div>
                            <div className="space-y-1">
                              <Label htmlFor="signUpEmail">Email</Label>
                              <Input id="signUpEmail" type="email" />
                            </div>
                            <div className="space-y-1">
                              <Label htmlFor="signUpPassword">Password</Label>
                              <Input id="signUpPassword" type="password" />
                            </div>
                            <div className="space-y-1">
                              <Label htmlFor="signUpRePassword">Re-Password</Label>
                              <Input id="signUpRePassword" type="password" />
                            </div>
                          </CardContent>
                          <CardFooter className="px-0">
                            <div className="w-full text-center">
                              <Button type="button" className="w-full my-2">Sign Up</Button>
                              <Button type="button" variant="secondary" className="w-full my-2">Sign Up With Google</Button>
                              Already have an account? 
                              <TabsList className="bg-transparent">
                                <TabsTrigger className="hover:underline" value="login">Log In</TabsTrigger>
                              </TabsList>
                            </div>
                          </CardFooter>
                        </Card>
                      </TabsContent>
                    </Tabs>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="ring-1 ring-black rounded-full">Sign Up</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] px-10 rounded-2xl">
                    <Tabs defaultValue="signup">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="login">Log In</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                      </TabsList>
                      <TabsContent value="login">
                        <Card className="border-0 shadow-none bg-transparent">
                          {/* <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                              Enter your email and password below to login to your account
                            </CardDescription>
                          </CardHeader> */}
                          <CardContent className="space-y-2 px-0">
                            <div className="space-y-1">
                              <Label htmlFor="email">Email</Label>
                              <Input id="email" type="email" placeholder="xxx@xxx.xxx" />
                            </div>
                            <div className="space-y-1">
                              <Label htmlFor="password">Password</Label>
                              <Input id="password" type="password" placeholder="password" />
                            </div>
                          </CardContent>
                          <CardFooter className="px-0">
                            <div className="w-full text-center">
                              <Button type="button" className="w-full my-2">Log In</Button>
                              <Button type="button" variant="secondary" className="w-full my-2">Log In With Google</Button>
                              Don't have an account? 
                              <TabsList className="bg-transparent">
                                <TabsTrigger className="hover:underline" value="signup">Sign Up</TabsTrigger>
                              </TabsList>
                            </div>
                          </CardFooter>
                        </Card>
                      </TabsContent>
                      <TabsContent value="signup">
                        <Card className="border-0 shadow-none bg-transparent">
                          {/* <CardHeader>
                            <CardTitle>Signup</CardTitle>
                            <CardDescription>
                              Craate account to signup
                            </CardDescription>
                          </CardHeader> */}
                          <CardContent className="space-y-2 px-0">
                            <div className="space-y-1">
                              <Label htmlFor="signUpFullname">Username</Label>
                              <Input id="signUpFullname" type="text" />
                            </div>
                            <div className="space-y-1">
                              <Label htmlFor="signUpEmail">Email</Label>
                              <Input id="signUpEmail" type="email" />
                            </div>
                            <div className="space-y-1">
                              <Label htmlFor="signUpPassword">Password</Label>
                              <Input id="signUpPassword" type="password" />
                            </div>
                            <div className="space-y-1">
                              <Label htmlFor="signUpRePassword">Re-Password</Label>
                              <Input id="signUpRePassword" type="password" />
                            </div>
                          </CardContent>
                          <CardFooter className="px-0">
                            <div className="w-full text-center">
                              <Button type="button" className="w-full my-2">Sign Up</Button>
                              <Button type="button" variant="secondary" className="w-full my-2">Sign Up With Google</Button>
                              Already have an account?
                              <TabsList className="bg-transparent">
                                <TabsTrigger className="hover:underline" value="login">Log In</TabsTrigger>
                              </TabsList>
                            </div>
                          </CardFooter>
                        </Card>
                      </TabsContent>
                    </Tabs>
                  </DialogContent>
                </Dialog>
                <Toggle aria-label="Toggle theme" onClick={toggleTheme}>
                  {theme === "light" ? (
                    <Moon className="h-4 w-4" />
                  ) : (
                    <Sun className="h-4 w-4" />
                  )}
                </Toggle>
              </div>
            </div>
            <div className="bg-[rgb(17,24,39)] dark:bg-transparent">
              <div className="flex justify-between">
                <NavigationMenuDemo2 />
                <div className="overflow-hidden whitespace-nowrap self-center w-1/2">
                  <div className="inline-block marquee">
                    <span className="text-white">Selamat datang di <span className="text-yellow-400">Teman Belajar</span> — Platform pengembangan soft skill terlengkap yang siap mendukung setiap langkah sukses Anda!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}