async function getFake() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fake`, {
    headers: {
      Accept: "application/json",
      method: "GET"

    }
  })
  const data = await res.json()
  return data
}


export default async function Home() {
  const fake = await getFake()
  console.log(fake)
  return (
    <div>
      <p>Names</p>
      <ul>

        {fake.map((fake_unit) => { //Typescript Warning. You should define an Interface or Type

          return (
            <li key={fake_unit.user_uid}>{fake_unit.name}</li>
          )

        })
        }
      </ul>
    </div>
  )
}
