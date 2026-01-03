import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-border bg-background/95 backdrop-blur-xl p-4">
      <Link to="/contact" className="block">
        <Button className="w-full" size="lg">
          Request a Schema Audit
        </Button>
      </Link>
    </div>
  );
}
