# README 

## Logo 
![Popscle Log](/public/Popsicle-logo.svg)

## Popscle. A Community-Driven Learning Hub
[//]: <> (TO DO: Add links.)
[Dev Deployment](https://lwa-carbyteacademy-dev-001.azurewebsites.net/spaces/E2E) (Only "E2E" Space has mockup data)

[Prod Deploymen]()

Product Owner: Adonis Almagro
Frontend: Ami Sukumar

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













## Features and Status

### Status Options

- **Status: Not Started** – In Backlog.
- **Status: Designed** – Figma designs ready.
- **Status: Models Ready** – Prisma models set. Mockup data available.
- **Status: Frontend Done** – Frontend complete, prisma models set, backend pending.
- **Status: Backend Progress** – Backend being implemented.
- **Status: Complete** – Fully implemented.

### User and Profile Management
- **Single Sign-On Authentication:**
  - User can log in using their Microsoft account through Microsoft Entra. **Status: Complete**
  - User is assigned a profile after login **Status: Not Started**

- **Profile:**
  - Users can manage their profiles. **Status: Designed**

### Resource Management

- **Resource Management:**
  - User can view resource(s). **Status: Complete** [Example](https://lwa-carbyteacademy-dev-001.azurewebsites.net/spaces/E2E/r/Security%20in%20End2End%20Solutions)
  - User can create a resource. **Status: Backend Progress**  [Example](https://lwa-carbyteacademy-dev-001.azurewebsites.net/spaces/E2E/add)
  - Users can update, and delete resources. **Status: Backend Progress**
  - User can mark a resource as public or private. **Status: Models Ready**
  - User can mark resources as outdated. **Status: Models Ready**
  - Users can comment on resources. **Status: Models Ready**
  - Users can upvote resources only once. **Status: Backend Progress**
  - Users can sort resources by recently added, most upvoted. **Status: Models Ready**
  - Users can filter resources by resource type. **Status: Complete**

### Learning Path Management
- **Learning Path Management:**
  - Users can view learning paths. **Status: Frontend Done** [Example](https://lwa-carbyteacademy-dev-001.azurewebsites.net/spaces/E2E/lp/Getting%20Started%20with%20End2End%20Solutions)
  - Users can create, update, and manage learning paths. **Status: Models ready**
  - User can add resources into sections and subsections. **Status: Models ready**
  - Users can upvote learning paths. **Status: Models ready**
  - Users can comment learning paths. **Status: Models ready**

### Space and Project Management

- **Space Management:**
  - User can view spaces include resources, learning paths, and projects, top contributors. **Status: Completed** [Example](https://lwa-carbyteacademy-dev-001.azurewebsites.net/spaces/E2E)
  - Users can create spaces. **Status: Models Ready**
  - Users can update spaces. **Status: Models Ready**
  - Users can set a space to be public or private. **Status: Models Ready**

- **Project Management:**
  - Users can create and manage projects within spaces. **Status: Not started**
  - Users can create clients. **Status: Not started**
  - User can be link clients to projects. **Status: Not Started**

### Contribution and Point System

- **Contribution Tracking:**
  - User can create earn points rules. **Status: Models Ready**
  - User earns interaction points. **Status: Models Ready**

### Discover Information

- **Search bar:**
    - User can search for key words. **Status: Designed**

- **Feed:**
    - User can view notifications of created resources and learning paths. **Status: Designed**   
    - User can view notifications of platform. **Status: Designed**   

- **Discover resources:**
    - User can view recomended (most upvotes) resources on resource's page. **Status: Complete**  
    - User can view recomended (most upvotes) resources on space page. **Status: Complete**  

### Security and Access Control

- **Access Control:**
  - Users can set spaces, resources, learning paths as public or private. **Status: Not Started**
  - Role-based permissions for managing visibility, access, tasks. **Status: Not Started**


