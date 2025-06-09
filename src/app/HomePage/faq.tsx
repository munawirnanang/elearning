// import { Separator } from "@/components/ui/separator"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export default function Faq() {
    return (
      <div className="">
        <div className="mx-auto max-w-2xl lg:max-w-7xl px-6 sm:px-16 lg:px-8 py-16 sm:py-32 lg:py-16">
          <div className="mx-auto max-w-4xl">
            <p className="mt-2 text-3xl font-semibold tracking-tight text-primary sm:text-4xl text-center">- Frequently Asked Questions (FAQ) -</p>
            <dl className="mt-10 space-y-6 divide-y divide-primary">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-base font-semibold leading-7 text-primary">Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-base font-semibold leading-7 text-primary">Is it styled?</AccordionTrigger>
                    <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-base font-semibold leading-7 text-primary">Is it animated?</AccordionTrigger>
                    <AccordionContent>
                    Yes. It is animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                </AccordionItem>
                </Accordion>
            </dl>
          </div>
        </div>
      </div>
    )
  }