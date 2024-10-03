import { PrismaClient, Prisma } from "@prisma/client";
import { connect } from "http2";

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43",
    email: "erhan.evin@carbyte.de",
    name: "Erhan Evin",
  },
  {
    id: "c381fb25-7be1-4f79-ae5c-50dc74ec2ec0",
    email: "beheschta.karim@carbyte.de",
    name: "Beheschta Karim",
  },
  {
    id: "e08c377d-fa1f-4643-8db8-2a25dfc93383",
    email: "david.kurz@carbyte.de",
    name: "David Kurz",
  },
  {
    id: "55fc2914-20e2-41a9-9478-222896d2365a",
    email: "ersan.uestuen@carbyte.de",
    name: "Ersan Uestuen",
  },
  {
    id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82",
    email: "maria.juergens@carbyte.de",
    name: "Maria Juergens",
  },
  {
    id: "9bff594c-b735-421d-9370-2461c8e23e7b",
    email: "ami.sukumar@external.carbyte.de",
    name: "Ami Sukumar",
  },
  {
    id: "d742390f-1c8b-4d6d-8e6e-1bddacd2bc1d",
    email: "daria.gorskaia@external.carbyte.de",
    name: "Daria Gorskaia",
  },
]

const spaceData: Prisma.SpaceCreateInput[] = [
  {
    id: "1a2b3c4d-5678-90ab-cdef-1234567890ab",
    name: "New Tech",
    slug: "new-tech",
    alias: "New Tech",
    description: "Explore cutting-edge technologies with us. Our space fosters innovation and creativity, offering the latest tools and resources. Join workshops, collaborate with experts, and take your ideas to the next level. Be part of the future of technology.",
    isPublic: true,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "2b3c4d5e-6789-01bc-def2-2345678901bc",
    name: "Cyber Security",
    slug: "cyber-security",
    alias: "Cyber Security",
    description: "Our cyber security hub provides a comprehensive approach to protecting digital assets. Engage with experts, participate in simulations, and learn best practices to safeguard against threats. Stay ahead in the ever-evolving landscape of cyber security.",
    isPublic: false,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "3c4d5e6f-7890-12cd-ef34-3456789012cd",
    name: "E2E Solution Architecture",
    slug: "e2e",
    alias: "E2E",
    description: "We bring in-depth software and product expertise to our customers' end-to-end IoT solutions. With our many years of experience in IoT projects, we provide targeted support in product development and integrate seamlessly into the product lifecycle management process.",
    isPublic: true,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "4d5e6f7f-8901-23de-f456-4567890123de",
    name: "E-Mobility Features & Charging Solutions",
    slug: "e-mobility",
    alias: "E-Mobility",
    description: "Dive into the future of transportation with our e-mobility space. Explore innovative charging solutions and sustainable mobility options. Collaborate with industry leaders to develop and implement cutting-edge technologies that drive the electric revolution.",
    isPublic: true,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "5e6f7f8f-9012-34ef-4567-5678901234ef",
    name: "Advanced Driver Assistance Systems",
    slug: "adas",
    alias: "ADAS",
    description: "Our ADAS space is dedicated to advancing driver safety and convenience. Engage with the latest technologies in autonomous driving and driver assistance. Collaborate with experts to develop solutions that enhance road safety and improve the driving experience.",
    isPublic: false,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "6f7f8f9f-0123-45ff-5678-6789012345fa",
    name: "Data Analytics",
    slug: "data-analytics",
    alias: "Data Analytics",
    description: "Harness the power of data with our analytics space. Dive into big data, machine learning, and predictive analytics. Collaborate on projects, access state-of-the-art tools, and gain insights that drive decision-making and innovation across industries.",
    isPublic: true,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "7f8f9f0f-1234-56af-6789-7890123456af",
    name: "Web & Cloud Solutions",
    slug: "web-cloud",
    alias: "Web & Cloud",
    description: "Our space offers cutting-edge web and cloud solutions. Engage with experts to develop scalable, secure, and efficient cloud architectures. Innovate with the latest tools and technologies to drive digital transformation and enhance business operations.",
    isPublic: true,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "8f9f0f1f-2345-67af-7890-8901234567af", // corrected
    name: "Infotainment Features",
    slug: "infotainment",
    alias: "Infotainment",
    description: "Explore the future of in-car entertainment with our infotainment space. Collaborate on projects that integrate cutting-edge technology with user-friendly interfaces. Enhance the driving experience with innovative features that entertain and inform.",
    isPublic: false,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "9f0f1f2f-3456-78af-8901-9012345678af", // corrected
    name: "Graue Online Dienste",
    slug: "god",
    alias: "GOD",
    description: "Our space for Graue Online Dienste focuses on developing robust online services. Join us in creating seamless, efficient, and secure digital solutions that cater to a wide range of user needs and enhance the overall online experience.",
    isPublic: true,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "0f1f2f3f-4567-89af-9012-0123456789af", // corrected
    name: "Online Enabler",
    slug: "online-enabler",
    alias: "Online Enabler",
    description: "Empower your digital presence with our online enabler space. Engage with experts to develop strategies and tools that enhance online visibility and engagement. Stay ahead in the digital landscape with innovative solutions tailored to your needs.",
    isPublic: false,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "1f2f3f4f-5678-90af-0123-1234567890af", // corrected
    name: "Connectivity",
    slug: "connectivity",
    alias: "Connectivity",
    description: "Our connectivity space focuses on enhancing communication networks. Collaborate with experts to develop solutions that improve network efficiency, reliability, and speed. Be part of the future of connectivity and drive innovation in communication technology.",
    isPublic: true,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "2f3f4f5f-6789-01af-1234-2345678901af", // corrected
    name: "Embedded Software Development",
    slug: "embeded-software",
    alias: "Embedded Software",
    description: "Join our embedded software development space to create robust and efficient software solutions. Collaborate with industry experts, access cutting-edge tools, and drive innovation in embedded systems across various applications and industries.",
    isPublic: false,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "3f4f5f6f-7890-12af-2345-3456789012af", // corrected
    name: "Engineering Operations & Network Integration",
    slug: "operations-network",
    alias: "Operations & Network",
    description: "Our space focuses on optimizing engineering operations and network integration. Collaborate with experts to develop strategies that enhance efficiency, reliability, and innovation in network systems. Be part of the future of engineering solutions.",
    isPublic: true,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
]

const clientData: Prisma.ClientCreateInput[] = [
  {
    id: "fdb27ff3-973a-4be9-a13a-2c062e289ba1",
    name: "VW",
    description: "Volkswagen",
    url: "https://www.volkswagen.de/de.html",
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "73c07b92-26f6-4ee2-b980-280008bfb270",
    name: "Carbyte",
    description: "Carbyte Internal Project",
    url: "https://carbyte.de",
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "f4dc96fb-d08a-4154-904b-e6a82584b289",
    name: "CARIAD",
    description: "CARIAD A VW GROUP COMPANY",
    url: "https://cariad.technology",
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },


]

//Here; All Projects belong to E2E
const projectData: Prisma.ProjectCreateInput[] = [
  {
    id: "8406fa2a-2bc6-4c70-87bd-d3f1254d90f6",
    title: "Cloud-Optimierung Connected Car",
    description: "The aim of the project was to reduce the number of existing systems and thus significantly reduce complexity. We not only supported the technical implementation, but also took on the coordination of all stakeholders. The result is a robust, future-proof IT landscape.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    client: { connect: { id: "f4dc96fb-d08a-4154-904b-e6a82584b289" } },
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "dc5ce998-13f0-4458-a88c-8fc678111666",
    title: "Implementing CI/CD for seamless integration and accelerated product development",
    description: "By implementing CI/CD practices with nightly releases and robust variant handling, we have achieved seamless integration, rapid deployment and reliable delivery. This enables the development of the highest quality products with improved responsiveness.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    client: { connect: { id: "f4dc96fb-d08a-4154-904b-e6a82584b289" } },
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "b31db5f0-afd3-43fb-a34b-d1e8b32b711c",
    title: "Efficient and cost-optimized cloud infrastructure: from complexity to sustainability",
    description: "Thanks to our expertise in optimizing cloud infrastructures, we were able to significantly increase a customer's competitiveness. We transformed an inefficient cloud solution, reduced communication nodes, eliminated redundancies and optimized development processes. The result: significantly lower infrastructure costs, improved efficiency and a sustainably reduced ecological footprint.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    client: { connect: { id: "f4dc96fb-d08a-4154-904b-e6a82584b289" } },
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "05d272bf-0fe0-4e67-ad3b-ad646b95525d",
    title: "Community-Driven EdTech SaaS",
    description: "Our self-developed P2P Learning Platform promotes personal development. It facilitates orientation and knowledge transfer, increases satisfaction and shortens training times. Community-driven learning makes it possible to explore topics based on the needs of the users.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    client: { connect: { id: "f4dc96fb-d08a-4154-904b-e6a82584b289" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } }
  },
]

const actionData: Prisma.ActionCreateInput[] = [
  {
    id: "0ea10b65-748f-4ed1-ab99-3ca1ec1da3f6",
    name: "add",
    description: "added"
  },
  {
    id: "9f5a4054-d10f-4189-b0be-5621b18c6b0f",
    name: "update",
    description: "updated"
  },
  {
    id: "d523aa6d-d7a4-4236-a047-0bcf40b17b79",
    name: "comment",
    description: "commented"
  },
  {
    id: "0633685f-d661-4953-8175-3e9003846b60",
    name: "upvote",
    description: "upvoted"
  },
  {
    id: "d2503e62-d580-4102-954e-1d23de74ae98",
    name: "suggest",
    description: "made a suggestion" //missing Suggestion Model
  },
  {
    id: "408afa38-d8a4-4de6-8d23-0e569ee76437",
    name: "save",
    description: "saved for later"
  },
  {
    id: "9c767ecd-c921-416f-a612-a1b7883a1117",
    name: "flag",
    description: "flagged as outdated"
  },
]

const objectData: Prisma.ObjectCreateInput[] = [
  {
    id: "4afa7c60-f692-44a1-a743-5529f37f04d1",
    name: "space",
  },
  {
    id: "5ad3c9ae-4e02-466a-a655-147a931b3bd6",
    name: "learning path",
  },
  {
    id: "e6d136ea-1278-458e-9951-babe1f6b268b",
    name: "resource",
  },
  {
    id: "e00fe501-eea3-46ca-ab42-989598a9dd70",
    name: "project",
  },
  {
    id: "9936d2d1-a6d9-45c2-8ddb-4d929985473b",
    name: "client",
  },
]



const pointRuleData: Prisma.PointRuleCreateInput[] = [
  {
    // Add a learning path
    id: "f4c786fa-2956-43ca-8b3d-823de835451f",
    action: { connect: { id: "0ea10b65-748f-4ed1-ab99-3ca1ec1da3f6" } },
    object: { connect: { id: "5ad3c9ae-4e02-466a-a655-147a931b3bd6" } },
    points: 50,
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    // Add a resource
    id: "8b4684e2-7f4e-4111-a4b0-9629614742a2",
    action: { connect: { id: "0ea10b65-748f-4ed1-ab99-3ca1ec1da3f6" } },
    object: { connect: { id: "e6d136ea-1278-458e-9951-babe1f6b268b" } },
    points: 25,
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    // Add a project
    id: "eba39987-2707-48b5-a0f8-cd4ba5ad6951",
    action: { connect: { id: "0ea10b65-748f-4ed1-ab99-3ca1ec1da3f6" } },
    object: { connect: { id: "e00fe501-eea3-46ca-ab42-989598a9dd70" } },
    points: 25,
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    // Updated a learning path
    id: "ff433e55-d4e9-44b8-9479-a92c4eb61735",
    action: { connect: { id: "9f5a4054-d10f-4189-b0be-5621b18c6b0f" } },
    object: { connect: { id: "5ad3c9ae-4e02-466a-a655-147a931b3bd6" } },
    points: 20,
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    // Updated a resource
    id: "41ce2f9d-0749-431e-9bab-0ebf1a5407fa",
    action: { connect: { id: "9f5a4054-d10f-4189-b0be-5621b18c6b0f" } },
    object: { connect: { id: "e6d136ea-1278-458e-9951-babe1f6b268b" } },
    points: 15,
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    // Updated a project
    id: "32c6de68-0e57-4579-b66b-14ab23d66f30",
    action: { connect: { id: "9f5a4054-d10f-4189-b0be-5621b18c6b0f" } },
    object: { connect: { id: "e00fe501-eea3-46ca-ab42-989598a9dd70" } },
    points: 15,
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    // Comment a learning path
    id: "3fbc4e10-a4a7-4ad5-8c4f-49b5b8281ae7",
    action: { connect: { id: "d523aa6d-d7a4-4236-a047-0bcf40b17b79" } },
    object: { connect: { id: "5ad3c9ae-4e02-466a-a655-147a931b3bd6" } },
    points: 5,
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    // Comment a resource
    id: "52c9b4f8-0c6e-4e40-856c-52be46ad023c",
    action: { connect: { id: "d523aa6d-d7a4-4236-a047-0bcf40b17b79" } },
    object: { connect: { id: "e6d136ea-1278-458e-9951-babe1f6b268b" } },
    points: 5,
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  //
  {
    // Upvoted a learning path
    id: "ab1e2439-4493-4905-a685-7ea1e690b8ce",
    action: { connect: { id: "0633685f-d661-4953-8175-3e9003846b60" } },
    object: { connect: { id: "5ad3c9ae-4e02-466a-a655-147a931b3bd6" } },
    points: 5,
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    // Upvoted a resource
    id: "e45eacfa-b309-4a5e-a2b5-51505329cffe",
    action: { connect: { id: "0633685f-d661-4953-8175-3e9003846b60" } },
    object: { connect: { id: "e6d136ea-1278-458e-9951-babe1f6b268b" } },
    points: 5,
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },

  {
    // Saved a learning path
    id: "8cfad23f-f741-4080-8835-3fcf3bb2191f",
    action: { connect: { id: "408afa38-d8a4-4de6-8d23-0e569ee76437" } },
    object: { connect: { id: "5ad3c9ae-4e02-466a-a655-147a931b3bd6" } },
    points: 10,
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  }
  ,
  {
    // Saved a resource
    id: "11759fb5-a62e-466d-b168-3cbc53233d8a",
    action: { connect: { id: "408afa38-d8a4-4de6-8d23-0e569ee76437" } },
    object: { connect: { id: "e6d136ea-1278-458e-9951-babe1f6b268b" } },
    points: 10,
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    // Made a suggestion on resource
    id: "2dd16b3e-beac-4c1e-88ca-aaac58009ea9",
    action: { connect: { id: "d2503e62-d580-4102-954e-1d23de74ae98" } },
    object: { connect: { id: "e6d136ea-1278-458e-9951-babe1f6b268b" } },
    points: 10,
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    // Flag outdated a resource
    id: "fa6aa502-ccca-46e6-a975-252ea7fe695d",
    action: { connect: { id: "9c767ecd-c921-416f-a612-a1b7883a1117" } },
    object: { connect: { id: "e6d136ea-1278-458e-9951-babe1f6b268b" } },
    points: 10,
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  }
]

const resourceData: Prisma.ResourceCreateInput[] = [
  {
    id: "473d71ff-9fcc-4fb2-830c-7f52e0b34529",
    title: "Introduction to End2End Solutions",
    slug: "intro-end2end-solutions",
    description: "A comprehensive guide to understanding end-to-end solution architecture.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    id: "a7935ab7-c6a2-4b5b-9e50-eb6b0e8c5553",
    title: "Advanced Microservices",
    slug: "advanced-microservices",
    description: "Explore the advanced concepts and practices in microservices architecture.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    id: "7f4a58a7-efd6-4723-8187-00e7bc690b22",
    title: "Cloud Integration Strategies",
    slug: "cloud-integration-strategies",
    description: "Learn how to effectively integrate cloud services into your architecture.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    id: "5e095f9a-1da4-4195-bb1a-0d0719b7bb32",
    title: "DevOps Best Practices",
    slug: "devops-best-practices",
    description: "A guide to implementing DevOps practices in your organization.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    id: "0aedd227-d653-4bcd-8dee-b9e6099ec973",
    title: "Security in End2End Solutions",
    slug: "security-end2end-solutions",
    description: "Understand the security challenges and solutions in end-to-end architectures.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    id: "d195d8c0-3091-4a77-95c5-3d867f5e4c6f",
    title: "Data Management Techniques",
    slug: "data-management-techniques",
    description: "Explore effective data management strategies in modern architectures.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    id: "6db23c6c-6d2c-4aa5-a03e-96bb961873bd",
    title: "API Design Principles",
    slug: "api-design-principles",
    description: "Learn the principles of designing robust and scalable APIs.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    id: "6eae420b-a2f6-4db7-a1ea-dc8238d55397",
    title: "Scalable Architecture Patterns",
    slug: "scalable-architecture-patterns",
    description: "Discover patterns for building scalable and resilient architectures.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    id: "fdc63130-b897-4741-ad06-953317bd358a",
    title: "Continuous Delivery Pipelines",
    slug: "continuous-delivery-pipelines",
    description: "Implement continuous delivery pipelines for faster and reliable deployments.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    id: "bca11205-3eca-45df-b35b-e76b00868687",
    title: "AI in Architecture",
    slug: "ai-in-architecture",
    description: "Explore how AI is transforming architectural practices and solutions.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  }
]

const learningPathData: Prisma.LearningPathCreateInput[] = [
  {
    id: "e8c5e44f-60f4-40c0-99e3-f611c40a3b74",
    title: "Getting Started with End2End Solutions",
    description: "An introductory learning path to familiarize with end-to-end solution architecture, covering foundational concepts, tools, and methodologies to kickstart your journey.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    id: "ff1ccd1c-9080-4884-ab18-9ee4d5418f0f",
    title: "Mastering Microservices",
    description: "A comprehensive path to master microservices architecture, including design patterns, deployment strategies, and real-world case studies.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    id: "3dd7e286-182e-438f-96cd-ace7e69ba6be",
    title: "Cloud Architecture Essentials",
    description: "Essential knowledge for designing cloud-based architectures, focusing on cloud-native design, scalability, and cost management.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    id: "693576b8-b663-4c24-8acd-49361ee07e20",
    title: "DevOps Integration",
    description: "Learn how to integrate DevOps practices into your architecture, focusing on automation, continuous integration, and deployment pipelines.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    id: "2868eb75-97d5-43b3-8597-d0dff368715b",
    title: "Security in Architecture",
    description: "A path focused on security practices within architectural design, covering threat modeling, secure coding, and compliance standards.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  }
]

async function upsertLearningPaths() {
  console.log(`\n- Creating learning paths`)
  for (const lp of learningPathData) {
    const learningPath = await prisma.learningPath.upsert({
      where: { id: lp.id },
      update: {
        title: lp.title,
        description: lp.title,
        space: lp.space,
        lastModifiedBy: lp.lastModifiedBy
      },
      create: {
        id: lp.id,
        title: lp.title,
        description: lp.title,
        space: lp.space,
        lastModifiedBy: lp.lastModifiedBy
      }
    })
    console.log(`Created or modified Learning Path: "${learningPath.title}"`)
  }
}

async function upsertResources() {
  console.log(`\n- Creating resources`)
  for (const r of resourceData) {
    const resource = await prisma.resource.upsert({
      where: { id: r.id },
      update: {
        title: r.title,
        slug: r.slug,
        description: r.description,
        space: r.space,
        lastModifiedBy: r.lastModifiedBy,
      },
      create: {
        id: r.id,
        title: r.title,
        slug: r.slug,
        description: r.description,
        space: r.space,
        lastModifiedBy: r.lastModifiedBy,
      }
    })
    console.log(`Created or modified resource: "${resource.title}"`)
  }
}


async function upsertClients() {
  console.log(`\n- Creating clients`)
  for (const c of clientData) {
    const client = await prisma.client.upsert({
      where: { id: c.id },
      update: {
        name: c.name,
        description: c.description,
        url: c.url,
        lastModifiedBy: c.lastModifiedBy
      },
      create: {
        id: c.id,
        name: c.name,
        description: c.description,
        url: c.url,
        lastModifiedBy: c.lastModifiedBy
      }
    })
    console.log(`Create or modify client: ${client.name}`)
  }
}

async function upsertProjects() {
  console.log(`\n - Creating projects`)
  for (const p of projectData) {
    const project = await prisma.project.upsert({
      where: { id: p.id },
      update: {
        title: p.title,
        description: p.description,
        space: p.space,
        client: p.client,
        lastModifiedBy: p.lastModifiedBy
      },
      create: {
        id: p.id,
        title: p.title,
        description: p.description,
        space: p.space,
        client: p.client,
        lastModifiedBy: p.lastModifiedBy
      }
    })
    console.log(`Create or modify project: ${project.title}`)
  }
}


async function upsertUsers() {
  console.log(`\n - Creating users`)
  for (const u of userData) {
    const user = await prisma.user.upsert({
      where: { id: u.id }, //check if the alias exits
      update: {//update the existing record
        email: u.email,
        name: u.name,
      },
      create: {
        id: u.id,
        email: u.email,
        name: u.name,
      }
    })
    console.log(`Create or modified user: ${user.name}`)
  }
}

async function upsertSpaces() {
  console.log(`\n- Create spaces`)
  for (const s of spaceData) {
    const space = await prisma.space.upsert({
      where: { id: s.id }, //check if the alias exits
      update: { //update the existing record
        name: s.name,
        slug: s.slug,
        alias: s.alias,
        description: s.description,
        isPublic: s.isPublic,
        lastModifiedBy: s.lastModifiedBy
      },
      create: { // Create new record if it doesn't exist
        id: s.id,
        name: s.name,
        slug: s.slug,
        alias: s.alias,
        description: s.description,
        isPublic: s.isPublic,
        lastModifiedBy: s.lastModifiedBy
      }
    })
    console.log(`Created or modified space with alias: ${space.alias}`)
  }

}

async function upsertActions() {
  console.log(`\n - Create actions`)
  for (const a of actionData) {
    const action = await prisma.action.upsert({
      where: { id: a.id },
      update: {
        name: a.name,
        description: a.description
      },
      create: {
        id: a.id,
        name: a.name,
        description: a.description
      }
    })
    console.log(`Created or modified action ${action.name}`)
  }
}

async function upsertObject() {
  console.log(`\n - Create objects`)
  for (const o of objectData) {
    const object = await prisma.object.upsert({
      where: { id: o.id },
      update: {
        name: o.name
      },
      create: {
        id: o.id,
        name: o.name
      }
    })
    console.log(`Created or modified object ${object.name}`)
  }
}


async function upsertPointRule() {
  console.log(`\n - Create point rules`)
  for (const pr of pointRuleData) {
    const pointRule = await prisma.pointRule.upsert({
      where: { id: pr.id },
      update: {
        action: pr.action,
        object: pr.object,
        points: pr.points,
        lastModifiedBy: pr.lastModifiedBy
      },
      create: {
        id: pr.id,
        action: pr.action,
        object: pr.object,
        points: pr.points,
        lastModifiedBy: pr.lastModifiedBy
      }
    })
    console.log(` Create point rule with "${pointRule.points}" points`)
  }
}

async function main() {
  console.log(`Start seeding...`)
  await upsertUsers()
  await upsertSpaces()
  await upsertClients()
  await upsertProjects()
  await upsertActions()
  await upsertObject()
  await upsertPointRule()
  await upsertResources()
  await upsertLearningPaths()
  console.log(`Seeding finished 🌱`)
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })