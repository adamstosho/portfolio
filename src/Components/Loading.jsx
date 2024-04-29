import React from 'react'
import { Circles } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className="grid place-content-center h-screen">
        <div className="lg:block hidden">
          <Circles
            height="80"
            width="80"
            color="#64ffda"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
        <div className="lg:hidden block">
          <Circles
            height="50"
            width="50"
            color="#64ffda"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </div>
  )
}

export default Loading
