# BridgePay

## 🌟 Overview
BridgePay is a cutting-edge peer-to-peer (P2P) payment and wallet management system, designed for effortless fund transfers and wallet functionalities. With a user-friendly interface and robust backend, BridgePay aims to simplify digital transactions for everyone.

---

## 🚀 Features
### 🏦 Wallet Management
- **Seamless Fund Transfers:** Add funds via simulated HDFC and Axis bank pages.
- **Transaction Tracking:** Monitor all wallet and P2P transactions, including success, failure, and pending statuses.
- **Secure Transactions:** Supports transfers up to ₹10,000 per transaction.

### 💰 Transfer Page
- View **unlocked, locked, and total balance** at a glance.
- Quick access to **recent transactions** for easy tracking.

### 🏠 Home Page (Dashboard)
- Overview of available balance.
- One-click options for **sending money**, **adding funds**, and **viewing insights**.

### 🔐 Authentication & Security
- **Secure Login/Signup:** Powered by NextAuth and JWT.
- **Data Validation:** Ensured with Zod.

### 🎨 Frontend
- Built with **Next.js** and **TailwindCSS** for responsive design.
- Dynamic hero animations using **Framer Motion**.

### 🛠 Backend
- **Robust API Features:** Add funds and handle wallet operations using Next.js API.
- Database managed via **Prisma ORM** and **PostgreSQL** (NeonDB).
- Future integration for **webhooks** using Express.

### 🌐 Deployment
- Initial deployment with **Docker** on AWS EC2.
- **Production-ready deployment** on Vercel.

---

## 💻 Tech Stack
| **Category**        | **Technology**               |
|---------------------|------------------------------|
| Frontend            | Next.js, TailwindCSS, Framer Motion |
| Backend             | Next.js API, Express (future) |
| Database            | PostgreSQL, Prisma ORM        |
| State Management    | Recoil                       |
| Tools               | Turborepo, TypeScript, Docker |
| Authentication      | NextAuth (JWT sessions)      |
| Deployment          | AWS EC2, Vercel             |

---

## 📥 Installation Process
1. **Clone the repository:**
   ```bash
   git clone https://github.com/singhxanubhav/BridgePay.git
   cd Flowpay
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   - Copy `.env.example` to `.env`.
   - Fill in required fields (`JWT_SECRET`, `NEXTAUTH_URL`, `DATABASE_URL`).
4. **Initialize the database:**
   ```bash
   npm run db:migrate
   npm run db:generate
   ```
5. **Start the development server:**
   ```bash
   npm run dev
   ```
6. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🌟 Motivation & Entrepreneurship
BridgePay was created to make digital finance seamless and accessible to everyone. Our vision is to empower individuals and businesses with innovative tools to simplify financial interactions. We believe in building an inclusive community where contributors and users thrive together. 🚀

---

## 🗂 Repository Structure
```
├── README.md
├── apps
│   ├── Bank-WebHook
│   ├── merchant-app
│   └── user-app
├── docker
│   └── Dockerfile.user
├── packages
│   ├── db
│   ├── eslint-config
│   ├── store
│   ├── typescript-config
│   └── ui
├── tsconfig.json
└── turbo.json
```

---

## 📬 Contact
For queries or collaborations:
- Email: [anubhavsinghbkj@gmail.com](mailto:anubhavsinghbkj@gmail.com)
- LinkedIn: [Anubhav Singh](https://www.linkedin.com/in/anubhavxsingh/)
- Twitter: [@anubhavxsingh](https://x.com/anubhavxsingh)

---
