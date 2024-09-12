import { NextResponse } from "next/server"
export async function GET(request: Request) {
  const data = [
    {
      "user_uid": "a1f5c81d-bde2-4a8d-94b9-dc0b45b4c013",
      "name": "Jordan",
      "surname": "Smith",
      "gender": "Non-binary",
      "date_of_birth": "1995-07-15T22:00:00.000Z",
      "email": "jsmith1@example.com",
      "country_of_birth": "US",
      "car_uid": "d67b2eef-7b26-4e13-a2e5-29a8dfca75ce"
    },
    {
      "user_uid": "f3d9c98a-cc7d-483b-9718-d903e01492d2",
      "name": "Alex",
      "surname": "Johnson",
      "gender": "Female",
      "date_of_birth": "1990-03-22T22:00:00.000Z",
      "email": "ajohnson2@example.com",
      "country_of_birth": "UK",
      "car_uid": null
    },
    {
      "user_uid": "g5ac5f3c-1346-47df-bbe2-7de8c69d99df",
      "name": "Taylor",
      "surname": "Brown",
      "gender": "Male",
      "date_of_birth": "1988-11-11T22:00:00.000Z",
      "email": "tbrown3@example.com",
      "country_of_birth": "CA",
      "car_uid": "cb1d9db1-cce8-4519-ada4-6537e4fcf756"
    }
  ];

  return NextResponse.json(data);
}