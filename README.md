# Chatbox - Full Stack Web Development Project

Chatbox is a full stack web development project based on the MERN (MongoDB, Express.js, React.js, Node.js) stack. Inspired by messaging platforms like WhatsApp, Chatbox offers a unique experience with its array of features tailored to enhance communication among users.

## Overview

Chatbox combines both frontend and backend components to create a seamless messaging experience. Users can register and log in with a username, search for other users, send friend requests, and engage in private or group chats. The project aims to provide a user-friendly interface while ensuring efficient communication and management of chats.

## Features

- **User Authentication**: Users can register and log in with a unique username.
- **Search Functionality**: Users can search for other users by username.
- **Friend Requests**: Users can send friend requests to other users.
- **Notification System**: Users receive notifications about incoming friend requests.
- **Friend Management**: Users can accept or decline friend requests.
- **Chat List**: Users can view and access their list of ongoing chats.
- **Messaging**: Users can send messages and attachments in individual and group chats.
- **Group Chats**: Users can create group chats with a minimum of 3 members and a maximum of 100 members.
- **Group Management**: Group admins can rename the group, add or remove members, and delete the group.
- **Admin Dashboard**: Accessible with a secret key, the admin dashboard provides insights into users, messages, and chats.

## Technologies Used

- **Frontend**:
  - React.js
  - HTML/CSS
  - JavaScript

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd chatbox`
3. Install dependencies:
   - Frontend: `cd client && npm install`
   - Backend: `cd server && npm install`
4. Set up environment variables:
   - Create a `.env` file in the `server` directory and add necessary environment variables (e.g., MongoDB URI, secret key).
5. Start the development server:
   - Frontend: `cd client && npm start`
   - Backend: `cd server && npm start`

## Usage

1. Register or log in with a username.
2. Explore the application features such as searching for users, sending friend requests, and creating chats.
3. Engage in private conversations or group chats with other users.
4. Access the admin dashboard (if authorized) to manage users, messages, and chats.

## Contribution

Contributions to Chatbox are welcome! Feel free to submit bug reports, feature requests, or pull requests to help improve the project.

## License

This project is licensed under the MIT License.
