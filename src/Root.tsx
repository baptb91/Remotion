import { Composition } from "remotion";
import { MyComponent } from "./Component";

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="MyComp"
      component={MyComponent}
      durationInFrames={300}
      fps={30}
      width={1920}
      height={1080}
    />
  </>
);
