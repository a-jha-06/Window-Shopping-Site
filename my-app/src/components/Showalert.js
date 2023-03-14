import React from "react";

const ShowAlertComponent = () => {
  const showAlert = () => {
    alert("Proceed to payement");
  }

  return <button onClick={showAlert}>Show alert</button>;
}
export default ShowAlertComponent;