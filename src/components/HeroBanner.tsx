import { Container } from "@material-ui/core";
import Image from "next/image";

export default function HeroBanner() {
    return (
        <div className="hero-banner" id="hero">
            <Container>
                <div className="hero-content">
                    <Image
                        src="/hero-husky.png"
                        alt=""
                        width={250}
                        height={250}
                    />
                    <h2>
                        Welcome to the pack!<br />
                        The Huskies are looking for a home - you in?
                    </h2>
                </div>
            </Container>
            {/* eslint-disable-next-line */}
            <img
                className="hero-banner-img"
                src="/hero-banner.svg"
                alt=""
            />
        </div>
    )
}