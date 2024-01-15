import { Roboto } from "next/font/google";

export const FONT = Roboto({
  weight: ["400", "700", "900"],
  display: "swap",
  preload: true,
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
});
