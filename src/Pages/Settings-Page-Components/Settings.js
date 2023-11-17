import React from "react";
import "./Settings.css"; // Adjust the path based on your file structure

const Settings = ({ gst , changeGST}) => {
    const [active, setActive] = React.useState("GST");
    const [GST, setGST] = React.useState(gst);

    return (
        <div className="settings-container">
            <div className="settings">
                <div className="settings-side-menu">
                    <h2 className="settings-side-menu-item" onClick={() => setActive("GST")}> GST</h2>
                    <h2 className="settings-side-menu-item" onClick={() => setActive("Logout")}> Logout</h2>
                </div>
                <div className="settings-content">
                    <RenderComponent activeComponent={active} gst={GST} setGST={setGST} />
                </div>
            </div>
        </div>
    );
};

const RenderComponent = ({ activeComponent, gst, setGST }) => {
    switch (activeComponent) {
        case "GST":
            return <ChangeGST gst={gst} setGST={setGST} />;
        default:
            return <div></div>;
    }
}

const ChangeGST = ({ gst, setGST }) => {
    return (
        <div className="change-gst-container">
            <div className="change-gst">
                <div className="change-gst-side-menu">
                    <h2 className="change-gst-side-menu-item">Change GST</h2>
                </div>
                <div className="change-gst-content">
                    <div className="change-gst-content-item">
                        <h2 className="change-gst-content-item-name">GST</h2>
                        <input
                            className="change-gst-content-item-value"
                            value={gst}
                            onChange={(e) => setGST(e.target.value)}
                        />
                        <button className="change-gst-content-item-button">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;