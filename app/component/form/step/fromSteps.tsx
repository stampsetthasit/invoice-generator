"use client";
import StepButton from "@/app/component/ui/stepButton";
import { useGetValue } from "@/app/hooks/useGetValue";
import { getInitialValue } from "@/lib/getInitialValue";

export const FormSteps = () => {
  const stepValue = useGetValue("step", getInitialValue("step", "1"));
  const stepValueDetails = getStepsDetails(stepValue);

  return (
    <div className="flex gap-9 justify-between">
      {stepValueDetails.previous ? (
        <StepButton
          step={stepValueDetails.previous.step}
          title={stepValueDetails.previous.title}
          isPrevious
        />
      ) : (
        <div className="flex-1" />
      )}
      {stepValueDetails.nextStep ? (
        <StepButton
          step={stepValueDetails.nextStep.step}
          title={stepValueDetails.nextStep.title}
        />
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
};

const step1 = {
  previous: null,
  nextStep: {
    title: "ข้อมูลลูกค้า",
    step: "2",
  },
};

const step2 = {
  previous: {
    title: "ข้อมูลคุณ",
    step: "1",
  },
  nextStep: {
    title: "ข้อมูลใบเสนอราคา",
    step: "3",
  },
};
const step3 = {
  previous: {
    title: "ข้อมูลลูกค้า",
    step: "2",
  },
  nextStep: {
    title: "ข้อมูลการชำระเงิน",
    step: "4",
  },
};
const step4 = {
  previous: {
    title: "ข้อมูลใบเสนอราคา",
    step: "3",
  },
  nextStep: {
    title: "เงื่อนไขการออกใบแจ้งหนี้",
    step: "5",
  },
};

const step5 = {
  previous: {
    title: "ข้อมูลการชำระเงิน",
    step: "4",
  },
  nextStep: {
    title: "ดาวน์โหลดใบแจ้งหนี้",
    step: "6",
  },
};

const step6 = {
  previous: {
    title: "เงื่อนไขการออกใบแจ้งหนี้",
    step: "5",
  },
  nextStep: null,
};

const getStepsDetails = (step: string) => {
  if (step === "1") {
    return step1;
  }
  if (step === "2") {
    return step2;
  }
  if (step === "3") {
    return step3;
  }
  if (step === "4") {
    return step4;
  }
  if (step === "5") {
    return step5;
  }
  if (step === "6") {
    return step6;
  }
  return step1;
};
