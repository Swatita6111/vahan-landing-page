import SwachhBharatLogo from "./swachh-bharat-logo.png";

function Header() {
    return (
        <div
            style={{
                background:
                    "linear-gradient(to right, #0a6f9a, #3fa3de)",
                height: "120px",
                width: "100%",
                overflow: "hidden",
                position: "relative",
            }}
        >
                {/* INDIAN FLAG CURVES */}
                <div
                    style={{
                        position: "absolute",
                        top: "-40px",
                        right: "-80px",
                        width: "500px",
                        height: "220px",
                        borderRadius: "50%",
                        borderTop: "10px solid rgba(255,153,51,0.6)",
                        transform: "rotate(-8deg)",
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        top: "-15px",
                        right: "-60px",
                        width: "480px",
                        height: "200px",
                        borderRadius: "50%",
                        borderTop: "10px solid rgba(255,255,255,0.7)",
                        transform: "rotate(-8deg)",
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        top: "10px",
                        right: "-40px",
                        width: "460px",
                        height: "180px",
                        borderRadius: "50%",
                        borderTop: "10px solid rgba(19,136,8,0.6)",
                        transform: "rotate(-8deg)",
                    }}
                />

                <div
                    className="container-fluid h-100"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingLeft: "0px",
                        paddingRight: "25px",
                        position: "relative",
                        zIndex: 2,
                    }}
                >
                    {/* LEFT SECTION */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        {/* LOGO AREA */}
                        <div
                            style={{
                                height: "100%",
                                padding: "12px 22px",
                                borderRight: "1px solid rgba(255,255,255,0.3)",
                                display: "flex",
                                alignItems: "center",
                                gap: "18px",
                            }}
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                                alt="logo"
                                style={{
                                    width: "88px",
                                    height: "88px",
                                    objectFit: "contain",
                                    filter: "brightness(0) invert(1)",
                                }}
                            />

                            <div>
                                <h2
                                    style={{
                                        color: "white",
                                        fontWeight: "700",
                                        fontSize: "22px",
                                        lineHeight: "30px",
                                        margin: 0,
                                        textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                                        letterSpacing: "1px",
                                    }}
                                >
                                    VAHAN CITIZEN
                                    <br />
                                    SERVICES
                                </h2>
                            </div>
                        </div>

                        {/* TEXT AREA */}
                        <div
                            style={{
                                paddingLeft: "18px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <span
                                style={{
                                    color: "white",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    letterSpacing: "2px",
                                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                                }}
                            >
                                Government of India
                            </span>

                            <h1
                                style={{
                                    color: "white",
                                    fontSize: "22px",
                                    fontWeight: "800",
                                    marginTop: "4px",
                                    marginBottom: 0,
                                    textTransform: "uppercase",
                                    textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
                                }}
                            >
                                Ministry of Road Transport and Highways
                            </h1>
                        </div>
                    </div>

                    {/* RIGHT LOGO */}
                    <div>
                        <img
                            src={SwachhBharatLogo}
                            alt="swachh bharat"
                            style={{
                                width: "140px",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                </div>
            </div>
    );
}

export default Header;