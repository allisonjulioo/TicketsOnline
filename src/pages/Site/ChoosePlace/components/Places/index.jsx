import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@/components/Button";
import "./styles.scss";
import chairIcon from "@/assets/chair-icon.png";

export default ({ id }) => {
  const [loading, setLoading] = useState(false);
  const activePlaces = JSON.parse(localStorage.getItem("session")).userArmChair;
  const history = useHistory();
  function selectChairs(chair) {
    const hasIncluded = selectedChairs.includes(chair);
    if (hasIncluded) {
      setSelectedArr(selectedChairs.filter((ch) => ch !== chair));
    } else {
      if (selectedChairs.length <= 5) {
        setSelectedArr([...selectedChairs, chair]);
      }
    }
  }
  const [selectedChairs, setSelectedArr] = useState([]);
  const background = [
    "J1",
    "J2",
    "J3",
    "J4",
    "J6",
    "J7",
    "J8",
    "J9",
    "J10",
    "J12",
    "J13",
    "J14",
    "J15",
  ];
  const places = [
    [
      ["A1", "A2", "A3", "A4", "A5"],
      ["B1", "B2", "B3", "B4", "B5"],
      ["C1", "C2", "C3", "C4", "C5"],
      ["D1", "D2", "D3", "D4", "D5"],
      ["E1", "E2", "E3", "E4", "E5"],
      ["F1", "F2", "F3", "F4", "F5"],
      ["G1", "G2", "G3", "G4", "G5"],
      ["H1", "H2", "H3", "H4", "H5"],
      ["I1", "I2", "I3", "I4", "I5"],
    ].reverse(),
    [
      ["A6", "A7", "A8", "A9", "A10"],
      ["B6", "B7", "B8", "B9", "B10"],
      ["C6", "C7", "C8", "C9", "C10"],
      ["D6", "D7", "D8", "D9", "D10"],
      ["E6", "E7", "E8", "E9", "E10"],
      ["F6", "F7", "F8", "F9", "F10"],
      ["G6", "G7", "G8", "G9", "G10"],
      ["H6", "H7", "H8", "H9", "H10"],
      ["I6", "I7", "I8", "I9", "I10"],
    ].reverse(),
  ];
  function nextStep() {
    setLoading(true);
    const session = {
      ...JSON.parse(localStorage.getItem("session")),
      chairs: selectedChairs,
    };
    localStorage.setItem("session", JSON.stringify(session));
    setLoading(false);
    history.push(`/movie/${id}/checkout`);
  }
  return (
    <div id="places">
      {selectedChairs.length === 6 && (
        <p className="text-danger">Limite de 6 assentos por compra atingido</p>
      )}
      <div className="row">
        {background.map((chair) => (
          <Button
            type={`p-0  icon ${
              selectedChairs.includes(chair) ? "secondary" : "light"
            } 
            ${
              selectedChairs.length > 5 && !selectedChairs.includes(chair)
                ? "fully"
                : ""
            }
            ${
              !activePlaces.map((act) => act.id).includes(chair)
                ? "fully green"
                : ""
            }
            
            `}
            key={chair}
            onClick={() => selectChairs(chair)}
          >
            <img src={chairIcon} alt="" width="20" height="20" />
            <p>
              <small>{chair}</small>
            </p>
          </Button>
        ))}
      </div>
      <div className="columns">
        {places.map((place, column) => (
          <div className="chairs" key={column}>
            {place.map((ranks, row) => (
              <div className="row" key={row}>
                {ranks.map((chair, index) => (
                  <Button
                    type={`p-0 icon ${
                      selectedChairs.includes(chair) ? "secondary" : "light"
                    } ${
                      selectedChairs.length > 5 &&
                      !selectedChairs.includes(chair)
                        ? "fully"
                        : ""
                    }
                    ${
                      !activePlaces.map((act) => act.id).includes(chair)
                        ? "fully green"
                        : ""
                    }
                    `}
                    key={index}
                    onClick={() => selectChairs(chair, index)}
                  >
                    <img src={chairIcon} alt="" width="20" height="20" />
                    <p>
                      <small>{chair}</small>
                    </p>
                  </Button>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="screen">tela</div>
      <Button
        type="primary confirm"
        onClick={() => nextStep()}
        disabled={loading}
        blocked={selectedChairs.length < 1}
      >
        <p>CONFIRMAR LUGARES</p>
        <small>{selectedChairs.join(",  ")}</small>
      </Button>
    </div>
  );
};
