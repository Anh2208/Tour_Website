import React, { useRef, useEffect, useContext } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/tour.png";
import "./header.css";
import { AuthContext } from "./../../context/AuthContext";
import Dropdown from "react-bootstrap/Dropdown";

const nav__links = [
  {
    path: "/home",
    display: "Trang chủ",
  },
  {
    path: "/tours",
    display: "Tours",
  },
  {
    path: "/about",
    display: "Về chúng tôi",
  },
  {
    path: "/contact",
    display: "Liên hệ",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  // alert(user._id);
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* =========== logo ============ */}
            <div className="logo">
              <a href="/">
                <img
                  style={{ width: "100%", height: "75px" }}
                  src={logo}
                  alt=""
                />
              </a>
            </div>
            {/* =========== logo  end============ */}

            {/* ===========menu start============ */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* ===========menu end============ */}

            <div className="nav__right d-flex align-items-center gap-4 ">
              <div className="nav__btns d-flex align-items-center gap-2 ">
                {user ? (
                  <>
                    <span
                      className="text"
                    >
                      Xin chào:
                    </span>
                    <h5 className="mb-0 name">{user.username}</h5>
                    {/* <Button className="btn btn-dark" onClick={logout}>
                      Logout
                    </Button> */}
                    <Dropdown drop="none">
                      <Dropdown.Toggle
                        className="p-0"
                        style={{
                          borderRadius: "50%",
                        }}
                        variant="light"
                        id="dropdown-basic"
                      >
                        {/* Dropdown Button */}
                        {/* <h5 className="mb-0" style={{height: "10px", padding: "0px"}}>{user.username}</h5> */}
                        <img
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                          }}
                          src="https://img.hoidap247.com/picture/question/20200703/large_1593787890582.jpg"
                          alt="Avatar"
                        />
                        
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          className="bg-red"
                          href={`/users/${user._id}`}
                          style={{
                            height: "50px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {/* <Link to={`/users/${user._id}`}>Trang cá nhân</Link> */}
                          Trang cá nhân
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                          href="#/action-3"
                          style={{
                            height: "50px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          onClick={logout}
                        >
                          Đăng Xuất Luôn
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </>
                ) : (
                  <>
                    <Button className="btn secondary__btn">
                      <Link to="/login">Đăng nhập</Link>
                    </Button>
                    <Button className="btn primary__btn">
                      <Link to="/register">Đăng ký</Link>
                    </Button>
                  </>
                )}
              </div>

              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
