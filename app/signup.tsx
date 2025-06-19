import React from "react";
import Link from "next/link";

export default function SignupPage() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-md flex flex-col items-center">
            <div className="bg-white/80 rounded-3xl shadow-2xl p-8 w-full border border-white/40 backdrop-blur-xl">
                <h1 className="text-3xl font-black text-amber-900 mb-6 text-center">Sign Up</h1>
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="px-4 py-3 rounded-xl border border-amber-300 focus:border-amber-500 outline-none bg-white/60 text-amber-900 font-medium shadow"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="px-4 py-3 rounded-xl border border-amber-300 focus:border-amber-500 outline-none bg-white/60 text-amber-900 font-medium shadow"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="px-4 py-3 rounded-xl border border-amber-300 focus:border-amber-500 outline-none bg-white/60 text-amber-900 font-medium shadow"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="px-4 py-3 rounded-xl border border-amber-300 focus:border-amber-500 outline-none bg-white/60 text-amber-900 font-medium shadow"
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 mt-2"
                    >
                        Create Account
                    </button>
                </form>
                <p className="text-center text-amber-800 mt-6">
                    Already have an account?{' '}
                    <Link href="/login" className="text-orange-600 font-bold hover:underline">Log in</Link>
                </p>
            </div>
        </main>
    );
} 