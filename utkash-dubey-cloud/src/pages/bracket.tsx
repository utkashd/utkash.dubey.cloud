import { useRef, useState } from "react";
import { Page } from "../utils/components";
// import rollADie from "roll-a-die";

export function BracketModal({
    title,
    jsx,
}: {
    title?: string;
    jsx: React.ReactNode;
    children: string;
}) {
    return (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ease-out">
            <div className="bg-amber-950 p-6 rounded-2xl shadow-2xl max-w-md w-full relative transform transition-all duration-300 ease-out scale-100">
                {title && (
                    <h2 className="text-lg font-semibold mb-4">{title}</h2>
                )}
                <p>{jsx}</p>
            </div>
        </div>
    );
}

export function Bracket() {
    const sampleActivities = `studio ghibli
bowling
lego party
puzzle from target`;

    const [activities, setActivities] = useState<string>("");

    const dieRollRef = useRef<HTMLDivElement>(null);

    const tournamentTime = () => {
        if (activities === "") {
            alert("Put down some activities first!");
            return;
        }
        const activitiesArray = activities.trim().split("\n");
        if (activitiesArray.length === 1) {
            alert("You only put down 1 activity. Just do that then...");
            return;
        } else if (![2, 4, 8, 16, 32].includes(activitiesArray.length)) {
            alert(
                `You put down ${activitiesArray.length} activities. You need 2, 4, 8, 16, or 32 activities.`
            );
            return;
        }

        const numRounds = Math.round(Math.log2(activitiesArray.length));

        let activitiesInTheRound: string[] = [...activitiesArray];
        let activitiesMovingOn: string[] = [];

        const rollDie: (delay?: number) => number = () => {
            // rollADie({
            //     numberOfDice: 1,
            //     element: dieRollRef!.current!,
            //     callback: () => {},
            // });
            return Math.ceil(Math.random() * 6);
        };

        for (let round = 1; round < numRounds + 1; round++) {
            for (let i = 0; i < activitiesInTheRound.length; i = i + 2) {
                let activityOne = activitiesInTheRound[i];
                let activityTwo = activitiesInTheRound[i + 1];

                let activityOneScore = rollDie();
                let activityTwoScore = rollDie();
                while (activityOneScore === activityTwoScore) {
                    activityOneScore = rollDie();
                    activityTwoScore = rollDie();
                }

                if (activityOneScore > activityTwoScore) {
                    activitiesMovingOn.push(activityOne);
                } else {
                    activitiesMovingOn.push(activityTwo);
                }
            }
            if (activitiesMovingOn.length === 1) {
                break;
            } else {
                activitiesInTheRound = [...activitiesMovingOn];
                activitiesMovingOn = [];
            }
        }

        alert(activitiesMovingOn);
    };

    return (
        <Page title="bracket time">
            {/* Number of activities:{" "}
            <select defaultValue={16}>
                <option value={2}>2</option>
                <option value={4}>4</option>
                <option value={8}>8</option>
                <option value={16}>16</option>
                <option value={32}>32</option>
            </select>
            <br />
            <br /> */}
            Activities
            <br />
            <textarea
                placeholder={sampleActivities}
                style={{
                    overflowY: "scroll",
                    height: 300,
                    width: "100%",
                    border: "3px solid black",
                    padding: 5,
                }}
                onChange={(event) => {
                    setActivities(event.target.value);
                }}
                defaultValue={activities}
            ></textarea>
            <br />
            <button
                onClick={tournamentTime}
                className="text-amber-300 hover:text-amber-600 underline"
            >
                Go!
            </button>
            <div ref={dieRollRef}></div>
        </Page>
    );
}
