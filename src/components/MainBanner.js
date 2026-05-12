import Banner from "./Banner.jpg";

function MainBanner() {
    return (
        <div
            className="main-banner"
            style={{
                width: "100%",
                height: "440px",
                overflow: "hidden",
                borderRadius: "18px",
                background: "#fff",
            }}
        >
            <img
                src={Banner}
                alt="banner"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center center",
                    // display: "block",
                }}
            />
        </div>
    );
}

export default MainBanner;