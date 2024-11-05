import { Prisma } from "@prisma/client";
import { clearDatabase } from "./cleardb";
import prisma from "../lib/prisma"

import { createLearningPathSection } from "./createFunction";

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

const profileData: Prisma.ProfileCreateInput[] = [
  {
    bio: "Senior Solution Architect",
    avatarUrl: "https://gravatar.com/avatar/fbd0c6da4a8e74e22acf5ec24949bd17?s=400&d=robohash&r=x",
    user: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    bio: "Senior Project Manager",
    avatarUrl: "",
    user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } }
  },
  {
    bio: "E2E Community Lead",
    avatarUrl: "https://gravatar.com/avatar/06a6fbf4d975a863b26a8eb0dd507d91?s=400&d=robohash&r=x",
    user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } }
  },
  {
    bio: "E2E Intern",
    avatarUrl: "",
    user: { connect: { id: "c381fb25-7be1-4f79-ae5c-50dc74ec2ec0" } }
  },
  {
    bio: "",
    avatarUrl: "https://gravatar.com/avatar/a76cb98d2550dec2c39daa4e674e55e0?s=400&d=robohash&r=x",
    user: { connect: { id: "55fc2914-20e2-41a9-9478-222896d2365a" } }
  },
  {
    bio: "Frontend Engineer",
    avatarUrl: "",
    user: { connect: { id: "9bff594c-b735-421d-9370-2461c8e23e7b" } }
  },
  {
    bio: "UX/UI Designer",
    avatarUrl: "",
    user: { connect: { id: "d742390f-1c8b-4d6d-8e6e-1bddacd2bc1d" } }
  },
]

const spaceData: Prisma.SpaceCreateInput[] = [
  {
    id: "1a2b3c4d-5678-90ab-cdef-1234567890ab",
    name: "New Tech",
    alias: "New Tech",
    description: "Explore cutting-edge technologies with us. Our space fosters innovation and creativity, offering the latest tools and resources. Join workshops, collaborate with experts, and take your ideas to the next level. Be part of the future of technology.",
    isPublic: true,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "2b3c4d5e-6789-01bc-def2-2345678901bc",
    name: "Cyber Security",
    alias: "Cyber Security",
    description: "Our cyber security hub provides a comprehensive approach to protecting digital assets. Engage with experts, participate in simulations, and learn best practices to safeguard against threats. Stay ahead in the ever-evolving landscape of cyber security.",
    isPublic: false,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "3c4d5e6f-7890-12cd-ef34-3456789012cd",
    name: "E2E Solution Architecture",
    alias: "E2E",
    description: "We bring in-depth software and product expertise to our customers' end-to-end IoT solutions. With our many years of experience in IoT projects, we provide targeted support in product development and integrate seamlessly into the product lifecycle management process.",
    isPublic: true,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } },
    fundamentalLearningPath: { connect: { id: "e8c5e44f-60f4-40c0-99e3-f611c40a3b74" } } //Only use after having created Spaces First, Then Learning Paths
  },
  {
    id: "4d5e6f7f-8901-23de-f456-4567890123de",
    name: "E-Mobility Features & Charging Solutions",
    alias: "E-Mobility",
    description: "Dive into the future of transportation with our e-mobility space. Explore innovative charging solutions and sustainable mobility options. Collaborate with industry leaders to develop and implement cutting-edge technologies that drive the electric revolution.",
    isPublic: true,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "5e6f7f8f-9012-34ef-4567-5678901234ef",
    name: "Advanced Driver Assistance Systems",
    alias: "ADAS",
    description: "Our ADAS space is dedicated to advancing driver safety and convenience. Engage with the latest technologies in autonomous driving and driver assistance. Collaborate with experts to develop solutions that enhance road safety and improve the driving experience.",
    isPublic: false,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "6f7f8f9f-0123-45ff-5678-6789012345fa",
    name: "Data Analytics",
    alias: "Data Analytics",
    description: "Harness the power of data with our analytics space. Dive into big data, machine learning, and predictive analytics. Collaborate on projects, access state-of-the-art tools, and gain insights that drive decision-making and innovation across industries.",
    isPublic: true,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "7f8f9f0f-1234-56af-6789-7890123456af",
    name: "Web & Cloud Solutions",
    alias: "Web & Cloud",
    description: "Our space offers cutting-edge web and cloud solutions. Engage with experts to develop scalable, secure, and efficient cloud architectures. Innovate with the latest tools and technologies to drive digital transformation and enhance business operations.",
    isPublic: true,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "8f9f0f1f-2345-67af-7890-8901234567af", // corrected
    name: "Infotainment Features",
    alias: "Infotainment",
    description: "Explore the future of in-car entertainment with our infotainment space. Collaborate on projects that integrate cutting-edge technology with user-friendly interfaces. Enhance the driving experience with innovative features that entertain and inform.",
    isPublic: false,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "9f0f1f2f-3456-78af-8901-9012345678af", // corrected
    name: "Graue Online Dienste",
    alias: "GOD",
    description: "Our space for Graue Online Dienste focuses on developing robust online services. Join us in creating seamless, efficient, and secure digital solutions that cater to a wide range of user needs and enhance the overall online experience.",
    isPublic: true,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "0f1f2f3f-4567-89af-9012-0123456789af", // corrected
    name: "Online Enabler",
    alias: "Online Enabler",
    description: "Empower your digital presence with our online enabler space. Engage with experts to develop strategies and tools that enhance online visibility and engagement. Stay ahead in the digital landscape with innovative solutions tailored to your needs.",
    isPublic: false,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "1f2f3f4f-5678-90af-0123-1234567890af", // corrected
    name: "Connectivity",
    alias: "Connectivity",
    description: "Our connectivity space focuses on enhancing communication networks. Collaborate with experts to develop solutions that improve network efficiency, reliability, and speed. Be part of the future of connectivity and drive innovation in communication technology.",
    isPublic: true,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "2f3f4f5f-6789-01af-1234-2345678901af", // corrected
    name: "Embedded Software Development",
    alias: "Embedded Software",
    description: "Join our embedded software development space to create robust and efficient software solutions. Collaborate with industry experts, access cutting-edge tools, and drive innovation in embedded systems across various applications and industries.",
    isPublic: false,
    lastModifiedBy: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } }
  },
  {
    id: "3f4f5f6f-7890-12af-2345-3456789012af", // corrected
    name: "Engineering Operations & Network Integration",
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

const audienceData: Prisma.AudienceCreateInput[] = [
  {
    id: "53c0db0a-011c-4c0d-9f61-5a613eb2a1a0",
    name: "Beginner",
    description: "Suitable for individuals who are new to the subject and require basic understanding.",
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    id: "406f3663-1d68-4d76-b388-6a761b6b076e",
    name: "Intermediate",
    description: "Designed for those with some prior knowledge and looking to deepen their understanding.",
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
  },
  {
    id: "b23d685a-c552-485c-b364-20f120c661f3",
    name: "Pro",
    description: "Intended for experts seeking advanced insights and specialized knowledge.",
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } }
  }
]

const resourceData: Prisma.ResourceCreateInput[] = [
  {
    id: "473d71ff-9fcc-4fb2-830c-7f52e0b34529",
    title: "Introduction to End2End Solutions",
    description: "A comprehensive guide to understanding end-to-end solution architecture.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    resourceType: { connect: { id: "84b3675e-a214-42b0-a45d-e1975027c888" } },
    url: "https://e2egame.vercel.app",
    audience: { connect: { id: "53c0db0a-011c-4c0d-9f61-5a613eb2a1a0" } }
  },
  {
    id: "a7935ab7-c6a2-4b5b-9e50-eb6b0e8c5553",
    title: "Advanced Microservices",
    description: "Explore the advanced concepts and practices in microservices architecture.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    resourceType: { connect: { id: "0d8dc255-3e2b-4d44-84bd-abb4bc88b8d7" } },
    url: "https://www.youtube.com/watch?v=lL_j7ilk7rc",
    audience: { connect: { id: "b23d685a-c552-485c-b364-20f120c661f3" } }
  },
  {
    id: "7f4a58a7-efd6-4723-8187-00e7bc690b22",
    title: "Cloud Integration Strategies",
    description: "Learn how to effectively integrate cloud services into your architecture.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    resourceType: { connect: { id: "84b3675e-a214-42b0-a45d-e1975027c888" } },
    url: "https://miro.com/diagramming/cloud-architecture/",
    audience: { connect: { id: "b23d685a-c552-485c-b364-20f120c661f3" } }
  },
  {
    id: "5e095f9a-1da4-4195-bb1a-0d0719b7bb32",
    title: "DevOps Best Practices",
    description: "A guide to implementing DevOps practices in your organization.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    resourceType: { connect: { id: "eec8bf06-f2c2-4fac-af1f-7fc06706c61c" } },
    url: "https://www.dynatrace.com/monitoring/solutions/devops/?utm_source=google&utm_medium=cpc&utm_term=devops%20technologies&utm_campaign=dach-devops-devops&utm_content=none&utm_campaign_id=15350709006&gclsrc=aw.ds&gad_source=1&gbraid=0AAAAADk5-tV3sqGIyYYqNAWDhVXh5UaS1&gclid=EAIaIQobChMIoYuLjPz7iAMVlqloCR1RfD0SEAAYASAAEgJkMfD_BwE",
    audience: { connect: { id: "b23d685a-c552-485c-b364-20f120c661f3" } }
  },
  {
    id: "0aedd227-d653-4bcd-8dee-b9e6099ec973",
    title: "Security in End2End Solutions",
    description: "Understand the security challenges and solutions in end-to-end architectures.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    resourceType: { connect: { id: "b333fcd6-2ad3-49cc-a91e-d80e4542ea8c" } },
    url: "https://end2enditsolutions.com",
    audience: { connect: { id: "53c0db0a-011c-4c0d-9f61-5a613eb2a1a0" } }
  },
  {
    id: "d195d8c0-3091-4a77-95c5-3d867f5e4c6f",
    title: "Data Management Techniques",
    description: "Explore effective data management strategies in modern architectures.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    resourceType: { connect: { id: "b333fcd6-2ad3-49cc-a91e-d80e4542ea8c" } },
    url: "https://www.tableau.com/learn/articles/data-management-best-practices",
    audience: { connect: { id: "53c0db0a-011c-4c0d-9f61-5a613eb2a1a0" } }
  },
  {
    id: "6db23c6c-6d2c-4aa5-a03e-96bb961873bd",
    title: "API Design Principles",
    description: "Learn the principles of designing robust and scalable APIs.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    resourceType: { connect: { id: "b333fcd6-2ad3-49cc-a91e-d80e4542ea8c" } },
    url: "https://www.mulesoft.com/api-university/four-principles-designing-effective-apis",
    audience: { connect: { id: "53c0db0a-011c-4c0d-9f61-5a613eb2a1a0" } }
  },
  {
    id: "6eae420b-a2f6-4db7-a1ea-dc8238d55397",
    title: "Scalable Architecture Patterns",
    description: "Discover patterns for building scalable and resilient architectures.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    resourceType: { connect: { id: "b333fcd6-2ad3-49cc-a91e-d80e4542ea8c" } },
    url: "https://medium.com/@srinathperera/a-list-of-known-scalable-architecture-templates-a85c386cf6cb",
    audience: { connect: { id: "406f3663-1d68-4d76-b388-6a761b6b076e" } },
  },
  {
    id: "fdc63130-b897-4741-ad06-953317bd358a",
    title: "Continuous Delivery Pipelines",
    description: "Implement continuous delivery pipelines for faster and reliable deployments.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    resourceType: { connect: { id: "ec6512c1-3af9-4dcd-a50a-f0a2001fd5e7" } },
    url: "https://www.slidegeeks.com/isg-end-to-end-view-of-hyper-automation-hyper-automation-solutions-template-pdf",
    audience: { connect: { id: "406f3663-1d68-4d76-b388-6a761b6b076e" } },
  },
  {
    id: "bca11205-3eca-45df-b35b-e76b00868687",
    title: "AI in Architecture",
    description: "Explore how AI is transforming architectural practices and solutions.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    resourceType: { connect: { id: "4723f6b7-c981-4dd2-8858-c358231e2b00" } },
    url: "http://www.delta-info.com/wp-content/uploads/2023/03/DIS-Corporate-Overview-One-Pager-05_RevC_02232023.pdf",
    audience: { connect: { id: "406f3663-1d68-4d76-b388-6a761b6b076e" } },
  }
]

const learningPathData: Prisma.LearningPathCreateInput[] = [
  {
    id: "e8c5e44f-60f4-40c0-99e3-f611c40a3b74",
    title: "Getting Started with End2End Solutions",
    description: "An introductory learning path to familiarize with end-to-end solution architecture, covering foundational concepts, tools, and methodologies to kickstart your journey.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    estimatedTime: 20,
    audience: { connect: { id: "53c0db0a-011c-4c0d-9f61-5a613eb2a1a0" } },
    isPublic: true
  },
  {
    id: "ff1ccd1c-9080-4884-ab18-9ee4d5418f0f",
    title: "Mastering Microservices",
    description: "A comprehensive path to master microservices architecture, including design patterns, deployment strategies, and real-world case studies.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    estimatedTime: 40,
    audience: { connect: { id: "406f3663-1d68-4d76-b388-6a761b6b076e" } },
    isPublic: true
  },
  {
    id: "3dd7e286-182e-438f-96cd-ace7e69ba6be",
    title: "Cloud Architecture Essentials",
    description: "Essential knowledge for designing cloud-based architectures, focusing on cloud-native design, scalability, and cost management.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    estimatedTime: 30,
    audience: { connect: { id: "53c0db0a-011c-4c0d-9f61-5a613eb2a1a0" } },
    isPublic: true
  },
  {
    id: "693576b8-b663-4c24-8acd-49361ee07e20",
    title: "DevOps Integration",
    description: "Learn how to integrate DevOps practices into your architecture, focusing on automation, continuous integration, and deployment pipelines.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    estimatedTime: 45,
    audience: { connect: { id: "b23d685a-c552-485c-b364-20f120c661f3" } },
    isPublic: true
  },
  {
    id: "2868eb75-97d5-43b3-8597-d0dff368715b",
    title: "Security in Architecture",
    description: "A path focused on security practices within architectural design, covering threat modeling, secure coding, and compliance standards.",
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    lastModifiedBy: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    estimatedTime: 35,
    audience: { connect: { id: "406f3663-1d68-4d76-b388-6a761b6b076e" } },
    isPublic: false
  }
]

const contributionData: Prisma.ContributionCreateInput[] = [
  // Add resource
  {
    id: "997ff7d2-6981-427a-8dfc-68c706f5da5d",
    contributor: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    resource: { connect: { id: "473d71ff-9fcc-4fb2-830c-7f52e0b34529" } },
    pointRule: { connect: { id: "8b4684e2-7f4e-4111-a4b0-9629614742a2" } },
  },
  // Add resource
  {
    id: "b657e60f-0bf5-4191-96b6-ea33df650cff",
    contributor: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    resource: { connect: { id: "a7935ab7-c6a2-4b5b-9e50-eb6b0e8c5553" } },
    pointRule: { connect: { id: "8b4684e2-7f4e-4111-a4b0-9629614742a2" } },
  },
  // Add resource
  {
    id: "1d5d29d3-ffe6-4485-a582-1510d570d7f9",
    contributor: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    resource: { connect: { id: "7f4a58a7-efd6-4723-8187-00e7bc690b22" } },
    pointRule: { connect: { id: "8b4684e2-7f4e-4111-a4b0-9629614742a2" } },
  },
  // Add resource
  {
    id: "f5dc055d-6a30-41f4-b8da-a4cc952e202e",
    contributor: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    resource: { connect: { id: "5e095f9a-1da4-4195-bb1a-0d0719b7bb32" } },
    pointRule: { connect: { id: "8b4684e2-7f4e-4111-a4b0-9629614742a2" } },
  },
  // Add resource
  {
    id: "cbf3ae61-853f-455f-a37a-53c5729e6498",
    contributor: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    resource: { connect: { id: "0aedd227-d653-4bcd-8dee-b9e6099ec973" } },
    pointRule: { connect: { id: "8b4684e2-7f4e-4111-a4b0-9629614742a2" } },
  },
  // Add resource
  {
    id: "2fe17d08-1080-4183-a8fc-c309cd195660",
    contributor: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    resource: { connect: { id: "d195d8c0-3091-4a77-95c5-3d867f5e4c6f" } },
    pointRule: { connect: { id: "8b4684e2-7f4e-4111-a4b0-9629614742a2" } },
  },
  // Add resource
  {
    id: "6cab1973-672d-488a-b015-b06ae7ebeeb5",
    contributor: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    resource: { connect: { id: "6db23c6c-6d2c-4aa5-a03e-96bb961873bd" } },
    pointRule: { connect: { id: "8b4684e2-7f4e-4111-a4b0-9629614742a2" } },
  },
  // Add resource
  {
    id: "a5c93dfc-c9b8-4925-9e78-c90a67b01e1b",
    contributor: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    resource: { connect: { id: "6eae420b-a2f6-4db7-a1ea-dc8238d55397" } },
    pointRule: { connect: { id: "8b4684e2-7f4e-4111-a4b0-9629614742a2" } },
  },
  // Add resource
  {
    id: "75ec8ec0-5802-43a8-ae67-df4b92eb8362",
    contributor: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    resource: { connect: { id: "fdc63130-b897-4741-ad06-953317bd358a" } },
    pointRule: { connect: { id: "8b4684e2-7f4e-4111-a4b0-9629614742a2" } },
  },
  // Add resource
  {
    id: "5575c00c-6ede-463d-b052-994c96d18b5f",
    contributor: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    resource: { connect: { id: "bca11205-3eca-45df-b35b-e76b00868687" } },
    pointRule: { connect: { id: "8b4684e2-7f4e-4111-a4b0-9629614742a2" } },
  },
  // Add learning path
  {
    id: "1d3a2bc3-664f-420b-aefd-1589bced87dd",
    contributor: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    learningPath: { connect: { id: "e8c5e44f-60f4-40c0-99e3-f611c40a3b74" } },
    pointRule: { connect: { id: "f4c786fa-2956-43ca-8b3d-823de835451f" } },
  },

  // Add learning path
  {
    id: "c89d8d85-f2ef-48c4-898e-8563ff009846",
    contributor: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } },
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    learningPath: { connect: { id: "ff1ccd1c-9080-4884-ab18-9ee4d5418f0f" } },
    pointRule: { connect: { id: "f4c786fa-2956-43ca-8b3d-823de835451f" } },
  },
  // Add learning path
  {
    id: "adaf42df-e2ca-4a3c-b4a6-391469d32af8",
    contributor: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } },
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    learningPath: { connect: { id: "3dd7e286-182e-438f-96cd-ace7e69ba6be" } },
    pointRule: { connect: { id: "f4c786fa-2956-43ca-8b3d-823de835451f" } },
  },
  // Add learning path
  {
    id: "afa5c935-7857-41f5-b116-3d503c31d084",
    contributor: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } },
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    learningPath: { connect: { id: "693576b8-b663-4c24-8acd-49361ee07e20" } },
    pointRule: { connect: { id: "f4c786fa-2956-43ca-8b3d-823de835451f" } },
  },
  // Add learning path
  {
    id: "c8037ce6-c8be-4e14-80ed-ff8678e3a62a",
    contributor: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } },
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    learningPath: { connect: { id: "2868eb75-97d5-43b3-8597-d0dff368715b" } },
    pointRule: { connect: { id: "f4c786fa-2956-43ca-8b3d-823de835451f" } },
  },

  //Add project
  {
    id: "eec80957-26c1-426a-a459-8ce9e7aaa163",
    contributor: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    project: { connect: { id: "8406fa2a-2bc6-4c70-87bd-d3f1254d90f6" } },
    pointRule: { connect: { id: "eba39987-2707-48b5-a0f8-cd4ba5ad6951" } },
  },
  //Add project
  {
    id: "b454a3ed-6e26-41c7-b288-8998e8f15eb2",
    contributor: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    project: { connect: { id: "dc5ce998-13f0-4458-a88c-8fc678111666" } },
    pointRule: { connect: { id: "eba39987-2707-48b5-a0f8-cd4ba5ad6951" } },
  },
  //Add project
  {
    id: "2984cc37-5e4a-448d-b31a-68c857957538",
    contributor: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    project: { connect: { id: "b31db5f0-afd3-43fb-a34b-d1e8b32b711c" } },
    pointRule: { connect: { id: "eba39987-2707-48b5-a0f8-cd4ba5ad6951" } },
  },
  //Add project
  {
    id: "00b0e118-4fa3-4ac8-a961-29573354cb33",
    contributor: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } },
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    project: { connect: { id: "05d272bf-0fe0-4e67-ad3b-ad646b95525d" } },
    pointRule: { connect: { id: "eba39987-2707-48b5-a0f8-cd4ba5ad6951" } },
  },

  // Comment a resource
  {
    id: "34c14703-51bf-4b98-b289-43de032af85c",
    contributor: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } },
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    resource: { connect: { id: "fdc63130-b897-4741-ad06-953317bd358a" } },
    pointRule: { connect: { id: "52c9b4f8-0c6e-4e40-856c-52be46ad023c" } },
  },


  // Flag an outdated resource
  {
    id: "3707824a-b74c-4d62-9d8a-cc72558993ad",
    contributor: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } },
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    resource: { connect: { id: "fdc63130-b897-4741-ad06-953317bd358a" } },
    pointRule: { connect: { id: "fa6aa502-ccca-46e6-a975-252ea7fe695d" } },
  },


  // Upvote a learning path
  {
    id: "03d41233-ea6f-46d8-994e-57d128a42f28",
    contributor: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } },
    space: { connect: { id: "3c4d5e6f-7890-12cd-ef34-3456789012cd" } },
    learningPath: { connect: { id: "2868eb75-97d5-43b3-8597-d0dff368715b" } },
    pointRule: { connect: { id: "ab1e2439-4493-4905-a685-7ea1e690b8ce" } },
  },
]

const resourceTypeData: Prisma.ResourceTypeCreateInput[] = [
  {
    id: "8eed1d9f-a1bd-4d34-b3e5-532d0c92416b",
    name: "Book",
    description: "A great book for in-depth learning",
  },
  {
    id: "0d8dc255-3e2b-4d44-84bd-abb4bc88b8d7",
    name: "Video",
    description: "Comprehensive video on the topic",
  },
  {
    id: "b333fcd6-2ad3-49cc-a91e-d80e4542ea8c",
    name: "Article",
    description: "An interesting article to spread your knowledge",
  },
  {
    id: "84b3675e-a214-42b0-a45d-e1975027c888",
    name: "Interactive content",
    description: "Miro, FigJam, games, etc.",
  },
  {
    id: "eec8bf06-f2c2-4fac-af1f-7fc06706c61c",
    name: "Practical project",
    description: "A project to train your skills",
  },
  {
    id: "6a2635ff-8308-4d53-88d3-b7b5ccb31eec",
    name: "Podcast",
    description: "A helpful podcast episode",
  },
  {
    id: "73cf0bac-cc29-4876-92f0-bc26bdb2a780",
    name: "Online course",
    description: "A structured online course",
  },
  {
    id: "ec6512c1-3af9-4dcd-a50a-f0a2001fd5e7",
    name: "Presentation",
    description: "Informative slides",
  },
  {
    id: "4723f6b7-c981-4dd2-8858-c358231e2b00",
    name: "Document",
    description: "PDF, Word, Excel",
  },
  {
    id: "73b8639b-1fc2-4e3f-8426-2c92dacdaed6",
    name: "Other",
    description: "Different format",
  },
]

const resourceUpvoteData: Prisma.ResourceUpvoteCreateInput[] = [
  { resource: { connect: { id: "a7935ab7-c6a2-4b5b-9e50-eb6b0e8c5553" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { resource: { connect: { id: "473d71ff-9fcc-4fb2-830c-7f52e0b34529" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { resource: { connect: { id: "7f4a58a7-efd6-4723-8187-00e7bc690b22" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { resource: { connect: { id: "5e095f9a-1da4-4195-bb1a-0d0719b7bb32" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { resource: { connect: { id: "0aedd227-d653-4bcd-8dee-b9e6099ec973" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { resource: { connect: { id: "d195d8c0-3091-4a77-95c5-3d867f5e4c6f" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { resource: { connect: { id: "6db23c6c-6d2c-4aa5-a03e-96bb961873bd" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { resource: { connect: { id: "6eae420b-a2f6-4db7-a1ea-dc8238d55397" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { resource: { connect: { id: "fdc63130-b897-4741-ad06-953317bd358a" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { resource: { connect: { id: "bca11205-3eca-45df-b35b-e76b00868687" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { resource: { connect: { id: "473d71ff-9fcc-4fb2-830c-7f52e0b34529" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { resource: { connect: { id: "a7935ab7-c6a2-4b5b-9e50-eb6b0e8c5553" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { resource: { connect: { id: "7f4a58a7-efd6-4723-8187-00e7bc690b22" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { resource: { connect: { id: "5e095f9a-1da4-4195-bb1a-0d0719b7bb32" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { resource: { connect: { id: "0aedd227-d653-4bcd-8dee-b9e6099ec973" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { resource: { connect: { id: "d195d8c0-3091-4a77-95c5-3d867f5e4c6f" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { resource: { connect: { id: "6db23c6c-6d2c-4aa5-a03e-96bb961873bd" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { resource: { connect: { id: "6eae420b-a2f6-4db7-a1ea-dc8238d55397" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { resource: { connect: { id: "fdc63130-b897-4741-ad06-953317bd358a" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { resource: { connect: { id: "bca11205-3eca-45df-b35b-e76b00868687" } }, user: { connect: { id: "d742390f-1c8b-4d6d-8e6e-1bddacd2bc1d" } } },
];

const resourceViewData: Prisma.ResourceViewCreateInput[] = [
  { resource: { connect: { id: "473d71ff-9fcc-4fb2-830c-7f52e0b34529" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { resource: { connect: { id: "a7935ab7-c6a2-4b5b-9e50-eb6b0e8c5553" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { resource: { connect: { id: "7f4a58a7-efd6-4723-8187-00e7bc690b22" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { resource: { connect: { id: "5e095f9a-1da4-4195-bb1a-0d0719b7bb32" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { resource: { connect: { id: "0aedd227-d653-4bcd-8dee-b9e6099ec973" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { resource: { connect: { id: "d195d8c0-3091-4a77-95c5-3d867f5e4c6f" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { resource: { connect: { id: "6db23c6c-6d2c-4aa5-a03e-96bb961873bd" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { resource: { connect: { id: "6eae420b-a2f6-4db7-a1ea-dc8238d55397" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { resource: { connect: { id: "fdc63130-b897-4741-ad06-953317bd358a" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { resource: { connect: { id: "bca11205-3eca-45df-b35b-e76b00868687" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { resource: { connect: { id: "473d71ff-9fcc-4fb2-830c-7f52e0b34529" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { resource: { connect: { id: "a7935ab7-c6a2-4b5b-9e50-eb6b0e8c5553" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { resource: { connect: { id: "7f4a58a7-efd6-4723-8187-00e7bc690b22" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { resource: { connect: { id: "5e095f9a-1da4-4195-bb1a-0d0719b7bb32" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { resource: { connect: { id: "0aedd227-d653-4bcd-8dee-b9e6099ec973" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { resource: { connect: { id: "d195d8c0-3091-4a77-95c5-3d867f5e4c6f" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { resource: { connect: { id: "6db23c6c-6d2c-4aa5-a03e-96bb961873bd" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { resource: { connect: { id: "6eae420b-a2f6-4db7-a1ea-dc8238d55397" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { resource: { connect: { id: "fdc63130-b897-4741-ad06-953317bd358a" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { resource: { connect: { id: "bca11205-3eca-45df-b35b-e76b00868687" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { resource: { connect: { id: "473d71ff-9fcc-4fb2-830c-7f52e0b34529" } }, user: { connect: { id: "d742390f-1c8b-4d6d-8e6e-1bddacd2bc1d" } } },
  { resource: { connect: { id: "a7935ab7-c6a2-4b5b-9e50-eb6b0e8c5553" } }, user: { connect: { id: "d742390f-1c8b-4d6d-8e6e-1bddacd2bc1d" } } },
  { resource: { connect: { id: "7f4a58a7-efd6-4723-8187-00e7bc690b22" } }, user: { connect: { id: "d742390f-1c8b-4d6d-8e6e-1bddacd2bc1d" } } },
  { resource: { connect: { id: "5e095f9a-1da4-4195-bb1a-0d0719b7bb32" } }, user: { connect: { id: "d742390f-1c8b-4d6d-8e6e-1bddacd2bc1d" } } },
  { resource: { connect: { id: "0aedd227-d653-4bcd-8dee-b9e6099ec973" } }, user: { connect: { id: "d742390f-1c8b-4d6d-8e6e-1bddacd2bc1d" } } },
  { resource: { connect: { id: "d195d8c0-3091-4a77-95c5-3d867f5e4c6f" } }, user: { connect: { id: "d742390f-1c8b-4d6d-8e6e-1bddacd2bc1d" } } },
  { resource: { connect: { id: "6db23c6c-6d2c-4aa5-a03e-96bb961873bd" } }, user: { connect: { id: "d742390f-1c8b-4d6d-8e6e-1bddacd2bc1d" } } },
  { resource: { connect: { id: "6eae420b-a2f6-4db7-a1ea-dc8238d55397" } }, user: { connect: { id: "d742390f-1c8b-4d6d-8e6e-1bddacd2bc1d" } } },
  { resource: { connect: { id: "fdc63130-b897-4741-ad06-953317bd358a" } }, user: { connect: { id: "d742390f-1c8b-4d6d-8e6e-1bddacd2bc1d" } } },
  { resource: { connect: { id: "bca11205-3eca-45df-b35b-e76b00868687" } }, user: { connect: { id: "d742390f-1c8b-4d6d-8e6e-1bddacd2bc1d" } } },
];

const learningPathUpvoteData: Prisma.LearningPathUpvoteCreateInput[] = [
  { learningPath: { connect: { id: "693576b8-b663-4c24-8acd-49361ee07e20" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { learningPath: { connect: { id: "693576b8-b663-4c24-8acd-49361ee07e20" } }, user: { connect: { id: "d742390f-1c8b-4d6d-8e6e-1bddacd2bc1d" } } },
  { learningPath: { connect: { id: "693576b8-b663-4c24-8acd-49361ee07e20" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { learningPath: { connect: { id: "3dd7e286-182e-438f-96cd-ace7e69ba6be" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { learningPath: { connect: { id: "3dd7e286-182e-438f-96cd-ace7e69ba6be" } }, user: { connect: { id: "d742390f-1c8b-4d6d-8e6e-1bddacd2bc1d" } } },
  { learningPath: { connect: { id: "e8c5e44f-60f4-40c0-99e3-f611c40a3b74" } }, user: { connect: { id: "d742390f-1c8b-4d6d-8e6e-1bddacd2bc1d" } } },
  { learningPath: { connect: { id: "e8c5e44f-60f4-40c0-99e3-f611c40a3b74" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { learningPath: { connect: { id: "e8c5e44f-60f4-40c0-99e3-f611c40a3b74" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { learningPath: { connect: { id: "e8c5e44f-60f4-40c0-99e3-f611c40a3b74" } }, user: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } } },
]

const learningPathViewData: Prisma.LearningPathViewCreateInput[] = [
  { learningPath: { connect: { id: "693576b8-b663-4c24-8acd-49361ee07e20" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { learningPath: { connect: { id: "693576b8-b663-4c24-8acd-49361ee07e20" } }, user: { connect: { id: "d742390f-1c8b-4d6d-8e6e-1bddacd2bc1d" } } },
  { learningPath: { connect: { id: "693576b8-b663-4c24-8acd-49361ee07e20" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { learningPath: { connect: { id: "693576b8-b663-4c24-8acd-49361ee07e20" } }, user: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } } },
  { learningPath: { connect: { id: "3dd7e286-182e-438f-96cd-ace7e69ba6be" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { learningPath: { connect: { id: "3dd7e286-182e-438f-96cd-ace7e69ba6be" } }, user: { connect: { id: "d742390f-1c8b-4d6d-8e6e-1bddacd2bc1d" } } },
  { learningPath: { connect: { id: "3dd7e286-182e-438f-96cd-ace7e69ba6be" } }, user: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } } },
  { learningPath: { connect: { id: "e8c5e44f-60f4-40c0-99e3-f611c40a3b74" } }, user: { connect: { id: "d742390f-1c8b-4d6d-8e6e-1bddacd2bc1d" } } },
  { learningPath: { connect: { id: "e8c5e44f-60f4-40c0-99e3-f611c40a3b74" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { learningPath: { connect: { id: "e8c5e44f-60f4-40c0-99e3-f611c40a3b74" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { learningPath: { connect: { id: "e8c5e44f-60f4-40c0-99e3-f611c40a3b74" } }, user: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } } },
]


const commentData: Prisma.CommentCreateInput[] = [
  {
    id: "e26393c0-2f4c-4c23-b7f1-cb0b35f5de1e",
    content: "I learned a lot from this article.",
    user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } },
    resource: { connect: { id: "0aedd227-d653-4bcd-8dee-b9e6099ec973" } }
  },
  {
    id: "6785b13c-d863-41c3-b6b2-19a7b89c0ad7",
    content: "This was exactly what I needed to understand the topic.",
    user: { connect: { id: "c381fb25-7be1-4f79-ae5c-50dc74ec2ec0" } },
    resource: { connect: { id: "0aedd227-d653-4bcd-8dee-b9e6099ec973" } }
  },
  {
    id: "89c0341b-554a-4585-8aed-94dc076dfe11",
    content: "This was too advanced for beginners.",
    user: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } },
    resource: { connect: { id: "0aedd227-d653-4bcd-8dee-b9e6099ec973" } }
  },
  {
    id: "18422072-2b66-418b-84d7-8e78560bcbfd",
    content: "This resource was really helpful!",
    user: { connect: { id: "55fc2914-20e2-41a9-9478-222896d2365a" } },
    resource: { connect: { id: "0aedd227-d653-4bcd-8dee-b9e6099ec973" } }
  },
  {
    id: "3acd2f82-33d9-44b8-9bc1-bd58cb9cf4c9",
    content: "I found this topic a bit challenging.",
    user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    resource: { connect: { id: "0aedd227-d653-4bcd-8dee-b9e6099ec973" } }
  },
  {
    id: "df3215c6-4ecb-452c-9e1b-bbb81ea38edf",
    content: "Great explanations and examples.",
    user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } },
    resource: { connect: { id: "a7935ab7-c6a2-4b5b-9e50-eb6b0e8c5553" } }
  },
  {
    id: "cea96219-dc19-43c2-9158-4bdf6b692ecf",
    content: "Could use more detailed information.",
    user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } },
    resource: { connect: { id: "a7935ab7-c6a2-4b5b-9e50-eb6b0e8c5553" } }
  },
  {
    id: "5071119b-903c-4981-909f-2f520a2ff3af",
    content: "Loved the interactive elements!",
    user: { connect: { id: "c381fb25-7be1-4f79-ae5c-50dc74ec2ec0" } },
    resource: { connect: { id: "a7935ab7-c6a2-4b5b-9e50-eb6b0e8c5553" } }
  },

]

const CommentUpvoteData: Prisma.CommentUpvoteCreateInput[] = [
  { comment: { connect: { id: "e26393c0-2f4c-4c23-b7f1-cb0b35f5de1e" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { comment: { connect: { id: "6785b13c-d863-41c3-b6b2-19a7b89c0ad7" } }, user: { connect: { id: "c381fb25-7be1-4f79-ae5c-50dc74ec2ec0" } } },
  { comment: { connect: { id: "89c0341b-554a-4585-8aed-94dc076dfe11" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { comment: { connect: { id: "18422072-2b66-418b-84d7-8e78560bcbfd" } }, user: { connect: { id: "55fc2914-20e2-41a9-9478-222896d2365a" } } },
  { comment: { connect: { id: "3acd2f82-33d9-44b8-9bc1-bd58cb9cf4c9" } }, user: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } } },
  { comment: { connect: { id: "e26393c0-2f4c-4c23-b7f1-cb0b35f5de1e" } }, user: { connect: { id: "d742390f-1c8b-4d6d-8e6e-1bddacd2bc1d" } } },
  { comment: { connect: { id: "6785b13c-d863-41c3-b6b2-19a7b89c0ad7" } }, user: { connect: { id: "9bff594c-b735-421d-9370-2461c8e23e7b" } } },
  { comment: { connect: { id: "89c0341b-554a-4585-8aed-94dc076dfe11" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { comment: { connect: { id: "18422072-2b66-418b-84d7-8e78560bcbfd" } }, user: { connect: { id: "c381fb25-7be1-4f79-ae5c-50dc74ec2ec0" } } },
  { comment: { connect: { id: "3acd2f82-33d9-44b8-9bc1-bd58cb9cf4c9" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { comment: { connect: { id: "e26393c0-2f4c-4c23-b7f1-cb0b35f5de1e" } }, user: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } } },
  { comment: { connect: { id: "6785b13c-d863-41c3-b6b2-19a7b89c0ad7" } }, user: { connect: { id: "55fc2914-20e2-41a9-9478-222896d2365a" } } },
  { comment: { connect: { id: "89c0341b-554a-4585-8aed-94dc076dfe11" } }, user: { connect: { id: "d742390f-1c8b-4d6d-8e6e-1bddacd2bc1d" } } },
  { comment: { connect: { id: "18422072-2b66-418b-84d7-8e78560bcbfd" } }, user: { connect: { id: "9bff594c-b735-421d-9370-2461c8e23e7b" } } },
  { comment: { connect: { id: "3acd2f82-33d9-44b8-9bc1-bd58cb9cf4c9" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { comment: { connect: { id: "e26393c0-2f4c-4c23-b7f1-cb0b35f5de1e" } }, user: { connect: { id: "c381fb25-7be1-4f79-ae5c-50dc74ec2ec0" } } },
  { comment: { connect: { id: "6785b13c-d863-41c3-b6b2-19a7b89c0ad7" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
  { comment: { connect: { id: "89c0341b-554a-4585-8aed-94dc076dfe11" } }, user: { connect: { id: "a61086d4-d0ae-4afb-b8d1-57affe2b8c82" } } },
  { comment: { connect: { id: "3acd2f82-33d9-44b8-9bc1-bd58cb9cf4c9" } }, user: { connect: { id: "d742390f-1c8b-4d6d-8e6e-1bddacd2bc1d" } } },
  { comment: { connect: { id: "e26393c0-2f4c-4c23-b7f1-cb0b35f5de1e" } }, user: { connect: { id: "9bff594c-b735-421d-9370-2461c8e23e7b" } } },
  { comment: { connect: { id: "6785b13c-d863-41c3-b6b2-19a7b89c0ad7" } }, user: { connect: { id: "78fbde93-9a73-43d6-9e8f-1d4f3ebe2c43" } } },
  { comment: { connect: { id: "89c0341b-554a-4585-8aed-94dc076dfe11" } }, user: { connect: { id: "c381fb25-7be1-4f79-ae5c-50dc74ec2ec0" } } },
  { comment: { connect: { id: "18422072-2b66-418b-84d7-8e78560bcbfd" } }, user: { connect: { id: "e08c377d-fa1f-4643-8db8-2a25dfc93383" } } },
]

async function createLearningPathUpvotes() {
  console.log(`\n- Creating learning path upvotes`)
  for (const lpu of learningPathUpvoteData) {
    try {
      await prisma.learningPathUpvote.create({
        data: lpu
      })
      console.log(`Created learning path upvote: ${lpu.learningPath.connect?.id}`)
    } catch (error) {
      const err = error as Error;
      console.log(`Error creating learning path upvote: ${err.message}`)
    }
  }
}

async function createLearningPathViews() {
  console.log(`\n- Creating learning path views`)
  for (const lpv of learningPathViewData) {
    try {
      await prisma.learningPathView.create({
        data: lpv
      })
      console.log(`Created learning path view: ${lpv.learningPath.connect?.id}`)
    } catch (error) {
      const err = error as Error
      console.log(`Error creating learning path view: ${err.message}`)
    }
  }
}

async function createProfiles() {
  console.log(`\n- Creating profiles`)
  for (const pf of profileData) {
    const profile = await prisma.profile.create({
      data: pf
    })
    console.log(`Created or modified profile bio: ${profile.bio} `)
  }
}

async function upsertAudiences() {
  console.log(`\n- Creating audiences`)
  for (const au of audienceData) {
    const audience = await prisma.audience.upsert({
      where: { id: au.id },
      update: {
        name: au.name,
        description: au.description,
        lastModifiedBy: au.lastModifiedBy
      },
      create: {
        id: au.id,
        name: au.name,
        description: au.description,
        lastModifiedBy: au.lastModifiedBy
      }
    })
    console.log(`Created or modified audience: ${audience.name}`)
  }
}

async function upsertComments() {
  console.log(`\n- Creating resource comments`)
  for (const cm of commentData) {
    const comment = await prisma.comment.upsert({
      where: { id: cm.id },
      update: {
        content: cm.content,
        user: cm.user,
        resource: cm.resource
      },
      create: {
        id: cm.id,
        content: cm.content,
        user: cm.user,
        resource: cm.resource
      }
    })
    console.log(`Created or modified resource comment: "${comment.content}"`)
  }
}

async function createCommentUpvotes() {
  console.log(`\n- Creating comment upvotes`)
  for (const cu of CommentUpvoteData) {
    try {
      await prisma.commentUpvote.create({
        data: cu
      })
      console.log(`Created comment upvote: ${cu.comment.connect?.id}`)
    } catch (error) {
      const err = error as Error;
      console.error(`Error creating comment upvote; ${err.message}`)
    }
  }
}

async function createResourceUpvotes() {
  console.log(`\n- Creating resource upvotes`)
  for (const ru of resourceUpvoteData) {
    try {
      await prisma.resourceUpvote.create({
        data: ru,
      })
      console.log(`Created resource upvote: ${ru.resource.connect?.id}`)
    } catch (error) {
      const err = error as Error;
      console.error(`Error creating resource upvote: ${err.message}`)
    }
  }
}
async function createResourceViews() {
  console.log(`\n- Creating resource views`)
  for (const rv of resourceViewData) {
    try {
      await prisma.resourceView.create({
        data: rv,
      })
      console.log(`Created resource view for resource: ${rv.resource.connect?.id}`)
    } catch (error) {
      const err = error as Error;
      console.error(`Error creating view: ${err.message}`)
    }
  }
}

async function upsertResourceTypes() {
  console.log(`\n- Create resource types`)
  for (const rt of resourceTypeData) {
    const resourceType = await prisma.resourceType.upsert({
      where: { id: rt.id },
      update: {
        name: rt.name,
        description: rt.description
      },
      create: {
        id: rt.id,
        name: rt.name,
        description: rt.description
      }
    })
    console.log(`Created or modified resource type: "${resourceType.name}"`)
  }
}

async function upsertContributions() {
  console.log(`\n- Creating contributions`)
  for (const co of contributionData) {
    //Contribute to a resource
    if (co.resource) {
      const contribution = await prisma.contribution.upsert({
        where: { id: co.id },
        update: {
          contributor: co.contributor,
          space: co.space,
          resource: co.resource,
          pointRule: co.pointRule
        },
        create: {
          id: co.id,
          contributor: co.contributor,
          space: co.space,
          resource: co.resource,
          pointRule: co.pointRule

        }
      })
      console.log(`Create or modified "resource contribution": ${contribution.resourceId}`)

    } else if (co.learningPath) {
      //Contribute to a learning Path
      const contribution = await prisma.contribution.upsert({
        where: { id: co.id },
        update: {
          contributor: co.contributor,
          space: co.space,
          learningPath: co.learningPath,
          pointRule: co.pointRule
        },
        create: {
          id: co.id,
          contributor: co.contributor,
          space: co.space,
          learningPath: co.learningPath,
          pointRule: co.pointRule
        }
      })
      console.log(`Create or modified "learning path contribution": ${contribution.learningPathId}`)

    } else if (co.project) {
      //Contribute to a Project
      const contribution = await prisma.contribution.upsert({
        where: { id: co.id },
        update: {
          contributor: co.contributor,
          space: co.space,
          project: co.project,
          pointRule: co.pointRule
        },
        create: {
          id: co.id,
          contributor: co.contributor,
          space: co.space,
          project: co.project,
          pointRule: co.pointRule
        }
      })
      console.log(`Created or modified "project contribution": ${contribution.projectId}`)

    } else {
      console.log(`No data added to contributions`)
    }

  }
}

async function upsertLearningPaths() {
  console.log(`\n- Creating learning paths`)
  for (const lp of learningPathData) {
    const learningPath = await prisma.learningPath.upsert({
      where: { id: lp.id },
      update: {
        title: lp.title,
        description: lp.title,
        space: lp.space,
        lastModifiedBy: lp.lastModifiedBy,
        estimatedTime: lp.estimatedTime,
        audience: lp.audience,
        isPublic: lp.isPublic
      },
      create: {
        id: lp.id,
        title: lp.title,
        description: lp.description,
        space: lp.space,
        lastModifiedBy: lp.lastModifiedBy,
        estimatedTime: lp.estimatedTime,
        audience: lp.audience,
        isPublic: lp.isPublic
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
        description: r.description,
        space: r.space,
        lastModifiedBy: r.lastModifiedBy,
        resourceType: r.resourceType,
        url: r.url,
        audience: r.audience,
      },
      create: {
        id: r.id,
        title: r.title,
        description: r.description,
        space: r.space,
        lastModifiedBy: r.lastModifiedBy,
        resourceType: r.resourceType,
        url: r.url,
        audience: r.audience,
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
        alias: s.alias,
        description: s.description,
        isPublic: s.isPublic,
        lastModifiedBy: s.lastModifiedBy,
      },
      create: { // Create new record if it doesn't exist
        id: s.id,
        name: s.name,
        alias: s.alias,
        description: s.description,
        isPublic: s.isPublic,
        lastModifiedBy: s.lastModifiedBy,
      }
    })
    console.log(`Created or modified space with alias: ${space.alias}`)
  }

}
async function updateSpacesWithFundamentalLearningPath() {
  console.log(`\n- Add fundamental learning paths to spaces`)
  for (const s of spaceData) {
    if (s.fundamentalLearningPath) {
      await prisma.space.update({
        where: { id: s.id },
        data: {
          fundamentalLearningPath: s.fundamentalLearningPath
        }
      })
      console.log(`Updated space: ${s.alias} with fundamental learning path "${s.fundamentalLearningPath.connect?.id}"`)
    }

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
    console.log(`Created or modified action: ${action.name}`)
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
    console.log(`Created or modified object: ${object.name}`)
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
  console.log(`\nStart seeding...🌱🌱🌱`)
  await clearDatabase()
  await upsertUsers()
  await createProfiles()
  await upsertResourceTypes()
  await upsertSpaces()
  await upsertClients()
  await upsertProjects()
  await upsertActions()
  await upsertObject()
  await upsertPointRule()
  await upsertAudiences()
  await upsertResources()
  await upsertLearningPaths()
  await upsertContributions()
  await createResourceUpvotes()
  await createResourceViews()
  await upsertComments()
  await createCommentUpvotes()
  await createLearningPathUpvotes()
  await createLearningPathViews()
  await updateSpacesWithFundamentalLearningPath()
  await createLearningPathSection()
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