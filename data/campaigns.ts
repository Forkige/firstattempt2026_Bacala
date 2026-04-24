// Mock data for campaigns
export const campaigns = [
  {
    id: 1,
    title: "Education for Underprivileged Youth",
    category: "Education",
    description: "Help provide quality education to underprivileged students",
    story: "Our scholarship program aims to support talented students from low-income families. Your donation helps cover tuition fees, books, and learning materials.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=300&fit=crop",
    goal: 100000,
    raised: 65000,
    donors: 245,
    status: "Active",
    testimonials: [
      {
        name: "Maria Santos",
        year: 2020,
        message: "This scholarship changed my life. I was able to graduate and now work as an engineer."
      },
      {
        name: "Juan Dela Cruz",
        year: 2019,
        message: "Thank you for believing in me when no one else would."
      }
    ]
  },
  {
    id: 2,
    title: "Campus Infrastructure Development",
    category: "Infrastructure",
    description: "Renovate and expand our campus facilities",
    story: "We need to upgrade our library, sports facilities, and student centers to provide a world-class learning environment.",
    image: "/SHS-Perspective.png",
    goal: 500000,
    raised: 320000,
    donors: 156,
    status: "Ending Soon",
    testimonials: []
  },
  {
    id: 3,
    title: "Research Grant Program",
    category: "Research",
    description: "Fund innovative research projects",
    story: "Support our researchers in making breakthroughs in renewable energy and sustainable technologies.",
    image: "https://images.unsplash.com/photo-1532187863486-abbb9db00b56?w=500&h=300&fit=crop",
    goal: 200000,
    raised: 45000,
    donors: 89,
    status: "Active",
    testimonials: []
  },
  {
    id: 4,
    title: "Student Scholarship Fund",
    category: "Scholarship",
    description: "Annual scholarship for deserving students",
    story: "Create endowment for merit-based and need-based scholarships",
    image: "https://images.unsplash.com/photo-1427504494785-cdae8ddc60c9?w=500&h=300&fit=crop",
    goal: 150000,
    raised: 98000,
    donors: 312,
    status: "Active",
    testimonials: []
  },
  {
    id: 5,
    title: "Mental Health Support Program",
    category: "Wellness",
    description: "Enhance mental health services for students",
    story: "Establish counseling centers and support services for student wellbeing",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=300&fit=crop",
    goal: 80000,
    raised: 42000,
    donors: 134,
    status: "Paused",
    testimonials: []
  }
];

export const suggestedDonationAmounts = [500, 1000, 2500, 5000];
