import React from 'react';

const Login = () => {
    return (
        <div className="bg-yellow-200 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h1 className="text-center text-4xl text-green-700 mb-8">Ease Elves</h1>

            <div className="relative mb-6">
                <input type="text" placeholder="Username" className="w-full py-3 px-4 border-2 border-white border-opacity-25 rounded-full bg-opacity-30 placeholder-gray-400" required />
            </div>

            <div className="mb-6">
                <input type="password" placeholder="Password" className="w-full py-3 px-4 border-2 border-white border-opacity-25 rounded-full bg-opacity-30 placeholder-gray-400" required />
            </div>

            <div className="flex items-center justify-between text-sm mb-6">
                <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox text-green-600 border-green-600 rounded mr-2" />
                    Remember me
                </label>
                <a href="#" className="text-gray-500 hover:text-gray-600">Forgot Password?</a>
            </div>

            <button type="submit" className="w-full py-3 bg-green-400 text-white rounded-full font-bold shadow-md hover:bg-green-500">Login</button>

            <div className="text-center mt-8">
                <p>Don't have an account? <a href="#" className="text-gray-500 hover:text-gray-600 font-semibold">Register</a></p>
            </div>
        </div>
    </div>
);
};

export default Login;