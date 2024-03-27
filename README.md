## ChatBox

ChatBox is a full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It provides users with a comprehensive messaging platform akin to popular messaging apps like WhatsApp, with added features and functionalities to enhance the user experience.

### Features

1. **User Authentication and Management**
   - Register/Login: Users can create an account or log in with their existing credentials using a unique username.
   - Search Users: Users can search for other users by their usernames.
   - Friend Requests: Users can send friend requests to connect with other users.
   - Notifications: Users receive notifications for incoming friend requests.
   - Accept/Reject Requests: Users have the option to accept or reject incoming friend requests.

2. **Messaging Functionality**
   - Chat List: Users can view a list of their chats, including individual and group chats.
   - Send Messages and Attachments: Users can exchange messages and attachments in their chats.
   - Group Chats: Users can create group chats with multiple members for collaborative conversations.
   - Group Management: Group admins can manage group settings, including renaming the group, adding/removing members, and deleting the group.

3. **User Interaction and Control**
   - Delete Chat/Unfriend User: Users can delete individual chats or unfriend other users.
   - Leave Group: Group members can leave a group if they wish to discontinue participation.
   - Admin Dashboard: Authorized users can access an admin dashboard to monitor user activity, messages, and chats.

### Technologies Used

- **Frontend**: React, Redux, Material-UI
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Real-time Communication**: Socket.IO

### Getting Started

1. **Clone the Repository**: Clone the ChatBox repository to your local machine.
2. **Install Dependencies**: Navigate to the project directory and run `npm install` to install the necessary dependencies for both the frontend and backend.
3. **Set Up Environment Variables**: Create a `.env` file in the backend directory and configure environment variables such as MongoDB URI, JWT secret, etc.
4. **Start the Development Servers**: Run `npm start` in both the frontend and backend directories to start the development servers.
5. **Explore ChatBox**: Access the ChatBox application in your browser and explore its features.

### Contributing

Contributions to ChatBox are welcome! If you'd like to contribute to the project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.

### License

This project is licensed under the mr.cyber2004. Feel free to use and modify the code as per the terms of the license.
