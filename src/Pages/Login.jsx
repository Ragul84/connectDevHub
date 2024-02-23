import React from 'react'
import { useState, createContext, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAnchor,
  faCoffee,
  faPassport,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AlertBox = ({ showAlert, handleCloseAlert }) =>
  showAlert && (
    <div className="fixed top-20 right-80 m-4 bg-black p-4 rounded shadow-md">
      <p className="text-white bg-black">
        Login Successfull <br></br> Redirecting To Home Page ......
      </p>
      <button
        onClick={handleCloseAlert}
        className="text-blue-800 hover:underline"
      >
        Close
      </button>
    </div>
  )

const AccountAlert = ({ noAccountAlert, handleCloseAlertAccount }) => {
  return (
    noAccountAlert && (
      <div className="fixed top-20 right-80 m-4 bg-black p-4 rounded shadow-md">
        <p className="text-white bg-black">
          No Account Found <br /> Please Create An Account ......
        </p>
        <button
          onClick={handleCloseAlertAccount}
          className="text-blue-800 hover:underline"
        >
          Close
        </button>
      </div>
    )
  )
}
/*
export const MyContext = createContext()

export const MyProvider = ({ children }) => {
  const [token, setToken] = useState('')

  return (
    <MyContext.Provider value={{ token, setToken }}>
      {children}
    </MyContext.Provider>
  )
}
*/
const Login = () => {
  const [password, setPassword] = useState()
  const [emailId, setEmailId] = useState()
  const navigate = useNavigate()
  const [showAlert, setShowAlert] = useState(false)
  const [loggedIn, setLoggedIn] = useState(true)
  const [noAccountAlert, setNoAccountAlert] = useState(false)

  const handleShowAlert = () => {
    setShowAlert(true)
  }

  const NoAccountAlert = () => {
    setNoAccountAlert(true)
  }

  const handleCloseAlert = () => {
    setShowAlert(false)
  }
  const handleCloseAlertAccount = () => {
    setNoAccountAlert(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:8081/authenticate', {
      emailId,
      password,
    })
      .then((result) => {
        console.log(result)
        if (result.status === 200) {
          sessionStorage.setItem('token', result.data.token)
          handleShowAlert()

          setTimeout(() => {
            navigate('/')
          }, 3000)
        }
      })
      .catch((err) => NoAccountAlert())
  }

  return (
    <div className="login_wrapper flex  items-center justify-center h-screen xl:px-24 px-4 mb-0 md:py-14">
      <div className="bg-white  rounded shadow-md w-72 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          DevHub Login
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col ">
          <div className="form_emailId flex ">
            {' '}
            <FontAwesomeIcon
              icon={faUser}
              className="me-2 ms-2"
              style={{ scale: '1', transform: 'translateY(11.6px)' }}
            />
            <input
              onChange={(event) => setEmailId(event.target.value)}
              type="emailId"
              id="emailId"
              placeholder="EmailId"
              className="w-full p-2 mb-4 border rounded"
            />
          </div>

          <div className="form_password flex">
            <FontAwesomeIcon
              className="me-2 ms-2"
              icon={faPassport}
              style={{ scale: '1.1', transform: 'translateY(12px)' }}
            />
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              id="pass"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-5 bg-blue text-white p-2 rounded hover:bg-black"
          >
            Login
          </button>
          <button
            type="button"
            className="w-full mt-5 bg-green-500 text-white p-2 rounded hover:bg-black"
          >
            {' '}
            <Link to="/signup"> Create New Account</Link>
          </button>
        </form>
      </div>
      <AlertBox showAlert={showAlert} handleCloseAlert={handleCloseAlert} />
      <AccountAlert
        noAccountAlert={noAccountAlert}
        handleCloseAlertAccount={handleCloseAlertAccount}
      />
    </div>
  )
}

export default Login
