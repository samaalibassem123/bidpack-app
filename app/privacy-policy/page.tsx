import Header from "@/components/pages/home-page/header/Header";
import Copyright from "@/components/ui/Copyright";
import Logo from "@/components/ui/Logo";
import Title from "@/components/ui/Title";
import Link from "next/link";
import React from "react";

interface CardData {
  title: string;
  text: string;
}
const privacyPolicyData: CardData[] = [
  {
    title: "Scope & Definitions",
    text: "This Policy applies to (a) users of the BidPack platform (studios, vendors, collaborators) and (b) visitors to our website. ‘Personal Data’ means any information that identifies or can identify an individual. ‘Processing’ refers to any operation performed on personal data, such as collection, storage, modification, or deletion. BidPack is the data controller for the processing activities described in this Policy.",
  },
  {
    title: "Data We Collect",
    text: `We collect the following categories of information when you use BidPack: \n
     • Account information – name, email address, company name, and contact details. \n
     • Project and collaboration data – uploaded files, task information, vendor bids, comments, and messages.\n
     • Billing data – if you use a paid plan, payment and transaction details processed via our payment provider. \n
     • Technical data – IP address, browser type, device identifiers, usage logs, and access times. \n
     • Cookies and tracking data – used to maintain sessions and improve functionality.`,
  },
  {
    title: "How We Use Personal Data",
    text: `We use personal data to: \n
    • Provide, operate, and maintain the BidPack platform.\n
    • Enable project collaboration and communication between studios and vendors.\n
    • Process billing and manage subscriptions. \n
    • Provide customer support and respond to inquiries. \n
    • Improve, test, and enhance the performance and security of the platform. \n
    • Send service-related notifications and updates. • Comply with legal obligations.`,
  },
  {
    title: "Legal Basis for Processing",
    text: `Our processing of personal data is based on one or more of the following legal grounds:\n
    • Performance of a contract (e.g., providing the BidPack Services).\n
    • Legitimate interests (e.g., improving the platform, preventing misuse, ensuring security). \n
    • Compliance with legal obligations. \n
    • Consent (for optional activities such as marketing emails).\n`,
  },
  {
    title: "Sharing & Disclosure",
    text: `We do not sell or rent your personal data. We may share information with:\n
    • Trusted service providers (such as Microsoft Azure for hosting and storage, payment gateways, analytics providers). \n
    • Affiliates or professional advisors who assist in operations.\n 
    • Legal authorities, if required by law or court order. All third parties are bound by contractual obligations to protect your personal data.`,
  },
  {
    title: "Data Storage & International Transfers",
    text: "Your data may be stored and processed on secure servers provided by Microsoft Azure in multiple geographic regions. When transferring data across borders, we ensure adequate protections are in place, such as contractual safeguards and encryption.",
  },
  {
    title: "Data Retention",
    text: "We retain personal data only as long as necessary for the purposes outlined in this Policy or as required by law. If your account becomes inactive or is terminated, your data will be deleted or anonymized within a reasonable period.",
  },
  {
    title: "Security",
    text: "We implement reasonable technical and organizational measures to safeguard your data, including encryption, access controls, and secure hosting infrastructure. However, no system is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Your Rights",
    text: `Depending on your location, you may have the right to: \n
    • Access your personal data. \n
    • Request correction or deletion of your data. \n
    • Object to or restrict processing. \n
    • Withdraw consent for data processing (where applicable). \n
    • Request data portability. To exercise these rights, contact us at support@bidpack.io. We will respond in accordance with applicable law.`,
  },
  {
    title: "Cookies & Tracking Technologies",
    text: "BidPack uses cookies and similar technologies to maintain sessions, analyze traffic, and improve the user experience. You may control cookie preferences through your browser settings. Disabling cookies may limit certain platform functions.",
  },
  {
    title: "Children’s Privacy",
    text: "BidPack is not intended for children under 16 years old. We do not knowingly collect personal data from minors. If we discover that we have collected data from a child, we will delete it immediately.",
  },
  {
    title: "Changes to this Policy",
    text: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Significant updates will be communicated through the platform or by email. Continued use of BidPack after such changes constitutes acceptance of the revised Policy.",
  },
];

export default function page() {
  return (
    <div className="flex items-center flex-col md:px-50 gap-10 p-5  pt-10">
      <Header className="w-full gap-5">
        <Link href={"/"}>
          <Logo id="terms-header-logo" />
        </Link>
        <Title className="  z-10 sm:text-xl w-fit p-0 text-md  text-start">
          Privacy Policy
        </Title>
      </Header>
      <p className=" tracking-wide font-[300] text-lg">
        Last updated: October 13, 2025 Vision Age Company FZ LLC (“BidPack”,
        “we”, “us”, “our”) respects your privacy and is committed to protecting
        the personal data we process. This Privacy Policy explains how we
        collect, use, disclose, and store personal data of users and visitors in
        connection with our services provided through www.bidpack.io and related
        applications (the “Services”).
      </p>
      {privacyPolicyData.map((card, index) => (
        <TermsCard cardata={card} key={index} />
      ))}
      <Copyright />
    </div>
  );
}

interface Props {
  cardata: CardData;
}

const TermsCard = ({ cardata }: Props) => {
  return (
    <div className=" flex flex-col gap-3 w-full">
      <Title className="text-2xl font-normal border-b border-white w-fit">
        {cardata.title}:
      </Title>
      <p className=" whitespace-pre-line  w-fit tracking-wide font-[200]">
        {cardata.text}
      </p>
    </div>
  );
};
