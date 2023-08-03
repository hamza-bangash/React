import "./App.css";
import Check from "./component/check.js";

export default function App(){

    let firstName = "Hamza";
    let secondName = "Khan";
    let age = 19;
    return(
        <div>
            <Check firstName={firstName}  secondName={secondName} age={age} />
        </div>
    );
}