import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 p-10 text-center">
            <h1 className="text-4xl font-serif text-purple-700 mb-4">Wedding Venue Booking</h1>
            <p className="mb-6 text-purple-700">Check availability and request your date</p>

            <Link className="bg-purple-600 text-white px-6 py-3 rounded-x1" href="/book">Book Now</Link>
        </div>
    );
}
