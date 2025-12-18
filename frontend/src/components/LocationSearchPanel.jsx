import React from "react"

const LocationSearchPanel = (props) => {
    // sample array for location suggestions
    const locations = [
        "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
        "22C, Near Malholtra's cafe, Sheryians Coding School, Bhopal",
        "20D, Near Singhai's cafe, Sheryians Coding School, Bhopal",
        "18W, Near Sharma's cafe, Sheryians Coding School, Bhopal",
        "16Z, Near Ambani's cafe, Sheryians Coding School, Bhopal",    
    ]

    return (
        <div>
            {/* this is just a sample data */}
            {
                locations.map(function(elem,idx) {
                    return  <div key={idx} onClick={() => {
                        props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                    }} className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start">
                <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full"><i className="ri-map-pin-fill"></i></h2>
                <h4 className="font-medium">{elem}</h4>
            </div>
                })
                }
        </div>
    )
}

export default LocationSearchPanel