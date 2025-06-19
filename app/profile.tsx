import React from "react";

export default function ProfilePage() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-2xl">
            <div className="bg-white/80 rounded-3xl shadow-2xl p-8 flex flex-col items-center border border-white/40 backdrop-blur-xl">
                <img
                    src="/placeholder-user.jpg"
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-amber-500 shadow-lg mb-6 object-cover"
                />
                <h1 className="text-3xl font-black text-amber-900 mb-2">Juan Dela Cruz</h1>
                <p className="text-lg text-amber-800 mb-4">juan.delacruz@email.com</p>
                <div className="w-full mb-6">
                    <h2 className="text-xl font-bold text-amber-900 mb-2">User Details</h2>
                    <div className="bg-white/60 rounded-xl p-4 shadow flex flex-col gap-2">
                        <div className="flex justify-between text-amber-800 font-medium">
                            <span>Location:</span>
                            <span>Nueva Ecija, Philippines</span>
                        </div>
                        <div className="flex justify-between text-amber-800 font-medium">
                            <span>Role:</span>
                            <span>Farmer</span>
                        </div>
                        <div className="flex justify-between text-amber-800 font-medium">
                            <span>Member Since:</span>
                            <span>2022</span>
                        </div>
                    </div>
                </div>
                <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-all duration-300">Edit Profile</button>
            </div>
        </main>
    );
} 