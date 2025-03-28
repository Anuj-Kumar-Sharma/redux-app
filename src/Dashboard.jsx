import React from 'react'
import { Link } from 'react-router'

const Dashboard = () => {
  return (
      <div className="flex items-center min-h-screen justify-center">
          <div className="flex flex-col gap-12 bg-gray-800 min-w-md min-h-40 items-center justify-center p-6 rounded-lg">
              <Link className="link-button" to={"/counter"}>
                  Go To Counter
              </Link>
              <Link className="link-button" to={"/shopping"}>
                  Go To Shopping
              </Link>
          </div>
      </div>
  );
}

export default Dashboard