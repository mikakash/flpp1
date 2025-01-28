function groupEventsByDate(events) {
    if (!events || !Array.isArray(events)) {
      return {};
    }
  
    return events.reduce((acc, event) => {
      const date = event.date || event.details?.date || event.basicInfo?.date || 'Unknown Date';
  
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(event);
      return acc;
    }, {});
  }
  
  const data = [
    {
      "eventId": "summer-beach-party-2024-01",
      "eventName": "Summer Beach Party 2024",
      "ageRestriction": "21+",
      "priceRange": "$50-$100",
      "genre": "House",
      "eventDescription": "Join us for the ultimate summer beach party featuring international DJs, beachfront dancing, and unforgettable moments under the stars.",
      "eventFeatures": [
        "International DJs",
        "VIP Tables",
        "Food Stations",
        "Beachfront Location",
        "Premium Bar",
        "Security Service"
      ],
      "lineup": [
        { "artist": "DJ Smith", "time": "8:00 PM - 9:30 PM" },
        { "artist": "Sarah Groove", "time": "9:30 PM - 11:00 PM" },
        { "artist": "The Beat Masters", "time": "11:00 PM - 12:30 AM" },
        { "artist": "DJ Maxwell", "time": "12:30 AM - Close" }
      ],
      "date": "July 15, 2024",
      "time": "8:00 PM",
      "venue": { "name": "W Bali - Seminyak", "address": "Jl. Petitenget, Seminyak, Bali" },
      "media": {
        "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoTitle": "Rick Astley - Never Gonna Give You Up (Official Music Video)"
      }
    },
    {
      "eventId": "pool-party-2024-01",
      "eventName": "Pool Party",
      "ageRestriction": "18+",
      "priceRange": "$30-$70",
      "genre": "Pop",
      "eventDescription": "Enjoy a lively pool party with top DJs and refreshing cocktails.",
        "eventFeatures": [
        "Live DJs",
        "Cocktail Bar",
        "Poolside Dance Floor",
            "Cabanas",
            "Food Service"
      ],
      "lineup": [
        { "artist": "DJ Aqua", "time": "7:00 PM - 8:30 PM" },
        { "artist": "Summer Beats", "time": "8:30 PM - 10:00 PM" }
      ],
      "date": "July 15, 2024",
      "time": "7:00 PM",
      "venue": { "name": "The Grand Pool Club", "address": "Main Street, Bali" },
      "media": {
        "videoUrl": "https://www.example.com/poolparty.mp4",
          "videoTitle": "Pool Party Highlights"
      }
    },
    {
      "eventId": "sunset-cruise-2024-01",
      "eventName": "Sunset Cruise",
       "ageRestriction": "All Ages",
      "priceRange": "$80-$150",
      "genre": "Chillout",
      "eventDescription": "Take a relaxing cruise and enjoy the sunset with beautiful music.",
         "eventFeatures": [
        "Open Bar",
        "Gourmet Food",
             "Live Music",
           "Scenic Views"
      ],
        "lineup": [
        { "artist": "Acoustic Duo", "time": "6:00 PM - 7:30 PM" }
      ],
      "date": "July 16, 2024",
      "time": "6:00 PM",
      "venue": { "name": "Bali Sunset Cruises", "address": "Harbor Road, Bali" },
      "media": {
        "videoUrl": "https://www.example.com/sunsetcruise.mp4",
          "videoTitle":"Sunset Cruise Experience"
      }
    },


    {
      "eventId": "yoga-beach-2024-01",
      "eventName": "Yoga on the Beach",
        "ageRestriction": "All Ages",
      "priceRange":"$10",
         "genre": "Wellness",
      "eventDescription":"Start your day with a relaxing yoga session on the beach.",
         "eventFeatures": [
        "Yoga Mats Provided",
             "Expert Yoga Instructor",
             "Refreshing Drinks"
      ],
        "lineup": [
        { "artist": "Yoga Master Anya", "time": "7:00 AM - 8:00 AM" }
      ],
      "date": "July 17, 2024",
      "time": "7:00 AM",
       "venue": { "name": "Sunrise Beach", "address": "East Coast, Bali" },
      "media": {
            "videoUrl": "https://www.example.com/yoga.mp4",
              "videoTitle":"Yoga Session"
      }
    },
    {
      "eventId": "music-beach-2024-01",
      "eventName": "Live Music at the Beach",
      "ageRestriction": "All Ages",
          "priceRange": "$15-$30",
          "genre": "Acoustic",
      "eventDescription": "Enjoy a relaxing evening with live music at the beach.",
         "eventFeatures": [
        "Live Acoustic Music",
             "Beachfront Seating",
             "Food Vendors"
      ],
       "lineup": [
        { "artist": "Local Band", "time": "8:00 PM - 9:30 PM" },
          { "artist": "Singer Songwriter", "time": "9:30 PM - 11:00 PM" }
      ],
      "date": "July 17, 2024",
      "time": "8:00 PM",
        "venue": { "name": "Sunset Bar", "address": "West Coast, Bali" },
      "media": {
            "videoUrl": "https://www.example.com/music.mp4",
          "videoTitle":"Live Music Experience"
      }
    },





  ];
  
  const groupedData = groupEventsByDate(data);
  export default groupedData;