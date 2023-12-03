import { FC, useEffect, useState } from "react";

interface IProps {
    value: any;
}

export const OddThContainer: FC<IProps> = ({ value }) => {
    const [odd, setOdd] = useState(value);
    const [color, setColor] = useState<"dark" | "danger" | "success">("dark");

    useEffect(() => {
        if (value !== odd) console.log("false");
        if (value < odd) setColor("danger");
        if (value > odd) setColor("success");
        if (value == odd) setColor("dark");
        setOdd(value);
    }, [value]);

    return <th className={`text-center bg-${color} text-white`}>{odd}</th>;
};
