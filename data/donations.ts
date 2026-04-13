// Mock data for donations
export const donationHistory = [
  {
    id: 1,
    campaignName: "Education for Underprivileged Youth",
    amount: 5000,
    date: "2024-03-10",
    status: "Completed",
    receiptUrl: "#"
  },
  {
    id: 2,
    campaignName: "Campus Infrastructure Development",
    amount: 2500,
    date: "2024-02-28",
    status: "Completed",
    receiptUrl: "#"
  },
  {
    id: 3,
    campaignName: "Research Grant Program",
    amount: 1000,
    date: "2024-02-15",
    status: "Completed",
    receiptUrl: "#"
  },
  {
    id: 4,
    campaignName: "Student Scholarship Fund",
    amount: 3000,
    date: "2024-01-20",
    status: "Completed",
    receiptUrl: "#"
  },
  {
    id: 5,
    campaignName: "Mental Health Support Program",
    amount: 500,
    date: "2024-01-05",
    status: "Completed",
    receiptUrl: "#"
  }
];

export const paymentMethods = [
  { id: "gcash", name: "GCash", icon: "📱" },
  { id: "maya", name: "Maya", icon: "💳" },
  { id: "card", name: "Credit/Debit Card", icon: "🏦" }
];

// Statistics
export const donationStats = {
  totalDonated: 11500,
  numberOfDonations: 5,
  averageDonation: 2300,
  certificatesEarned: 8,
  impactPoints: 245
};
