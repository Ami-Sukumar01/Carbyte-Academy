# README 

## Logo 
![Popscle Log](/public/Popsicle-logo.svg)

## Popscle. A Community-Driven Learning Hub
[//]: <> (TO DO: Add links.)
[Dev Deployment]()

[Prod Deploymen]()

Product Owner: Adonis Almagro

Project Responsible: E2E Community, Carbyte GmbH.

## Table of contents


## Project description
With Popscle, you can explore and enhance your skills in new areas of interest. Popscle allows useros to request topics, and the community creates opinionated learning paths. These paths are curated through community upvotes, ensuring the most effective and relevant content rises to the top. Unlike simply googling for information, this platform emphasizes collabrative knowledge sharing, making learning interactive and community-driven.


## Who this project is for
This product is designed for individuals looking to enhance their skills in a new area. It is ideal for new employees, those transitioning to a different role, individuals joining a new project, or anyone with a keen interest in learning something new.

## Tech Stack
1. Frontend:
-Framework: Next.js
-Styling: Tailwind CSS
-UI Components: shadcn

2. Backend:
-ORM: Prisma
-Database: PostgreSQL

3. Version Control: Git 
4. Cloud Platform: Azure
5. CI/CD: Azure DevOps Pipelines

## Project dependencies

[//]: <> (TO DO: Add requirements.)

Before using *"Popscle"*, ensure you have:
- postgres
- nodejs


## diagram of the architecture
diagram.drawio (check the file with this file name)


## Instructions for using Popscle

Get started with Popscle by following these steps:

### Install Popscle
Install packages
```
npm i
```

### Set up Database

1. **Install Postgres**

    If you haven't already, install PostgreSQL using Homebrew:
    ```
    brew install postgresql
    ```

2. **Start the Postgresql service**
    ```
    brew services start postgresql
    ```

3. **Create the Database**
    Open your terminal and create a new database named `popscle`:
    ```
    createdb popscle
    ````

4. **Configure the Database**

    Update the `.env` file with your local database connection string. Make sure `DATABASE_URL` is set correctly.

    Example: 
    
    DATABASE_URL=`postgresql://yourusername:password@localhost:5432/popscle`



5. **Migrate the databe**

    Apply all existing migrations to your database:
    ```
    npx prisma migrate deploy
    ```

### Seed local database

Populate your database with initial data by running:

```
npx prisma db seed
```

### Start the Development Server
Launch the development server to start using Popscle:

```
npm run dev
```


### You are ready to GO! 






















<!-- <!-- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). -->

## Getting Started NextJs

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

