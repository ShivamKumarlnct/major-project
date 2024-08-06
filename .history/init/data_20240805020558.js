const sample = [
  {
    title: "HOTEL TAJ",
    description: "This hotel is very famous in Bhopal. Its owner is Shri Ratan Ji Tata.",
    image: "https://plus.unsplash.com/premium_photo-1722008867967-8ce75c5f06b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    price: 120000,
    location: "Bhopal",
    country: "India"
  },
  {
    title: "SM HOTEL",
    description: "This hotel is very famous in Bhopal. Its owner is SM Shivam.",
    image: "",
    price: 12000000,
    location: "Bhopal, Kolkata, Patna",
    country: "India"
  },
  {
    title: "GRAND HYATT",
    description: "Located in the heart of Mumbai, this hotel offers luxury and comfort.",
    image: "https://plus.unsplash.com/premium_photo-1721830498757-ebc68f215580?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 500000,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "LEELA PALACE",
    description: "A luxurious hotel in Delhi with exquisite amenities.",
    image: "https://images.unsplash.com/photo-1590762178261-1c1b722e004c",
    price: 750000,
    location: "Delhi",
    country: "India"
  },
  {
    title: "ITC MAURYA",
    description: "Known for its grandeur and rich heritage in New Delhi.",
    image: "https://images.unsplash.com/photo-1604522051558-057dd8f36f8a",
    price: 650000,
    location: "New Delhi",
    country: "India"
  },
  {
    title: "RADISSON BLU",
    description: "A well-known hotel chain with a branch in Bangalore.",
    image: "https://images.unsplash.com/photo-1560077984-0ddbc4f83d1f",
    price: 400000,
    location: "Bangalore",
    country: "India"
  },
  {
    title: "THE OBEROI",
    description: "A premier hotel in Gurgaon offering top-notch services.",
    image: "https://images.unsplash.com/photo-1506748686214-bf6c5d9b4b85",
    price: 850000,
    location: "Gurgaon",
    country: "India"
  },
  {
    title: "MARRIOTT",
    description: "A global hotel chain with a luxury hotel in Chennai.",
    image: "https://images.unsplash.com/photo-1566414696-278e1b82f6b5",
    price: 550000,
    location: "Chennai",
    country: "India"
  },
  {
    title: "JW MARRIOTT",
    description: "Experience world-class service in Pune.",
    image: "https://images.unsplash.com/photo-1564670817-38a2b55b3a1a",
    price: 600000,
    location: "Pune",
    country: "India"
  },
  {
    title: "SHERATON",
    description: "Luxury and comfort combined in Hyderabad.",
    image: "https://images.unsplash.com/photo-1574829726296-06009fcd821e",
    price: 700000,
    location: "Hyderabad",
    country: "India"
  },
  {
    title: "NOVOTEL",
    description: "A popular hotel in Kolkata offering great amenities.",
    image: "https://images.unsplash.com/photo-1565276796-5bba18fd32e6",
    price: 500000,
    location: "Kolkata",
    country: "India"
  },
  {
    title: "WESTIN",
    description: "A premium hotel in Mumbai with excellent facilities.",
    image: "https://images.unsplash.com/photo-1572179326471-951d88e1b1c6",
    price: 900000,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "TAJ LAKE PALACE",
    description: "A beautiful hotel in Udaipur known for its scenic views.",
    image: "https://images.unsplash.com/photo-1572745618055-c45d27d2c3b5",
    price: 950000,
    location: "Udaipur",
    country: "India"
  },
  {
    title: "RITZ-CARLTON",
    description: "Experience luxury in Bangalore with top-notch services.",
    image: "https://images.unsplash.com/photo-1547955494-7cb5e3a68d39",
    price: 1000000,
    location: "Bangalore",
    country: "India"
  },
  {
    title: "FOUR SEASONS",
    description: "A luxury hotel in Mumbai with great amenities.",
    image: "https://images.unsplash.com/photo-1581488820815-f1d4b76d3e5b",
    price: 850000,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "PARK HYATT",
    description: "A renowned hotel in Chennai offering excellent services.",
    image: "https://images.unsplash.com/photo-1572696017120-e08dbb5d457b",
    price: 800000,
    location: "Chennai",
    country: "India"
  },
  {
    title: "TRIDENT",
    description: "A premium hotel in Jaipur known for its luxury.",
    image: "https://images.unsplash.com/photo-1562610957-26b7c634007f",
    price: 650000,
    location: "Jaipur",
    country: "India"
  },
  {
    title: "INTERCONTINENTAL",
    description: "A global hotel chain with a luxury hotel in Mumbai.",
    image: "https://images.unsplash.com/photo-1583651526821-2d005f2d6a5f",
    price: 950000,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "LALIT",
    description: "A luxurious hotel in Delhi offering great amenities.",
    image: "https://images.unsplash.com/photo-1722648404090-2179fba1b4b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    price: 600000,
    location: "Delhi",
    country: "India"
  },
  {
    title: "SHANGRI-LA",
    description: "A premier hotel in Bangalore with top-notch services.",
    image: "https://images.unsplash.com/photo-1562015129-0a8d089bcd8f",
    price: 900000,
    location: "Bangalore",
    country: "India"
  }
];

module.exports = { data: sample };
