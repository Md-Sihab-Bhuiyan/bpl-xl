import { useEffect, useState } from "react";
import Player from "../player/player"

function Players() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('player.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
            .catch(err => console.error('Error fetching players:', err));
    }, []);

    return (
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
            {/* <h1 className="text-3xl"> Players:{players.length} </h1> */}
            {players.map(player => <Player
                key={player.id}
                player={player}>
            </Player>)}
        </div>
    );
}

export default Players;