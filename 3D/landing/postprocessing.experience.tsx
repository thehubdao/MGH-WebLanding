import { Bloom, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';
import { folder, useControls } from 'leva';

export default function Postprocessing() {
  const { activePostprocessing } = useControls('Post-Processing', {
    activePostprocessing: false
  });
  
  const { intensityBloom, radiusBloom, luminanceThresholdBloom, luminanceSmoothingBloom, heightBloom } = useControls('Post-Processing', {
    'Bloom Settings': folder({
      intensityBloom: {
        value: 2,
        min: 0,
        max: 10
      },
      radiusBloom: {
        value: 0.92,
        min: 0,
        max: 1
      },
      luminanceThresholdBloom: {
        value: 0.1,
        min: 0,
        max: 1
      },
      luminanceSmoothingBloom: {
        value: 0.3,
        min: 0,
        max: 1
      },
      heightBloom: {
        value: 300,
        min: 0,
        max: 900
      }
    })
  });

  return (<>{activePostprocessing &&
    <EffectComposer>
      <Bloom intensity={intensityBloom} radius={radiusBloom} luminanceThreshold={luminanceThresholdBloom} luminanceSmoothing={luminanceSmoothingBloom} height={heightBloom} mipmapBlur />
      <Vignette eskil={false} offset={0.1} darkness={1.1} />
      <Noise opacity={0.1} />
    </EffectComposer>
  }</>)
}