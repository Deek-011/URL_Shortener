import "./Auth.css"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic
  }

  return (
    <div className="auth-container">
      <div
        className="auth-container__image"
        style={{
          backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-POMscNoNimb8fUQ3OU5pnMl2Nt1pEG.png)`,
        }}
      >
        <div className="auth-container__logo">
          <Link to="/" className="logo">
            <span className="logo__highlight">C</span>uvette
          </Link>
        </div>
      </div>
      <div className="auth-container__form">
        <div className="auth-form">
          <h2 className="auth-form__title">Login</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="form__field">
              <input
                type="email"
                placeholder="Email id"
                className="input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="form__field">
              <input
                type="password"
                placeholder="Password"
                className="input"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary form__submit">
              Register
            </button>
          </form>
          <p className="auth-form__footer">
            Don't have an account?{" "}
            <Link to="/signup" className="auth-form__link">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

