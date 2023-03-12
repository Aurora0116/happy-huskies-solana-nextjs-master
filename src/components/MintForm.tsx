import { Container } from "@material-ui/core";

export default function MintForm() {
    return (
        <div className="mint" id="mint">
            <Container>
                <div className="mint-form">
                    <div className="mint-image">
                        {/* eslint-disable-next-line */}
                        <img
                            src="/mint-back.gif"
                            alt=""
                        />
                    </div>
                    <div className="mint-content">
                        <h2>Mint Husky</h2>
                        <p>Coming soon</p>
                        <button className="mint-button">
                            Mint
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    )
}