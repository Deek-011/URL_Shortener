import "./Settings.css"
import { useState } from "react"

export default function Settings() {
  const [formData, setFormData] = useState({
    name: "Rahul Singh",
    email: "rahulsingh@gmail.com",
    mobile: "1234567890",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle save changes
  }

  return (
    <div className="settings">
      <form onSubmit={handleSubmit} className="settings-form">
        <div className="form__field">
          <label className="form__label">Name</label>
          <input
            type="text"
            className="input"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="form__field">
          <label className="form__label">Email id</label>
          <input
            type="email"
            className="input"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="form__field">
          <label className="form__label">Mobile no.</label>
          <input
            type="tel"
            className="input"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary settings-form__submit">
          Save Changes
        </button>
        <button type="button" className="btn btn-danger settings-form__delete">
          Delete Account
        </button>
      </form>
    </div>
  )
}

