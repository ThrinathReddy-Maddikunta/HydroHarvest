export interface MeditationType {
    id: number;
    title: string;
    image: string;
}

export const MEDITATION_DATA: MeditationType[] = [
    {
        id: 1,
        title: "Mountains",
        image: "trees.webp"
    },
    {
        id: 2,
        title: "Rivers",
        image: "river.webp"
    },
    {
        id: 3,
        title: "Sunset",
        image: "meditate-under-tree.webp"
    },
    {
        id: 4,
        title: "Beaches",
        image: "beach.webp"
    },
    {
        id: 5,
        title: "Starry Night",
        image: "yosemite-stars.webp"
    },
    {
        id: 6,
        title: "Waterfall",
        image: "waterfall.webp"
    },
];