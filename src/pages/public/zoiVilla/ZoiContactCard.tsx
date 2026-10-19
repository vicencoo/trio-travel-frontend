import { Card } from "@/components/card";
import { IconBox } from "@/components/iconBox";
import { Text } from "@/components/text";
import { Button } from "@/components/button";
import {
  CalendarMonthOutlined,
  LocalPhoneIcon,
  RealEstateAgentOutlined,
  WhatsAppIcon,
} from "@/icons";
import {
  CONTACT_PHONE,
  CONTACT_PHONE_LABEL,
  whatsappLink,
} from "@/pages/public/services/contact";
import { ZOI_VILLA } from "@/constants/zoiVilla";

type ZoiContactCardProps = {
  // What the visitor is asking about, e.g. "Apartamentin 2+1, Shkalla 1, Nr. 1"
  subject?: string;
  title?: string;
  text?: string;
};

// Every enquiry about Zoi Villa comes to Trio Travel & Immo
export const ZoiContactCard = ({
  subject,
  title = "Të interesuar për këtë apartament?",
  text = "Na kontaktoni për çmimin, planimetrinë dhe një vizitë në rezidencë",
}: ZoiContactCardProps) => {
  const pageUrl = window.location.origin + window.location.pathname;
  const about = subject
    ? `${subject} në ${ZOI_VILLA.name}`
    : `apartamentet në ${ZOI_VILLA.name}`;

  const infoMessage = `Përshëndetje, interesohem për ${about}. A mund të më dërgoni çmimin dhe më shumë informacion?\n${pageUrl}`;
  const visitMessage = `Përshëndetje, dua të rezervoj një vizitë për ${about}.\n${pageUrl}`;

  return (
    <Card bgColor="bg-blue-50">
      <div className="flex items-center gap-3">
        <IconBox
          bgColor="bg-gradient-to-br from-sky-500 to-blue-700"
          size="min-w-14 max-w-14 h-14"
          icon={<RealEstateAgentOutlined className="text-white" />}
        />
        <div className="flex flex-col gap-1">
          <Text
            text={title}
            size="md:text-base text-lg"
            font="font-semibold font-serif"
            className="text-gray-800"
          />
          <Text
            text={text}
            size="text-sm"
            font="font-medium"
            className="text-gray-600"
          />
        </div>
      </div>

      <a
        href={`tel:${CONTACT_PHONE}`}
        className="flex w-full items-center gap-5 rounded-lg border border-blue-200 bg-white/80 px-4 py-3 transition-all duration-300 will-change-transform hover:scale-105 hover:border-blue-400"
      >
        <IconBox
          bgColor="bg-gradient-to-br from-sky-500 to-blue-700"
          size="w-12 h-12"
          icon={<LocalPhoneIcon className="text-white" />}
        />
        <div className="flex flex-col gap-1">
          <Text text="TELEFONO TANI" size="text-sm" className="text-gray-600" />
          <Text text={CONTACT_PHONE_LABEL} font="font-medium" />
        </div>
      </a>

      <a
        href={whatsappLink(visitMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center gap-5 rounded-lg border border-blue-200 bg-white/80 px-4 py-3 transition-all duration-300 will-change-transform hover:scale-105 hover:border-blue-400"
      >
        <IconBox
          bgColor="bg-gradient-to-br from-amber-400 to-orange-500"
          size="w-12 h-12"
          icon={<CalendarMonthOutlined className="text-white" />}
        />
        <div className="flex flex-col gap-1">
          <Text
            text="REZERVO VIZITË"
            size="text-sm"
            className="text-gray-600"
          />
          <Text text="Shikoni apartamentin nga afër" font="font-medium" />
        </div>
      </a>

      <Button
        name="kërko çmimin në WhatsApp"
        padding="17px"
        endIcon={<WhatsAppIcon />}
        border="transparent"
        borderHover="transparent"
        color="white"
        bgColor="#16a34a"
        bgHover="#15803d"
        onClick={() => window.open(whatsappLink(infoMessage))}
      />

      <span className="flex w-full items-center justify-center gap-2 border-t border-gray-300 pt-4">
        <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
        <Text
          text="Në dispozicion çdo ditë, 9:00 - 21:00"
          size="text-sm"
          font="font-medium"
          className="text-gray-600"
        />
      </span>
    </Card>
  );
};
