import React from 'react'

const MainScreen = ({ title, children }) => {
  return (
    <>
      <div className="mainback">
        <div className="container">
          <div className="Row">
            <div className="page">
              {title && (
                <>
                  <h1 className="heading text-bold text-lg sm:text-4xl fs-1 mt-5 ms-5 mb-5 ">{title}</h1>
                  <hr />
                </>
                          )}
                          <div className="m-5">
                              {children}
                          </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainScreen
