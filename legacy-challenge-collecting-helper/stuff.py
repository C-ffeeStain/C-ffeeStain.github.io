traits = {
    "Base Game": [
      "Active",
      "Ambitious",
      "Art Lover",
      "Bookworm",
      "Bro",
      "Cheerful",
      "Childish",
      "Clumsy",
      "Creative",
      "Erratic",
      "Evil",
      "Family-Oriented",
      "Foodie",
      "Geek",
      "Genius",
      "Gloomy",
      "Glutton",
      "Good",
      "Goofball",
      "Hates Children",
      "Hot-Headed",
      "Jealous",
      "Kleptomaniac",
      "Lazy",
      "Loner",
      "Loves Outdoors",
      "Loyal",
      "Mean",
      "Music Lover",
      "Neat",
      "Noncommittal",
      "Outgoing",
      "Perfectionist",
      "Practice Makes Perfect",
      "Romantic",
      "Self-Assured",
      "Slob",
      "Snob",
      "Vegetarian",
    ],
    "Cats & Dogs": [
      "Cat Lover",
      "Dog Lover"
    ],
    "City Living": [
      "Unflirty"
    ],
    "Cottage Living": [
      "Animal Enthusiast",
      "Lactose Intolerant"
    ],
    "Eco Lifestyle": [
      "Freegan",
      "Green Fiend",
      "Maker",
      "Recycle Disciple"
    ],
    "For Rent": [
      "Cringe",
      "Generous",
      "Nosy",
      "Wise"
    ],
    "Get Famous": [
      "Self-Absorbed"
    ],
    "Get Together": [
      "Dance Machine",
      "Insider"
    ],
    "High School Years": [
      "Overachiever",
      "Party Animal",
      "Socially Awkward"
    ],
    "Horse Ranch": [
      "Horse Lover"
    ],
    "Island Living": [
      "Child of the Islands",
      "Child of the Ocean"
    ],
    "Life & Death": [
      "Chased by Death",
      "Macabre",
      "Skeptical"
    ],
    "Lovestruck": [
      "Lovebug",
      "Romantically Reserved"
    ],
    "Outdoor Retreat": [
      "Squeamish"
    ],
    "Snowy Escape": [
      "Adventurous",
      "Proper"
    ],
    "Spa Day": [
      "High Maintenance"
    ],
    "StrangerVille": [
      "Paranoid"
    ]
  }


traits_true = []

for values in traits.values():
    for value in values: traits_true.append(value)

for trait in sorted(traits_true):
    print(trait) 