import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="h-[100vh] font-extrabold w-full flex justify-center items-center flex-col bg-gradient-to-b from-blue-50 to-white">
            <Link
            href="/QuickPing"
            className="flex items-center pb-4 gap-2">
            <Image src="/chat.svg" alt="QuickPing Logo" width={40} height={40} className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold mr-2 p-[6px]" />
            <span className="text-xl font-bold scale-125 text-gray-800">QuickPing</span>
            </Link>
            <h1 style={{ scale: 1.5 , paddingBottom: "2px"}}>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link href="/QuickPing" className="text-blue-500 hover:text-blue-600 underline scale-110">
                    Go back to Home
            </Link>
        </div>
    );
}
