import { useState, type ReactNode } from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

function AccordionHeader({ title, isOpen, onClick } : { title: string; isOpen: boolean; onClick: () => void;}) {
    return (
        <button className= "flex w-full justify-between my-2 text-lg font-zalando" onClick={onClick}>
            {title}
        
            {isOpen ? <SlArrowUp /> : <SlArrowDown />}
        
        </button>
    );
}

function AccordionContent({ content } : { content: ReactNode;}) {
    return (
        <div>
            <p>{content}</p>
        </div>
    );
}

export default function Accordion({ title, content, defaultOpen } : { title: string; content: ReactNode; defaultOpen?: boolean;}) {
    const [open, setOpen] = useState(defaultOpen || false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="mx-2">
            <AccordionHeader title={title} isOpen={open} onClick={handleOpen} />
            {open && <AccordionContent content={content} />}
        </div>
    );
}