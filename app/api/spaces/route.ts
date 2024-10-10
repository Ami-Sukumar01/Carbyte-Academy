import { NextResponse } from "next/server";
export async function GET(request: Request) {
  const spaces = [
    {
      "space_id": "3c4d5e6f-7890-12cd-ef34-3456789012cd",
      "name": "E2E Solution Architecture",
      "alias": "E2E SA",
      "description": "We bring in-depth software and product expertise to our customers' end-to-end IoT solutions. With our many years of experience in IoT projects, we provide targeted support in product development and integrate seamlessly into the product lifecycle management process.",
      "is_public": true,
      "created_at": "2023-03-10T09:45:00.000Z",
      "updated_at": "2023-08-15T14:30:00.000Z"
 
    },
    {
      "space_id": "2b3c4d5e-6789-01bc-def2-2345678901bc",
      "name": "Cyber Security",
      "alias": "Cyber Security",
      "description": "Our cyber security hub provides a comprehensive approach to protecting digital assets. Engage with experts, participate in simulations, and learn best practices to safeguard against threats. Stay ahead in the ever-evolving landscape of cyber security.",
      "is_public": false,
      "created_at": "2023-02-15T15:30:00.000Z",
      "updated_at": "2023-07-20T10:00:00.000Z"
    },
    {
      "space_id": "5e6f7g8h-9012-34ef-g567-5678901234ef",
      "name": "Advanced Driver Assistance Systems",
      "alias": "ADAS",
      "description": "Our ADAS space is dedicated to advancing driver safety and convenience. Engage with the latest technologies in autonomous driving and driver assistance. Collaborate with experts to develop solutions that enhance road safety and improve the driving experience.",
      "is_public": false,
      "created_at": "2023-05-12T14:20:00.000Z",
      "updated_at": "2023-10-10T09:15:00.000Z"
    },
    {
      "space_id": "4d5e6f7g-8901-23de-f456-4567890123de",
      "name": "E-Mobility Features & Charging Solutions",
      "alias": "E-Mobility",
      "description": "Dive into the future of transportation with our e-mobility space. Explore innovative charging solutions and sustainable mobility options. Collaborate with industry leaders to develop and implement cutting-edge technologies that drive the electric revolution.",
      "is_public": true,
      "created_at": "2023-04-05T11:00:00.000Z",
      "updated_at": "2023-09-01T17:00:00.000Z"
    },
    {
      "space_id": "1a2b3c4d-5678-90ab-cdef-1234567890ab",
      "name": "New Tech",
      "alias": "New Tech",
      "description": "Explore cutting-edge technologies with us. Our space fosters innovation and creativity, offering the latest tools and resources. Join workshops, collaborate with experts, and take your ideas to the next level. Be part of the future of technology.",
      "is_public": true,
      "created_at": "2023-01-01T12:00:00.000Z",
      "updated_at": "2023-06-01T12:00:00.000Z"
    },
    {
      "space_id": "6f7g8h9i-0123-45fg-h678-6789012345fg",
      "name": "Data Analytics",
      "alias": "Data Analytics",
      "description": "Harness the power of data with our analytics space. Dive into big data, machine learning, and predictive analytics. Collaborate on projects, access state-of-the-art tools, and gain insights that drive decision-making and innovation across industries.",
      "is_public": true,
      "created_at": "2023-06-18T08:00:00.000Z",
      "updated_at": "2023-11-15T13:45:00.000Z"
    },
    {
      "space_id": "7g8h9i0j-1234-56gh-i789-7890123456gh",
      "name": "Web & Cloud Solutions",
      "alias": "Web & Cloud Solutions",
      "description": "Our space offers cutting-edge web and cloud solutions. Engage with experts to develop scalable, secure, and efficient cloud architectures. Innovate with the latest tools and technologies to drive digital transformation and enhance business operations.",
      "is_public": true,
      "created_at": "2023-07-25T16:10:00.000Z",
      "updated_at": "2023-12-20T11:30:00.000Z"
    },
    {
      "space_id": "8h9i0j1k-2345-67hi-j890-8901234567hi",
      "name": "Infotainment Features",
      "alias": "Infotainment Features",
      "description": "Explore the future of in-car entertainment with our infotainment space. Collaborate on projects that integrate cutting-edge technology with user-friendly interfaces. Enhance the driving experience with innovative features that entertain and inform.",
      "is_public": false,
      "created_at": "2023-08-30T10:25:00.000Z",
      "updated_at": "2024-01-25T18:05:00.000Z"
    },
    {
      "space_id": "9i0j1k2l-3456-78ij-k901-9012345678ij",
      "name": "Graue Online Dienste",
      "alias": "GOD",
      "description": "Our space for Graue Online Dienste focuses on developing robust online services. Join us in creating seamless, efficient, and secure digital solutions that cater to a wide range of user needs and enhance the overall online experience.",
      "is_public": true,
      "created_at": "2023-09-05T12:40:00.000Z",
      "updated_at": "2024-02-15T14:50:00.000Z"
    },
    {
      "space_id": "0j1k2l3m-4567-89jk-l012-0123456789jk",
      "name": "Online Enabler",
      "alias": "Online Enabler",
      "description": "Empower your digital presence with our online enabler space. Engage with experts to develop strategies and tools that enhance online visibility and engagement. Stay ahead in the digital landscape with innovative solutions tailored to your needs.",
      "is_public": false,
      "created_at": "2023-10-10T14:55:00.000Z",
      "updated_at": "2024-03-10T16:20:00.000Z"
    },
    {
      "space_id": "1k2l3m4n-5678-90kl-m123-1234567890kl",
      "name": "Connectivity",
      "alias": "Connectivity",
      "description": "Our connectivity space focuses on enhancing communication networks. Collaborate with experts to develop solutions that improve network efficiency, reliability, and speed. Be part of the future of connectivity and drive innovation in communication technology.",
      "is_public": true,
      "created_at": "2023-11-15T17:30:00.000Z",
      "updated_at": "2024-04-05T19:35:00.000Z"
    },
    {
      "space_id": "2l3m4n5o-6789-01lm-n234-2345678901lm",
      "name": "Embedded Software Development",
      "alias": "Embedded Software",
      "description": "Join our embedded software development space to create robust and efficient software solutions. Collaborate with industry experts, access cutting-edge tools, and drive innovation in embedded systems across various applications and industries.",
      "is_public": false,
      "created_at": "2023-12-20T09:00:00.000Z",
      "updated_at": "2024-05-01T11:15:00.000Z"
    },
    {
      "space_id": "3m4n5o6p-7890-12mn-o345-3456789012mn",
      "name": "Engineering Operations & Network Integration",
      "alias": "Operations & Network",
      "description": "Our space focuses on optimizing engineering operations and network integration. Collaborate with experts to develop strategies that enhance efficiency, reliability, and innovation in network systems. Be part of the future of engineering solutions.",
      "is_public": true,
      "created_at": "2024-01-25T13:45:00.000Z",
      "updated_at": "2024-06-10T15:50:00.000Z"
    }
  ];

  return NextResponse.json(spaces);
}