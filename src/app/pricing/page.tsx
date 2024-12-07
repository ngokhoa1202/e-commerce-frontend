'use client';

import { useState } from 'react';
import {
  CheckIcon, XMarkIcon, ArrowRightIcon, PlusIcon,
} from '@heroicons/react/24/outline';

const plans = [
  {
    id: 'free',
    name: 'Free Plan',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      'Access to selected free courses.',
      'Limited course materials and resources.',
      'Basic community support.',
      'No certification upon completion.',
      'Ad-supported platform.',
    ],
  },
  {
    id: 'pro',
    name: 'Pro Plan',
    monthlyPrice: 79,
    yearlyPrice: 70,
    features: [
      'Unlimited access to all courses.',
      'Unlimited course materials and resources.',
      'Priority support from instructors.',
      'Course completion certificates.',
      'Ad-free experience.',
      'Access to exclusive Pro Plan community forums.',
      'Early access to new courses and updates.',
    ],
  },
];

const faqs = [
  {
    id: '1',
    question: 'Can I enroll in multiple courses at once?',
    answer: 'Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.',
    link: 'Enrollment Process for Different Courses',
  },
  {
    id: '2',
    question: 'Can I enroll in multiple courses at once?',
    answer: 'Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.',
    link: 'Enrollment Process for Different Courses',
  },
  {
    id: '3',
    question: 'Can I enroll in multiple courses at once?',
    answer: 'Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.',
    link: 'Enrollment Process for Different Courses',
  },
];

interface Plan {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
}

interface FAQ {
  question: string;
  answer: string;
  link: string;
}

function PlanCard({ plan, isMonthly }: { plan: Plan, isMonthly: boolean }) {
  return (
    <div key={plan.name} className="flex flex-col items-center bg-gray-50 p-8 rounded-lg">
      <div className="w-full text-xl text-center bg-blue-100 p-4 rounded font-bold mb-6">{plan.name}</div>
      <div className="mb-6">
        <span className="text-6xl">
          $
          {isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
        </span>
        <span className="text-lg">
          /
          {isMonthly ? 'month' : 'year'}
        </span>
      </div>
      <div className="flex flex-col bg-white p-8 w-full gap-4 rounded-t-lg h-full">
        <p className="text-center text-lg font-bold mb-4">Available Features</p>
        {plan.features.map((feature) => (
          <div key={feature} className="border rounded p-4 flex gap-2 items-center">
            <CheckIcon width={20} height={20} className="bg-blue-100 p-1 rounded" />
            <p>{feature}</p>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="text-center font-bold rounded-b-lg bg-blue-600 text-white p-4 w-full"
      >
        Get Started
      </button>
    </div>
  );
}

function FaqCard({ faq }: { faq: FAQ }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border rounded-lg p-12 w-full flex flex-col gap-8">
      <div className={`flex justify-between ${isExpanded ? 'pb-4 border-b' : ''}`}>
        <div className="text-lg font-bold">{faq.question}</div>
        <button
          type="button"
          className="bg-blue-100 rounded p-2"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {
          isExpanded
            ? <XMarkIcon width={20} height={20} />
            : <PlusIcon width={20} height={20} />
          }
        </button>
      </div>
      {
        isExpanded && (
          <>
            <p>{faq.answer}</p>
            <div className="bg-gray-100 px-8 py-6 rounded-lg flex items-center justify-between">
              <p className="font-bold">{faq.link}</p>
              <button
                type="button"
                className="rounded-full bg-white p-2"
              >
                <ArrowRightIcon width={20} height={20} />
              </button>
            </div>
          </>
        )
      }
    </div>
  );
}

export default function Page() {
  const [isMonthly, setIsMonthly] = useState(true);
  const buttonClassName = ' p-2 font-medium px-4 py-2 w-fit text-center rounded hover:bg-blue-200 hover:text-black';
  const selectedButtonClassName = 'bg-blue-600 text-white';
  const unselectedButtonClassName = 'text-black';

  return (
    <div className="container mx-auto flex flex-col px-12 gap-8">
      <div className="mt-12">
        <h1 className="font-bold text-4xl text-center">Our Pricings</h1>
      </div>

      <hr />

      <div className="w-fit self-center px-4 py-3 bg-white rounded mt-8">
        <button
          type="button"
          onClick={() => setIsMonthly(true)}
          className={(isMonthly ? selectedButtonClassName : unselectedButtonClassName) + buttonClassName}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => setIsMonthly(false)}
          className={(!isMonthly ? selectedButtonClassName : unselectedButtonClassName) + buttonClassName}
        >
          Yearly
        </button>
      </div>

      <div className={`grid grid-cols-${plans.length} p-12 bg-white gap-6 rounded-lg`}>
        {plans.map((plan) => <PlanCard plan={plan} isMonthly={isMonthly} key={plan.id} />)}
      </div>

      <div className="flex px-12 py-20 bg-white gap-6 rounded-lg mt-8">
        <div className="basis-1/3">
          <h2 className="font-bold text-4xl mb-4">Frequently Asked Questions</h2>
          <p>
            Still you have any questions?
            <br />
            Contact our Team via &nbsp;
            <a
              href="mailto:support@zetstudy.com"
              className="text-blue-500 hover:text-blue-700 active:text-blue-700"
            >
              support@zetstudy.com
            </a>
          </p>
          <button type="button" className="rounded border py-4 px-6 mt-8">See All FAQ</button>
        </div>
        <div className="basis-2/3 flex flex-col items-center px-8 rounded-lg gap-8">
          {faqs.map((ele) => <FaqCard faq={ele} key={ele.id} />)}
        </div>
      </div>
    </div>
  );
}
