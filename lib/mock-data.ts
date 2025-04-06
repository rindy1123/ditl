import type { Day } from "./types";

export const mockDays: Day[] = [
  {
    id: "1",
    title: "My Typical Workday",
    description:
      "This is how I spend my time on a typical workday as a software engineer.",
    date: "2025-04-01T08:00:00Z",
    user: {
      id: "user1",
      occupation: "Software Engineer",
      country: "US",
    },
    activities: [
      { id: "sleep", name: "Sleep", hours: 7, color: "#6366f1" },
      { id: "work", name: "Work", hours: 9, color: "#f43f5e" },
      { id: "coding", name: "Side Projects", hours: 2, color: "#10b981" },
      { id: "exercise", name: "Exercise", hours: 1, color: "#f59e0b" },
      { id: "meals", name: "Meals", hours: 2, color: "#8b5cf6" },
      { id: "commute", name: "Commute", hours: 1, color: "#ec4899" },
      { id: "leisure", name: "Leisure", hours: 2, color: "#14b8a6" },
    ],
  },
  {
    id: "2",
    title: "Weekend Relaxation",
    description: "How I spend my weekends to recharge for the week ahead.",
    date: "2025-03-29T10:00:00Z",
    user: {
      id: "user2",
      occupation: "Marketing Manager",
      country: "GB",
    },
    activities: [
      { id: "sleep", name: "Sleep", hours: 9, color: "#6366f1" },
      { id: "friends", name: "Friends & Family", hours: 5, color: "#f43f5e" },
      { id: "hobbies", name: "Hobbies", hours: 4, color: "#10b981" },
      { id: "exercise", name: "Exercise", hours: 2, color: "#f59e0b" },
      { id: "meals", name: "Meals", hours: 3, color: "#8b5cf6" },
      { id: "chores", name: "Chores", hours: 1, color: "#ec4899" },
    ],
  },
  {
    id: "3",
    title: "Student Life",
    description: "A day in my life as a college student during finals week.",
    date: "2025-03-25T09:00:00Z",
    user: {
      id: "user3",
      occupation: "Student",
      country: "CA",
    },
    activities: [
      { id: "sleep", name: "Sleep", hours: 6, color: "#6366f1" },
      { id: "classes", name: "Classes", hours: 4, color: "#f43f5e" },
      { id: "studying", name: "Studying", hours: 8, color: "#10b981" },
      { id: "meals", name: "Meals", hours: 2, color: "#f59e0b" },
      { id: "commute", name: "Commute", hours: 1, color: "#8b5cf6" },
      { id: "social", name: "Social", hours: 2, color: "#ec4899" },
      { id: "self-care", name: "Self-care", hours: 1, color: "#14b8a6" },
    ],
  },
  {
    id: "4",
    title: "Remote Work Day",
    description: "How I structure my day while working remotely.",
    date: "2025-03-20T08:30:00Z",
    user: {
      id: "user4",
      occupation: "UX Designer",
      country: "AU",
    },
    activities: [
      { id: "sleep", name: "Sleep", hours: 8, color: "#6366f1" },
      { id: "work", name: "Work", hours: 8, color: "#f43f5e" },
      { id: "exercise", name: "Exercise", hours: 1.5, color: "#10b981" },
      { id: "meals", name: "Meals", hours: 2, color: "#f59e0b" },
      { id: "family", name: "Family Time", hours: 2.5, color: "#8b5cf6" },
      { id: "leisure", name: "Leisure", hours: 2, color: "#ec4899" },
    ],
  },
  {
    id: "5",
    title: "Parenting a Toddler",
    description: "24 hours with a 2-year-old. It's chaotic but rewarding!",
    date: "2025-03-15T07:00:00Z",
    user: {
      id: "user5",
      occupation: "Teacher",
      country: "US",
    },
    activities: [
      { id: "sleep", name: "Sleep", hours: 6, color: "#6366f1" },
      { id: "childcare", name: "Childcare", hours: 10, color: "#f43f5e" },
      { id: "work", name: "Work", hours: 4, color: "#10b981" },
      { id: "meals", name: "Meals", hours: 2, color: "#f59e0b" },
      { id: "chores", name: "Chores", hours: 1.5, color: "#8b5cf6" },
      { id: "self-care", name: "Self-care", hours: 0.5, color: "#ec4899" },
    ],
  },
  {
    id: "6",
    title: "Fitness Enthusiast",
    description: "How I balance fitness goals with work and life.",
    date: "2025-03-10T06:00:00Z",
    user: {
      id: "user6",
      occupation: "Fitness Trainer",
      country: "KR",
    },
    activities: [
      { id: "sleep", name: "Sleep", hours: 7.5, color: "#6366f1" },
      { id: "work", name: "Work", hours: 8, color: "#f43f5e" },
      { id: "exercise", name: "Exercise", hours: 3, color: "#10b981" },
      { id: "meals", name: "Meals & Meal Prep", hours: 2.5, color: "#f59e0b" },
      { id: "commute", name: "Commute", hours: 1, color: "#8b5cf6" },
      { id: "leisure", name: "Leisure", hours: 2, color: "#ec4899" },
    ],
  },
  {
    id: "7",
    title: "Freelancer Schedule",
    description:
      "The flexible but sometimes chaotic life of a freelance designer.",
    date: "2025-03-05T09:15:00Z",
    user: {
      id: "user7",
      occupation: "Freelance Designer",
      country: "DE",
    },
    activities: [
      { id: "sleep", name: "Sleep", hours: 8, color: "#6366f1" },
      { id: "client-work", name: "Client Work", hours: 7, color: "#f43f5e" },
      { id: "admin", name: "Admin & Emails", hours: 2, color: "#10b981" },
      { id: "networking", name: "Networking", hours: 1, color: "#f59e0b" },
      { id: "meals", name: "Meals", hours: 2, color: "#8b5cf6" },
      { id: "leisure", name: "Leisure", hours: 4, color: "#ec4899" },
    ],
  },
  {
    id: "8",
    title: "Healthcare Worker",
    description: "A day in the life of an ER nurse working the night shift.",
    date: "2025-02-28T22:00:00Z",
    user: {
      id: "user8",
      occupation: "ER Nurse",
      country: "CA",
    },
    activities: [
      { id: "sleep", name: "Sleep", hours: 7, color: "#6366f1" },
      { id: "work", name: "Work Shift", hours: 12, color: "#f43f5e" },
      { id: "commute", name: "Commute", hours: 1, color: "#10b981" },
      { id: "meals", name: "Meals", hours: 2, color: "#f59e0b" },
      { id: "family", name: "Family Time", hours: 1, color: "#8b5cf6" },
      { id: "self-care", name: "Self-care", hours: 1, color: "#ec4899" },
    ],
  },
  {
    id: "9",
    title: "Digital Nomad",
    description: "Working while traveling through Southeast Asia.",
    date: "2025-02-20T10:30:00Z",
    user: {
      id: "user9",
      occupation: "Web Developer",
      country: "TH",
    },
    activities: [
      { id: "sleep", name: "Sleep", hours: 8, color: "#6366f1" },
      { id: "work", name: "Work", hours: 6, color: "#f43f5e" },
      { id: "exploring", name: "Exploring", hours: 4, color: "#10b981" },
      { id: "meals", name: "Meals", hours: 3, color: "#f59e0b" },
      { id: "planning", name: "Travel Planning", hours: 1, color: "#8b5cf6" },
      { id: "social", name: "Socializing", hours: 2, color: "#ec4899" },
    ],
  },
  {
    id: "10",
    title: "Startup Founder",
    description: "The hectic schedule of running an early-stage startup.",
    date: "2025-02-15T07:00:00Z",
    user: {
      id: "user10",
      occupation: "Startup Founder",
      country: "US",
    },
    activities: [
      { id: "sleep", name: "Sleep", hours: 6, color: "#6366f1" },
      { id: "meetings", name: "Meetings", hours: 5, color: "#f43f5e" },
      {
        id: "product",
        name: "Product Development",
        hours: 6,
        color: "#10b981",
      },
      { id: "fundraising", name: "Fundraising", hours: 3, color: "#f59e0b" },
      { id: "meals", name: "Meals", hours: 2, color: "#8b5cf6" },
      { id: "exercise", name: "Exercise", hours: 1, color: "#ec4899" },
      {
        id: "planning",
        name: "Strategic Planning",
        hours: 1,
        color: "#14b8a6",
      },
    ],
  },
  {
    id: "11",
    title: "High School Teacher",
    description:
      "Teaching, grading, and planning lessons for high school students.",
    date: "2025-02-10T06:30:00Z",
    user: {
      id: "user11",
      occupation: "High School Teacher",
      country: "AU",
    },
    activities: [
      { id: "sleep", name: "Sleep", hours: 7, color: "#6366f1" },
      { id: "teaching", name: "Teaching", hours: 7, color: "#f43f5e" },
      { id: "prep", name: "Lesson Prep", hours: 3, color: "#10b981" },
      { id: "grading", name: "Grading", hours: 2, color: "#f59e0b" },
      { id: "commute", name: "Commute", hours: 1, color: "#8b5cf6" },
      { id: "meals", name: "Meals", hours: 2, color: "#ec4899" },
      { id: "leisure", name: "Leisure", hours: 2, color: "#14b8a6" },
    ],
  },
  {
    id: "12",
    title: "Retired Life",
    description:
      "How I spend my days after retirement, enjoying hobbies and family.",
    date: "2025-02-05T08:00:00Z",
    user: {
      id: "user12",
      occupation: "Retired",
      country: "GB",
    },
    activities: [
      { id: "sleep", name: "Sleep", hours: 8, color: "#6366f1" },
      { id: "gardening", name: "Gardening", hours: 3, color: "#f43f5e" },
      { id: "reading", name: "Reading", hours: 4, color: "#10b981" },
      { id: "family", name: "Family Time", hours: 3, color: "#f59e0b" },
      { id: "meals", name: "Meals", hours: 3, color: "#8b5cf6" },
      { id: "volunteer", name: "Volunteering", hours: 2, color: "#ec4899" },
      { id: "tv", name: "TV & Media", hours: 1, color: "#14b8a6" },
    ],
  },
];
