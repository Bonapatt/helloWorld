'use client';
import Link from 'next/link';
import Accordion from './components/Accordion';
import ThemeToggle from './components/ThemeToggle';

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-12">
      <header className="text-center space-y-2 bg-blue-500 text-white p-4 rounded shadow">
        <h1 className="text-4xl font-bold">Nannapat Mongkollertsirisuk</h1>
        <p className="text-lg">Bonus</p>
        <p>Thungkru, Bangkok</p>
        <p>+66 95 570 7374 &bull; bonapatt</p>
        <Link href="http://bit.ly/3Bnx1zn" className="underline" target="_blank">bit.ly/3Bnx1zn</Link>
        <div className="pt-2">
          <ThemeToggle />
        </div>
      </header>

      <Accordion title="Summary">
        <p>
          3+ years experienced Japanese interpreter and translator in HR related field. Highly
          motivated professional with background in training, recruitment and project coordination.
          Proficient in Japanese with JLPT N2 certification.
        </p>
      </Accordion>

      <Accordion title="Skills">
        <p>
          User story, Customer journey, Stake holder management, Cross-Functional team,
          Interpersonal skill, Adaptability
        </p>
        <p className="mt-2 font-medium">Software: JIRA, Figma, Microsoft Office</p>
        <p className="mt-2 font-medium">Certifications: Business essential – Accenture, Agile Teams 101 - Accenture, Agile Testing - LinkedIn, Lean Kaizen</p>
        <p className="mt-2 font-medium">Languages: Thai (Native), Japanese (JLPT N2), English</p>
      </Accordion>

      <Accordion title="Experience">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold">Mitsubishi Corporation LT (Thailand) Co., Ltd.</h3>
            <p className="italic">HR Officer and Project Coordinator (Sep 2019 - Current)</p>
            <ul className="list-disc list-inside">
              <li>Organize employee training and coordinate with instructors</li>
              <li>Sourcing candidates and conducting interviews</li>
              <li>Implement HR payroll and self-service systems</li>
              <li>Create employee handbook and ID cards</li>
              <li>Support relocation regarding IT matters</li>
              <li>Translate documents and create company announcements</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Thai Yazaki Group PCL.</h3>
            <p className="italic">Japanese Translation and Interpreter (Sep 2019 - Sep 2022)</p>
            <ul className="list-disc list-inside">
              <li>Interpret meetings and translate HR related documents</li>
              <li>Prepared employee handbook, WFH rules and official announcements</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Toyo Business Service PCL.</h3>
            <p className="italic">Japanese Interpreter and Operation Team Coordinator (Sep 2018 - Aug 2019)</p>
            <ul className="list-disc list-inside">
              <li>Handled Japanese customer support via phone</li>
              <li>Coordinated between Japanese and Thai staff</li>
              <li>Translated documents between Thai and Japanese</li>
              <li>Managed company registration applications in Thailand</li>
            </ul>
          </div>
        </div>
      </Accordion>

      <Accordion title="Education">
        <ul className="space-y-4">
          <li>
            <p className="font-semibold">Kasetsart University (Bangkhen)</p>
            <p>Bachelor of Humanities in Japanese, Mar 2013 - Jun 2018, GPA 3.41</p>
          </li>
          <li>
            <p className="font-semibold">Utsunomiya University, Japan</p>
            <p>Exchange Student, Oct 2016 - Aug 2017 &mdash; studied Japanese language and culture</p>
          </li>
        </ul>
      </Accordion>
    </main>
  );
}
