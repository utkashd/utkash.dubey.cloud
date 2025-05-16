import { useState } from "react";
import { Page } from "../utils/components";

type BracketState =
    | {
          state: "start";
          activitiesArray: string[];
      }
    | {
          state: "roundStart";
          activityOne: string;
          activityTwo: string;
      }
    | {
          state: "roundEnd";
          activityOne: string;
          activityTwo: string;
          activityOneScore: number;
          activityTwoScore: number;
      }
    | {
          state: "winner";
          winner: string;
      };

function BracketResult({ bracketState }: { bracketState: BracketState }) {
    const bs = bracketState;
    switch (bs.state) {
        case "start":
            return (
                <p className="text-lg">
                    Starting with {bs.activitiesArray.join(", ")}
                </p>
            );
        case "roundStart":
            return (
                <>
                    <h2 className="text-xl font-semibold mb-4">
                        {bs.activityOne} vs {bs.activityTwo}
                    </h2>
                    <p className="text-lg">Rolling the dice...</p>
                </>
            );
        case "roundEnd":
            return (
                <p className="text-lg">
                    🎲 {bs.activityOne} rolled {bs.activityOneScore} <br />
                    🎲 {bs.activityTwo} rolled {bs.activityTwoScore} <br />
                    <br />
                    👉{" "}
                    {bs.activityOneScore > bs.activityTwoScore
                        ? bs.activityOne
                        : bs.activityTwo}{" "}
                    moves on!
                </p>
            );
        case "winner":
            return (
                <h2 className="text-3xl font-bold">🏆 {bs.winner!} wins!</h2>
            );
    }
}

function BracketResultModal({ jsx }: { jsx: React.ReactNode }) {
    return (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ease-out">
            <div className="bg-amber-950 p-6 rounded-2xl shadow-2xl max-w-md w-full relative transform transition-all duration-300 ease-out scale-100">
                {jsx}
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

    const [bracketState, setBracketState] = useState<BracketState>({
        state: "start",
        activitiesArray: [],
    });

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const delay: (ms: number) => Promise<void> = async (ms: number) => {
        return new Promise((f) => setTimeout(f, ms));
    };

    const runTournament = async (activitiesArray: string[]) => {
        const numRounds = Math.round(Math.log2(activitiesArray.length));

        let activitiesInTheRound: string[] = [...activitiesArray];
        let activitiesMovingOn: string[] = [];

        const rollDie: () => 1 | 2 | 3 | 4 | 5 | 6 = () => {
            const randomNumZeroToFive = Math.random() * 6;
            if (randomNumZeroToFive > 5) {
                return 6;
            } else if (randomNumZeroToFive > 4) {
                return 5;
            } else if (randomNumZeroToFive > 3) {
                return 4;
            } else if (randomNumZeroToFive > 2) {
                return 3;
            } else if (randomNumZeroToFive > 1) {
                return 2;
            } else {
                return 1;
            }
        };

        setIsModalOpen(true);
        for (let round = 1; round < numRounds + 1; round++) {
            for (let i = 0; i < activitiesInTheRound.length; i = i + 2) {
                let activityOne = activitiesInTheRound[i];
                let activityTwo = activitiesInTheRound[i + 1];

                setBracketState({
                    state: "roundStart",
                    activityOne: activityOne,
                    activityTwo: activityTwo,
                });

                await delay(1000);

                let activityOneScore = rollDie();
                let activityTwoScore = rollDie();
                while (activityOneScore === activityTwoScore) {
                    activityOneScore = rollDie();
                    activityTwoScore = rollDie();
                }

                setBracketState({
                    state: "roundEnd",
                    activityOne: activityOne,
                    activityOneScore: activityOneScore,
                    activityTwo: activityTwo,
                    activityTwoScore: activityTwoScore,
                });

                await delay(3000);

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

        setBracketState({ state: "winner", winner: activitiesMovingOn[0] });

        await delay(5000);
        setIsModalOpen(false);
    };

    const tournamentTime = async () => {
        const activitiesArray = activities
            .trim()
            .split("\n")
            .map((activity) => activity.trim());

        if (![2, 4, 8, 16, 32].includes(activitiesArray.length)) {
            alert(`You put down ${activitiesArray.length} activities.
You need 2, 4, 8, 16, or 32 activities.`);
            return;
        }

        await runTournament(activitiesArray);
    };

    return (
        <Page title="bracket time">
            <label className="font-semibold">Activities:</label>
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
            />
            <button
                onClick={tournamentTime}
                className="text-amber-300 hover:text-amber-600 underline"
            >
                Go!
            </button>
            {isModalOpen && (
                <BracketResultModal
                    jsx={<BracketResult bracketState={bracketState} />}
                />
            )}
        </Page>
    );
}
