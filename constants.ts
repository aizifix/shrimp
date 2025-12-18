import { Twitter, Send, Github, MessageCircle, Gamepad2Icon } from 'lucide-react';
import { SocialLink, TokenomicStat } from './types';

export const CA_ADDRESS = "We will update this once we are live!";

export const SOCIALS: SocialLink[] = [
    { platform: "Twitter", url: "https://x.com/sshrimponsol", icon: Twitter },
    { platform: "Telegram", url: "https://t.me/shrimpse23", icon: Send },
    { platform: "Pumpfun", url: "https://pump.fun", icon: MessageCircle },
    { platform: "Utilities", url: "https://shrimpcoin.base44.app", icon: Gamepad2Icon }
];

export const TOKENOMICS: TokenomicStat[] = [
    { label: "Total Supply", value: "1,000,000,000" },
    { label: "Staking Pool", value: "30,000,000" },
    { label: "Game Rewards", value: "10,000,000" },
    { label: "Dev Tokens", value: "LOCKED" },
];

export const ART_IMAGES_ROW_1 = [
    "/arts/1.png",
    "/arts/2.png",
    "/arts/3.png",
    "/arts/4.png",
    "/arts/5.png",
    "/arts/6.png",
];

export const ART_IMAGES_ROW_2 = [
    "/arts/7.png",
    "/arts/8.png",
    "/arts/9.png",
    "/arts/10.png",
    "/arts/11.png",
    "/arts/12.png",
];

export const ART_IMAGES_ROW_3 = [
    "/arts/13.png",
    "/arts/14.png",
    "/arts/15.png",
    "/arts/1.png",
    "/arts/2.png",
    "/arts/3.png",
];
