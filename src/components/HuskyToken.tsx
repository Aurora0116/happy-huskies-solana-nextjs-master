import { Container } from "@material-ui/core";

export function HuskyToken() {
    return (
        <div className="husky-token" id="husky-token">
            <Container>
                <div className="husky-token-content">
                    <div className="token-image">
                        {/* eslint-disable-next-line */}
                        <img
                            src="/husky-token.png"
                            alt=""
                        />
                    </div>
                    <div className="token-text">
                        <h2>Husky Token</h2>
                        <p>Train your Husky to earn $HUSKY!</p>
                        <p>HUSKY is the Happy Huskies&#38; utility token. Earn it by playing mini games or winning Sled Races.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}