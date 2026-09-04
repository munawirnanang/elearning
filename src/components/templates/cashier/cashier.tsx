"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import {
  // MoveRight,
  UserCircle,
  ChefHat,
  Wheat,
  Cookie,
  Donut,
  Croissant,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Trash2,
  ShoppingCart,
  Wifi,
  WifiOff,
  Network,
  CheckCircle2,
  Loader2,
  Search,
  CreditCard,
  QrCode,
  Banknote,
  Ticket,
  User,
  Save,
  Pencil,
} from "lucide-react"

type ConnectivityStatus = "checking" | "connected" | "disconnected"

function StatusBadge({
  icon: Icon,
  label,
  tone,
}: {
  icon: typeof Wifi
  label: string
  tone: "ok" | "warn" | "pending"
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        tone === "ok" && "border-emerald-200 bg-emerald-50 text-emerald-700",
        tone === "warn" && "border-red-200 bg-red-50 text-red-700",
        tone === "pending" && "border-amber-200 bg-amber-50 text-amber-700"
      )}
    >
      <Icon className="size-3 md:size-3.5 " />
      <span className="hidden lg:inline">{label}</span>
    </div>
  )
}

const categories = [
  { id: "all", label: "All Menu", count: 110, icon: ChefHat },
  { id: "breads", label: "Breads", count: 20, icon: Wheat },
  { id: "cakes", label: "Cakes", count: 20, icon: Cookie },
  { id: "donuts", label: "Donuts", count: 20, icon: Donut },
  { id: "pastries", label: "Pastries", count: 20, icon: Croissant },
  { id: "coffee", label: "Coffee", count: 20, icon: Croissant },
  { id: "tea", label: "Tea", count: 20, icon: Croissant },
  { id: "drinks", label: "Drinks", count: 20, icon: Croissant },
]

type MenuItem = {
  id: string
  name: string
  price: number
  categoryId: string
  icon: typeof ChefHat
  image: string
}

const menuItems: MenuItem[] = [
  { id: "sourdough", name: "Sourdough Loaf", price: 45000, categoryId: "breads", icon: Wheat, image: "https://loremflickr.com/400/300/sourdough,bread" },
  { id: "baguette", name: "Baguette", price: 25000, categoryId: "breads", icon: Wheat, image: "https://loremflickr.com/400/300/baguette,bread" },
  { id: "red-velvet", name: "Red Velvet Slice", price: 35000, categoryId: "cakes", icon: Cookie, image: "https://loremflickr.com/400/300/redvelvet,cake" },
  { id: "chocolate-cake", name: "Chocolate Cake Slice", price: 35000, categoryId: "cakes", icon: Cookie, image: "https://loremflickr.com/400/300/chocolate,cake" },
  { id: "glazed-donut", name: "Glazed Donut", price: 15000, categoryId: "donuts", icon: Donut, image: "https://loremflickr.com/400/300/glazed,donut" },
  { id: "choco-donut", name: "Chocolate Donut", price: 17000, categoryId: "donuts", icon: Donut, image: "https://loremflickr.com/400/300/chocolate,donut" },
  { id: "croissant", name: "Butter Croissant", price: 22000, categoryId: "pastries", icon: Croissant, image: "https://loremflickr.com/400/300/croissant,pastry" },
  { id: "pain-au-choc", name: "Pain au Chocolat", price: 24000, categoryId: "pastries", icon: Croissant, image: "https://loremflickr.com/400/300/painauchocolat,pastry" },
  { id: "espresso", name: "Espresso", price: 20000, categoryId: "coffee", icon: Croissant, image: "https://loremflickr.com/400/300/espresso,coffee" },
  { id: "latte", name: "Cafe Latte", price: 28000, categoryId: "coffee", icon: Croissant, image: "https://loremflickr.com/400/300/latte,coffee" },
  { id: "green-tea", name: "Green Tea", price: 18000, categoryId: "tea", icon: Croissant, image: "https://loremflickr.com/400/300/greentea,tea" },
  { id: "orange-juice", name: "Orange Juice", price: 20000, categoryId: "drinks", icon: Croissant, image: "https://loremflickr.com/400/300/orangejuice,juice" },
]

type OrderItem = MenuItem & { qty: number }

type PaymentMethod = "qr" | "debit" | "cash"

const paymentMethods: { id: PaymentMethod; label: string; icon: typeof QrCode }[] = [
  { id: "qr", label: "QR", icon: QrCode },
  { id: "debit", label: "Debit", icon: CreditCard },
  { id: "cash", label: "Cash", icon: Banknote },
]

const currencyFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
})

export default function Cashier() {
  const [manageMode, setManageMode] = useState(false)
  const [mobileCartOpen, setMobileCartOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [order, setOrder] = useState<OrderItem[]>([])
  const [checkoutStep, setCheckoutStep] = useState<
    "cart" | "payment" | "processing"
  >("cart")
  const [voucherCode, setVoucherCode] = useState("")
  const [memberCode, setMemberCode] = useState("")
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("qr")
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const [internetStatus, setInternetStatus] = useState<ConnectivityStatus>(
    "checking"
  )
  const [lanStatus, setLanStatus] = useState<ConnectivityStatus>("checking")
  const [appReady, setAppReady] = useState(false)

  useEffect(() => {
    const updateInternetStatus = () =>
      setInternetStatus(navigator.onLine ? "connected" : "disconnected")

    updateInternetStatus()
    window.addEventListener("online", updateInternetStatus)
    window.addEventListener("offline", updateInternetStatus)

    return () => {
      window.removeEventListener("online", updateInternetStatus)
      window.removeEventListener("offline", updateInternetStatus)
    }
  }, [])

  useEffect(() => {
    let cancelled = false

    const checkLan = async () => {
      try {
        const controller = new AbortController()
        const timeout = setTimeout(() => controller.abort(), 3000)
        await fetch(window.location.origin, {
          method: "HEAD",
          cache: "no-store",
          signal: controller.signal,
        })
        clearTimeout(timeout)
        if (!cancelled) setLanStatus("connected")
      } catch {
        if (!cancelled) setLanStatus("disconnected")
      }
    }

    checkLan()
    const interval = setInterval(checkLan, 15000)

    return () => {
      cancelled = true
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => setAppReady(true), 300)
    return () => clearTimeout(timeout)
  }, [])

  const filteredMenuItems = menuItems
    .filter((item) =>
      activeCategory === "all" ? true : item.categoryId === activeCategory
    )
    .filter((item) =>
      item.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
    )

  const addToOrder = (item: MenuItem) => {
    setOrder((prev) => {
      const existing = prev.find((orderItem) => orderItem.id === item.id)
      if (existing) {
        return prev.map((orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, qty: orderItem.qty + 1 }
            : orderItem
        )
      }
      return [...prev, { ...item, qty: 1 }]
    })
  }

  const updateQty = (id: string, delta: number) => {
    setOrder((prev) =>
      prev
        .map((orderItem) =>
          orderItem.id === id
            ? { ...orderItem, qty: orderItem.qty + delta }
            : orderItem
        )
        .filter((orderItem) => orderItem.qty > 0)
    )
  }

  const removeFromOrder = (id: string) => {
    setOrder((prev) => prev.filter((orderItem) => orderItem.id !== id))
  }

  const total = order.reduce((sum, item) => sum + item.price * item.qty, 0)

  const resetCheckout = () => {
    setCheckoutStep("cart")
    setVoucherCode("")
    setMemberCode("")
    setPaymentMethod("qr")
  }

  const cancelProcessing = () => {
    setCheckoutStep("payment")
  }

  const completeOrder = () => {
    setOrder([])
    resetCheckout()
  }

  const updateScrollButtons = () => {
    const container = scrollContainerRef.current
    if (!container) return
    setCanScrollLeft(container.scrollLeft > 0)
    setCanScrollRight(
      container.scrollLeft + container.clientWidth < container.scrollWidth - 1
    )
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return
    updateScrollButtons()

    const resizeObserver = new ResizeObserver(updateScrollButtons)
    resizeObserver.observe(container)
    container.addEventListener("scroll", updateScrollButtons)

    return () => {
      resizeObserver.disconnect()
      container.removeEventListener("scroll", updateScrollButtons)
    }
  }, [])

  const scrollByAmount = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (!container) return
    const amount = container.clientWidth * 0.8
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  const orderItemCount = order.reduce((sum, item) => sum + item.qty, 0)

  const orderCard = (
            <Card className="lg:sticky lg:top-4 m-4 rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="size-5" />
                  Current Order
                  {/* <StatusBadge
                    icon={checkoutStep === "processing" ? Loader2 : CheckCircle2}
                    label={
                      checkoutStep === "cart"
                        ? "Step 1/3"
                        : checkoutStep === "payment"
                        ? "Step 2/3"
                        : "Step 3/3"
                    }
                    tone={checkoutStep === "processing" ? "pending" : "ok"}
                  /> */}
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        title="Save Order"
                        className="ml-auto rounded-full hover:ring-1 hover:ring-black"
                      >
                        <Save className="size-4" />
                        save
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="rounded-2xl border bg-background p-6 shadow-lg">
                      <AlertDialogHeader>
                        <AlertDialogTitle>Save Order</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to save this order? You can continue adding items to the order after saving.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardTitle>
              </CardHeader>
              {manageMode ? (
                <CardContent className="flex h-96 flex-col items-center justify-center gap-3 overflow-y-auto text-center">
                  <p className="text-sm text-muted-foreground">
                    Update voucher code, member code, and payment method here.
                  </p>
                  <Button
                    type="button"
                    className="rounded-xl"
                  >
                    <Ticket className="size-4" />
                    Update Payment Details
                  </Button>
                </CardContent>
              ) : checkoutStep === "cart" ? (
                <>
                  <CardContent className="flex flex-col gap-3 h-96 overflow-y-auto">
                    {order.length === 0 ? (
                      <p className="py-32 text-center text-sm text-muted-foreground">
                        No items selected yet. Tap a menu item to add it here.
                      </p>
                    ) : (
                      order.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between gap-3 rounded-lg border p-3"
                        >
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium">
                              {item.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {currencyFormatter.format(item.price)}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              className="size-7"
                              onClick={() => updateQty(item.id, -1)}
                            >
                              <Minus className="size-3" />
                            </Button>
                            <span className="w-4 text-center text-sm">
                              {item.qty}
                            </span>
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              className="size-7"
                              onClick={() => updateQty(item.id, 1)}
                            >
                              <Plus className="size-3" />
                            </Button>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="size-7 text-destructive"
                              onClick={() => removeFromOrder(item.id)}
                            >
                              <Trash2 className="size-3" />
                            </Button>
                          </div>
                        </div>
                      ))
                    )}
                  </CardContent>
                  {order.length > 0 && (
                    <CardFooter className="flex flex-col gap-3">
                      <div className="flex w-full items-center justify-between text-sm font-medium">
                        <span>Total</span>
                        <span>{currencyFormatter.format(total)}</span>
                      </div>
                      <Button
                        type="button"
                        className="w-full rounded-xl"
                        onClick={() => setCheckoutStep("payment")}
                      >
                        Checkout
                      </Button>
                    </CardFooter>
                  )}
                </>
              ) : checkoutStep === "payment" ? (
                <>
                  <CardContent className="flex flex-col gap-3 h-96 overflow-y-auto">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="voucher">Voucher</Label>
                      <div className="relative">
                        <Ticket className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="voucher"
                          type="text"
                          value={voucherCode}
                          onChange={(e) => setVoucherCode(e.target.value)}
                          placeholder="Enter voucher code"
                          className="rounded-xl pl-9"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label>Payment Method</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {paymentMethods.map((method) => {
                          const Icon = method.icon
                          const isActive = paymentMethod === method.id

                          return (
                            <button
                              key={method.id}
                              type="button"
                              onClick={() => setPaymentMethod(method.id)}
                              className={cn(
                                "flex flex-col items-center gap-1.5 rounded-xl border p-3 text-xs font-medium transition-colors",
                                isActive
                                  ? "border-primary bg-primary/5 text-primary"
                                  : "border-transparent bg-muted/50 text-muted-foreground hover:bg-muted"
                              )}
                            >
                              <Icon className="size-5" />
                              {method.label}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="member">Member</Label>
                      <div className="relative">
                        <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="member"
                          type="text"
                          value={memberCode}
                          onChange={(e) => setMemberCode(e.target.value)}
                          placeholder="Member phone / ID (optional)"
                          className="rounded-xl pl-9"
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3">
                    <div className="flex w-full items-center justify-between text-sm font-medium">
                      <span>Total</span>
                      <span>{currencyFormatter.format(total)}</span>
                    </div>
                    <ButtonGroup className="w-full">
                      <Button
                        type="button"
                        variant="outline"
                        className="basis-1/3 rounded-xl"
                        onClick={() => setCheckoutStep("cart")}
                      >
                        <ChevronLeft className="size-4" />
                        Back
                      </Button>
                      <Button
                        type="button"
                        className="basis-2/3 rounded-xl"
                        // onClick={handlePay}
                        onClick={() => setCheckoutStep("processing")}
                      >
                        <CreditCard className="size-4" />
                        Pay
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </>
              ) : (
                <>
                  <CardContent className="flex flex-col gap-3 h-96 items-center justify-center overflow-y-auto text-center">
                    <Loader2 className="size-10 animate-spin text-primary" />
                    <div>
                      <p className="text-sm font-medium">
                        Processing payment via{" "}
                        {
                          paymentMethods.find(
                            (method) => method.id === paymentMethod
                          )?.label
                        }
                        ...
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Confirm once the payment has been received.
                      </p>
                    </div>
                    <div className="w-full rounded-lg border p-3 text-left text-sm">
                      {voucherCode && (
                        <div className="flex items-center justify-between my-2">
                          <span className="text-muted-foreground">
                            Voucher
                          </span>
                          <span>{voucherCode}</span>
                        </div>
                      )}
                      {memberCode && (
                        <div className="flex items-center justify-between my-2">
                          <span className="text-muted-foreground">
                            Member
                          </span>
                          <span>{memberCode}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between font-medium my-2">
                        <span>Total</span>
                        <span>{currencyFormatter.format(total)}</span>
                      </div>
                      <div className="flex items-center justify-between my-2">
                        <span>Discount</span>
                        <span>{currencyFormatter.format(total)}</span>
                      </div>
                      <div className="flex items-center justify-between font-medium my-2">
                        <span>Grand Total</span>
                        <span>{currencyFormatter.format(total)}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3">
                    <ButtonGroup className="flex w-full items-center justify-between text-sm font-medium">
                      <Button
                        type="button"
                        variant="outline"
                        className="basis-1/3 rounded-xl"
                        onClick={cancelProcessing}
                      >
                        <ChevronLeft className="size-4" />
                        Back
                      </Button>
                      <Button
                        type="button"
                        className="basis-2/3 rounded-xl"
                        onClick={completeOrder}
                      >
                        <CheckCircle2 className="size-4" />
                        Finish
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </>
              )}
            </Card>
  )

  return (
    <SidebarProvider>
      <AppSidebar
        onManageItem={(projectName) => {
          if (projectName === "Cashier") setManageMode((prev) => !prev)
        }}
      />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b bg-background md:px-4 md:peer-data-[variant=inset]:rounded-tl-xl md:peer-data-[variant=inset]:rounded-tr-xl md:peer-data-[variant=inset]:border-b md:peer-data-[variant=inset]:border-border">
          <div className="flex w-full items-center gap-2 px-4 md:px-0">
            <SidebarTrigger className="-ml-1" />
            {/* <div className="flex aspect-square size-7 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground md:hidden">
              <GalleryVerticalEnd className="size-4" />
            </div> */}
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                {/* <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Build Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" /> */}
                <BreadcrumbItem>
                  <BreadcrumbPage>Cashier</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="ml-auto flex items-center gap-2">
              <StatusBadge
                icon={internetStatus === "connected" ? Wifi : WifiOff}
                label={
                  internetStatus === "checking"
                    ? "Checking Internet..."
                    : internetStatus === "connected"
                    ? "Internet Online"
                    : "Internet Offline"
                }
                tone={
                  internetStatus === "connected"
                    ? "ok"
                    : internetStatus === "checking"
                    ? "pending"
                    : "warn"
                }
              />
              <StatusBadge
                icon={Network}
                label={
                  lanStatus === "checking"
                    ? "Checking LAN..."
                    : lanStatus === "connected"
                    ? "LAN Connected"
                    : "LAN Disconnected"
                }
                tone={
                  lanStatus === "connected"
                    ? "ok"
                    : lanStatus === "checking"
                    ? "pending"
                    : "warn"
                }
              />
              <StatusBadge
                icon={appReady ? CheckCircle2 : Loader2}
                label={appReady ? "App Ready" : "Preparing App..."}
                tone={appReady ? "ok" : "pending"}
              />
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="outline" className="hover:ring-1 hover:ring-black rounded-full group gap-2 ml-4">
                      <span className="hidden sm:inline">Welcome, Muhamad</span>
                      <UserCircle className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mx-2">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 h-full">
          <div className="lg:col-span-8 p-4">
            <div className="flex min-w-0 flex-1 flex-col gap-4">
              <div className="relative min-w-0 w-full">
                {canScrollLeft && (
                  <button
                    type="button"
                    onClick={() => scrollByAmount("left")}
                    aria-label="Scroll left"
                    className="absolute left-0 top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border bg-background shadow-md hover:bg-muted"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                )}
                <div
                  ref={scrollContainerRef}
                  className="flex gap-4 overflow-x-auto scroll-smooth pb-2 px-2"
                >
                  {categories.map((category) => {
                    const isActive = activeCategory === category.id
                    const Icon = category.icon

                    return (
                      <div key={category.id} className="relative min-w-[160px] shrink-0">
                        <button
                          type="button"
                          onClick={() => setActiveCategory(category.id)}
                          className={cn(
                            "flex w-full flex-col items-start gap-3 rounded-2xl border p-4 text-left transition-colors",
                            isActive
                              ? "border-primary bg-primary/5"
                              : "border-transparent bg-muted/50 hover:bg-muted"
                          )}
                        >
                          <span
                            className={cn(
                              "flex size-11 items-center justify-center rounded-full hidden lg:flex",
                              isActive
                                ? "bg-primary text-primary-foreground"
                                : "bg-background text-muted-foreground"
                            )}
                          >
                            <Icon className="size-5" />
                          </span>
                          <div>
                            <p
                              className={cn(
                                "text-sm font-medium",
                                isActive ? "text-primary" : "text-foreground"
                              )}
                            >
                              {category.label}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {category.count} Items
                            </p>
                          </div>
                        </button>
                        {manageMode && (
                          category.id !== "all" ? (
                            <div className="absolute inset-y-2 right-2 flex flex-col items-center justify-between">
                              <button
                                type="button"
                                title="Edit Category"
                                onClick={(e) => e.stopPropagation()}
                                className="flex size-4 lg:size-6 items-center justify-center rounded-full bg-background/80 text-muted-foreground shadow-sm hover:bg-background hover:text-foreground"
                              >
                                <Pencil className="size-2 lg:size-3" />
                              </button>
                              <button
                                type="button"
                                title="Delete Category"
                                onClick={(e) => e.stopPropagation()}
                                className="flex size-4 lg:size-6 items-center justify-center rounded-full bg-background/80 text-muted-foreground shadow-sm hover:bg-background hover:text-foreground"
                              >
                                <Minus className="size-2 lg:size-3" />
                              </button>
                            </div>
                          ) : (
                            <div className="absolute right-2 top-2 flex items-center gap-1">
                              <button
                                type="button"
                                title="Add Category"
                                onClick={(e) => e.stopPropagation()}
                                className="flex size-4 lg:size-6 items-center justify-center rounded-full bg-background/80 text-muted-foreground shadow-sm hover:bg-background hover:text-foreground"
                              >
                                <Plus className="size-3" />
                              </button>
                            </div>
                          )
                        )}
                      </div>
                    )
                  })}
                </div>
                {canScrollRight && (
                  <button
                    type="button"
                    onClick={() => scrollByAmount("right")}
                    aria-label="Scroll right"
                    className="absolute right-0 top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border bg-background shadow-md hover:bg-muted"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                )}
              </div>
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search menu..."
                    className={cn(
                      "pl-9 rounded-2xl focus:ring-1 focus:ring-black",
                      searchQuery && "ring-1 ring-black"
                    )}
                  />
                </div>
                {manageMode && (
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-2xl"
                  >
                    <Plus className="size-4" />
                    Add Item
                  </Button>
                )}
              </div>
              <div className="grid flex-1 grid-cols-2 gap-4 rounded-xl sm:grid-cols-3 xl:grid-cols-4 max-h-[calc(100vh-19rem)] overflow-y-auto pr-1">
                {filteredMenuItems.length === 0 ? (
                  <p className="col-span-full py-8 text-center text-sm text-muted-foreground">
                    No menu items match your search.
                  </p>
                ) : (
                  filteredMenuItems.map((item) => {
                    return (
                      <div key={item.id} className="relative">
                        <button
                          type="button"
                          disabled={manageMode || checkoutStep !== "cart"}
                          onClick={() => addToOrder(item)}
                          className={cn(
                            "flex w-full h-full flex-col items-start gap-3 rounded-2xl border border-transparent bg-muted/50 p-4 text-left transition-colors hover:border-primary hover:bg-primary/5",
                            (checkoutStep !== "cart" || manageMode) &&
                              "cursor-not-allowed opacity-50 hover:border-transparent hover:bg-muted/50"
                          )}
                        >
                          {/* <span className="flex size-11 items-center justify-center rounded-full bg-background text-muted-foreground ring-1 ring-black">
                            <Icon className="size-5" />
                          </span> */}
                          <img
                              src={item.image}
                              alt={item.name}
                              className="h-32 w-full rounded-2xl object-cover"
                          />
                          <div>
                            <p className="text-sm font-medium text-foreground">
                              {item.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {currencyFormatter.format(item.price)}
                            </p>
                          </div>
                        </button>
                        {manageMode && (
                          <div className="absolute inset-y-2 right-2 flex flex-col items-center justify-between">
                            <button
                              type="button"
                              title="Edit Item"
                              onClick={(e) => e.stopPropagation()}
                              className="flex size-6 items-center justify-center rounded-full bg-background text-muted-foreground shadow-sm hover:bg-background hover:text-foreground"
                            >
                              <Pencil className="size-3" />
                            </button>
                            <button
                              type="button"
                              title="Delete Item"
                              onClick={(e) => e.stopPropagation()}
                              className="flex size-6 items-center justify-center rounded-full bg-background text-muted-foreground shadow-sm hover:bg-background hover:text-foreground"
                            >
                              <Minus className="size-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    )
                  })
                )}
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-4 bg-black/5 lg:sticky lg:top-4">
            {orderCard}
          </div>
        </div>

        {manageMode ? (
          <div className="fixed w-full inset-x-0 bottom-0 z-50">
            <div className="flex w-full gap-2 border bg-background p-2 shadow-lg justify-end rounded-tl-xl rounded-tr-xl md:rounded-none md:rounded-bl-xl md:rounded-br-xl">
              <Button
                type="button"
                className="flex-1 rounded-xl sm:flex-none"
                onClick={() => setManageMode(false)}
              >
                <Save className="size-4" />
                Done Changes
              </Button>
            </div>
          </div>
        ) : (
          <div className="fixed w-full inset-x-0 bottom-0 z-50 lg:hidden">
            <div className="flex w-full items-center justify-between gap-3 border bg-background p-3 shadow-lg rounded-tl-xl rounded-tr-xl">
              <div className="flex items-center gap-2 text-sm">
                <ShoppingCart className="size-4 text-muted-foreground" />
                <span className="font-medium">
                  {orderItemCount} item{orderItemCount === 1 ? "" : "s"}
                </span>
                <span className="text-muted-foreground">&middot;</span>
                <span className="font-medium">
                  {currencyFormatter.format(total)}
                </span>
              </div>
              <Drawer open={mobileCartOpen} onOpenChange={setMobileCartOpen}>
                <DrawerTrigger asChild>
                  <Button
                    type="button"
                    className="rounded-xl"
                    disabled={order.length === 0}
                  >
                    Next
                    <ChevronRight className="size-4" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="max-h-[85vh]">
                  <DrawerTitle className="sr-only">
                    Order Details &amp; Payment
                  </DrawerTitle>
                  <div className="overflow-y-auto">{orderCard}</div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        )}
      </SidebarInset>
    </SidebarProvider>
  )
}
