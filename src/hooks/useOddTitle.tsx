export const useOddTitle = () => {
    const getTitle = (value: number) => {
        switch (value) {
            case 401:
                return "П1";
            case 402:
                return "П2";
            case 3653:
                return "П1";
            case 3654:
                return "Х";
            case 3655:
                return "П2";
            case 759:
                return "Да";
            case 761:
                return "Нет";
            case 3656:
                return "П1Х";
            case 3657:
                return "П1П2";
            case 3658:
                return "П2Х";
            // case 10:
            //     return "Меньше <";
            // case 9:
            //     return "Больше >";
            case 7:
                return "Минус -";
            case 8:
                return "Плюс +";
        }
    };

    return { getTitle };
};
