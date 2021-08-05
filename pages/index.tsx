import { Animated, Basic, bounce, Combined } from "../shared/styles";

export default function Home() {
  return (
    <div>
      <Basic>Cool Styles</Basic>
      <Combined>
        With <code>:hover</code>.
      </Combined>
      <Animated animation={bounce}>s bounce.</Animated>
    </div>
  );
}
