
# Chat App (Demo)

A simple chat application built using React, Node.js, and the ChatEngine API. This app allows users to authenticate, enter chat rooms, and engage in real-time chats with a visually appealing chat window.

![Chat App Screenshot](screenshots/screenshot.png)

## Features

- User authentication
- Real-time chat functionality
- Visually appealing chat window

## Technologies Used

- **Frontend**: React, CSS, [react-chat-engine-pretty](https://socket.dev/npm/package/react-chat-engine-pretty)
- **Backend**: Node.js, Express, Axios

## Installation

1. Clone this repository to your local machine:

```sh
git clone https://github.com/YoungKing-Joshua/React-Chat-App.git
```

2. Navigate to the project directories:

```sh
cd client
```

```sh
cd server
```

3. Install dependencies:

```sh
npm install
```

## Usage

1. Before using, you will need to sign up for Chat Engine API ([https://chatengine.io/](https://chatengine.io/)) and create a project to get a Project ID and Private Key.

2. Place your Project ID and Private Key within the code.

3. Start the development server:

**Backend**
```sh
npm start
```

**Frontend**
```sh
npm dev
```

4. Open your web browser and visit `http://localhost:5173` to access the app.

5. Authenticate using a unique username to enter the chat room.

6. Engage in real-time conversations with other users.

## Screenshots

![Authentication Page](screenshots/auth-page.png)
![Chat Page](screenshots/chat-page.png)
```
