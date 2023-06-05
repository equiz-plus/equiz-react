function ProfileEdit() {
  return (
    <>
      <div className="row">
        <div className="col-12 col-xl-8">
          <div className="card card-body border-0 shadow mb-4">
            <h2 className="h5 mb-4">General information</h2>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div>
                    <label>First Name</label>
                    <input
                      className="form-control"
                      id="first_name"
                      type="text"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div>
                    <label>Last Name</label>
                    <input
                      className="form-control"
                      id="last_name"
                      type="text"
                      placeholder="Also your last name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6 mb-3">
                  <label>Birthday</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        className="icon icon-xs"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <input
                      data-datepicker=""
                      className="form-control"
                      id="birthday"
                      type="text"
                      placeholder="dd/mm/yyyy"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label value="">Gender</label>
                  <select
                    className="form-select mb-0"
                    id="gender"
                    aria-label="Gender select example"
                  >
                    <option>Gender</option>
                    <option value="1">Female</option>
                    <option value="2">Male</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      className="form-control"
                      id="phone"
                      type="number"
                      placeholder="+12-345 678 910"
                      required
                    />
                  </div>
                </div>
              </div>
              <h2 className="h5 my-4">Location</h2>
              <div className="row">
                <div className="col-sm-9 mb-3">
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      className="form-control"
                      id="address"
                      type="text"
                      placeholder="Enter your home address"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-3 mb-3">
                  <div className="form-group">
                    <label>Number</label>
                    <input
                      className="form-control"
                      id="number"
                      type="number"
                      placeholder="No."
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4 mb-3">
                  <div className="form-group">
                    <label>City</label>
                    <input
                      className="form-control"
                      id="city"
                      type="text"
                      placeholder="City"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <label>State</label>
                  <select
                    className="form-select w-100 mb-0"
                    id="state"
                    name="state"
                    aria-label="State select example"
                  >
                    <option value="">State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>ZIP</label>
                    <input
                      className="form-control"
                      id="zip"
                      type="tel"
                      placeholder="ZIP"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <button
                  className="btn btn-gray-800 mt-2 animate-up-2"
                  type="submit"
                >
                  Save all
                </button>
              </div>
            </form>
          </div>
          <div className="card card-body border-0 shadow mb-4 mb-xl-0">
            <h2 className="h5 mb-4">Alerts & Notifications</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex align-items-center justify-content-between px-0 border-bottom">
                <div>
                  <h3 className="h6 mb-1">Company News</h3>
                  <p className="small pe-4">
                    Get Rocket news, announcements, and product updates
                  </p>
                </div>
                <div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="user-notification-1"
                    />
                    <label className="form-check-label"></label>
                  </div>
                </div>
              </li>
              <li className="list-group-item d-flex align-items-center justify-content-between px-0 border-bottom">
                <div>
                  <h3 className="h6 mb-1">Account Activity</h3>
                  <p className="small pe-4">
                    Get important notifications about you or activity youve
                    missed
                  </p>
                </div>
                <div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="user-notification-2"
                    />
                    <label className="form-check-label"></label>
                  </div>
                </div>
              </li>
              <li className="list-group-item d-flex align-items-center justify-content-between px-0">
                <div>
                  <h3 className="h6 mb-1">Meetups Near You</h3>
                  <p className="small pe-4">
                    Get an email when a Dribbble Meetup is posted close to my
                    location
                  </p>
                </div>
                <div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="user-notification-3"
                    />
                    <label className="form-check-label"></label>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-xl-4">
          <div className="row">
            <div className="col-12 mb-4">
              <div className="card shadow border-0 text-center p-0">
                <div
                  className="profile-cover rounded-top"
                  data-background="https://d1hjkbq40fs2x4.cloudfront.net/2017-12-12/files/eos-6d-mark-ii-sample-image_1723-1.jpg"
                ></div>
                <div className="card-body pb-5">
                  <img
                    src="https://media.licdn.com/dms/image/D5603AQF-2lzPugYt9g/profile-displayphoto-shrink_400_400/0/1685461722438?e=1691625600&v=beta&t=kit8sGOieW3sq-87kUTpb1CeeEHWQduymCGMyxbOOas"
                    className="avatar-xl rounded-circle mx-auto mt-n7 mb-4"
                    alt=""
                  />
                  <h4 className="h3">Mick Sanjaya</h4>
                  <h5 className="fw-normal">Senior Software Engineer</h5>
                  <p className="text-gray mb-4">Jakarta, Indonesia</p>
                  <a className="btn btn-sm btn-secondary" href="#">
                    Change Avatar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileEdit;
