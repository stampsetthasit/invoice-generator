import { format } from "date-fns";
import { th } from "date-fns/locale";
import { ChevronDown } from "lucide-react";

const buddhistYear = (date: Date) => date.getFullYear() + 543;

export const InvoiceTermsPreview: React.FC<
  InvoiceTerms & { onClick?: (step: string) => void }
> = ({ invoiceNumber, issueDate, onClick }) => (
  <div
    className="border-b py-4 px-10 grid grid-cols-2 justify-between border-dashed group cursor-pointer relative"
    onClick={() => onClick && onClick("5")}
  >
    {!!onClick && (
      <>
        <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 rotate-[135deg] group-hover:block hidden absolute top-0 left-0" />
        <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 -rotate-[135deg] group-hover:block hidden absolute top-0 right-0" />
        <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 rotate-45 group-hover:block hidden absolute bottom-0 left-0" />
        <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 -rotate-45 group-hover:block hidden absolute bottom-0 right-0 " />
      </>
    )}
    <div>
      <p className="text-[11px] text-neutral-400 font-semibold uppercase">
        Invoice NO
      </p>
      <p className="font-medium text-xs">{invoiceNumber}</p>
    </div>
    <div className="flex items-center justify-between pl-10">
      <div>
        <p className="text-[11px] text-neutral-400 font-semibold uppercase">
          วันที่
        </p>
        <p className="font-medium text-xs">
            {issueDate ? `${format(new Date(issueDate), "d MMMM", { locale: th })} ${buddhistYear(new Date(issueDate))}` : ""}
        </p>
      </div>
    </div>
  </div>
);
