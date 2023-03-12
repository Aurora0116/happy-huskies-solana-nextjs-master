import { Container } from "@material-ui/core";

export default function AboutUs() {
    return (
        <div className="about-us" id="about-us">
            <Container>
                <div className="about-content">
                    <h5>About us</h5>
                    <p>The Happy Huskies are an up and coming NFT collection on the Solana network. Each Husky will be programmatically generated from over 150 traits.</p>
                    <p>Once launched, holders will be eligible for exclusive content and will be able to earn through Play-to-Earn games.Huskies will be available for minting in Q2.</p>
                    <p> Check us out on Twitter or Discord and get involved in the community! </p>
                                        {/* <p>
                        The Happy Huskies will compete in a P2E sled racing game where training your husky will bethe key to success! Earn $HUSKY tokens by playing mini-games in our
                        &nbsp;<a href="#">game room</a>.&nbsp; <br />

                        $HUSKY can then be used to upgrade the stats of your husky and give them a better chance at winning Sled Races. As the Husky ecosystem develops, you may be able to buy accessories to flex on the track or even upgrade a home for your pup 👁‍🗨. <br />
                        For more information and the tokenomics on $HUSKY, check out &nbsp;<a href="#">$HUSKY Token</a>.&nbsp;
                    </p>
                    <p>
                        The Happy Huskies community will govern the HuskyDAO, where holders of husky NFTs can gain access to exclusive channels. This includes an alpha channel for holders to share their insights on other projects, and a giveaway channel where holders can win SOL NFTs, whitelist spots, Happy Huskies add-ons, or even Solana! The HuskyDAO will also have a say in how the Sled Race stats determine winners to ensure the process is fair. Grab a Husky and join Discord to participate in the HuskyDAO.
                    </p>
                    <p>

                        Once launched, additional developments may include free NFT airdrops, our own Husky Marketplace, multi-husky races, a merch store, and other cool stuff we can&#38;t quite reveal just yet. For a look at our complete roadmap, a detailed graphic can be found at &nbsp;<a href="#">Sled Trail</a>

                    </p> */}
                </div>
            </Container>
            {/* eslint-disable-next-line */}
            <img
                src="/about-us-pattern.png"
                alt=""
            />
        </div>
    )
}