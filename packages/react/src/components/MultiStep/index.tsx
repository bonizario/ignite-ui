import { Label, MultiStepContainer, Step, Steps } from './styles';

export type MultiStepProps = {
  currentStep?: number;
  size: number;
};

export function MultiStep({ currentStep = 1, size }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />;
        })}
      </Steps>
    </MultiStepContainer>
  );
}

MultiStep.displayName = 'MultiStep';
