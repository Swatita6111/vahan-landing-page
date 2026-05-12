import { useState } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
} from "react-simple-maps";

import "./IndiaMap.css";

const geoUrl =
    "https://raw.githubusercontent.com/geohacker/india/master/state/india_telengana.geojson";

const serviceData = {
    Maharashtra: 23,
    Odisha: 17,
    Karnataka: 18,
    Gujarat: 20,
    Rajasthan: 22,
};

const colors = [
    "#ff6b6b",
    "#4ecdc4",
    "#ffe66d",
    "#5f27cd",
    "#54a0ff",
    "#1dd1a1",
    "#ff9f43",
    "#ee5253",
    "#10ac84",
    "#f368e0",
    "#00d2d3",
    "#576574",
];

function IndiaMap() {
    const [hovered, setHovered] = useState(null);

    return (
        <div className="map-container">
            {/* HOVER CARD */}
            {hovered && (
                <div className="hover-card">
                    <div className="hover-title">
                        {hovered.name.toUpperCase()}
                    </div>

                    <div className="hover-content">
                        <h2>NUMBER OF SERVICES</h2>
                        <p>{hovered.services}</p>
                    </div>
                </div>
            )}

            {/* INDIA MAP */}
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 1550,
                    center: [82, 23],
                }}
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo, index) => {
                            const stateName =
                                geo.properties.NAME_1;

                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        setHovered({
                                            name: stateName,
                                            services:
                                                serviceData[stateName] || 0,
                                            geo,
                                            color: colors[index % colors.length],
                                        });
                                    }}
                                    onMouseLeave={() => {
                                        setHovered(null);
                                    }}
                                    style={{
                                        default: {
                                            fill:
                                                colors[index % colors.length],
                                            stroke: "#ffffff",
                                            strokeWidth: 1,
                                            outline: "none",
                                        },

                                        hover: {
                                            fill: "#ff9f1c",
                                            stroke: "#ffffff",
                                            strokeWidth: 1.5,
                                            outline: "none",
                                            cursor: "pointer",
                                        },

                                        pressed: {
                                            fill: "#ff6b00",
                                            outline: "none",
                                        },
                                    }}
                                />
                            );
                        })
                    }
                </Geographies>
            </ComposableMap>
        </div>
    );
}

export default IndiaMap;