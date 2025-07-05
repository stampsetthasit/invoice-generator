import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import ImageInput from "@/app/component/ui/imageInput";

export const YourDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">ข้อมูลของคุณ (ผู้ส่ง)</p>
    <CustomTextInput
      label="Email"
      placeholder="e.g. example@email.com"
      variableName="yourEmail"
    />
    <p className="pb-10 pt-3 text-xs font-medium text-neutral-500">
      {/* We&apos;ll fill the billing details automatically if we find the your. */}
    </p>
    <p className="pb-2 text-sm font-medium text-neutral-500">รายละเอียด</p>
    <CustomTextInput
      label="ชื่อ"
      placeholder="สมชาย ใจดี"
      variableName="yourName"
    />
    <ImageInput label="โลโก้" variableName="yourLogo" />
    <CustomTextInput
      label="ที่อยู่"
      placeholder="Whitefield Circle,12"
      variableName="yourAddress"
    />
    <CustomTextInput
      label="ตำบล/แขวง"
      placeholder="บางจาก"
      variableName="yourCity"
    />
    <CustomTextInput
      label="อำเภอ/เขต"
      placeholder="พระโขนง"
      variableName="yourState"
    />
    <CustomTextInput
      label="จังหวัด"
      placeholder="กรุงเทพมหานคร"
      variableName="yourCountry"
    />
    <CustomNumberInput
      label="รหัสไปรษณีย์"
      placeholder="10260"
      variableName="yourZip"
    />
    <CustomTextInput
      label="เบอร์โทรศัพท์"
      placeholder="02 123 4567"
      variableName="yourPhone"
    />
    <CustomTextInput
      label="เลขประจําตัวผู้เสียภาษี"
      placeholder="1 2345 67890 12 3"
      variableName="yourTaxId"
    />
  </div>
);
