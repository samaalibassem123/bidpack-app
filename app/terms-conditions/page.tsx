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

const Cards: CardData[] = [
  {
    title: "Platform Services",
    text: "BidPack is a software-as-a-service (SaaS) platform operated by Vision Age Company FZ LLC, based in Fujairah Creative City, United Arab Emirates. The Platform enables creative studios and vendors to collaborate, manage projects, exchange data, estimate bids, and track outsourcing processes securely and efficiently. Users may create projects, build vendor pools, and share project-related data within BidPack. All uploaded or generated content remains the property of the Customer. Vision Age Company only processes such data to provide the Platform Services and does not claim ownership over user content.",
  },
  {
    title: "Accounts and Access",
    text: "Access to BidPack requires registration with accurate information. The Customer is responsible for maintaining the confidentiality of its account credentials and for all activities under its account. Unauthorized access or misuse of the Platform is strictly prohibited.",
  },
  {
    title: "Plans, Fees, and Payments",
    text: "BidPack offers two types of plans: (a) a Free Plan with limited features and storage capacity, and (b) Paid Plans billed monthly. The Free Plan is provided “AS IS,” without warranties of uptime, data retention, or feature continuity. Vision Age Company reserves the right to modify or discontinue any plan, feature, or pricing at any time, with or without notice. All payments for Paid Plans are billed on a monthly basis and renew automatically unless canceled before the renewal date. Fees are non-refundable except as required by applicable law. Vision Age Company reserves the right to suspend or terminate accounts in case of non-payment.",
  },
  {
    title: "Data Ownership and Processing",
    text: "All data uploaded to the Platform by the Customer ('Customer Data') remains the sole property of the Customer. Vision Age Company processes Customer Data only for the purpose of providing the Platform Services and may use third-party providers (such as Microsoft Azure) for hosting and data storage. Data is encrypted and handled in compliance with industry standards. The Customer acknowledges that BidPack is not a data backup or archival service and agrees to maintain independent copies of its data. Vision Age Company shall not be held liable for any loss, corruption, or deletion of data, including those resulting from user actions, misuse, or system malfunction.",
  },
  {
    title: "Confidentiality and Security",
    text: "Both parties agree to maintain confidentiality of non-public information exchanged during use of the Platform. Vision Age Company applies reasonable administrative, technical, and physical safeguards to protect Customer Data against unauthorized access, alteration, or disclosure.",
  },
  {
    title: "User Responsibilities",
    text: "Customers and Authorized Users must comply with all applicable laws and refrain from uploading or transmitting illegal, infringing, or harmful content. Users may not resell, sublicense, or share access credentials without prior written consent from Vision Age Company.",
  },
  {
    title: "Limitation of Liability",
    text: "Under no circumstances shall Vision Age Company be liable for any indirect, incidental, consequential, or punitive damages, including but not limited to loss of data, profits, or business interruption. The total liability of Vision Age Company shall not exceed the total amount paid by the Customer in the twelve (12) months preceding the claim.",
  },
  {
    title: "Termination",
    text: "Either party may terminate the subscription at any time. Upon termination, Vision Age Company may delete Customer Data after a reasonable period. Suspension or termination may occur immediately for breach of these Terms or for non-payment.",
  },
  {
    title: "Modifications to the Service",
    text: "Vision Age Company reserves the right to update, modify, or discontinue any aspect of the BidPack Platform, including features, storage limits, or pricing, at any time. Continued use of the Platform after such modifications constitutes acceptance of the revised Terms.",
  },
  {
    title: "Governing Law and Dispute Resolution",
    text: "These Terms shall be governed by the laws of the United Arab Emirates. Any dispute arising out of or in connection with these Terms shall be resolved through arbitration or competent courts in Fujairah, UAE.",
  },
  {
    title: "General Provisions",
    text: "These Terms constitute the entire agreement between Vision Age Company and the Customer regarding the use of BidPack. If any provision is found unenforceable, it shall be reformed to the minimum extent necessary. Failure by Vision Age Company to enforce any right shall not constitute a waiver of such right.",
  },
];

export default function page() {
  return (
    <div className="flex items-center flex-col md:px-50 gap-10 p-5  pt-10">
      <Header className="w-full gap-5">
        <Link href={"/"}>
          <Logo id="terms-header-logo" />
        </Link>
        <Title className="z-10 sm:text-xl w-fit p-0 text-md  text-start">
          Terms & Conditions
        </Title>
      </Header>

      {Cards.map((card, index) => (
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
    <div className=" flex flex-col gap-3">
      <Title className="text-2xl font-normal border-b border-white w-fit">
        {cardata.title}:
      </Title>
      <p className=" tracking-wide font-[200]">{cardata.text}</p>
    </div>
  );
};
