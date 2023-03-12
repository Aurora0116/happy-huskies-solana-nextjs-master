import { Container } from "@material-ui/core";
import { SnowIcon } from "./svgIcon";

export default function SledRace() {
    return (
        <div className="sled-race" id="sled-race">
            <Container>
                <div className="sled-race-content">
                    <h2>Sled Race <span className="coming-soon">Coming soon</span></h2>
                    <p>Sled Race is a player vs. player sprint that uses stats and probability to determine a winner</p>
                    <p>Spend HUSKY to upgrade your speed, acceleration, stamina and luck skill levels.</p>
                    <p>Win your races to earn that HUSKY!</p>
                </div>
            </Container>
            {/* eslint-disable-next-line */}
            <img
                src="/sled.svg"
                alt=""
            />
            <SnowIcon />
            <SnowIcon />
        </div>
    )
}