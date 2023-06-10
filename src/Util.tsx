interface Itab {
  id: number;
  tab: string;
}

export const TabList: Itab[] = [
  {
    id: 1,
    tab: "All",
  },
  {
    id: 2,
    tab: "Music",
  },
  {
    id: 3,
    tab: "Cricket",
  },
  {
    id: 4,
    tab: "Gaming",
  },
  {
    id: 5,
    tab: "Motivation",
  },
  {
    id: 6,
    tab: "News",
  },
  {
    id: 7,
    tab: "Body-Building",
  },
  {
    id: 8,
    tab: "Computer Programing",
  },
  {
    id: 9,
    tab: "Bollywood Music",
  },
  {
    id: 10,
    tab: "Recently uploaded",
  },
  {
    id: 11,
    tab: "Mankirt Aulakh",
  },
  {
    id: 12,
    tab: "Live",
  },
];

export const UploadDate: Itab[] = [
  {
    id: 1,
    tab: "Last hour",
  },
  {
    id: 2,
    tab: "Today",
  },
  {
    id: 3,
    tab: "This week",
  },
  {
    id: 4,
    tab: "This month",
  },
  {
    id: 5,
    tab: "This year",
  },
];
export const Type: Itab[] = [
  {
    id: 1,
    tab: "video",
  },
  {
    id: 2,
    tab: "channel",
  },
  {
    id: 3,
    tab: "playlist",
  },
  {
    id: 4,
    tab: "movie",
  },
];
export const Duration: Itab[] = [
  {
    id: 1,
    tab: "any",
  },
  {
    id: 2,
    tab: "long",
  },
  {
    id: 3,
    tab: "medium",
  },
  {
    id: 4,
    tab: "short",
  },
];
export const Features: Itab[] = [
  {
    id: 1,
    tab: "Live",
  },
  {
    id: 2,
    tab: "4K",
  },
  {
    id: 3,
    tab: "HD",
  },
  {
    id: 4,
    tab: "Subtitles/CC",
  },
  {
    id: 5,
    tab: "Creative Commons",
  },
  {
    id: 6,
    tab: "360°",
  },
  {
    id: 7,
    tab: "VR180",
  },
  {
    id: 8,
    tab: "3D",
  },
  {
    id: 9,
    tab: "HDR",
  },
  {
    id: 10,
    tab: "Location",
  },
  {
    id: 11,
    tab: "Purchased",
  },
];
export const SortBy: Itab[] = [
  {
    id: 1,
    tab: "relevance",
  },
  {
    id: 2,
    tab: "date",
  },
  {
    id: 3,
    tab: "viewCount",
  },
  {
    id: 4,
    tab: "rating",
  },
];

interface IVideoFilter {
  id: number;
  display: string;
  value: string;
}

export const videoFilter: IVideoFilter[] = [
  {
    id: 1,
    display: "Latest",
    value: "date",
  },
  {
    id: 2,
    display: "Popular",
    value: "viewCount",
  },
];
