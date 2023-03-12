import React, { useState } from "react";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import Container from '@material-ui/core/Container';
import { CloseIcon, DiscordIcon, MenuIcon, TwitterIcon } from "./svgIcon";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const handleRouter = (e: any, url: string) => {
        e.preventDefault()
        router.push(url)
        setOpen(false)
    }
    return (
        <header>
            <div className="header-content">
                <Container maxWidth="lg" className="header-menu">
                    <Image
                        src="/logo.png"
                        alt=""
                        width={100}
                        height={44}
                    />
                    <div className="right-side">
                        <a className="social-links discord">
                            <DiscordIcon />
                        </a>
                        <a className="social-links twitter">
                            <TwitterIcon />
                        </a>
                        <WalletModalProvider>
                            <WalletMultiButton />
                        </WalletModalProvider>
                        <div className="menu">
                            <button className="button-menu" onClick={() => setOpen(true)}>
                                <MenuIcon />
                            </button>
                        </div>
                    </div>
                </Container>
            </div>

            <div className={`menu-dropdown ${open ? "opend" : ""}`}>
                <button className="menu-close" onClick={() => setOpen(false)}>
                    <CloseIcon />
                </button>
                <ul>
                    <li>
                        <Link href="/">
                            <a onClick={(e) => handleRouter(e, "/")}>
                                Home
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#sled-trail">
                            <a onClick={(e) => handleRouter(e, "/#sled-trail")}>
                                Sled Trail
                            </a>
                        </Link>
                    </li>
                    {/* <li>
                        <Link href="">
                            <a>
                                Traits List
                                <span>coming soon</span>
                            </a>
                        </Link>
                    </li> */}
                    <li>
                        <Link href="/#your-huskies">
                            <a onClick={(e) => handleRouter(e, "/#your-huskies")}>
                                Your Huskies
                            </a>
                        </Link>
                    </li>
                    {/* <li>
                        <Link href="/#husky-token">
                            <a onClick={(e) => handleRouter(e, "/#husky-token")}>
                                HUSKY Token
                            </a>
                        </Link>
                    </li> */}
                    {/* <li>
                        <Link href="">
                            <a>
                                Game Room
                                <span>coming soon</span>
                            </a>
                        </Link>
                    </li> */}
                    {/* <li>
                        <Link href="/#sled-race">
                            <a onClick={(e) => handleRouter(e, "/#sled-race")}>
                                Sled Race
                            </a>
                        </Link>
                    </li> */}
                    <li>
                        <Link href="/#mint">
                            <a onClick={(e) => handleRouter(e, "/#mint")}>
                                Mint
                            </a>
                        </Link>
                    </li>
                </ul>
                {/* eslint-disable-next-line */}
                <img
                    src="/menu-back.svg"
                    alt=""
                />
            </div>
        </header >
    )
}