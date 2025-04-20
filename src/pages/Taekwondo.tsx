"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Play,
  Award,
  Medal,
  Trophy,
  ExternalLink,
  ChevronDown,
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

import tkd1 from "../assets/Taekwondo Images/tkd1.JPG"
import tkd2 from "../assets/Taekwondo Images/tkd2.jpg"
import tkd3 from "../assets/Taekwondo Images/tkd3.jpg"
import tkd4 from "../assets/Taekwondo Images/tkd4.JPG"
import tkd5 from "../assets/Taekwondo Images/tkd5.JPG"
import tkd6 from "../assets/Taekwondo Images/tkd6.JPG"
import tkd8 from "../assets/Taekwondo Images/tkd8.JPG"
import tkd9 from "../assets/Taekwondo Images/tkd9.JPG"
import tkd10 from "../assets/Taekwondo Images/tkd10.JPG"
import tkd12 from "../assets/Taekwondo Images/tkd12.JPG"
import tkd13 from "../assets/Taekwondo Images/tkd13.JPG"
import tkd15 from "../assets/Taekwondo Images/tkd15.JPG"
import tkd16 from "../assets/Taekwondo Images/tkd16.JPG"
import tkd17 from "../assets/Taekwondo Images/tkd17.JPG"
import tkd21 from "../assets/Taekwondo Images/tkd21.jpg"
import tkd22 from "../assets/Taekwondo Images/tkd22.jpg"
import tkd23 from "../assets/Taekwondo Images/tkd23.JPG"
import tkd24 from "../assets/Taekwondo Images/tkd24.JPG"
import tkd25 from "../assets/Taekwondo Images/tkd25.JPG"
import tkd26 from "../assets/Taekwondo Images/tkd26.JPG"

export default function Taekwondo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const accomplishmentsRef = useRef<HTMLDivElement>(null)
  const videosRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

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
    { id: 1, src: tkd2, alt: "Taekwondo performance" },
    { id: 2, src: tkd3, alt: "Taekwondo performance" },
    { id: 3, src: tkd1, alt: "Taekwondo performance" },
    { id: 4, src: tkd4, alt: "Taekwondo performance" },
    { id: 5, src: tkd5, alt: "Taekwondo performance" },
    { id: 6, src: tkd6, alt: "Taekwondo performance" },
    { id: 7, src: tkd8, alt: "Taekwondo performance" },
    { id: 8, src: tkd9, alt: "Taekwondo performance" },
    { id: 9, src: tkd12, alt: "Taekwondo performance" },
    { id: 10, src: tkd13, alt: "Taekwondo performance" },
    { id: 11, src: tkd16, alt: "Taekwondo performance" },
    { id: 12, src: tkd17, alt: "Taekwondo performance" },
    { id: 13, src: tkd21, alt: "Taekwondo performance" },
    { id: 14, src: tkd22, alt: "Taekwondo performance" },
    { id: 15, src: tkd23, alt: "Taekwondo performance" },
    { id: 16, src: tkd24, alt: "Taekwondo performance" },
    { id: 27, src: tkd25, alt: "Taekwondo performance" },
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

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Intro Section - Clean with no background */}
      <motion.div
        ref={introRef}
        className="min-h-[40vh] flex flex-col items-center justify-center text-center relative px-4 py-6 md:py-8"
      >
        <motion.div
          className="relative z-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isIntroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-5xl font-bubble mb-4 md:mb-6 text-blue-500">My Taekwondo Journey</h1>

          <p className="text-sm md:text-xl text-gray-700 mb-4 md:mb-8 leading-relaxed">
            I began Taekwondo at the age of 6. And since, I've made the U.S. national team four times, been chosen as the national team captain twice, and led the Sacramento Taekwondo Club competition team, helping numerous athletes make the national team too.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <Badge className="px-2 py-1 md:px-4 md:py-2 text-xs md:text-base bg-sky-100 text-sky-800 hover:bg-sky-200">Team USA</Badge>
            <Badge className="px-2 py-1 md:px-4 md:py-2 text-xs md:text-base bg-sky-100 text-sky-800 hover:bg-sky-200">World Championship Medalist</Badge>
            <Badge className="px-2 py-1 md:px-4 md:py-2 text-xs md:text-base bg-sky-100 text-sky-800 hover:bg-sky-200">Certified Referee</Badge>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={isIntroInView ? { opacity: 1, y: [0, 10, 0] } : { opacity: 0 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
        >
          <ChevronDown className="h-6 w-6 md:h-10 md:w-10 text-sky-300" />
        </motion.div>
      </motion.div>

      {/* Main Highlights Section */}
      <div className="py-8 md:py-16 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-center text-gray-900">Major Achievements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {mainHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-90`}></div>

                {/* Content */}
                <div className="relative p-4 md:p-6 flex flex-col h-full">
                  <div className="flex items-start">
                    {/* Medal Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, type: "spring", delay: index * 0.1 }}
                      className="w-10 h-10 md:w-16 md:h-16 flex-shrink-0 mr-3 md:mr-4"
                    >
                      <div className="relative w-full h-full">
                        <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} rounded-full shadow-lg opacity-30`}></div>
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
                        <h3 className="text-base md:text-xl font-bold mb-1 text-white">{highlight.title}</h3>
                      </motion.div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    className="mt-3 md:mt-4"
                  >
                    <div className="flex items-center text-white text-opacity-90 text-xs md:text-sm mb-2">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{highlight.year}</span>
                      <span className="mx-2">•</span>
                      <Globe className="h-3 w-3 mr-1" />
                      <span>{highlight.location}</span>
                    </div>

                    <div className="bg-white bg-opacity-20 p-2 md:p-3 rounded-lg backdrop-blur-sm text-white text-xs md:text-sm mb-3 md:mb-4">
                      {highlight.description}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                    className="mt-auto"
                  >
                    <div className="inline-block px-2 py-1 md:px-3 md:py-1 rounded-full bg-white bg-opacity-20 text-white font-medium text-xs md:text-sm">
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
            className="mt-6 md:mt-8 bg-white rounded-xl shadow-md p-4 md:p-6 flex flex-wrap justify-around items-center gap-4"
          >
            <div className="text-center">
              <div className="text-2xl md:text-4xl text-yellow-500 font-bold">{medalCounts["Gold"] || 0}</div>
              <div className="text-xs md:text-base text-gray-600">Gold Medals</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl text-gray-500 font-bold">{medalCounts["Silver"] || 0}</div>
              <div className="text-xs md:text-base text-gray-600">Silver Medals</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl text-amber-600 font-bold">{medalCounts["Bronze"] || 0}</div>
              <div className="text-xs md:text-base text-gray-600">Bronze Medals</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl text-sky-500 font-bold">{achievements.length}</div>
              <div className="text-xs md:text-base text-gray-600">Total Achievements</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Videos Section */}
      <div ref={videosRef} className="py-8 md:py-16 bg-sky-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVideosInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-4"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-center text-gray-900">Some Videos!</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
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
                  <img src={video.thumbnail} alt={video.title} className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={`https://www.youtube.com/watch?v=${video.embedId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center hover:bg-opacity-100 transition-all duration-300"
                    >
                      <Play className="h-6 w-6 md:h-8 md:w-8 text-sky-500 ml-1" />
                    </a>
                  </div>
                </div>
                <div className="p-3 md:p-5">
                  <h3 className="font-bold text-sm md:text-lg mb-1 md:mb-2 text-gray-900">{video.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600">{video.description}</p>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.embedId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 md:mt-4 text-sky-500 hover:text-sky-600 font-medium text-xs md:text-base"
                  >
                    Watch on YouTube <ExternalLink className="ml-1 h-3 w-3 md:h-4 md:w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Gallery Section */}
      <div ref={galleryRef} className="py-8 md:py-16 px-4 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isGalleryInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-2 text-center text-gray-900">Photo Gallery</h2>
          <p className="text-center text-xs md:text-base text-gray-600 mb-6 md:mb-12 max-w-2xl mx-auto">
            A glimpse into my Taekwondo journey through competition and training.
          </p>

          {/* Continuous Sliding Row */}
          <div className="relative overflow-hidden">
            {/* Main Gallery */}
            <div className="relative h-48 md:h-80 overflow-hidden rounded-xl">
              <motion.div
                className="absolute flex whitespace-nowrap"
                animate={{
                  x: [0, -7500],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 60,
                    ease: "linear",
                  },
                }}
              >
                {/* Duplicate photos array to create continuous loop */}
                {[...photos, ...photos, ...photos].map((photo, index) => (
                  <div
                    key={`${photo.id}-${index}`}
                    className="relative h-48 md:h-80 w-[250px] md:w-[400px] inline-block mx-2 md:mx-4 rounded-xl overflow-hidden shadow-lg"
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
            <div className="absolute top-0 bottom-0 left-0 w-12 md:w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute top-0 bottom-0 right-0 w-12 md:w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          </div>
        </motion.div>
      </div>

      {/* Achievements Section */}
      <div ref={accomplishmentsRef} className="py-8 md:py-16 px-4 bg-sky-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isAccomplishmentsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center text-gray-900">Career Achievements</h2>

          {/* Filters and Search */}
          <div className="mb-6 md:mb-8 bg-white rounded-xl shadow-md p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-3 w-3 md:h-4 md:w-4" />
                  <Input
                    type="text"
                    placeholder="Search competitions or categories..."
                    className="pl-8 md:pl-10 text-xs md:text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex gap-1.5 md:gap-2 overflow-x-auto pb-2 md:pb-0">
                <Button
                  variant={activeYear === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveYear(null)}
                  className={`text-xs md:text-sm py-1 h-7 md:h-9 ${activeYear === null ? "bg-sky-500 hover:bg-sky-600" : ""}`}
                >
                  All Years
                </Button>
                {years.map((year) => (
                  <Button
                    key={year}
                    variant={activeYear === year ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveYear(year)}
                    className={`text-xs md:text-sm py-1 h-7 md:h-9 ${activeYear === year ? "bg-sky-500 hover:bg-sky-600" : ""}`}
                  >
                    {year}
                  </Button>
                ))}
              </div>
            </div>

            <Tabs defaultValue="all" onValueChange={setActiveFilter}>
              <TabsList className="w-full grid grid-cols-3 md:grid-cols-7 h-auto gap-1">
                <TabsTrigger value="all" className="py-1 md:py-2 text-xs md:text-sm">
                  All
                </TabsTrigger>
                <TabsTrigger value="gold" className="py-1 md:py-2 text-xs md:text-sm">
                  Gold
                </TabsTrigger>
                <TabsTrigger value="silver" className="py-1 md:py-2 text-xs md:text-sm">
                  Silver
                </TabsTrigger>
                <TabsTrigger value="bronze" className="py-1 md:py-2 text-xs md:text-sm">
                  Bronze
                </TabsTrigger>
                <TabsTrigger value="freestyle" className="py-1 md:py-2 text-xs md:text-sm">
                  Freestyle
                </TabsTrigger>
                <TabsTrigger value="poomsae" className="py-1 md:py-2 text-xs md:text-sm">
                  Poomsae
                </TabsTrigger>
                <TabsTrigger value="individual" className="py-1 md:py-2 text-xs md:text-sm">
                  Individual
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Achievement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
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
                <div className="p-3 md:p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-sm md:text-base text-gray-900">{achievement.title}</h3>
                      <p className="text-xs md:text-sm text-gray-600">{achievement.category}</p>
                    </div>
                    <div
                      className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full ${
                        achievement.medal === "Gold"
                          ? "bg-yellow-100 text-yellow-600"
                          : achievement.medal === "Silver"
                            ? "bg-gray-100 text-gray-600"
                            : achievement.medal === "Bronze"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-sky-100 text-sky-600"
                      }`}
                    >
                      {achievement.medal === "Gold" && <Trophy className="h-4 w-4 md:h-5 md:w-5" />}
                      {achievement.medal === "Silver" && <Medal className="h-4 w-4 md:h-5 md:w-5" />}
                      {achievement.medal === "Bronze" && <Award className="h-4 w-4 md:h-5 md:w-5" />}
                      {achievement.medal !== "Gold" &&
                        achievement.medal !== "Silver" &&
                        achievement.medal !== "Bronze" && <Flag className="h-4 w-4 md:h-5 md:w-5" />}
                    </div>
                  </div>

                  <div className="flex items-center mt-2 md:mt-3 text-[10px] md:text-xs text-gray-500">
                    <Calendar className="h-2.5 w-2.5 md:h-3 md:w-3 mr-1" />
                    <span>{achievement.year}</span>
                    <span className="mx-2">•</span>
                    {achievement.teamType === "Individual" && <User className="h-2.5 w-2.5 md:h-3 md:w-3 mr-1" />}
                    {achievement.teamType === "Team" && <Users className="h-2.5 w-2.5 md:h-3 md:w-3 mr-1" />}
                    {achievement.teamType === "Pair" && <Users className="h-2.5 w-2.5 md:h-3 md:w-3 mr-1" />}
                    <span>{achievement.teamType}</span>
                    <span className="mx-2">•</span>
                    <span>{achievement.type}</span>
                  </div>

                  <div
                    className={`mt-2 md:mt-3 text-[10px] md:text-xs inline-block px-2 py-0.5 md:px-2 md:py-1 rounded-full ${
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
            <div className="flex justify-center mt-6 md:mt-8">
              <Button 
                onClick={() => setShowAllAchievements(!showAllAchievements)} 
                variant="outline" 
                className="group text-xs md:text-sm h-8 md:h-10"
              >
                {showAllAchievements ? (
                  <>
                    Show Less
                    <ChevronUp className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 group-hover:-translate-y-1 transition-transform" />
                  </>
                ) : (
                  <>
                    Show More ({sortedAchievements.length - 12} more)
                    <ChevronDown className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 group-hover:translate-y-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}