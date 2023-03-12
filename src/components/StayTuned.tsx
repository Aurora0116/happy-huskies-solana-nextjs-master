import { Container } from "@material-ui/core";

export function StayTuned() {
    return (
        <div className="stay-tuned" id="stay-tuned">
            <Container>
                <div className="stay-tuned-content">
                    <div className="stay-tuned-image">
                        {/* eslint-disable-next-line */}
                        <img
                            src="/HH_White_Logo copy.png"
                            alt=""
                        />
                    </div>
                    <div className="stay-tuned-text">
                        <h2>Stay Tuned...</h2>
                        <p>After the initial launch, HUSKY will be used for any future developments.</p>
                        <p>Plans include a marketplace for in-game attributes, Igloo NFTs and much more.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}