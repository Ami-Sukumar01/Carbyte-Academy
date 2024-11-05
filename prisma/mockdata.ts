import { Prisma } from "@prisma/client"
//Learning Path Id:
export const sectionData: Prisma.SectionCreateInput[] = [

  {
    id: '9a011948-5ca7-4374-8661-695e444b0c44',
    title: "Introduction",
    description: "A quick overview of what it means E2E, the skills you can develop, projects",
    learningPath: { connect: { id: "e8c5e44f-60f4-40c0-99e3-f611c40a3b74" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } }
  },
  {
    id: 'b4935290-023d-4725-9fa3-1f480d2c5df5',
    title: "Multi-project Management",
    description: "Learn how to manage multiple projects effectively within an organization.",
    learningPath: { connect: { id: "e8c5e44f-60f4-40c0-99e3-f611c40a3b74" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } }
  },
  {
    id: '18d5d456-d477-4e6f-9e61-382d783dc091',
    title: "Business Cases & Portfolio Management",
    description: "Understand how to create business cases and manage project portfolios.",
    learningPath: { connect: { id: "e8c5e44f-60f4-40c0-99e3-f611c40a3b74" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } }
  },
  {
    id: '2d9807a6-1f60-48de-89a3-0939d81ead2a',
    title: "Quality Management",
    description: "Explore techniques for ensuring quality throughout the project lifecycle.",
    learningPath: { connect: { id: "e8c5e44f-60f4-40c0-99e3-f611c40a3b74" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } }
  },
  {
    id: '78c6da75-4913-4309-b326-4cc6f789eb5d',
    title: "Model-Based Development & System Engineering",
    description: "Learn about model-based approaches to system engineering.",
    learningPath: { connect: { id: "e8c5e44f-60f4-40c0-99e3-f611c40a3b74" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } }
  },
  {
    id: '14348f54-2670-4e53-8cc2-c7a323f94b94',
    title: "Lifecycle & Release Management",
    description: "Manage the lifecycle and release of projects effectively.",
    learningPath: { connect: { id: "e8c5e44f-60f4-40c0-99e3-f611c40a3b74" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } }
  },
  {
    id: '3c72105e-4741-4f79-8845-0af8d7bca313',
    title: "Testing & Test Automation",
    description: "Implement testing strategies and automate testing processes.",
    learningPath: { connect: { id: "e8c5e44f-60f4-40c0-99e3-f611c40a3b74" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } }
  },
  {
    id: '5a3a77c9-0dbe-4a81-9cd2-d948c21f9ddd',
    title: "Integration",
    description: "Learn how to integrate various systems and components effectively.",
    learningPath: { connect: { id: "e8c5e44f-60f4-40c0-99e3-f611c40a3b74" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } }
  },
  {
    id: 'cc5f4ce5-3377-4893-8e94-4989e9612d77',
    title: "Functional Safety and Cyber Security",
    description: "Understand the principles of functional safety and cyber security.",
    learningPath: { connect: { id: "e8c5e44f-60f4-40c0-99e3-f611c40a3b74" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } }
  },
  {
    id: '09be1333-4916-4bcb-8469-6546e44e4787',
    title: "Service-oriented Software Architecture",
    description: "Explore service-oriented architecture for software development.",
    learningPath: { connect: { id: "e8c5e44f-60f4-40c0-99e3-f611c40a3b74" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } }
  },
  {
    id: '6a722410-b0d1-447c-a619-68a86714e7da',
    title: "HMI & UX Design",
    description: "Learn about Human-Machine Interface and User Experience design.",
    learningPath: { connect: { id: "e8c5e44f-60f4-40c0-99e3-f611c40a3b74" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } }
  }
]