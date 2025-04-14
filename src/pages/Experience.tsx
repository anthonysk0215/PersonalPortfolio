"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  ChevronUp,
  Lightbulb,
  BookOpen,
  Microscope,
  FlaskRoundIcon as Flask,
} from "lucide-react"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"

interface ResearchInternship {
  id: string
  year: string
  title: string
  institution: string
  location: string
  duration: string
  description: string
  highlights: string[]
  skills: string[]
  icon: React.ReactNode
  color: string
  header: string
}

export default function Experience() {
  const [activeInternship, setActiveInternship] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<HTMLDivElement[]>([])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const scrollProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current && scrollIndicatorRef.current) {
        const scrollPosition = window.scrollY
        if (scrollPosition > 100) {
          headerRef.current.classList.add("sticky-header")
          scrollIndicatorRef.current.classList.remove("opacity-0")
        } else {
          headerRef.current.classList.remove("sticky-header")
          scrollIndicatorRef.current.classList.add("opacity-0")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const internships: ResearchInternship[] = [
    {
      id: "research-lab",
      year: "Jan 2025",
      title: "Research Assistant",
      institution: "UCLA VCLA Lab",
      location: "Los Angeles, CA",
      duration: "Present",
      description:
        "Conducting research under Dr. Ying Nian Wu.",
      highlights: [
        "Studying and enhancing Large Language Models (LLMs) multimodal understanding via CLIP fine-tuning.",
      ],
      skills: ["Pytorch", "Python", "Machine Learning", "Computer Vision", "MatPlotLib", "NumPy"],
      icon: <Flask className="h-8 w-8" />,
      color: "bg-red-100 text-red-800",
      header: "Reserch Focus",
    },
    {
      id: "DailyBruin",
      year: "Oct 2024",
      title: "Software Engineer",
      institution: "Daily Bruin",
      location: "Los Angeles, CA",
      duration: "Present",
      description:
        "Developing and updating multiple internal tools for 19 other cross-functional Daily Bruin Newspaper teams to 1) help standardize designs, 2)help with social media scheduling, and 3) document design notes on printed newspapers.",
      highlights: [
        "Developed 'Woof' in team of 5, an internal web tool standardizing UCLA's newspaper designs, style guides, and layouts; implemented web page with search linking function using Next.js, reducing style ideation time by 50%.",
        "Revamped 'Buzz' linebreak formatter by enhancing its UI and adding features to clean up formatting, such as automatic bracket removal for quicker print design workflow.",
        "Working on 'Meow', updating Daily Bruin's X and Facebook post scheduler.",
      ],
      skills: ["Kubernetes", "React.js", "Docker", "Git", "Typescript", "Next.js", "MongoDB", "Git"],
      icon: <Microscope className="h-8 w-8" />,
      color: "bg-green-100 text-green-800",
      header: "Development Focus",
    },
    {
      id: "SwoonLearning",
      year: "May 2024",
      title: "Software Engineering Intern",
      institution: "Swoon Learning",
      location: "San Jose, CA",
      duration: "9 months",
      description:
        "Built and scaled Swoon Front Office, a live web tutoring management platform, from 3 to 120+ users.",
      highlights: [
        "Coding + meetings :)",
      ],
      skills: ["MySQL", "React.js", "Docker", "TypeScript", "Material UI", "Git"],
      icon: <BookOpen className="h-8 w-8" />,
      color: "bg-blue-100 text-blue-800",
      header: "Software Focus",
    },
    {
      id: "Panda Express",
      year: "Aug 2024",
      title: "Crew Member",
      institution: "Panda Express",
      location: "Sacramento, CA",
      duration: "2 months",
      description:
        "Ate rice with honey sesame chicken every shift.",
      highlights: [
        "Cleaned some tables.",
        "Bagged food and rang up too many orders."
      ],
      skills: ["Data Analysis"],
      icon: <BookOpen className="h-8 w-8" />,
      color: "bg-blue-100 text-blue-800",
      header: "Service Focus",
    },
    {
      id: "ML-Research",
      year: "Jun 2023",
      title: "Machine Learning Researcher",
      institution: "Harvard University",
      location: "Cambridge, MA",
      duration: "4 months",
      description:
        "Conducted research under Dr. Wanrong Zhang, authored paper on supervised machine learning classification models ability to predict Taekwondo routine scores, annotated 100+ tournaments for a robust dataset.",
      highlights: [
        "Selected as 1 of 5 students internationally to study and author paper under Dr. Wanrong Zhang's supervision from the Theory of Computation Group.",
        "Received STEM Merit Scholarship, covering $3,500 'Data Privacy in Modern Data Science' course and research expenses.",
      ],
      skills: ["Python", "SVM", "Data Privacy", "SKLearn", "Logistic Regression", "Random Forest", "Neural Networks", "SciPy", "Pandas"],
      icon: <Lightbulb className="h-8 w-8" />,
      color: "bg-purple-100 text-purple-800",
      header: "Research Focus"
    },
  ]

  const toggleInternship = (id: string) => {
    setActiveInternship(activeInternship === id ? null : id)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto mb-32"
    >
      {/* Sticky header */}
      <div ref={headerRef} className="transition-all duration-300 py-4 z-20 bg-white mb-10">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-bubble text-blue-500 ml-5">Experience</h1>
          <div
            ref={scrollIndicatorRef}
            className="h-2 w-24 bg-gray-100 rounded-full overflow-hidden opacity-0 transition-opacity duration-300"
          >
            <motion.div className="h-full bg-blue-500 rounded-full" style={{ width: scrollProgress }} />
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div ref={containerRef} className="relative pb-20">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 transform md:translate-x-px"></div>

        {/* Timeline items */}
        <div className="space-y-32">
          {internships.map((internship, index) => {
            return (
              <TimelineItem
                key={internship.id}
                internship={internship}
                index={index}
                activeInternship={activeInternship}
                toggleInternship={toggleInternship}
                itemRefs={itemRefs}
              />
            )
          })}
        </div>
      </div>

      {/* End of timeline indicator */}
      <div className="flex justify-center">
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
          </div>
        </div>
      </div>

      <style>{`
        .sticky-header {
          position: sticky;
          top: 0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
      `}</style>
    </motion.div>
  )
}

interface TimelineItemProps {
  internship: ResearchInternship
  index: number
  activeInternship: string | null
  toggleInternship: (id: string) => void
  itemRefs: React.RefObject<HTMLDivElement[]>
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  internship,
  index,
  activeInternship,
  toggleInternship,
  itemRefs,
}) => {
  const itemRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(itemRef, { once: false, amount: 0.3 })

  useEffect(() => {
    if (itemRef.current && itemRefs.current) {
      itemRefs.current[index] = itemRef.current
    }
  }, [itemRefs, index])

  return (
    <motion.div
      key={internship.id}
      ref={itemRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
    >
      {/* Timeline dot with animated pulse */}
      <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-blue-300 border-4 border-white transform -translate-x-2 md:-translate-x-2.5 z-10">
        {isInView && <span className="absolute -inset-1 rounded-full bg-blue-300 animate-ping opacity-75"></span>}
      </div>

      {/* Year indicator */}
      <div className="absolute left-8 md:left-1/2 top-0 transform md:translate-x-8 bg-blue-50 px-3 py-1 rounded-full text-blue-700 font-semibold text-sm">
        {internship.year}
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 pl-8 md:pl-0 md:pr-8 md:text-right pt-8">
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-gray-900">{internship.title}</h3>
          <div className="text-gray-600">{internship.institution}</div>
          <div className="text-gray-500 text-sm">
            {internship.location} • {internship.duration}
          </div>
        </motion.div>
      </div>

      <div className={`w-full md:w-1/2 pl-8 ${index % 2 === 0 ? "md:text-left" : "md:text-left"} mt-4 md:mt-8`}>
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className={`p-4 flex items-center ${internship.color}`}>
                <div className="mr-3">{internship.icon}</div>
                <div>
                  <h4 className="font-semibold">{internship.header}</h4>
                  <p className="text-sm">Click to explore details</p>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto" onClick={() => toggleInternship(internship.id)}>
                  {activeInternship === internship.id ? <ChevronUp /> : <ChevronDown />}
                </Button>
              </div>

              <AnimatePresence>
                {activeInternship === internship.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-white">
                      <p className="text-gray-700 mb-4">{internship.description}</p>

                      <h5 className="font-semibold text-gray-900 mb-2">Key Achievements</h5>
                      <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
                        {internship.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>

                      <h5 className="font-semibold text-gray-900 mb-2">Skills Applied</h5>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {internship.skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="bg-blue-50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}