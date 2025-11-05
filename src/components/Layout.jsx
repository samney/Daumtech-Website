export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-full">
      <div className="container-custom">
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
}
