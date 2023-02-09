"use client"

import React, { useState } from "react";
import firebase from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "utils/firebaseConfig";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<Error | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const auth = getAuth();

        try {
            await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ...
                });
        } catch (error) {
            setError(error as Error);
        }
    };

    return (
        <form className="bg-white p-6 rounded shadow " onSubmit={handleSubmit}>
            <input
                className="block border border-gray-400 p-2 rounded w-full"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
            />
            <input
                className="block border border-gray-400 mt-4 p-2 rounded w-full"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
            />
            <button
                className="block bg-gray-800 hover:bg-blue-700 mt-4 p-2 rounded text-white w-full"
                type="submit"
            >
                Sign In
            </button>
            {error && (
                <p className="block mt-4 text-red-500">{error.message}</p>
            )}
        </form>
    );
};

export default SignIn;
