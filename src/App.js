import Header from './components/Header';
import NavbarSection from './components/NavbarSection';
import SidebarForm from './components/SidebarForm';
import MainBanner from './components/MainBanner';
import IndiaMap from './components/IndiaMap';
import NicLogo from './components/nic-logo.png';

function App() {
  return (
    <div>
      <Header />
      <NavbarSection />

      <div className="container-fluid" style={{ marginTop: "20px" }}>
        <div className="row g-3">
          <div className="col-lg-3">
            <SidebarForm />
          </div>

          <div className="col-lg-6">
            <MainBanner />
          </div>

          <div className="col-lg-3">
            <IndiaMap />
          </div>
        </div>
      </div>

      <footer
        style={{
          width: "100%",
          background: "#2f2f2f",
          borderTop: "4px solid #d7ff9f",
          padding: "20px 30px",
          marginTop: "-150px",
        }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">

            {/* LEFT LOGO */}
            <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">
              <img
                src={NicLogo}
                alt="NIC Logo"
                style={{
                  width: "220px",
                  maxWidth: "100%",
                  background: "white",
                  padding: "6px",
                }}
              />
            </div>

            {/* CENTER CONTENT */}
            <div className="col-md-6 text-center text-white">
              <h5
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  marginBottom: "4px",
                }}
              >
                VAHAN 4.0 (Citizen Services)
                ~onlineapp02~150~8015
                vahan.parivahan.gov.in
                (Build Version:050720261600)
              </h5>

              <p
                style={{
                  margin: "4px 0",
                  fontSize: "12px",
                  marginBottom: "10px",
                }}
              >
                Site Best viewed in Google Chrome
              </p>

              <p
                style={{
                  margin: "4px 0",
                  fontSize: "12px",
                }}
              >
                This Website belongs to Ministry of Road
                Transport & Highways (MoRTH)
              </p>

              <p
                style={{
                  margin: "4px 0",
                  fontSize: "12px",
                }}
              >
                Government of India
              </p>
            </div>

            {/* RIGHT EMPTY */}
            <div className="col-md-3"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;