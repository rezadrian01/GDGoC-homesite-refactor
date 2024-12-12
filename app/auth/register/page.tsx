import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
      <div className="hidden bg-gray-100 lg:block dark:bg-gray-800">
        <img
          src="https://picsum.photos/1920/1080?random=1"
          alt="Register Illustration"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
          style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
        />
      </div>
      <div className="flex items-center justify-center p-6 lg:p-10">
        <div className="mx-auto w-full max-w-[400px] space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-gray-500 dark:text-gray-400">Enter your details to create your account</p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Register
            </Button>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/auth/login" className="font-medium underline">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}