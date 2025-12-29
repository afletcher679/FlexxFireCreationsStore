import Accordion from "./accordion";
import "~/fonts.css";
import "~/app.css";
import Purchase_AddOns from "./purchase_add_ons";

export default function CreationDetailedInformation({ creationDescription } : { creationDescription: string }) {
    return (
        <>
            <h1 className="text-2xl font-bold my-4 font-zalando-medium text-orange-500">Detailed Information</h1>
            <hr className="hr-orange" />
            <Accordion title="Description" content={creationDescription} defaultOpen={true} />
            <hr className="hr-orange" />
            <Accordion title="Add Ons" content={ <Purchase_AddOns />} />
            <hr className="hr-orange" />
            <Accordion title="Shipping & Returns" content={"All orders are processed within 2-3 business days. Shipping times may vary based on your location. We accept returns within 30 days of purchase, provided the item is in its original condition."} />
        </>
    )
}