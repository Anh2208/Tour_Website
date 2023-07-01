import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listUser } from "../../Redux/Actions/userActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import "./users.css";

const UserComponent = () => {
  const dispatch = useDispatch();

  const [searchUsername, setSearchUsername] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");

  const userList = useSelector((state) => state.userList);
  const { loading, error, users = [] } = userList;

  // Filter users by username and role
  const filteredUsers = users.filter((user) => {
    const matchesUsername = user.username.includes(searchUsername);
    if (selectedRole === "all") {
      return matchesUsername;
    } else {
      return matchesUsername && user.role === selectedRole;
    }
  });
  useEffect(() => {
    dispatch(listUser());
  }, [dispatch]);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Người dùng</h2>
        <div>
          {/* <Link to="#" className="btn btn-primary">
            <i className="material-icons md-plus"></i> Thêm người dùng
          </Link> */}
        </div>
      </div>

      <div className="card mb-4">
        <header className="card-header">
          <div className="row gx-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="text"
                placeholder="Search by name"
                className="form-control"
                value={searchUsername}
                onChange={(e) => setSearchUsername(e.target.value)}
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select
                className="form-select"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="all">Tất cả</option>
                <option value="admin">Admin</option>
                <option value="user">Khách hàng</option>
              </select>
            </div>
          </div>
        </header>

        {/* Card */}
        <div className="card-body">
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
              {filteredUsers.map((user) => (
                <div className="col" key={user._id}>
                  <div className="card card-user shadow-sm">
                    <div className="card-header">
                      {user.role === "admin" ? (
                        <div>
                          <Link
                            to={`/user/${user._id}`}
                            className="title text-truncate link"
                          >
                            <img
                              className="img-md img-avatar"
                              src="images/admin.png"
                              alt="User pic"
                            />
                          </Link>
                        </div>
                      ) : (
                        <div>
                          <Link
                            to={`/user/${user._id}`}
                            className="title text-truncate link"
                          >
                            <img
                              className="img-md img-avatar"
                              src="images/user_v2.png"
                              alt="User pic"
                            />
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="card-body">
                      <div className="card-title mt-5">
                        <Link
                          to={`/user/${user.username}`}
                          className="title text-truncate link"
                        >
                          {user.username}
                        </Link>
                      </div>
                      <div className="card-text text-muted">
                        {user.role === "admin" ? (
                          <p className="m-0">Admin</p>
                        ) : (
                          <p className="m-0">Khách hàng</p>
                        )}
                        {/* <p>
                          <a href={`mailto:${user.email}`}>{user.email}</a>
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* nav */}
          <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  Trước
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  Tiếp
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default UserComponent;
