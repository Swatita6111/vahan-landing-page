import { Dropdown } from "react-bootstrap";
import { useState } from "react";

function NavbarSection() {
    const [adminShow, setAdminShow] = useState(false);
    const [adminClicked, setAdminClicked] = useState(false);

    const handleAdminMouseEnter = () => {
        if (!adminClicked) setAdminShow(true);
    };

    const handleAdminMouseLeave = () => {
        if (!adminClicked) setAdminShow(false);
    };

    const handleAdminClick = () => {
        setAdminClicked(!adminClicked);
        setAdminShow(!adminClicked);
    };


    const [regShow, setRegShow] = useState(false);
    const [regClicked, setRegClicked] = useState(false);

    const handleRegMouseEnter = () => {
        if (!regClicked) setRegShow(true);
    };

    const handleRegMouseLeave = () => {
        if (!regClicked) setRegShow(false);
    };

    const handleRegClick = () => {
        setRegClicked(!regClicked);
        setRegShow(!regClicked);
    };

    return (
        <div
            style={{
                background: "#d9d9d9",
                padding: "6px 14px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "8px",
            }}
        >
            {/* LEFT SIDE */}
            <div
                style={{
                    display: "flex",
                    gap: "6px",
                    flexWrap: "wrap",
                }}
            >
                <button
                    className="btn nav-btn"
                    style={{
                        background: "#2f7fe0c7",
                        color: "white",
                        border: "none",
                        fontWeight: "600",
                        borderRadius: "10px",
                        padding: "10px 8px",
                        fontSize: "14px",
                        textShadow: "0.5px 0.5px 0.5px #000",
                        boxShadow: "2px 2px 4px rgba(0,0,0,0.6)"
                    }}
                >
                    Know Your Payment Transaction Status
                </button>

                <button
                    className="btn nav-btn"
                    style={{
                        background: "#2f7fe0c7",
                        color: "white",
                        border: "none",
                        fontWeight: "600",
                        borderRadius: "10px",
                        padding: "10px 8px",
                        fontSize: "14px",
                        textShadow: "0.5px 0.5px 0.5px #000",
                        boxShadow: "2px 2px 4px rgba(0,0,0,0.6)"
                    }}
                >
                    Verify Receipt
                </button>

                <button
                    className="btn nav-btn"
                    style={{
                        background: "#053b8c",
                        color: "white",
                        border: "1px solid #053b8c",
                        fontWeight: "600",
                        borderRadius: "10px",
                        padding: "9px 16px",
                        fontSize: "14px",
                        textShadow: "0.5px 0.5px 0.5px #000",
                        boxShadow: "2px 2px 4px rgba(0,0,0,0.6)"
                    }}
                >
                    Click here for Feedback / Complaint
                </button>

                <div
                    onMouseEnter={handleRegMouseEnter}
                    onMouseLeave={handleRegMouseLeave}
                >
                    <Dropdown show={regShow}>
                        <Dropdown.Toggle
                            onClick={handleRegClick}
                            className="registration-btn"
                            style={{
                                background: "#2f7fe0c7",
                                border: "none",
                                fontWeight: "600",
                                borderRadius: "10px",
                                padding: "10px 8px",
                                fontSize: "14px",
                                textShadow: "0.5px 0.5px 0.5px #000",
                                boxShadow: "2px 2px 4px rgba(0,0,0,0.6)"
                            }}
                        >
                            Apply For New Registration
                        </Dropdown.Toggle>

                        <Dropdown.Menu
                            style={{
                                background: "#4b4b4b",
                                border: "none",
                                overflow: "hidden",
                                minWidth: "240px",
                                marginTop: "0px",
                                padding: "4px 4px",
                                boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
                            }}
                        >
                            <Dropdown.Item
                                style={{
                                    color: "white",
                                    background: "transparent",
                                    borderBottom: "1px solid rgba(255,255,255,0.4)",
                                    padding: "8px 14px",
                                }}
                            >
                                Vehicle Registration
                            </Dropdown.Item>

                            <Dropdown.Item
                                style={{
                                    color: "white",
                                    background: "transparent",
                                    borderBottom: "1px solid rgba(255,255,255,0.4)",
                                    padding: "8px 14px",
                                }}
                            >
                                Temporary Registration
                            </Dropdown.Item>

                            <Dropdown.Item
                                style={{
                                    color: "white",
                                    background: "transparent",
                                    padding: "8px 14px",
                                }}
                            >
                                Duplicate RC
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                {/* </div> */}

            </div>

            {/* RIGHT SIDE */}
            <div
                onMouseEnter={handleAdminMouseEnter}
                onMouseLeave={handleAdminMouseLeave}
            >
                <Dropdown show={adminShow}>
                    <Dropdown.Toggle
                        onClick={handleAdminClick}
                        className="nav-btn"
                        style={{
                            background: "#2f7fe0c7",
                            border: "none",
                            fontWeight: "600",
                            borderRadius: "10px",
                            padding: "10px 8px",
                            fontSize: "14px",
                            textShadow: "0.5px 0.5px 0.5px #000",
                            boxShadow: "2px 2px 4px rgba(0,0,0,0.6)",
                        }}
                    >
                        Administrative Users
                    </Dropdown.Toggle>

                    <Dropdown.Menu
                        align="end"
                        style={{
                            background: "#4b4b4b",
                            border: "none",
                            overflow: "hidden",
                            minWidth: "240px",
                            marginTop: "0px",
                            padding: "4px 4px",
                            boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
                        }}
                    >
                        <Dropdown.Item
                            style={{
                                color: "white",
                                background: "transparent",
                                borderBottom: "1px solid rgba(255,255,255,0.4)",
                                padding: "8px 14px",
                            }}
                        >
                            Appointment Login
                        </Dropdown.Item>

                        <Dropdown.Item
                            style={{
                                color: "white",
                                background: "transparent",
                                borderBottom: "1px solid rgba(255,255,255,0.4)",
                                padding: "8px 14px",
                            }}
                        >
                            HelpDesk Login
                        </Dropdown.Item>

                        <Dropdown.Item
                            style={{
                                color: "white",
                                background: "transparent",
                                padding: "8px 14px",
                            }}
                        >
                            RTO Login Configuration
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default NavbarSection;