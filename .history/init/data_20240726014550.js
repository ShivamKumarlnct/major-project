const sample = [
  {
    title: "HOTEL TAJ",
    description: "This hotel is very famous in Bhopal. Its owner is Shri Ratan Ji Tata.",
    image: "https://unsplash.com/photos/a-man-standing-in-a-field-flying-a-kite-wOFWIHxmq3U",
    price: 120000,
    location: "Bhopal",
    country: "India"
  },
  {
    title: "SM HOTEL",
    description: "This hotel is very famous in Bhopal. Its owner is SM Shivam.",
    image: "https://unsplash.com/photos/a-man-standing-in-a-field-flying-a-kite-wOFWIHxmq3U",
    price: 12000000,
    location: "Bhopal, Kolkata, Patna",
    country: "India"
  },
  {
    title: "GRAND HYATT",
    description: "Located in the heart of Mumbai, this hotel offers luxury and comfort.",
    image: "https://unsplash.com/photos/a-man-standing-in-a-field-flying-a-kite-wOFWIHxmq3U",
    price: 500000,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "LEELA PALACE",
    description: "A luxurious hotel in Delhi with exquisite amenities.",
    image: "https://unsplash.com/photos/a-man-standing-in-a-field-flying-a-kite-wOFWIHxmq3U",
    price: 750000,
    location: "Delhi",
    country: "India"
  },
  {
    title: "ITC MAURYA",
    description: "Known for its grandeur and rich heritage in New Delhi.",
    image: "https://unsplash.com/photos/a-man-standing-in-a-field-flying-a-kite-wOFWIHxmq3U",
    price: 650000,
    location: "New Delhi",
    country: "India"
  },
  {
    title: "RADISSON BLU",
    description: "A well-known hotel chain with a branch in Bangalore.",
    image: "https://unsplash.com/photos/a-man-standing-in-a-field-flying-a-kite-wOFWIHxmq3U",
    price: 400000,
    location: "Bangalore",
    country: "India"
  },
  {
    title: "THE OBEROI",
    description: "A premier hotel in Gurgaon offering top-notch services.",
    image: "https://unsplash.com/photos/a-man-standing-in-a-field-flying-a-kite-wOFWIHxmq3U",
    price: 850000,
    location: "Gurgaon",
    country: "India"
  },
  {
    title: "MARRIOTT",
    description: "A global hotel chain with a luxury hotel in Chennai.",
    image: "https://unsplash.com/photos/a-man-standing-in-a-field-flying-a-kite-wOFWIHxmq3U",
    price: 550000,
    location: "Chennai",
    country: "India"
  },
  {
    title: "JW MARRIOTT",
    description: "Experience world-class service in Pune.",
    image: "https://unsplash.com/photos/a-man-standing-in-a-field-flying-a-kite-wOFWIHxmq3U",
    price: 600000,
    location: "Pune",
    country: "India"
  },
  {
    title: "SHERATON",
    description: "Luxury and comfort combined in Hyderabad.",
    image: "https://unsplash.com/photos/a-man-standing-in-a-field-flying-a-kite-wOFWIHxmq3U",
    price: 700000,
    location: "Hyderabad",
    country: "India"
  },
  {
    title: "NOVOTEL",
    description: "A popular hotel in Kolkata offering great amenities.",
    image: "https://unsplash.com/photos/a-man-standing-in-a-field-flying-a-kite-wOFWIHxmq3U",
    price: 500000,
    location: "Kolkata",
    country: "India"
  },
  {
    title: "WESTIN",
    description: "A premium hotel in Mumbai with excellent facilities.",
    image: "https://unsplash.com/photos/a-man-standing-in-a-field-flying-a-kite-wOFWIHxmq3U",
    price: 900000,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "TAJ LAKE PALACE",
    description: "A beautiful hotel in Udaipur known for its scenic views.",
    image: "https://unsplash.com/photos/a-man-standing-in-a-field-flying-a-kite-wOFWIHxmq3U",
    price: 950000,
    location: "Udaipur",
    country: "India"
  },
  {
    title: "RITZ-CARLTON",
    description: "Experience luxury in Bangalore with top-notch services.",
    image: "https://unsplash.com/photos/a-man-standing-in-a-field-flying-a-kite-wOFWIHxmq3U",
    price: 1000000,
    location: "Bangalore",
    country: "India"
  },
  {
    title: "FOUR SEASONS",
    description: "A luxury hotel in Mumbai with great amenities.",
    image: "https://unsplash.com/photos/a-man-standing-in-a-field-flying-a-kite-wOFWIHxmq3U",
    price: 850000,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "PARK HYATT",
    description: "A renowned hotel in Chennai offering excellent services.",
    image: "https://unsplash.com/photos/a-man-standing-in-a-field-flying-a-kite-wOFWIHxmq3U",
    price: 800000,
    location: "Chennai",
    country: "India"
  },
  {
    title: "TRIDENT",
    description: "A premium hotel in Jaipur known for its luxury.",
    image: "https://unsplash.com/photos/a-man-standing-in-a-field-flying-a-kite-wOFWIHxmq3U",
    price: 650000,
    location: "Jaipur",
    country: "India"
  },
  {
    title: "INTERCONTINENTAL",
    description: "A global hotel chain with a luxury hotel in Mumbai.",
    image: "https://unsplash.com/photos/a-man-standing-in-a-field-flying-a-kite-wOFWIHxmq3U",
    price: 950000,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "LALIT",
    description: "A luxurious hotel in Delhi offering great amenities.",
    image: "https://unsplash.com/photos/a-man-standing-in-a-field-flying-a-kite-wOFWIHxmq3U",
    price: 600000,
    location: "Delhi",
    country: "India"
  },
  {
    title: "SHANGRI-LA",
    description: "A premier hotel in Bangalore with top-notch services.",
    image: "https://unsplash.com/photos/a-man-standing-in-a-field-flying-a-kite-wOFWIHxmq3U",
    price: 900000,
    location: "Bangalore",
    country: "India"
  }
];
mod