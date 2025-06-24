import { Composition } from "remotion";
import { MyComposition } from "./Composition"; // <-- nom et chemin exacts

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="MyComp"
      component={MyComposition} // <-- même nom ici
      durationInFrames={300}
      fps={30}
      width={1920}
      height={1080}
    />
  </>
);
