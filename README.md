# 🧩 Project Manager – Full-Stack Task & Project Management Platform

A powerful web application to **manage multiple projects and tasks** seamlessly. With features like **priority-based filtering**, **team grouping**, **data visualizations**, and **search**, it helps teams stay organized and productive. Integrated with **AWS Cognito** for secure user authentication and fully hosted on **Amazon Web Services (AWS)**.

---

## 🚀 Features

- 🗂️ Create, edit, and delete projects and associated tasks
- 📊 Visual dashboards using graphs and tables
- 🔍 Search for projects by title, ID, or team
- 🧑‍🤝‍🧑 Group tasks by team
- ⚡ View tasks by priority and status
- 🔐 Secure login using AWS Cognito
- 🌐 Fully cloud-hosted on **AWS Amplify, EC2, RDS, S3, and API Gateway**

---

## 🛠️ Tech Stack

| Layer      | Technology                          |
|------------|--------------------------------------|
| Frontend   | [Next.js](https://nextjs.org/) with TypeScript |
| Backend    | Node.js with Express                |
| Database   | PostgreSQL on Amazon RDS            |
| Auth       | AWS Cognito                         |
| Hosting    | AWS Amplify (Frontend), EC2 (Backend), S3 (File storage) |
| API Gateway| AWS API Gateway                     |

---

## 📁 Folder Structure

```
project-manager/
├── client/         # Next.js frontend
├── server/         # Node.js backend
└── README.md
```

---

## 🧱 Frontend – Next.js (Client) on AWS Amplify

### 🔧 Build

```bash
cd client
npm install
npm run build
```

### 🚀 Deploy to Amplify

1. Push your repo to GitHub
2. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
3. Connect your GitHub repository
4. Add a new environment variable named with NEXT_PUBLIC_API_BASE_URL with a value of your created gateaway invoke URL.
5. Amplify auto-detects build settings (`npm run build`)
6. Click **Deploy**

---

## 🧩 Backend – Node.js (Server) on AWS EC2

### 🛠️ Setup

```bash
cd server
npm install
npm run build
```

### ☁️ Host on EC2

1. Launch an EC2 instance (Amazon Linux or Ubuntu)
2. SSH into the instance:
   ```bash
   ssh -i your-key.pem ec2-user@your-ec2-ip
   ```
3. Install Node.js & Git:
   ```bash
   sudo yum install nodejs git
   ```
4. Clone the project and navigate to the `server` folder:
   ```bash
   git clone https://github.com/your-username/project-manager.git
   cd project-manager/server
   ```
5. Install dependencies & run:
   ```bash
   npm install
   npm run build
   npm start
   ```
6. Use **PM2** to keep the server running:
   ```bash
   npm install -g pm2
   pm2 start dist/index.js
   pm2 save
   ```

---

## 🗃️ Database – PostgreSQL on Amazon RDS

### 📦 Setup on RDS

1. Go to [Amazon RDS Console](https://console.aws.amazon.com/rds/)
2. Create a PostgreSQL instance
3. Enable public access and set a strong password
4. Connect from your server:
   ```bash
   psql -h your-db-endpoint -U your-username -d your-db-name
   ```

### 🧬 Use Prisma or pg to connect

Add this to `.env` in `server/`:

```
DATABASE_URL=postgresql://username:password@rds-endpoint:5432/dbname
```

---

## 📁 File Uploads – Amazon S3

1. Create an S3 bucket
2. Add S3 permissions in your IAM role
3. Use AWS SDK in backend to upload/download files