import React from 'react'

export default function ChatList() {
  return (
    <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0 chat-list">
    <div className="p-3">
      <div className="input-group srch rounded mb-3">
        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <span className="input-group-text border-0" id="search-addon">
          <i className="fas fa-search" />
        </span>
      </div>
      <div data-mdb-perfect-scrollbar="true" style={{position: 'relative', height: 400}}>
        <ul className="list-unstyled mb-0">
          <li className="p-2 border-bottom">
            <a href="#!" className="d-flex justify-content-between">
              <div className="d-flex flex-row">
                <div>
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="avatar" className="d-flex align-self-center me-3" width={60} />
                  <span className="badge bg-success badge-dot" />
                </div>
                <div className="pt-1">
                  <p className="fw-bold mb-0">Marie Horwitz</p>
                  <p className="small text-muted">
                    Hello, Are you there?
                  </p>
                </div>
              </div>
              <div className="pt-1">
                <p className="small text-muted mb-1">Just now</p>
                <span className="badge bg-danger rounded-pill float-end">3</span>
              </div>
            </a>
          </li>
          <li className="p-2 border-bottom">
            <a href="#!" className="d-flex justify-content-between">
              <div className="d-flex flex-row">
                <div>
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp" alt="avatar" className="d-flex align-self-center me-3" width={60} />
                  <span className="badge bg-warning badge-dot" />
                </div>
                <div className="pt-1">
                  <p className="fw-bold mb-0">Alexa Chung</p>
                  <p className="small text-muted">
                    Lorem ipsum dolor sit.
                  </p>
                </div>
              </div>
              <div className="pt-1">
                <p className="small text-muted mb-1">5 mins ago</p>
                <span className="badge bg-danger rounded-pill float-end">2</span>
              </div>
            </a>
          </li>
          <li className="p-2 border-bottom">
            <a href="#!" className="d-flex justify-content-between">
              <div className="d-flex flex-row">
                <div>
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar" className="d-flex align-self-center me-3" width={60} />
                  <span className="badge bg-success badge-dot" />
                </div>
                <div className="pt-1">
                  <p className="fw-bold mb-0">Danny McChain</p>
                  <p className="small text-muted">
                    Lorem ipsum dolor sit.
                  </p>
                </div>
              </div>
              <div className="pt-1">
                <p className="small text-muted mb-1">Yesterday</p>
              </div>
            </a>
          </li>
          <li className="p-2 border-bottom">
            <a href="#!" className="d-flex justify-content-between">
              <div className="d-flex flex-row">
                <div>
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp" alt="avatar" className="d-flex align-self-center me-3" width={60} />
                  <span className="badge bg-danger badge-dot" />
                </div>
                <div className="pt-1">
                  <p className="fw-bold mb-0">Ashley Olsen</p>
                  <p className="small text-muted">
                    Lorem ipsum dolor sit.
                  </p>
                </div>
              </div>
              <div className="pt-1">
                <p className="small text-muted mb-1">Yesterday</p>
              </div>
            </a>
          </li>
          <li className="p-2 border-bottom">
            <a href="#!" className="d-flex justify-content-between">
              <div className="d-flex flex-row">
                <div>
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp" alt="avatar" className="d-flex align-self-center me-3" width={60} />
                  <span className="badge bg-warning badge-dot" />
                </div>
                <div className="pt-1">
                  <p className="fw-bold mb-0">Kate Moss</p>
                  <p className="small text-muted">
                    Lorem ipsum dolor sit.
                  </p>
                </div>
              </div>
              <div className="pt-1">
                <p className="small text-muted mb-1">Yesterday</p>
              </div>
            </a>
          </li>
          <li className="p-2">
            <a href="#!" className="d-flex justify-content-between">
              <div className="d-flex flex-row">
                <div>
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp" alt="avatar" className="d-flex align-self-center me-3" width={60} />
                  <span className="badge bg-success badge-dot" />
                </div>
                <div className="pt-1">
                  <p className="fw-bold mb-0">Ben Smith</p>
                  <p className="small text-muted">
                    Lorem ipsum dolor sit.
                  </p>
                </div>
              </div>
              <div className="pt-1">
                <p className="small text-muted mb-1">Yesterday</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}
