export const name = ["Կարեն", "Լիկա"];
export const date = "17/07/2026";

export const dateTimeBox: any = new Date("2026-08-06T17:00:00");

export const txt1 =
  "Դուք հրավիրված եք մեր Հարսանիքին\nՕր որտեղ հիմք կդրվի\n Նոր ընտանիքի";
export const txt1_1 =
  "Դուք հրավիրված եք մեր Հարսանիքին \nՕր որտեղ հիմք կդրվի\n Նոր ընտանիքի";
export const txt2 =
  "Խնդրում ենք նախապես տեղեկացնել\n Ձեր մասնակցության մասին մինչև \n Մայիսի 15-ը \n Սիրո՛վ սպասում ենք";
export const txt2_1 =
  "Մասնակցության մասին Խնդրում ենք \n Տեղեկացնել մինչև \n Մայիսի 15-ը";

export const program: any = [
  {
    time: "12:00",
    title: "Փեսայի տուն",
  },
  {
    time: "13:00",
    title: "Հարսի տուն",
  },
  {
    time: "15:00",
    title: "Ս․ Գայանե Եկեղեցի",
    address: "Ս․ Գայանե Եկեղեցի",
  },
  {
    time: "17:00",
    title: "Մկրտչյանս Հոլլ",
    address: "Մկրտչյանս Հոլլ",
  },
];

export const anim: any = {
  initial: { opacity: 0, y: 40 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
  viewport: { once: true },
};
