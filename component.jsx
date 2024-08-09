/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ArtJKFtISjR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-gradient-to-br from-[#f0f0f0] to-[#e0e0e0]">
      <header className="container mx-auto px-4 py-6 md:px-6 lg:py-8">
        <Link href="#" className="flex items-center" prefetch={false}>
          <TruckIcon className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-semibold">Logistix</span>
        </Link>
      </header>
      <main className="flex-1 container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Streamline Your Logistics Operations
            </h1>
            <p className="text-lg text-muted-foreground">
              Our powerful software solution helps logistics developers optimize their workflows and improve efficiency.
            </p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit">Get Early Access</Button>
            </form>
          </div>
          <div className="flex justify-center">
            <img
              src="/placeholder.svg"
              width="500"
              height="400"
              alt="Logistix"
              className="rounded-xl"
              style={{ aspectRatio: "500/400", objectFit: "cover" }}
            />
          </div>
        </div>
      </main>
      <footer className="bg-muted py-4">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">&copy; 2024 Logistix. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function TruckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}
