import { Button } from "@/components/ui/button"

export default function Home() {
    return (
        <main className="flex flex-col justify-center items-center grow">
            <p>Hello world</p>
            <br />
            <Button variant="destructive">Hi</Button>
        </main>
    );
}