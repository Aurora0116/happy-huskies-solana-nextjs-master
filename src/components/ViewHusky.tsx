import { Container, Grid } from "@material-ui/core";

export default function ViewHusky() {
    return (
        <div className="view-husky" id="your-huskies">
            <Container>
                <div className="view-husky-content">
                    <h2>View Your Huskies</h2>
                    <p>Available After Minting</p>

                </div>
            </Container>
            {/* eslint-disable-next-line */}
            <img
                src="/hero-banner.svg"
                alt=""
            />
        </div>
    )
}