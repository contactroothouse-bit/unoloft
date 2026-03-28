import { FAQ_ITEMS } from "@/components/unoloft/data";
import { cn } from "@/components/unoloft/utils";

type FaqSectionProps = {
  openIndex: number | null;
  onToggle: (index: number) => void;
};

export default function FaqSection({ openIndex, onToggle }: FaqSectionProps) {
  return (
    <section id="faq">
      <div className="faq-cols">
        <div className="faq-l rvl">
          <div className="s-ey">FAQ</div>
          <h2 className="s-t">
            Frequently Asked <em>Questions</em>
          </h2>
          <p className="s-sub">
            Everything you need to know before moving in to Unoloft.
          </p>
          <div className="faq-img">
            <img
              src="/facilities/IMG-20260201-WA0003.jpg"
              alt="Unoloft facilities"
            />
          </div>
        </div>

        <div className="faq-list rvr">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={cn("faq-i", isOpen && "open")}
                key={item.question}
              >
                <div className="faq-q" onClick={() => onToggle(index)}>
                  <span>{item.question}</span>
                  <div className="faq-ic">
                    <i className="fa-solid fa-plus" />
                  </div>
                </div>
                <div className="faq-a">{item.answer}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
