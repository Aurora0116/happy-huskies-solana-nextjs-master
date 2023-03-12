import { Container } from "@material-ui/core";
import { GameIcon } from "./svgIcon";

export function MiniGames() {
    return (
        <div className="mini-games" id="mini-games">
            <Container>
                <div className="mini-games-content">
                    <h2>Mini Games</h2>
                    <p>Play to earn with one of our mini games.</p>
                    <p>The better you do, the more you earn. With 10 different game options, find one you like best!</p>
                </div>
            </Container>
            <GameIcon />
        </div>
    )
}