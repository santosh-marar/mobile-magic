import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";


export function Appbar() {
  return (
		<div className="relative">
			<div className="absolute bg-white blur-xl -z-10" />
			<div className="w-full md:w-5/6 mx-auto flex justify-between border rounded-lg items-center bg-background px-4 py-1 md:py-2 md:px-6">
				<h1 className="font-space-grotesk font-bold text-xl">Bolty</h1>
				<div className="flex justify-center items-center size-12">
        <SignedOut>
            <SignInButton />
            <SignUpButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
        </div>
      </div>
    </div>
  );
}