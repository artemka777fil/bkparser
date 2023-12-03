import { FC } from "react";
import { Container } from "react-bootstrap";
import { TotalContainer } from "../../../components/container/total/TotalContainer";
import { OtherContainer } from "../../../components/container/others/OtherContainer";

export const EventsSection: FC = () => {
    return (
        <Container fluid className="p-0 mt-4 overflow-hidden">
            <OtherContainer type={1} />
            {/* <OtherContainer type={2} /> */}
            {/* <OtherContainer type={38} /> */}
            {/* <OtherContainer type={939} /> */}
            {/* <OtherContainer type={940} /> */}
            <TotalContainer type="TOTAL" />
            <TotalContainer type="HANDICAP" />
        </Container>
    );
};
