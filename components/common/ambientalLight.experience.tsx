import { useControls } from "leva";

export default function AmbientLight() {
  const { ambientLightIntensity } = useControls('General Lights', {
    ambientLightIntensity: {
      value: 2.5,
      min: 0,
      max: 20,
    }
  });
  const { ambientLightColor } = useControls('General Lights', {
    ambientLightColor: '#fff'
  });

  return (
    <ambientLight intensity={ambientLightIntensity} color={ambientLightColor} />
  )
}