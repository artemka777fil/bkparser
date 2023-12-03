import { FC, useEffect, useState } from "react";
import Fuse from "fuse.js";
import { MatchType } from "../../../types";
import { EventSelection } from "./EventSelection";
import { Container } from "react-bootstrap";
import { EventsSection } from "./EventsSection";
import { useOdds } from "../../../hooks/useOdds";
import { getSportsMatch, getSportsMatchFBTY } from "../../../api";

export const HomeModule: FC = () => {
    const fuseOptions = {
        keys: ["nm"],
    };
    const { setTotalOdds } = useOdds();

    const [sportType, setSportType] = useState(0);
    const [matchsType, setMatchsType] = useState(0);

    const [matchsItems, setMatchsItems] = useState<MatchType[]>([]);
    const [matchsItemsFBTY, setMatchsItemsFBTY] =
        useState<Array<{ id: number; nm: string }>>();

    useEffect(() => {
        const getMatchsItems = async () => {
            const data = await getSportsMatch({
                sport: sportType,
            });
            const res = await getSportsMatchFBTY({
                sport: sportType,
            });
            setMatchsItemsFBTY(res);
            setMatchsItems(data);
        };
        if (sportType) getMatchsItems();
    }, [sportType]);

    useEffect(() => {
        if (matchsType !== 0) {
            const interval = setInterval(() => {
                const xBetItem = matchsItems.find((el) => el.I === matchsType);
                if (matchsItemsFBTY && xBetItem) {
                    const fuse = new Fuse(matchsItemsFBTY, fuseOptions);
                    const FBTY = fuse.search(xBetItem.O1 || xBetItem.O2);
                    setTotalOdds(matchsType, FBTY[0]?.item?.id);
                }
            }, 3000);
            return () => {
                clearInterval(interval);
            };
        }
    }, [matchsType]);

    return (
        <Container fluid className="p-0 overflow-hidden">
            <EventSelection
                setSportType={setSportType}
                matchsItems={matchsItems}
                setMatchsType={setMatchsType}
            />
            <EventsSection />
        </Container>
    );
};
