# Insurance Dashboard Demo (Accenture Experience Showcase)

## 📌 Overview
This repository is a **demo project inspired by my full-time work at Accenture (2021–2024)**.  
While I cannot share client code, this repo **recreates similar responsibilities, architectures, and workflows** that I contributed to during my role as a Full Stack Developer.  

The goal is to **demonstrate my expertise in building secure, scalable, and cloud-native applications** using modern full-stack practices.  

---

## 🛠️ Responsibilities (Accenture Experience Reflected Here)
- Designed and developed **full-stack dashboards** using React.js, TypeScript, Spring Boot, and Node.js.  
- Built **REST APIs and microservices** for secure data ingestion and retrieval.  
- Optimized response times and improved backend performance.  
- Automated deployments using **AWS CDK, Jenkins, and CI/CD pipelines**.  
- Implemented **authentication & authorization** (JWT / AWS Cognito).  
- Enhanced SQL queries and automated **data validation pipelines**.  
- Contributed to **performance testing, scalability improvements, and production support**.  
- Mentored juniors, conducted **code reviews**, and followed Agile practices.  

---

## 🔧 Tech Stack Used in Demo
- **Frontend:** React.js, TypeScript  
- **Backend:** Spring Boot (Java), Node.js (Express)  
- **Database:** PostgreSQL, MongoDB (for examples)  
- **Cloud/DevOps:** AWS (CDK, Lambda, S3), Jenkins, GitHub Actions  
- **Tools:** Postman, Swagger, Docker  

---

## 🏗️ Demo Architecture (Simplified)

```mermaid
graph TD
  U[User] --> F[React.js Frontend]
  F --> B[Spring Boot Backend]
  B --> D[(PostgreSQL Database)]
  B --> M[(MongoDB - Analytics)]
  B --> A[Authentication Service (JWT)]
  B --> C[Cloud Deployment (AWS CDK + Jenkins)]
