import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function DetailsAccordion() {
  return (
    <section className="w-screen bg-black text-white px-24 py-24">
      <h2 className="font-ethn text-4xl mb-16">
        The ultimate gap year program
      </h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-8">
          <AccordionTrigger className="font-ethn text-2xl font-thin">
            Duration?{" "}
          </AccordionTrigger>
          <AccordionContent className="font-thin text-xl">
            August 2025 to June 2026
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-ethn text-2xl font-thin">
            Authentic Spanish Football
          </AccordionTrigger>
          <AccordionContent className="font-thin text-xl">
            Our program prides itself in not being just another international
            academy. Players train with and compete alongside established
            Spanish clubs under the Royal Spanish Football Federation. Unlike
            programs that form their own teams, we place athletes directly
            within local clubs, offering authentic exposure to official league
            matches. This real-world experience accelerates skill development,
            sharpens tactical intelligence, and prepares players to stand out
            during U.S. college recruitment.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl font-semibold">
            Specialized Training
          </AccordionTrigger>
          <AccordionContent className="font-thin text-xl">
            In Addition to x y z
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl font-semibold">
            Something about Education
          </AccordionTrigger>
          <AccordionContent className="font-thin text-xl">
            Beyond the field, participants complete a university-level Spanish
            language course, Teaching English as a Foreign Language Diploma or
            Expert Certification in Teaching Spanish as a Foreign Language:
            Spanish worth 18 ECTS credits, adding a valuable academic
            achievement to their resumes. This ensures they stay on track
            academically while pursuing their athletic dreams.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-2xl font-semibold">
            Holistic Approach to Player Development
          </AccordionTrigger>
          <AccordionContent className="font-thin text-xl">
            The program also emphasizes holistic development. Athletes benefit
            from expert support, including nutritionists, mental performance
            coaches, physiotherapists, and state-of-the-art facilities designed
            for optimal performance and recovery.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-2xl font-semibold">
            Complete Cultural Emersion
          </AccordionTrigger>
          <AccordionContent className="font-thin text-xl">
            Cultural enrichment is a cornerstone of the experience. In addition
            to playing in Spanish teams with spanish teammates, Guided
            excursions introduce players to Spain&apos;s rich history, art, and
            traditions, fostering personal growth and a global perspective.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-2xl font-semibold">
            Individualized Development Plans
          </AccordionTrigger>
          <AccordionContent className="font-thin text-xl">
            Cultural enrichment is a cornerstone of the experience. In addition
            to playing in Spanish teams with spanish teammates, Guided
            excursions introduce players to Spain&apos;s rich history, art, and
            traditions, fostering personal growth and a global perspective.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-2xl font-semibold">
            Player Profile
          </AccordionTrigger>
          <AccordionContent className="font-thin text-xl">
            Cultural enrichment is a cornerstone of the experience. In addition
            to playing in Spanish teams with spanish teammates, Guided
            excursions introduce players to Spain&apos;s rich history, art, and
            traditions, fostering personal growth and a global perspective.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
