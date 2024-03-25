# TravelHub
![](travelhub_banner.png)
**TravelHub** is a cutting-edge Ruby on Rails web application designed to revolutionize the way tourists explore cities. By leveraging the powerful HERE Location Services and Mobile SDKs, TravelHub offers an immersive experience that guides tourists through cities, providing detailed historical information, guided tours, and interactive maps featuring tourist attractions.

## Features

- **HERE Maps Integration**: Utilizes HERE Maps API to render interactive maps, allowing users to navigate the cityscape effortlessly.
- **GeoJSON Display**: Showcases city attractions on the map using GeoJSON, enhancing the user's visual and navigational experience.
- **Navigation Between Attractions**: Offers a seamless navigation experience, guiding users through a series of attractions within a city.
- **Informative Content**: Provides historical context and engaging descriptions for each tourist spot, enriching the exploration experience.

## Upcoming Features

- **NLP-based Chat-bot**: An AI-driven virtual guide to answer queries, suggest places, and offer personalized tour recommendations.

## Demo and Deployment

- The project is currently in the demonstration stage with deployment pending. Stay tuned for live updates.

## Problem Statement

In the context of tourism and city exploration, there's a growing need for a digital solution that can provide comprehensive, interactive, and user-friendly guides to tourists. Traditional exploration methods often lack interactivity and personalization, leading to missed opportunities for a deeper understanding and enjoyment of the city's attractions.

## Solution

TravelHub addresses these challenges by integrating HERE Location Services into a Ruby on Rails web application, connected to a robust database of tourist attractions. This integration offers tourists an interactive platform to explore cities, complete with guided tours, historical insights, and navigational aids.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Ruby 3.0 or newer
- Rails 7.0 or newer
- PostgreSQL
- HERE API Key

### Installation

1. Clone the repo
  ```sh
  git clone https://github.com/flamboyant-vinci/travel.git
  ```
2. Install Gem dependencies
  ```sh
   bundle install
  ```
3. Setup database
  ```sh
  rails db:create db:migrate
  ```
4. export HERE_API_KEY='YOUR_API_KEY'
  ```sh
  rails s
  ```
Visit http://localhost:3000 to view the application.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.
License

Distributed under the MIT License. See LICENSE for more information.

## Contact

Prakhar Kumar - f20201739@pilani.bits-pilani.ac.in

Project Link: https://github.com/flamboyant-vinci/travel

## Acknowledgements

Thanks to APOGEE-2024, BITS Pilani, HERE Technologies
