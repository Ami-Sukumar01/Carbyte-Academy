import { PrismaClient, Prisma } from "@prisma/client";

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

async function main() {
  console.log(`Start seeding...`)

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