Overview

This project is a platform similar to Fiverr, designed to connect freelancers with clients seeking various services. It provides a user-friendly interface where clients can post projects, and freelancers can offer their skills and services to complete these projects.

Features

User Authentication: Users can register, log in, and manage their profiles.

Service Listings: Freelancers can create detailed service listings with descriptions, pricing, and delivery time.

Project Posting: Clients can post their project requirements, budget, and other necessary details.

Search and Filtering: Advanced search options and filters to help users find suitable freelancers or projects.

Messaging System: Real-time chat feature allowing direct communication between clients and freelancers.

Rating and Review System: Clients can rate and review freelancers based on the quality of service provided.

Secure Payments: Secure payment gateway integration for transactions between clients and freelancers.

Order Management: Users can track the status of projects, including milestones, progress updates, and payment phases.

Tech Stack

Frontend: HTML, CSS, JavaScript, React.js

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT (JSON Web Tokens)

Payment Integration: Stripe or PayPal API

Installation

Clone the repository:

git clone https://github.com/trinh-minh-trai/Fiverr

Navigate to the project directory:

cd Fiverr

Install dependencies:

npm install

Set up environment variables:

Create a .env file in the root directory and add the following:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key

Start the server:

npm start

Usage

Navigate to http://localhost:5000 in your browser to access the platform.

Register as a freelancer or client to explore features like posting projects, listing services, and messaging.

Contributing

Contributions are welcome! Please follow these steps:

Fork the project.

Create a new branch (git checkout -b feature-branch).

Commit your changes (git commit -m 'Add some feature').

Push to the branch (git push origin feature-branch).

Open a pull request.
