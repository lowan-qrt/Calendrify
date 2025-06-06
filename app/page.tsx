import { Button } from "@/components/ui/button"

export default function Home() {
    return (
        <main className="flex flex-col justify-center items-center">
            <p>Hello world</p>
            <Button variant="destructive">Hi</Button>
        </main>
    );
}