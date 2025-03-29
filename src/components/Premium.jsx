import React from 'react'

const Premium = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Join Aicision Premium</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Free Box */}
        <div className="flex-1 bg-white/20 border border-white/30 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Free</h2>
          <ol className="list-decimal ml-5 space-y-2 text-black">
            <li>Access to all three Buddies</li>
            <li>Temporary chat History</li>
            <li>Singular Session</li>
          </ol>
        </div>

        {/* Premium Box */}
        <div className="flex-1 bg-white/20 border border-white/30 rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">Premium</h2>
            <ol className="list-decimal ml-5 space-y-2">
              <li>Access to all three Buddies</li>
              <li>Save chat history</li>
              <li>Multiple Sessions</li>
              <li>Priority support</li>
            </ol>
          </div>
          <div className="mt-6">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Premium
