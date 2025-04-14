"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  Play,
  Award,
  Medal,
  Trophy,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ChevronDown,
  X,
  Calendar,
  Search,
  Globe,
  Flag,
  Users,
  User,
  ChevronUp,
} from "lucide-react"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Input } from "../components/ui/input"

import tkd1 from "../assets/tkd/tkd1.JPG"
import tkd2 from "../assets/tkd/tkd2.jpg"
import tkd3 from "../assets/tkd/tkd3.jpg"
import tkd4 from "../assets/tkd/tkd4.JPG"
import tkd5 from "../assets/tkd/tkd5.JPG"
import tkd6 from "../assets/tkd/tkd6.JPG"
import tkd8 from "../assets/tkd/tkd8.JPG"
import tkd9 from "../assets/tkd/tkd9.JPG"
import tkd10 from "../assets/tkd/tkd10.JPG"
import tkd12 from "../assets/tkd/tkd12.JPG"
import tkd13 from "../assets/tkd/tkd13.JPG"
import tkd14 from "../assets/tkd/tkd14.JPG"
import tkd15 from "../assets/tkd/tkd15.JPG"
import tkd16 from "../assets/tkd/tkd16.JPG"
import tkd17 from "../assets/tkd/tkd17.JPG"
import tkd21 from "../assets/tkd/tkd21.jpg"
import tkd22 from "../assets/tkd/tkd22.jpg"
import tkd23 from "../assets/tkd/tkd23.JPG"
import tkd24 from "../assets/tkd/tkd24.JPG"
import tkd25 from "../assets/tkd/tkd25.JPG"
import tkd26 from "../assets/tkd/tkd26.JPG"

export default function Taekwondo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const accomplishmentsRef = useRef<HTMLDivElement>(null)
  const videosRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  const [activePhotoIndex, setActivePhotoIndex] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [activeYear, setActiveYear] = useState<string | null>(null)
  const [showAllAchievements, setShowAllAchievements] = useState(false)

  // Scroll-triggered animations
  const isIntroInView = useInView(introRef, { once: false, amount: 0.5 })
  const isAccomplishmentsInView = useInView(accomplishmentsRef, {
    once: false,
    amount: 0.1,
    margin: "100px 0px 0px 0px",
  })
  const isVideosInView = useInView(videosRef, { once: false, amount: 0.3 })
  const isGalleryInView = useInView(galleryRef, { once: false, amount: 0.3 })

  // Data
  const mainHighlights = [
    {
      id: 1,
      title: "2022 World Championships",
      category: "Individual Male Under 17 Freestyle",
      year: "2022",
      medal: "Silver",
      location: "Goyang, South Korea",
      description:
        "Represented the United States at the World Championships, after mainting rank #1 in the USA and placing gold at qualifying competitions.",
      icon: <Medal className="w-1/2 h-1/2 text-gray-700" />,
      color: "from-gray-300 to-gray-400",
      iconColor: "text-gray-700",
      medalColor: "text-gray-300",
    },
    {
      id: 2,
      title: "Muju World Taekwondo Poomsae Challenge",
      category: "Individual Male Under 17 Freestyle",
      year: "2022",
      medal: "Gold",
      location: "Muju, South Korea",
      description:
        "1 of 6 selected to represent the United States and earned gold medals in both the Muju World Taekwondo Poomsae Challenge and Muju World Taekwondo Poomsae Challenge II.",
      icon: <Trophy className="w-1/2 h-1/2 text-yellow-700" />,
      color: "from-yellow-300 to-yellow-500",
      iconColor: "text-yellow-700",
      medalColor: "text-yellow-400",
    },
    {
      id: 3,
      title: "Pan American Games",
      category: "Individual Male Senior Poomsae & Freestyle Pair",
      year: "2023",
      medal: "Competitor",
      location: "Santiago, Chile",
      description: "Youngest competitor to qualify and compete in the Pan Am Games across all participating countries.",
      icon: <Flag className="w-1/2 h-1/2 text-sky-700" />,
      color: "from-sky-300 to-sky-500",
      iconColor: "text-sky-700",
      medalColor: "text-sky-400",
    },
    {
      id: 4,
      title: "2024 World Championships",
      category: "Freestyle Senior Team",
      year: "2024",
      medal: "Competitor",
      location: "Hong Kong",
      description: "Selected as captain of the US National Team. Represented the United States in the over 18 Freestyle Mixed Team category.",
      icon: <Flag className="w-1/2 h-1/2 text-sky-700" />,
      color: "from-sky-300 to-sky-500",
      iconColor: "text-sky-700",
      medalColor: "text-sky-400",
    },
  ]

  const achievements = [
    // 2025 Achievements
    {
      id: 52,
      title: "NCTA Summer World University Games Team Trials",
      category: "Male Freestyle & Poomsae Team",
      year: "2025",
      medal: "Gold",
      type: "Freestyle & Poomsae",
      teamType: "Team",
    },
    {
      id: 53,
      title: "NCTA Collegiate Nationals",
      category: "Senior Pair Poomsae",
      year: "2025",
      medal: "Bronze",
      type: "Poomsae",
      teamType: "Pair",
    },

    // 2024 Achievements
    {
      id: 54,
      title: "US Open",
      category: "Freestyle Senior Individual Male",
      year: "2024",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 55,
      title: "US Open",
      category: "Freestyle Senior Pair",
      year: "2024",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Pair",
    },
    {
      id: 56,
      title: "California State Championships",
      category: "Senior Male Team Poomsae",
      year: "2024",
      medal: "Gold",
      type: "Poomsae",
      teamType: "Team",
    },
    {
      id: 57,
      title: "California State Championships",
      category: "Senior Pair Poomsae",
      year: "2024",
      medal: "Silver",
      type: "Poomsae",
      teamType: "Pair",
    },
    {
      id: 58,
      title: "California State Championships",
      category: "Freestyle Senior Individual Male",
      year: "2024",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 59,
      title: "California State Championships",
      category: "Freestyle Senior Pair",
      year: "2024",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Pair",
    },
    {
      id: 60,
      title: "US National Championships",
      category: "Freestyle Senior Individual Male",
      year: "2024",
      medal: "Silver",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 61,
      title: "US National Championships",
      category: "Freestyle Senior Pair",
      year: "2024",
      medal: "Silver",
      type: "Freestyle",
      teamType: "Pair",
    },
    {
      id: 62,
      title: "World Championships",
      category: "Freestyle Senior Team",
      year: "2024",
      medal: "Competitor",
      type: "Freestyle",
      teamType: "Team",
    },

    // Gold medals (existing)
    {
      id: 1,
      title: "Poomsae Team Trials",
      category: "Freestyle Senior Pair",
      year: "2024",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Pair",
    },
    {
      id: 2,
      title: "Cadet & Junior Pan American Championship",
      category: "Freestyle Junior Team",
      year: "2023",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Team",
    },
    {
      id: 3,
      title: "Dominican Open Championship",
      category: "Freestyle Junior Individual Male",
      year: "2023",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 4,
      title: "Brazil Open",
      category: "Freestyle Junior Individual Male",
      year: "2023",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 5,
      title: "Pan American Games Poomsae Team Trials",
      category: "Senior Pair",
      year: "2023",
      medal: "Gold",
      type: "Poomsae",
      teamType: "Pair",
    },
    {
      id: 6,
      title: "Poomsae Grand Slam",
      category: "Freestyle Junior Pair",
      year: "2022",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Pair",
    },
    {
      id: 7,
      title: "Poomsae Grand Slam",
      category: "Freestyle Junior Individual Male",
      year: "2022",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 8,
      title: "Muju World Taekwondo Poomsae Challenge II",
      category: "National Team Freestyle Junior Individual Male",
      year: "2022",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 9,
      title: "Muju World Taekwondo Poomsae Challenge",
      category: "National Team Freestyle Junior Individual Male",
      year: "2022",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 10,
      title: "Grand Prix Final",
      category: "Freestyle Junior Individual Male",
      year: "2022",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 11,
      title: "Grand Prix Final",
      category: "Freestyle Junior Team",
      year: "2022",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Team",
    },
    {
      id: 12,
      title: "US National Championships",
      category: "Freestyle Junior Team",
      year: "2022",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Team",
    },
    {
      id: 13,
      title: "US National Championships",
      category: "Freestyle Junior Individual Male",
      year: "2022",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 14,
      title: "Grand Prix West",
      category: "Freestyle Junior Team",
      year: "2022",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Team",
    },
    {
      id: 15,
      title: "Grand Prix West",
      category: "Freestyle Junior Pair",
      year: "2022",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Pair",
    },
    {
      id: 16,
      title: "Cadet & Junior Pan American Championship",
      category: "Freestyle Junior Individual Male",
      year: "2022",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 17,
      title: "Cadet & Junior Pan American Championship",
      category: "Freestyle Junior Pair",
      year: "2022",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Pair",
    },
    {
      id: 18,
      title: "Pan American Online Poomsae Championship",
      category: "Freestyle Junior Individual Male",
      year: "2022",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 19,
      title: "Poomsae Grand Slam",
      category: "Freestyle Junior Individual Male",
      year: "2022",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 20,
      title: "US National Championships",
      category: "Freestyle Junior Individual Male",
      year: "2021",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 21,
      title: "US National Championships",
      category: "Freestyle Junior Pair",
      year: "2021",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Pair",
    },
    {
      id: 22,
      title: "Grand Prix West",
      category: "Freestyle Junior Individual Male",
      year: "2021",
      medal: "Gold",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 23,
      title: "US Open Hanmadang",
      category: "Cadet Individual Male Poomsae",
      year: "2020",
      medal: "Gold",
      type: "Poomsae",
      teamType: "Individual",
    },

    // Silver medals
    {
      id: 24,
      title: "Poomsae Team Trials",
      category: "Freestyle Senior Team",
      year: "2024",
      medal: "Silver",
      type: "Freestyle",
      teamType: "Team",
    },
    {
      id: 25,
      title: "Lion's Cup",
      category: "Freestyle Junior Individual Male",
      year: "2023",
      medal: "Silver",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 26,
      title: "Costa Rica Open",
      category: "Freestyle Junior Individual Male",
      year: "2023",
      medal: "Silver",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 27,
      title: "Cadet & Junior Pan American Championship",
      category: "Freestyle Junior Individual Male",
      year: "2023",
      medal: "Silver",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 28,
      title: "Poomsae Team Trials",
      category: "Freestyle Junior Team",
      year: "2023",
      medal: "Silver",
      type: "Freestyle",
      teamType: "Team",
    },
    {
      id: 29,
      title: "Poomsae Grand Slam",
      category: "Freestyle Junior Team",
      year: "2022",
      medal: "Silver",
      type: "Freestyle",
      teamType: "Team",
    },
    {
      id: 30,
      title: "Grand Prix West",
      category: "Junior Individual Male Poomsae",
      year: "2022",
      medal: "Silver",
      type: "Poomsae",
      teamType: "Individual",
    },
    {
      id: 31,
      title: "Grand Prix West",
      category: "Freestyle Junior Individual Male",
      year: "2022",
      medal: "Silver",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 32,
      title: "Poomsae Team Trials",
      category: "Freestyle Junior Pair",
      year: "2022",
      medal: "Silver",
      type: "Freestyle",
      teamType: "Pair",
    },
    {
      id: 33,
      title: "Poomsae Grand Slam",
      category: "Freestyle Junior Pair",
      year: "2022",
      medal: "Silver",
      type: "Freestyle",
      teamType: "Pair",
    },
    {
      id: 34,
      title: "US National Championships",
      category: "Freestyle Junior Team",
      year: "2021",
      medal: "Silver",
      type: "Freestyle",
      teamType: "Team",
    },
    {
      id: 35,
      title: "Grand Prix West",
      category: "Freestyle Junior Pair",
      year: "2021",
      medal: "Silver",
      type: "Freestyle",
      teamType: "Pair",
    },
    {
      id: 36,
      title: "USATKD Poomsae Spooktacular",
      category: "Freestyle Junior Individual Male",
      year: "2021",
      medal: "Silver",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 37,
      title: "US Open Hanmadang",
      category: "Freestyle Junior Individual Male",
      year: "2020",
      medal: "Silver",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 38,
      title: "NCTA Live Online Poomsae Championship",
      category: "Cadet Individual Male Poomsae",
      year: "2020",
      medal: "Silver",
      type: "Poomsae",
      teamType: "Individual",
    },

    // Bronze medals
    {
      id: 39,
      title: "Costa Rica Open",
      category: "Junior Individual Male Poomsae",
      year: "2023",
      medal: "Bronze",
      type: "Poomsae",
      teamType: "Individual",
    },
    {
      id: 40,
      title: "US Open",
      category: "Freestyle Junior Team",
      year: "2023",
      medal: "Bronze",
      type: "Freestyle",
      teamType: "Team",
    },
    {
      id: 41,
      title: "US Open",
      category: "Freestyle Junior Individual Male",
      year: "2023",
      medal: "Bronze",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 42,
      title: "Poomsae Grand Slam",
      category: "Freestyle Junior Team",
      year: "2022",
      medal: "Bronze",
      type: "Freestyle",
      teamType: "Team",
    },
    {
      id: 43,
      title: "Grand Prix West",
      category: "Junior Individual Male Poomsae",
      year: "2021",
      medal: "Bronze",
      type: "Poomsae",
      teamType: "Individual",
    },
    {
      id: 44,
      title: "Grand Prix West",
      category: "Freestyle Junior Team",
      year: "2021",
      medal: "Bronze",
      type: "Freestyle",
      teamType: "Team",
    },
    {
      id: 45,
      title: "US Open Poomsae Championship",
      category: "Freestyle Junior Individual Male",
      year: "2021",
      medal: "Bronze",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 46,
      title: "Poomsae Grand Slam",
      category: "Freestyle Junior Individual Male",
      year: "2020",
      medal: "Bronze",
      type: "Freestyle",
      teamType: "Individual",
    },
    {
      id: 47,
      title: "Pan American Open Poomsae Championship",
      category: "Cadet Individual Male Poomsae",
      year: "2020",
      medal: "Bronze",
      type: "Poomsae",
      teamType: "Individual",
    },
    {
      id: 48,
      title: "NCTA Live Online Summer Poomsae Championship",
      category: "Cadet Individual Male Poomsae",
      year: "2020",
      medal: "Bronze",
      type: "Poomsae",
      teamType: "Individual",
    },
    {
      id: 49,
      title: "US National Championships",
      category: "Freestyle Junior Team",
      year: "2018",
      medal: "Bronze",
      type: "Freestyle",
      teamType: "Team",
    },
    {
      id: 50,
      title: "US National Championships",
      category: "Freestyle Junior Pair",
      year: "2018",
      medal: "Bronze",
      type: "Freestyle",
      teamType: "Pair",
    },

    // Other placements
    {
      id: 51,
      title: "Pan American Games",
      category: "Senior Individual Male",
      year: "2023",
      medal: "5th",
      type: "Poomsae",
      teamType: "Individual",
    },
  ]

  const videos = [
    {
      id: "1",
      title: "Senior Freestyle Male Individual",
      description: "US Nationals Performance 2024",
      thumbnail: tkd26,
      embedId: "PV0auGWrpUI&list=LL&index=14",
    },
    {
      id: "2",
      title: "Senior Freestyle Pair",
      description: "2024 USA Team Trials",
      thumbnail: tkd10,
      embedId: "DV83_e_Oky8&list=LL&index=28",
    },
    {
      id: "3",
      title: "Junior Freestyle Mixed Team",
      description: "2023 Cadet & Junior Pan Am Championships",
      thumbnail: tkd15,
      embedId: "D3w96LUjoRw&list=LL&index=89", 
    },
  ]

  const photos = [
    { id: 1, src: tkd1, alt: "Taekwondo performance" },
    { id: 2, src: tkd2, alt: "Taekwondo performance" },
    { id: 3, src: tkd3, alt: "Taekwondo performance" },
    { id: 4, src: tkd4, alt: "Taekwondo performance" },
    { id: 5, src: tkd5, alt: "Taekwondo performance" },
    { id: 6, src: tkd6, alt: "Taekwondo performance" },
    { id: 7, src: tkd8, alt: "Taekwondo performance" },
    { id: 8, src: tkd9, alt: "Taekwondo performance" },
    { id: 9, src: tkd12, alt: "Taekwondo performance" },
    { id: 11, src: tkd13, alt: "Taekwondo performance" },
    { id: 12, src: tkd14, alt: "Taekwondo performance" },
    { id: 14, src: tkd16, alt: "Taekwondo performance" },
    { id: 15, src: tkd17, alt: "Taekwondo performance" },
    { id: 16, src: tkd21, alt: "Taekwondo performance" },
    { id: 17, src: tkd22, alt: "Taekwondo performance" },
    { id: 18, src: tkd23, alt: "Taekwondo performance" },
    { id: 19, src: tkd24, alt: "Taekwondo performance" },
    { id: 20, src: tkd25, alt: "Taekwondo performance" },
  ]

  // Get unique years from achievements
  const years = [...new Set(achievements.map((a) => a.year))].sort((a, b) => Number.parseInt(b) - Number.parseInt(a))

  // Count medals by type
  const medalCounts = achievements.reduce(
    (acc, achievement) => {
      if (!acc[achievement.medal]) {
        acc[achievement.medal] = 0
      }
      acc[achievement.medal]++
      return acc
    },
    {} as Record<string, number>,
  )

  // Filter achievements based on active filter and search term
  const filteredAchievements = achievements.filter((achievement) => {
    const matchesFilter =
      activeFilter === "all" ||
      activeFilter === achievement.medal.toLowerCase() ||
      activeFilter === achievement.type.toLowerCase() ||
      activeFilter === achievement.teamType.toLowerCase()

    const matchesSearch =
      achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      achievement.category.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesYear = !activeYear || achievement.year === activeYear

    return matchesFilter && matchesSearch && matchesYear
  })

  // Sort achievements by year (newest first)
  const sortedAchievements = [...filteredAchievements].sort((a, b) => {
    return Number.parseInt(b.year) - Number.parseInt(a.year)
  })

  // Limit displayed achievements unless showAll is true
  const displayedAchievements = showAllAchievements ? sortedAchievements : sortedAchievements.slice(0, 12)

  const nextPhoto = useCallback(() => {
    setActivePhotoIndex((prev) => (prev + 1) % photos.length)
  }, [photos.length])

  const prevPhoto = useCallback(() => {
    setActivePhotoIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }, [photos.length])

  const openGallery = useCallback((index: number) => {
    setActivePhotoIndex(index)
    setIsGalleryOpen(true)
  }, [])

  // Handle keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isGalleryOpen) return

      if (e.key === "ArrowRight") nextPhoto()
      if (e.key === "ArrowLeft") prevPhoto()
      if (e.key === "Escape") setIsGalleryOpen(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isGalleryOpen, nextPhoto, prevPhoto])

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Intro Section - Clean with no background */}
      <motion.div
        ref={introRef}
        className="min-h-[40vh] flex flex-col items-center justify-center text-center relative px-4 py-8"
      >
        <motion.div
          className="relative z-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isIntroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bubble mb-6 text-blue-500">My Taekwondo Journey</h1>

          <p className="text-xl text-gray-700 mb-8">
            I started Taekwondo when I was 6 years old. Since then, I've made the U.S. national team four times, been chosen as national team captain twice, and led the Sacramento Taekwondo Club competition team, helping numerous athletes make the national team. </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="px-4 py-2 text-base bg-sky-100 text-sky-800 hover:bg-sky-200">Team USA</Badge>
            <Badge className="px-4 py-2 text-base bg-sky-100 text-sky-800 hover:bg-sky-200">
              World Championship Medalist
            </Badge>
            <Badge className="px-4 py-2 text-base bg-sky-100 text-sky-800 hover:bg-sky-200">Certified Referee</Badge>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={isIntroInView ? { opacity: 1, y: [0, 10, 0] } : { opacity: 0 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
        >
          <ChevronDown className="h-10 w-10 text-sky-300" />
        </motion.div>
      </motion.div>

      {/* Main Highlights Section */}
      <div className="py-16 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Major Achievements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-90`}></div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <img
                    src="/placeholder.svg?height=400&width=800"
                    alt=""
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative p-6 flex flex-col h-full">
                  <div className="flex items-start">
                    {/* Medal Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, type: "spring", delay: index * 0.1 }}
                      className="w-16 h-16 flex-shrink-0 mr-4"
                    >
                      <div className="relative w-full h-full">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${highlight.color} rounded-full shadow-lg opacity-30`}
                        ></div>
                        <div className="absolute inset-1 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                          {highlight.icon}
                        </div>
                      </div>
                    </motion.div>

                    {/* Text Content */}
                    <div className="text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                      >
                        <h3 className="text-xl font-bold mb-1 text-white">{highlight.title}</h3>
                      </motion.div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    className="mt-4"
                  >
                    <div className="flex items-center text-white text-opacity-90 text-sm mb-2">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{highlight.year}</span>
                      <span className="mx-2">•</span>
                      <Globe className="h-3 w-3 mr-1" />
                      <span>{highlight.location}</span>
                    </div>

                    <div className="bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm text-white text-sm mb-4">
                      {highlight.description}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                    className="mt-auto"
                  >
                    <div
                      className={`inline-block px-3 py-1 rounded-full bg-white bg-opacity-20 text-white font-medium text-sm`}
                    >
                      {highlight.medal} Medal
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Medal Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 bg-white rounded-xl shadow-md p-6 flex flex-wrap justify-around items-center gap-4"
          >
            <div className="text-center">
              <div className="text-yellow-500 font-bold text-3xl md:text-4xl">{medalCounts["Gold"] || 0}</div>
              <div className="text-gray-600 text-sm md:text-base">Gold Medals</div>
            </div>
            <div className="text-center">
              <div className="text-gray-500 font-bold text-3xl md:text-4xl">{medalCounts["Silver"] || 0}</div>
              <div className="text-gray-600 text-sm md:text-base">Silver Medals</div>
            </div>
            <div className="text-center">
              <div className="text-amber-600 font-bold text-3xl md:text-4xl">{medalCounts["Bronze"] || 0}</div>
              <div className="text-gray-600 text-sm md:text-base">Bronze Medals</div>
            </div>
            <div className="text-center">
              <div className="text-sky-500 font-bold text-3xl md:text-4xl">{achievements.length}</div>
              <div className="text-gray-600 text-sm md:text-base">Total Achievements</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Achievements Section */}
      <div ref={accomplishmentsRef} className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isAccomplishmentsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">Career Achievements</h2>

          {/* Filters and Search */}
          <div className="mb-8 bg-white rounded-xl shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search competitions or categories..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                <Button
                  variant={activeYear === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveYear(null)}
                  className={activeYear === null ? "bg-sky-500 hover:bg-sky-600" : ""}
                >
                  All Years
                </Button>
                {years.map((year) => (
                  <Button
                    key={year}
                    variant={activeYear === year ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveYear(year)}
                    className={activeYear === year ? "bg-sky-500 hover:bg-sky-600" : ""}
                  >
                    {year}
                  </Button>
                ))}
              </div>
            </div>

            <Tabs defaultValue="all" onValueChange={setActiveFilter}>
              <TabsList className="w-full grid grid-cols-2 md:grid-cols-7 h-auto">
                <TabsTrigger value="all" className="py-2">
                  All
                </TabsTrigger>
                <TabsTrigger value="gold" className="py-2">
                  Gold
                </TabsTrigger>
                <TabsTrigger value="silver" className="py-2">
                  Silver
                </TabsTrigger>
                <TabsTrigger value="bronze" className="py-2">
                  Bronze
                </TabsTrigger>
                <TabsTrigger value="freestyle" className="py-2">
                  Freestyle
                </TabsTrigger>
                <TabsTrigger value="poomsae" className="py-2">
                  Poomsae
                </TabsTrigger>
                <TabsTrigger value="individual" className="py-2">
                  Individual
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Achievement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isAccomplishmentsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: Math.min(0.1 * (index % 6), 0.5) }}
                className={`rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all ${
                  achievement.medal === "Gold"
                    ? "bg-gradient-to-br from-yellow-50 to-yellow-100 border-l-4 border-yellow-400"
                    : achievement.medal === "Silver"
                      ? "bg-gradient-to-br from-gray-50 to-gray-100 border-l-4 border-gray-400"
                      : achievement.medal === "Bronze"
                        ? "bg-gradient-to-br from-amber-50 to-amber-100 border-l-4 border-amber-600"
                        : "bg-gradient-to-br from-sky-50 to-sky-100 border-l-4 border-sky-400"
                }`}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900">{achievement.title}</h3>
                      <p className="text-sm text-gray-600">{achievement.category}</p>
                    </div>
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-full ${
                        achievement.medal === "Gold"
                          ? "bg-yellow-100 text-yellow-600"
                          : achievement.medal === "Silver"
                            ? "bg-gray-100 text-gray-600"
                            : achievement.medal === "Bronze"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-sky-100 text-sky-600"
                      }`}
                    >
                      {achievement.medal === "Gold" && <Trophy className="h-5 w-5" />}
                      {achievement.medal === "Silver" && <Medal className="h-5 w-5" />}
                      {achievement.medal === "Bronze" && <Award className="h-5 w-5" />}
                      {achievement.medal !== "Gold" &&
                        achievement.medal !== "Silver" &&
                        achievement.medal !== "Bronze" && <Flag className="h-5 w-5" />}
                    </div>
                  </div>

                  <div className="flex items-center mt-3 text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{achievement.year}</span>
                    <span className="mx-2">•</span>
                    {achievement.teamType === "Individual" && <User className="h-3 w-3 mr-1" />}
                    {achievement.teamType === "Team" && <Users className="h-3 w-3 mr-1" />}
                    {achievement.teamType === "Pair" && <Users className="h-3 w-3 mr-1" />}
                    <span>{achievement.teamType}</span>
                    <span className="mx-2">•</span>
                    <span>{achievement.type}</span>
                  </div>

                  <div
                    className={`mt-3 text-xs inline-block px-2 py-1 rounded-full ${
                      achievement.medal === "Gold"
                        ? "bg-yellow-100 text-yellow-800"
                        : achievement.medal === "Silver"
                          ? "bg-gray-100 text-gray-800"
                          : achievement.medal === "Bronze"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-sky-100 text-sky-800"
                    }`}
                  >
                    {achievement.medal}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More/Less Button */}
          {sortedAchievements.length > 12 && (
            <div className="flex justify-center mt-8">
              <Button onClick={() => setShowAllAchievements(!showAllAchievements)} variant="outline" className="group">
                {showAllAchievements ? (
                  <>
                    Show Less
                    <ChevronUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                  </>
                ) : (
                  <>
                    Show More ({sortedAchievements.length - 12} more)
                    <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>
          )}
        </motion.div>
      </div>

      {/* Videos Section */}
      <div ref={videosRef} className="py-16 bg-sky-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVideosInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-4"
        >
          <h2 className="text-4xl font-bold mb-2 text-center text-gray-900">Some Videos!</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVideosInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-video">
                  <img src={video.thumbnail} alt={video.title} className="object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={`https://www.youtube.com/watch?v=${video.embedId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center hover:bg-opacity-100 transition-all duration-300"
                    >
                      <Play className="h-8 w-8 text-sky-500 ml-1" />
                    </a>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.embedId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-sky-500 hover:text-sky-600 font-medium"
                  >
                    Watch on YouTube <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Continuous Sliding Photo Gallery */}
      <div ref={galleryRef} className="py-16 px-4 bg-white mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isGalleryInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-2 text-center text-gray-900">Photo Gallery</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A glimpse into my Taekwondo journey through competition and training.
          </p>

          {/* Continuous Sliding Row */}
          <div className="relative overflow-hidden">
            {/* Main Gallery */}
            <div className="relative h-80 overflow-hidden rounded-xl">
              <motion.div
                className="absolute flex whitespace-nowrap"
                animate={{
                  x: [0, -12000],
                }}
                transition={{
                  x: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 120,
                    ease: "linear",
                  },
                }}
              >
                {/* Duplicate photos array to create continuous loop */}
                {[...photos, ...photos, ...photos].map((photo, index) => (
                  <div
                    key={`${photo.id}-${index}`}
                    className="relative h-80 w-[400px] inline-block mx-4 rounded-xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Overlay Gradients for Fade Effect */}
            <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}