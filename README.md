# UptimeTracker

**UptimeTracker** is a web application designed to monitor the status of multiple servers in real-time. It provides information about the availability of each server, indicating whether the server is online or offline. This project is primarily aimed at system administrators or users who want to track the status of different online services.

## Features

- **Server Monitoring**: The application regularly pings configured servers to check their availability.
- **Real-Time Display**: Users can view the status of each server through dynamic cards, with color coding to indicate their status (green for "online", red for "offline").
- **Dark and Light Mode**: The app allows users to toggle between dark and light modes for better user experience.
- **Status Notifications**: If a server goes offline or comes back online, a notification is displayed to inform the user.
- **Automatic Updates**: Server statuses are updated every 30 seconds, ensuring real-time information.

## Project Structure

- **Frontend**:
  - HTML5 for page structure.
  - CSS for design, including support for dark mode.
  - JavaScript to manage dynamic status cards and notifications.

- **Backend**:
  - Node.js with Express for the web server.
  - Axios for checking server status through HTTP requests.
  - API to fetch server statuses from the backend to the frontend.

## Installation

### Prerequisites

1. Node.js installed on your machine.
2. Internet access to check the status of online servers.

### Installation Steps

1. Clone the project from GitHub:
   ```bash
   git clone https://github.com/your-username/uptime-tracker.git

2. Navigate to the project directory:
    ```bash
    cd uptime-tracker

3. Install dependencies:
    ```bash
    npm install

4. Start the server:
    ```bash
    npm start

## Screenshot
### Light Mod
![Light Mod](https://github.com/user-attachments/assets/09b9d631-9056-4051-8604-6d638d083adf)

### Dark Mod
![Dark Mod](https://github.com/user-attachments/assets/47561b11-b62e-44fd-a1e1-212526c69169)



## Tech Stack

**Client:** HTML5, CSS3

**Server:** Node, Express, Axios
