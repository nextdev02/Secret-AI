import { Button } from "@/components/ui/button"
import Link from "next/link"

const LandingPage = () => {
  return (
    <div>
      Home Page

      <div>
        <Link href="/sign-in">
          <Button>
            Log In
          </Button>
        </Link>

        <Link href="/sign-up">
          <Button>
            Register
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
