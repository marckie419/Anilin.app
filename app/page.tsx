"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MessageCircle,
  MapPin,
  TrendingUp,
  Star,
  Wheat,
  Calendar,
  BarChart3,
  Menu,
  X,
  Upload,
  Send,
  Award,
  Eye,
  Phone,
  Mail,
  Sparkles,
  Users,
  DollarSign,
} from "lucide-react"

export default function AniLinkPlatform() {
  const [activeTab, setActiveTab] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigationItems = [
    { id: "home", label: "Home", icon: Wheat },
    { id: "listings", label: "Palay Listings", icon: Wheat },
    { id: "messages", label: "Messages", icon: MessageCircle },
    { id: "tracker_rankings", label: "Tracker & Rankings", icon: Calendar },
    { id: "analytics", label: "Market Analytics", icon: BarChart3 },
    { id: "profile", label: "Profile", icon: Users },
    { id: "signup", label: "Sign Up", icon: Star },
  ]

  const provinces = [
    { name: "Nueva Ecija", yield: "2.1M tons", rating: 4.8, season: "Peak Harvest", variety: "IR64" },
    { name: "Pangasinan", yield: "1.8M tons", rating: 4.7, season: "Late Harvest", variety: "PSB Rc82" },
    { name: "Isabela", yield: "1.6M tons", rating: 4.6, season: "Peak Harvest", variety: "NSIC Rc222" },
    { name: "Cagayan", yield: "1.4M tons", rating: 4.5, season: "Early Harvest", variety: "IR64" },
  ]

  const listings = [
    {
      id: 1,
      farmer: "Juan Santos",
      location: "Nueva Ecija",
      variety: "IR64",
      quantity: "50 sacks",
      price: "₱1,200/sack",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
      description: "Premium quality palay, freshly harvested from organic farm",
    },
    {
      id: 2,
      farmer: "Maria Cruz",
      location: "Pangasinan",
      variety: "PSB Rc82",
      quantity: "75 sacks",
      price: "₱1,150/sack",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
      description: "High-yield variety, perfect for commercial milling",
    },
    {
      id: 3,
      farmer: "Pedro Reyes",
      location: "Isabela",
      variety: "NSIC Rc222",
      quantity: "100 sacks",
      price: "₱1,300/sack",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300",
      description: "Aromatic rice variety, ideal for premium markets",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-400 via-orange-400 to-yellow-500 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-300/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>

      {/* Header with Glassmorphism */}
      <header className="backdrop-blur-xl bg-white/20 border-b border-white/30 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-sm">
                <Wheat className="h-7 w-7 text-white drop-shadow-lg" />
              </div>
              <div>
                <h1 className="text-3xl font-black bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 bg-clip-text text-transparent drop-shadow-sm">
                  AniLink
                </h1>
                <p className="text-sm font-semibold text-amber-900/80 tracking-wide">
                  Connecting Farmers to Better Markets
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "default" : "ghost"}
                  onClick={() => setActiveTab(item.id)}
                  className={`${activeTab === item.id
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-xl backdrop-blur-sm border border-white/20"
                    : "text-amber-900 hover:bg-white/20 backdrop-blur-sm border border-transparent hover:border-white/30"
                    } transition-all duration-300 font-semibold`}
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-amber-900 hover:bg-white/20 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-white/30 pt-4 backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-3">
                {navigationItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={activeTab === item.id ? "default" : "ghost"}
                    onClick={() => {
                      setActiveTab(item.id)
                      setMobileMenuOpen(false)
                    }}
                    className={`${activeTab === item.id
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-xl"
                      : "text-amber-900 hover:bg-white/20 backdrop-blur-sm"
                      } justify-start font-semibold transition-all duration-300`}
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </Button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Home Tab */}
        {activeTab === "home" && (
          <div className="space-y-16">
            {/* Hero Section with Enhanced Typography */}
            <section className="text-center py-16">
              <div className="max-w-5xl mx-auto">
                <div className="mb-8">
                  <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 bg-clip-text text-transparent mb-6 leading-tight tracking-tight drop-shadow-2xl">
                    Empowering
                    <br />
                    <span className="text-amber-900">
                      Filipino Farmers
                    </span>
                  </h2>
                  <div className="flex items-center justify-center mb-6">
                    <Sparkles className="h-8 w-8 text-amber-600 mr-3 animate-pulse" />
                    <p className="text-2xl md:text-3xl font-bold text-amber-900/90 tracking-wide">
                      Direct • Fair • Trusted
                    </p>
                    <Sparkles className="h-8 w-8 text-amber-600 ml-3 animate-pulse" />
                  </div>
                </div>

                <p className="text-xl md:text-2xl text-amber-800 mb-10 leading-relaxed font-medium max-w-4xl mx-auto">
                  Connect directly with buyers, eliminate middlemen, and get{" "}
                  <span className="font-bold text-amber-900 underline decoration-amber-500 decoration-wavy">
                    fair prices
                  </span>{" "}
                  for your palay harvest. Join <span className="font-bold text-orange-800">12,000+ farmers</span>{" "}
                  already growing their income.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-4 text-lg font-bold shadow-2xl backdrop-blur-sm border border-white/20 transform hover:scale-105 transition-all duration-300"
                    onClick={() => setActiveTab("listings")}
                  >
                    <Wheat className="h-6 w-6 mr-3" />
                    Start Selling Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-amber-600 text-amber-800 hover:bg-white/30 backdrop-blur-sm px-10 py-4 text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300"
                    onClick={() => setActiveTab("tracker_rankings")}
                  >
                    <MapPin className="h-6 w-6 mr-3" />
                    Find Suppliers
                  </Button>
                </div>
              </div>
            </section>

            {/* Features Grid with Glassmorphism */}
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Wheat,
                  title: "Easy Listings",
                  description: "Post your palay with photos, descriptions, and pricing in minutes",
                  gradient: "from-amber-500 to-orange-500",
                },
                {
                  icon: MessageCircle,
                  title: "Direct Communication",
                  description: "Chat securely with buyers and negotiate the best prices",
                  gradient: "from-orange-500 to-red-500",
                },
                {
                  icon: TrendingUp,
                  title: "Market Insights",
                  description: "Track prices, trends, and seasonal demand across provinces",
                  gradient: "from-yellow-500 to-amber-500",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="backdrop-blur-xl bg-white/20 border border-white/30 hover:bg-white/30 transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 group"
                >
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="h-8 w-8 text-white drop-shadow-lg" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-amber-900 mb-3">{feature.title}</CardTitle>
                    <CardDescription className="text-amber-800 text-lg leading-relaxed font-medium">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </section>

            {/* Stats Section with Enhanced Glassmorphism */}
            <section className="backdrop-blur-xl bg-white/25 rounded-3xl p-10 border border-white/40 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-4xl font-black text-amber-900 mb-4">Trusted by Thousands</h3>
                <p className="text-xl text-amber-800 font-semibold">Real impact, real results</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: "12,000+", label: "Active Farmers", icon: Users },
                  { value: "₱2.1B", label: "Total Sales", icon: DollarSign },
                  { value: "85%", label: "Price Increase", icon: TrendingUp },
                  { value: "4.9★", label: "User Rating", icon: Star },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="mb-4">
                      <stat.icon className="h-8 w-8 text-amber-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-amber-900 mb-2 group-hover:text-orange-800 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-amber-800 font-bold text-lg">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="flex justify-center">
            <div className="bg-white/80 rounded-3xl shadow-2xl p-8 flex flex-col items-center border border-white/40 backdrop-blur-xl max-w-2xl w-full">
              <img
                src="/placeholder-user.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-amber-500 shadow-lg mb-6 object-cover"
              />
              <h1 className="text-3xl font-black text-amber-900 mb-2">Juan Dela Cruz</h1>
              <p className="text-lg text-amber-800 mb-4">juan.delacruz@email.com</p>
              <div className="w-full mb-6">
                <h2 className="text-xl font-bold text-amber-900 mb-2">User Details</h2>
                <div className="bg-white/60 rounded-xl p-4 shadow flex flex-col gap-2">
                  <div className="flex justify-between text-amber-800 font-medium">
                    <span>Location:</span>
                    <span>Nueva Ecija, Philippines</span>
                  </div>
                  <div className="flex justify-between text-amber-800 font-medium">
                    <span>Role:</span>
                    <span>Farmer</span>
                  </div>
                  <div className="flex justify-between text-amber-800 font-medium">
                    <span>Member Since:</span>
                    <span>2022</span>
                  </div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-all duration-300">Edit Profile</button>
            </div>
          </div>
        )}

        {/* Signup Tab */}
        {activeTab === "signup" && (
          <div className="flex justify-center">
            <div className="bg-white/80 rounded-3xl shadow-2xl p-8 w-full max-w-md border border-white/40 backdrop-blur-xl flex flex-col items-center">
              <h1 className="text-3xl font-black text-amber-900 mb-6 text-center">Sign Up</h1>
              <form className="flex flex-col gap-4 w-full">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="px-4 py-3 rounded-xl border border-amber-300 focus:border-amber-500 outline-none bg-white/60 text-amber-900 font-medium shadow"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-3 rounded-xl border border-amber-300 focus:border-amber-500 outline-none bg-white/60 text-amber-900 font-medium shadow"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="px-4 py-3 rounded-xl border border-amber-300 focus:border-amber-500 outline-none bg-white/60 text-amber-900 font-medium shadow"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="px-4 py-3 rounded-xl border border-amber-300 focus:border-amber-500 outline-none bg-white/60 text-amber-900 font-medium shadow"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 mt-2"
                >
                  Create Account
                </button>
              </form>
              <p className="text-center text-amber-800 mt-6">
                Already have an account?{' '}
                <span className="text-orange-600 font-bold hover:underline cursor-pointer">Log in</span>
              </p>
            </div>
          </div>
        )}

        {/* Listings Tab with Enhanced Cards */}
        {activeTab === "listings" && (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text text-transparent mb-2">
                  Palay Listings
                </h2>
                <p className="text-xl text-amber-800 font-semibold">Fresh harvests from trusted farmers</p>
              </div>
              <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-xl backdrop-blur-sm border border-white/20 font-bold text-lg px-8 py-3">
                <Upload className="h-5 w-5 mr-2" />
                Post New Listing
              </Button>
            </div>

            {/* Enhanced Filters */}
            <div className="backdrop-blur-xl bg-white/20 rounded-2xl p-6 border border-white/30 shadow-xl">
              <div className="flex flex-wrap gap-4">
                <Select>
                  <SelectTrigger className="w-[200px] backdrop-blur-sm bg-white/30 border-white/40 font-semibold">
                    <SelectValue placeholder="Select Province" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nueva-ecija">Nueva Ecija</SelectItem>
                    <SelectItem value="pangasinan">Pangasinan</SelectItem>
                    <SelectItem value="isabela">Isabela</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[200px] backdrop-blur-sm bg-white/30 border-white/40 font-semibold">
                    <SelectValue placeholder="Rice Variety" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ir64">IR64</SelectItem>
                    <SelectItem value="psb-rc82">PSB Rc82</SelectItem>
                    <SelectItem value="nsic-rc222">NSIC Rc222</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Search listings..."
                  className="max-w-xs backdrop-blur-sm bg-white/30 border-white/40 placeholder:text-amber-700 font-semibold"
                />
              </div>
            </div>

            {/* Enhanced Listings Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {listings.map((listing) => (
                <Card
                  key={listing.id}
                  className="backdrop-blur-xl bg-white/20 border border-white/30 hover:bg-white/30 transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 group overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-br from-amber-200 to-orange-200 overflow-hidden relative">
                    <img
                      src={listing.image || "/placeholder.svg"}
                      alt={`${listing.variety} palay`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="secondary"
                        className="backdrop-blur-sm bg-white/80 text-amber-900 font-bold text-sm px-3 py-1"
                      >
                        {listing.quantity}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl font-bold text-amber-900 mb-1">{listing.variety}</CardTitle>
                        <CardDescription className="flex items-center gap-2 text-amber-800 font-semibold text-base">
                          <MapPin className="h-4 w-4" />
                          {listing.location}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-800 mb-4 font-medium leading-relaxed">{listing.description}</p>
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-3xl font-black text-amber-900">{listing.price}</div>
                      <div className="flex items-center gap-1 backdrop-blur-sm bg-white/30 rounded-full px-3 py-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-amber-900">{listing.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                      <Avatar className="h-10 w-10 ring-2 ring-white/50">
                        <AvatarFallback className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold">
                          {listing.farmer
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-bold text-amber-900 text-lg">{listing.farmer}</span>
                    </div>
                    <div className="flex gap-3">
                      <Button className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold shadow-xl">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-2 border-amber-500 text-amber-700 hover:bg-white/30 backdrop-blur-sm"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Messages Tab with Glassmorphism */}
        {activeTab === "messages" && (
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text text-transparent">
              Messages
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Conversations List */}
              <Card className="lg:col-span-1 backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-amber-900">Conversations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "Maria Santos", message: "Interested in your IR64 palay...", time: "2m ago", unread: true },
                    {
                      name: "Juan Cruz",
                      message: "What's your best price for 100 sacks?",
                      time: "1h ago",
                      unread: false,
                    },
                    { name: "Pedro Reyes", message: "Thank you for the quality palay!", time: "3h ago", unread: false },
                  ].map((conversation, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl hover:bg-white/30 cursor-pointer transition-all duration-300 backdrop-blur-sm"
                    >
                      <Avatar className="ring-2 ring-white/50">
                        <AvatarFallback className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold">
                          {conversation.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <p className="font-bold text-amber-900 truncate">{conversation.name}</p>
                          <span className="text-sm text-amber-700 font-semibold">{conversation.time}</span>
                        </div>
                        <p className="text-amber-800 truncate font-medium">{conversation.message}</p>
                      </div>
                      {conversation.unread && (
                        <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-lg"></div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Chat Window */}
              <Card className="lg:col-span-2 backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl">
                <CardHeader className="border-b border-white/30 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <Avatar className="ring-2 ring-white/50">
                      <AvatarFallback className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold">
                        MS
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-2xl font-bold text-amber-900">Maria Santos</CardTitle>
                      <CardDescription className="text-amber-700 font-semibold">Online now</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-96 p-6 overflow-y-auto space-y-4">
                    <div className="flex justify-start">
                      <div className="backdrop-blur-sm bg-white/40 rounded-2xl p-4 max-w-xs shadow-lg">
                        <p className="text-amber-900 font-medium">
                          Hi! I'm interested in your IR64 palay. Is it still available?
                        </p>
                        <span className="text-xs text-amber-700 font-semibold">10:30 AM</span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl p-4 max-w-xs shadow-lg">
                        <p className="font-medium">Yes, I have 50 sacks available. Quality is excellent!</p>
                        <span className="text-xs text-amber-100 font-semibold">10:32 AM</span>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="backdrop-blur-sm bg-white/40 rounded-2xl p-4 max-w-xs shadow-lg">
                        <p className="text-amber-900 font-medium">
                          Great! Can you send me some photos? And what's your best price?
                        </p>
                        <span className="text-xs text-amber-700 font-semibold">10:35 AM</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-white/30 p-6 backdrop-blur-sm">
                    <div className="flex gap-3">
                      <Input
                        placeholder="Type your message..."
                        className="flex-1 backdrop-blur-sm bg-white/30 border-white/40 placeholder:text-amber-700 font-medium"
                      />
                      <Button
                        size="icon"
                        className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-xl"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Tracker & Rankings Tab (Merged) */}
        {activeTab === "tracker_rankings" && (
          <div className="space-y-16">
            {/* --- Seasonal Tracker Section --- */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text text-transparent mb-2">
                  Seasonal Tracker
                </h2>
                <p className="text-xl text-amber-800 font-semibold">
                  Track harvest seasons and palay availability across provinces
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Map Placeholder */}
                <Card className="backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-amber-900">Philippines Harvest Map</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square bg-gradient-to-br from-green-200/50 to-amber-200/50 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                      <div className="text-center">
                        <MapPin className="h-20 w-20 text-amber-600 mx-auto mb-6 drop-shadow-lg" />
                        <p className="text-xl font-bold text-amber-800 mb-2">Interactive Harvest Map</p>
                        <p className="text-amber-700 font-medium">Click provinces to see detailed information</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Seasonal Calendar */}
                <Card className="backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-amber-900">Harvest Calendar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { month: "January", provinces: ["Mindanao", "Palawan"], status: "Peak" },
                        { month: "February", provinces: ["Mindanao", "Visayas"], status: "Active" },
                        { month: "March", provinces: ["Luzon Central"], status: "Starting" },
                        { month: "April", provinces: ["Nueva Ecija", "Pangasinan"], status: "Peak" },
                        { month: "May", provinces: ["Isabela", "Cagayan"], status: "Peak" },
                        { month: "June", provinces: ["Northern Luzon"], status: "Active" },
                      ].map((period, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 backdrop-blur-sm bg-white/30 rounded-xl border border-white/40 hover:bg-white/40 transition-all duration-300"
                        >
                          <div>
                            <p className="font-bold text-amber-900 text-lg">{period.month}</p>
                            <p className="text-amber-800 font-medium">{period.provinces.join(", ")}</p>
                          </div>
                          <Badge
                            variant={period.status === "Peak" ? "default" : "secondary"}
                            className={`${period.status === "Peak"
                              ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                              : "backdrop-blur-sm bg-white/50 text-amber-800 border border-white/40"
                              } font-bold px-4 py-2`}
                          >
                            {period.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Current Season Highlights */}
              <Card className="backdrop-blur-xl bg-white/25 border border-white/40 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-amber-900">Current Season Highlights</CardTitle>
                  <CardDescription className="text-xl text-amber-800 font-semibold">
                    Active harvest regions this month
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { province: "Nueva Ecija", variety: "IR64", availability: "High", price: "₱1,200" },
                      { province: "Pangasinan", variety: "PSB Rc82", availability: "Medium", price: "₱1,150" },
                      { province: "Isabela", variety: "NSIC Rc222", availability: "High", price: "₱1,300" },
                    ].map((highlight, index) => (
                      <div
                        key={index}
                        className="p-6 backdrop-blur-sm bg-white/30 rounded-2xl border border-white/40 hover:bg-white/40 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <h4 className="font-black text-xl text-amber-900 mb-1">{highlight.province}</h4>
                        <p className="text-amber-800 font-semibold mb-4">{highlight.variety}</p>
                        <div className="flex justify-between items-center">
                          <Badge
                            variant="outline"
                            className="border-2 border-amber-500 text-amber-800 font-bold px-3 py-1"
                          >
                            {highlight.availability} Supply
                          </Badge>
                          <span className="font-black text-2xl text-amber-900">{highlight.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* --- Provincial Rankings Section --- */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text text-transparent mb-2">
                  Provincial Rankings
                </h2>
                <p className="text-xl text-amber-800 font-semibold">
                  Top-performing provinces based on yield, quality, and demand
                </p>
              </div>

              {/* Enhanced Filters */}
              <div className="backdrop-blur-xl bg-white/20 rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="flex flex-wrap gap-4">
                  <Select>
                    <SelectTrigger className="w-[200px] backdrop-blur-sm bg-white/30 border-white/40 font-semibold">
                      <SelectValue placeholder="Ranking Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yield">Total Yield</SelectItem>
                      <SelectItem value="quality">Quality Rating</SelectItem>
                      <SelectItem value="demand">Market Demand</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[200px] backdrop-blur-sm bg-white/30 border-white/40 font-semibold">
                      <SelectValue placeholder="Season" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="current">Current Season</SelectItem>
                      <SelectItem value="wet">Wet Season</SelectItem>
                      <SelectItem value="dry">Dry Season</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Enhanced Rankings */}
              <div className="space-y-6">
                {provinces.map((province, index) => (
                  <Card
                    key={index}
                    className="backdrop-blur-xl bg-white/20 border border-white/30 hover:bg-white/30 transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center gap-6">
                        <div className="flex-shrink-0">
                          <div
                            className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl ${index === 0
                              ? "bg-gradient-to-r from-yellow-400 to-yellow-600"
                              : index === 1
                                ? "bg-gradient-to-r from-gray-300 to-gray-500"
                                : index === 2
                                  ? "bg-gradient-to-r from-amber-500 to-amber-700"
                                  : "bg-gradient-to-r from-amber-400 to-orange-500"
                              }`}
                          >
                            {index + 1}
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                            <div>
                              <h3 className="text-3xl font-black text-amber-900 mb-2">{province.name}</h3>
                              <p className="text-amber-800 font-bold text-lg">Primary Variety: {province.variety}</p>
                            </div>

                            <div className="flex flex-wrap gap-8">
                              <div className="text-center">
                                <p className="text-3xl font-black text-amber-900 mb-1">{province.yield}</p>
                                <p className="text-amber-700 font-bold">Total Yield</p>
                              </div>
                              <div className="text-center">
                                <div className="flex items-center gap-2 justify-center mb-1">
                                  <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                                  <span className="text-3xl font-black text-amber-900">{province.rating}</span>
                                </div>
                                <p className="text-amber-700 font-bold">Quality Rating</p>
                              </div>
                              <div className="text-center">
                                <Badge
                                  variant="secondary"
                                  className="backdrop-blur-sm bg-green-200/80 text-green-800 font-bold px-4 py-2 text-lg"
                                >
                                  {province.season}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === "analytics" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text text-transparent mb-2">
                Market Analytics
              </h2>
              <p className="text-xl text-amber-800 font-semibold">
                Insights into market trends, pricing, and regional performance
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Price Trends Chart */}
              <Card className="backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-amber-900">Price Trends</CardTitle>
                  <CardDescription className="text-amber-800 font-semibold text-lg">
                    Average palay prices over the last 6 months
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-gradient-to-br from-amber-100/50 to-orange-100/50 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <div className="text-center">
                      <BarChart3 className="h-20 w-20 text-amber-600 mx-auto mb-6 drop-shadow-lg" />
                      <p className="text-xl font-bold text-amber-800 mb-2">Price Trend Visualization</p>
                      <p className="text-amber-700 font-medium">Interactive chart showing price movements</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Regional Performance */}
              <Card className="backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-amber-900">Regional Performance</CardTitle>
                  <CardDescription className="text-amber-800 font-semibold text-lg">
                    Top performing regions by volume and value
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { region: "Central Luzon", volume: "45%", value: "₱2.1B", growth: "+12%" },
                      { region: "Ilocos Region", volume: "28%", value: "₱1.3B", growth: "+8%" },
                      { region: "Cagayan Valley", volume: "18%", value: "₱850M", growth: "+15%" },
                      { region: "CALABARZON", volume: "9%", value: "₱420M", growth: "+5%" },
                    ].map((region, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 backdrop-blur-sm bg-white/30 rounded-xl border border-white/40 hover:bg-white/40 transition-all duration-300"
                      >
                        <div>
                          <p className="font-black text-amber-900 text-lg">{region.region}</p>
                          <p className="text-amber-800 font-semibold">Volume: {region.volume}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-black text-amber-900 text-xl">{region.value}</p>
                          <Badge
                            variant="secondary"
                            className="backdrop-blur-sm bg-green-200/80 text-green-800 font-bold"
                          >
                            {region.growth}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Market Insights */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Market Demand",
                  value: "↑ 18%",
                  description: "Increased demand this quarter",
                  color: "text-green-600",
                  icon: TrendingUp,
                },
                {
                  title: "Average Price",
                  value: "₱1,217",
                  description: "Per sack nationwide average",
                  color: "text-amber-900",
                  icon: DollarSign,
                },
                {
                  title: "Active Listings",
                  value: "2,847",
                  description: "Currently available",
                  color: "text-blue-600",
                  icon: Wheat,
                },
              ].map((insight, index) => (
                <Card
                  key={index}
                  className="backdrop-blur-xl bg-white/25 border border-white/40 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 group"
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <insight.icon className="h-8 w-8 text-white drop-shadow-lg" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-amber-900 mb-2">{insight.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className={`text-4xl font-black mb-3 ${insight.color}`}>{insight.value}</div>
                    <p className="text-amber-800 font-semibold">{insight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Enhanced Footer with Glassmorphism */}
      <footer className="backdrop-blur-xl bg-amber-900/80 text-amber-100 py-16 mt-20 border-t border-white/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <Wheat className="h-7 w-7 text-white drop-shadow-lg" />
                </div>
                <span className="text-2xl font-black">AniLink</span>
              </div>
              <p className="text-amber-200 font-medium text-lg leading-relaxed">
                Empowering Filipino farmers through direct market access and fair pricing.
              </p>
            </div>

            <div>
              <h4 className="font-black text-xl mb-6">Platform</h4>
              <ul className="space-y-3 text-amber-200">
                <li>
                  <a href="#" className="hover:text-white font-semibold transition-colors duration-300">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-semibold transition-colors duration-300">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-semibold transition-colors duration-300">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-semibold transition-colors duration-300">
                    Mobile App
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xl mb-6">Support</h4>
              <ul className="space-y-3 text-amber-200">
                <li>
                  <a href="#" className="hover:text-white font-semibold transition-colors duration-300">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-semibold transition-colors duration-300">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-semibold transition-colors duration-300">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-semibold transition-colors duration-300">
                    Training
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xl mb-6">Contact</h4>
              <div className="space-y-4 text-amber-200">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">+63 2 8123 4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span className="font-semibold">support@anilink.ph</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-800/50 mt-12 pt-8 text-center text-amber-200">
            <p className="font-semibold text-lg">
              &copy; 2024 AniLink. All rights reserved. Built for Filipino farmers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
