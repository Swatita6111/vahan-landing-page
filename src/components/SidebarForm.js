import { useState } from "react";
import AuthorityImg from "./authority.png";
import ByrednnoImg from "./byregnNo.png";

function SidebarForm() {
    const [state, setState] = useState("");
    const [rto, setRto] = useState("");
    const [checked, setChecked] = useState(false);

    const stateData = {
        Odisha: ["Bhubaneswar", "Cuttack", "Puri"],
        Delhi: ["Delhi North", "Delhi South"],
        Maharashtra: ["Mumbai", "Pune"],
    };

    return (
        <div
            style={{
                background: "#ffffff",
                borderRadius: "28px",
                border: "1px solid #8f8f8f",
                overflow: "hidden",
                boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
            }}
        >
            {/* HEADER */}
            <div
                style={{
                    background:
                        "linear-gradient(to bottom, #0f7f99, #0b6f8c)",
                    padding: "12px",
                    textAlign: "center",
                }}
            >
                <h3
                    style={{
                        color: "white",
                        margin: 0,
                        fontSize: "16px",
                        fontWeight: "700",
                    }}
                >
                    Choose option to avail Services
                </h3>
            </div>

            <div style={{ padding: "14px 16px" }}>
                {/* TOP ICONS */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "16px",
                    }}
                >
                    {/* LEFT */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            width: "48%",
                            gap: "10px",
                        }}
                    >
                        <img
                            src={ByrednnoImg}
                            alt="byregnNo"
                            style={{
                                width: "38px",
                                height: "38px",
                                objectFit: "contain",
                            }}
                        />

                        <span
                            style={{
                                fontWeight: "700",
                                color: "#003b7a",
                                fontSize: "13px",
                            }}
                        >
                            Vehicle
                            Registration No.
                        </span>
                    </div>

                    {/* RIGHT */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            width: "48%",
                            gap: "10px",
                        }}
                    >
                        <img
                            src={AuthorityImg}
                            alt="authority"
                            style={{
                                width: "38px",
                                height: "38px",
                                objectFit: "contain",
                            }}
                        />

                        <span
                            style={{
                                fontWeight: "700",
                                color: "#003b7a",
                                fontSize: "13px",
                            }}
                        >
                            Registering
                            Authority.
                        </span>
                    </div>
                </div>

                {/* INPUT */}
                <input
                    type="text"
                    placeholder="ENTER REGISTRATION NUMBER"
                    className="form-control"
                    style={{
                        height: "42px",
                        borderRadius: "12px",
                        marginBottom: "16px",
                        fontSize: "14px",
                        paddingLeft: "18px",
                        border: "1px solid #c2c2c2",
                        boxShadow: "none",
                        textTransform: "uppercase",
                        textAlign: "center",
                    }}
                />

                {/* STATE */}
                <select
                    className="form-select"
                    value={state}
                    disabled={!checked}
                    onChange={(e) => {
                        setState(e.target.value);
                        setRto("");
                    }}
                    style={{
                        height: "39px",
                        borderRadius: "12px",
                        marginBottom: "16px",
                        fontSize: "13px",
                        paddingLeft: "36px",
                        border: "1px solid #c2c2c2",
                        backgroundColor: !checked
                            ? "#cfcfcf"
                            : "#dcdcdc",
                        boxShadow: "none",
                        cursor: !checked
                            ? "not-allowed"
                            : "pointer",
                        opacity: !checked ? 0.8 : 1,
                    }}
                >
                    <option value="">SELECT STATE</option>

                    {Object.keys(stateData).map((item) => (
                        <option key={item}>{item}</option>
                    ))}
                </select>

                {/* RTO */}
                <select
                    className="form-select"
                    value={rto}
                    disabled={!state}
                    onChange={(e) => setRto(e.target.value)}
                    style={{
                        height: "39px",
                        borderRadius: "12px",
                        marginBottom: "12px",
                        fontSize: "13px",
                        paddingLeft: "36px",
                        border: "1px solid #c2c2c2",
                        backgroundColor: !state
                            ? "#cfcfcf"
                            : "#dcdcdc",
                        boxShadow: "none",
                        cursor: !state
                            ? "not-allowed"
                            : "pointer",
                        opacity: !state ? 0.8 : 1,
                    }}
                >
                    <option value="">SELECT RTO</option>

                    {state &&
                        stateData[state].map((rtoItem) => (
                            <option key={rtoItem}>
                                {rtoItem}
                            </option>
                        ))}
                </select>

                {/* CHECKBOX */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        marginBottom: "28px",
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={() =>
                            setChecked(!checked)
                        }
                        style={{
                            width: "20px",
                            height: "20px",
                            minWidth: "30px",
                            cursor: "pointer",
                            accentColor: "#2f7fe0",
                        }}
                    />

                    <div
                        style={{
                            fontSize: "14px",
                        }}
                    >
                        I accept to have read the{" "}
                        <span
                            style={{
                                color: "red",
                                fontWeight: "700",
                            }}
                        >
                            Privacy Policy
                        </span>{" "}
                        and{" "}
                        <span
                            style={{
                                color: "red",
                                fontWeight: "700",
                            }}
                        >
                            Terms of Service
                        </span>{" "}
                        for processing of my personal data into
                        the system
                    </div>
                </div>

                {/* BUTTON */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingBottom: "20px",
                    }}
                >
                    <button
                        disabled={!checked}
                        style={{
                            background: checked
                                ? "linear-gradient(to bottom, #5aa9e6, #2f7fc4)"
                                : "#8eb6d1",
                            border: "1px solid #5aa9d6",
                            color: "white",
                            fontWeight: "500",
                            fontSize: "16px",
                            padding: "8px 30px",
                            letterSpacing: "1px",
                            borderRadius: "14px",
                            boxShadow:
                                "0 4px 8px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.4)",
                            textShadow: "0.5px 0.5px 1px rgba(0,0,0,0.3)",
                            cursor: checked
                                ? "pointer"
                                : "not-allowed",
                            transition: "0.2s ease",
                        }}
                    >
                        Proceed
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SidebarForm;