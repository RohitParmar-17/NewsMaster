# NewsMaster

## Overview
NewsMaster is a real-time news web application built using React.js. It provides users with up-to-date news across various categories, featuring a sleek top-loading bar for smooth navigation and an infinite scroller for seamless browsing.

## Screenshots
<img src="https://github.com/RohitParmar-17/NewsMaster/blob/master/screenshots/general.png" alt="General Page" width="100%">
<img src="https://github.com/RohitParmar-17/NewsMaster/blob/master/screenshots/sports.png" alt="General Page" width="100%">
<img src="https://github.com/RohitParmar-17/NewsMaster/blob/master/screenshots/entertainment.png" alt="General Page" width="100%">

## Features
- **Real-Time News Updates**: Fetches and displays the latest news dynamically using an external API.
- **Infinite Scrolling**: Users can continuously scroll for more news without needing to navigate manually.
- **Top-Loading Bar**: Enhances user experience with smooth transitions and loading indicators.
- **Category-Based News**: Allows users to browse news articles by different categories.

## Tech Stack
- **Frontend**: React.js, JavaScript, Bootstrap, HTML, CSS
- **External APIs**: Integrated to fetch real-time news updates

## Installation
### Prerequisites
Ensure you have the following installed on your system:
- Node.js (v14 or later)
- npm (v6 or later)

### Steps to Run Locally
1. **Clone the Repository**
   ```sh
   git clone https://github.com/RohitParmar-17/NewsMaster.git
   cd NewsMaster
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Start the Development Server**
   ```sh
   npm start
   ```
   The app will be available at `http://localhost:3000/`

## API Integration
This project uses an external news API. To integrate your own API key:
1. Sign up at [News API](https://newsapi.org/) or any other news provider.
2. Get your API key.
3. Create a `.env` file in the root directory and add:
   ```env
   REACT_APP_NEWS_API_KEY=your_api_key_here
   ```
4. Restart the development server (`npm start`).

## Deployment
To deploy the project, follow these steps:
1. **Build the App**
   ```sh
   npm run build
   ```
2. **Deploy to Vercel/Netlify/GitHub Pages**
   - Use `vercel` or `netlify deploy` for easy deployment.
   - Alternatively, deploy manually by hosting the `build/` folder on a web server.

## Contributing
If you'd like to contribute:
- Fork the repository
- Create a new branch (`git checkout -b feature-branch`)
- Make your changes and commit (`git commit -m "Added new feature"`)
- Push to the branch (`git push origin feature-branch`)
- Open a pull request

## Contact
For any issues or suggestions, feel free to reach out:
- **Email**: rohitghost5050@gmail.com

