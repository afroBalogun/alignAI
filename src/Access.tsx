import { Outlet } from "react-router";

export default function Access(){
    return(
        <div className="access">
            <a className="logo" href="/">
                <img src="static/images/alignAI-icon.png" alt="Logo"/>
                <h3>Align<span>AI</span></h3>
            </a>
            <Outlet/>
        </div>
    )
}