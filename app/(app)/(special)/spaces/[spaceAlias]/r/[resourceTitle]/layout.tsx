export default function ResourcePageLayout(
  {
    children,
  }: {
    children: React.ReactNode;
  }
) {

  return (
    <section>
      {children}
    </section>
  )
}