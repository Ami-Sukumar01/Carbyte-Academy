export default async function HomePage() {
  const environement = process.env.NODE_ENV
  return (
    <div className="w-full h-full">Home Popscle
      <div>Runing on: {environement}</div>
    </div>
  )
}